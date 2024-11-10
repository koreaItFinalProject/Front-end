/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from '../../../components/StarRating/StarRating';
import { adjustTextareaHeight } from '../../../apis/util/textAreaUtil';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import BackButton from '../../../components/BackButton/BackButton';
import { confirmAlert } from "../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";

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

function CafeReviewModifyPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const queryClient = useQueryClient();
    const MAX_LENGTH = 400;
    const { reviewItem, cafeDetail } = location.state || {};
    const textareaRef = useRef(null);
    const [isClick, setisClick] = useState([false, false, false, false, false]);
    const [score, setScore] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [reviewData, setReviewData] = useState({
        reviewId: 0,
        rating: score,
        categoryIds: [],
        review: ""
    });

    useEffect(() => {
        adjustTextareaHeight(textareaRef.current);
    }, []);

    useEffect(() => {
        const selectedCategories = cafeDetail?.reviewCategories.find(rc => rc.reviewId === reviewItem.id)?.categoryId || [];
        setReviewData({
            reviewId: reviewItem.id,
            rating: reviewItem.rating,
            categoryIds: selectedCategories,
            review: reviewItem.review
        });
        setScore(reviewItem.rating);
        setSelectedCategory(selectedCategories);
    }, [reviewItem, cafeDetail]);

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
    }

    const handleCategoryOnClick = (category) => {
        setSelectedCategory(prevCategories => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter(c => c !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    }

    const reviewModifyMutation = useMutation(
        async () => {
            return await instance.put(`/review/${reviewItem.id}`, reviewData);
        },
        {
            onSuccess: () => {
                confirmAlert("리뷰가 수정되었습니다");
                queryClient.invalidateQueries("cafeDetailQuery");
                navigate(`/cafe/detail/${cafeDetail?.id}?selectMenu=review`);
            }
        }
    )

    const handleSubmitOnClick = async () => {
        if (!reviewData.rating) {
            confirmAlert("평점을 남겨주세요.");
            return;
        } else if (reviewData.categoryIds.length === 0) {
            confirmAlert("카테고리를 선택해주세요.");
            return;
        } else if (reviewData.review.trim("") === "") {
            confirmAlert("후기를 작성해주세요.");
            return;
        }
        reviewModifyMutation.mutateAsync();
    }

    return (
        <div css={s.layout}>
            <BackButton prevPage={cafeDetail?.cafeName} prevPageUrl={`/cafe/detail/${cafeDetail?.id}?&selectMenu=review`} />
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
                                backgroundColor: selectedCategory.includes(category.value) ? '#ff675b' : '#ffffff'
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>
            <div css={s.review}>
                <h2>후기를 작성해 보세요!</h2>
                <div css={s.textarea}>
                    <textarea
                        name="review"
                        maxLength={MAX_LENGTH}
                        value={reviewData.review}
                        ref={textareaRef}
                        onChange={handleTextareaChange}
                        placeholder='유용한 팁을 알려주세요! 작성한 내용은 마이페이지 카페 상세페이지에 노출 됩니다.'>
                    </textarea>
                </div>
                <div css={s.count}>
                    <span>{reviewData.review.length}</span>
                    <span>/{MAX_LENGTH.toLocaleString()}</span>
                </div>
                <button onClick={handleSubmitOnClick}>수정 완료</button>
            </div>
        </div>
    );
}

export default CafeReviewModifyPage;