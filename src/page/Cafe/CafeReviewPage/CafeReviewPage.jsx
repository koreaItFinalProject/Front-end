import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import StarRating from '../../../components/StarRating/StarRating';
import { adjustTextareaHeight } from '../../../apis/util/textAreaUtil';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import BackButton from '../../../components/BackButton/BackButton';

const categories = [
    { value: 'interior', label: '인테리어가 멋져요' },
    { value: 'music', label: '음악이 좋아요' },
    { value: 'view', label: '뷰가 좋아요' },
    { value: 'photo', label: '사진이 잘 나와요' },
    { value: 'concentrate', label: '집중하기 좋아요' },
    { value: 'parking', label: '주차하기 편해요' },
    { value: 'pet', label: '반려동물과 가기 좋아요' },
    { value: 'children', label: '아이와 가기 좋아요' },
];

function CafeReviewPage(props) {
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
        category: selectedCategory,
        review: ""
    });

    console.log(reviewData);

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
            category: selectedCategory
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
            onSuccess: response => {
                alert("리뷰가 작성되었습니다");
                queryClient.refetchQueries(['reviews', cafeId]);
                navigate(`/cafe/detail/${cafeId}`);
            }
        }
    );

    const handleSubmitOnClick = async () => {
        if (!reviewData.rating) {
            alert("평점을 남겨주세요.");
            return;
        } else if (reviewData.category.length === 0) {
            alert("어떤점이 좋았는지 선택해주세요!");
            return;
        } else if (reviewData.review.trim("") === "") {
            alert("후기를 작성해주세요.");
            return;
        }
        reviewMutation.mutateAsync();
    };

    return (
        <div css={s.layout}>
            <BackButton prevPage={cafeDetail?.cafeName} prevPageUrl={`/cafe/detail/${cafeId}`} />
            <div css={s.rating}>
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
                    {categories.map(category => (
                        <button
                            key={category.value}
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

export default CafeReviewPage;