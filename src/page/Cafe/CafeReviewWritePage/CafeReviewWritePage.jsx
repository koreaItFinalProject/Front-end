/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { instance } from '../../../apis/util/instance';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { adjustTextareaHeight } from '../../../apis/util/textAreaUtil';
import { useMutation, useQueryClient } from 'react-query';
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import StarRating from '../../../components/StarRating/StarRating';
import BackButton from '../../../components/BackButton/BackButton';

const categories = [
    { value: 1, label: '인테리어가 멋져요' },
    { value: 2, label: '음악이 좋아요' },
    { value: 3, label: '뷰가 좋아요' },
    { value: 4, label: '반려동물과 가기 좋아요' },
    { value: 5, label: '집중하기 좋아요' },
    { value: 6, label: '주차하기 편해요' },
    { value: 7, label: '사진이 잘 나와요' },
    { value: 8, label: '아이와 가기 좋아요' },
];

function CafeReviewWritePage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const cafeId = params.cafeId;
    const location = useLocation();
    const MAX_LENGTH = 400;
    const { cafeDetail } = location.state || {};
    const textareaRef = useRef(null);
    const queryClient = useQueryClient();
    const [isClick, setisClick] = useState([false, false, false, false, false]);
    const [score, setScore] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [reviewData, setReviewData] = useState({
        cafeId: cafeId,
        rating: score,
        categoryIds: selectedCategory,
        review: ""
    });

    useEffect(() => {
        adjustTextareaHeight(textareaRef.current);
    }, []);

    useEffect(() => {
        setReviewData(review => ({
            ...review,
            rating: score
        }));
    }, [score]);

    useEffect(() => {
        setReviewData(review => ({
            ...review,
            categoryIds: selectedCategory
        }));
    }, [selectedCategory]);

    const handleTextareaChange = (e) => {
        adjustTextareaHeight(textareaRef.current);
        if (e.target.value.length > MAX_LENGTH) {
            e.target.value = e.target.value.slice(0, MAX_LENGTH);
        }
        setReviewData(review => ({
            ...review,
            review: e.target.value
        }));
    };

    const handleCategoryOnClick = (category) => {
        setSelectedCategory(prevCategories => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter(c => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    const reviewMutation = useMutation(
        async () => {
            return await instance.post("/review", reviewData);
        },
        {
            onSuccess: () => {
                confirmAlert("리뷰가 작성되었습니다");
                queryClient.invalidateQueries("cafeDetailQuery");
                navigate(`/cafe/detail/${cafeId}?selectMenu=review`);
            }
        }
    );

    const handleSubmitOnClick = async () => {
        if (!reviewData.rating) {
            confirmAlert("평점을 남겨주세요");
            return;
        } else if (reviewData.categoryIds.length === 0) {
            confirmAlert("어떤점이 좋았는지 선택해주세요");
            return;
        } else if (reviewData.review.trim("") === "") {
            confirmAlert("후기를 작성해주세요");
            return;
        }
        await reviewMutation.mutateAsync();
    };

    console.log(cafeDetail);

    return (
        <div css={s.layout}>
            <BackButton prevPage={cafeDetail?.cafeName} prevPageUrl={`/cafe/detail/${cafeId}?&selectMenu=review`} />
            <div css={s.rating}>
                <div css={s.cafeImg}>
                    <img src={cafeDetail?.img} alt="" />
                </div>
                <h1>{cafeDetail?.cafeName}</h1>
                <StarRating
                    score={score}
                    setScore={setScore}
                    isClick={isClick}
                    setisClick={setisClick} />
            </div>
            <div css={s.category}>
                <h1>어떤 점이 좋았나요?</h1>
                <div css={s.buttons}>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryOnClick(category.value)}
                            style={{
                                backgroundColor: selectedCategory.includes(category.value) ? '#f2780c' : '#ffffff'
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>
            <div css={s.review}>
                <h1>후기를 작성해 보세요!</h1>
                <div css={s.textarea}>
                    <textarea
                        name="review"
                        maxLength={MAX_LENGTH}
                        value={reviewData.review}
                        ref={textareaRef}
                        onChange={handleTextareaChange}
                        placeholder=
                        '유용한 팁을 알려주세요! 작성한 내용은 카페 상세페이지에 노출 됩니다.'
                    >
                    </textarea>
                </div>
                <div css={s.count}>
                    <span>{reviewData.review.length}</span>
                    <span>/{MAX_LENGTH.toLocaleString()}</span>
                </div>
                <button onClick={handleSubmitOnClick}>리뷰 등록</button>
            </div>
        </div>
    );
}

export default CafeReviewWritePage;