import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from '../../../components/StarRating/StarRating';
import { adjustTextareaHeight } from '../../../apis/util/textAreaUtil';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import BackButton from '../../../components/BackButton/BackButton';

const categories = [
    { value: 'bakery', label: '베이커리' },
    { value: 'brunch', label: '브런치' },
    { value: 'mood', label: '분위기' },
    { value: 'desert', label: '디저트' }
];

function CafeReviewPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const { cafeItem } = location.state || {};
    const textareaRef = useRef(null);
    const queryClient = useQueryClient();
    const [isClick, setisClick] = useState([false, false, false, false, false]);
    const [score, setScore] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [reviewData, setReviewData] = useState({
        cafeId: cafeItem.id,
        rating: score,
        category: "",
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

    const handleTextareaChange = (e) => {
        adjustTextareaHeight(textareaRef.current);
        setReviewData(review => ({
            ...review,
            [e.target.name]: e.target.value
        }))
    };

    const handleCategoryOnClick = (e) => {
        const category = e.target.value;
        if (selectedCategory === category) {
            setSelectedCategory("");
            setReviewData(prevData => ({
                ...prevData,
                category: ""
            }));
        } else {
            setSelectedCategory(category);
            setReviewData(prevData => ({
                ...prevData,
                category: category
            }));
        }
    };

    const reviewMutation = useMutation(
        async () => {
            return await instance.post("/review", reviewData);
        },
        {
            onSuccess: response => {
                alert("리뷰가 작성되었습니다");
                queryClient.refetchQueries(['reviews', cafeItem.id]);
                navigate(`/cafe/detail/${cafeItem.id}`, { state: { cafeItem } });
            }
        }
    );

    const handleSubmitOnClick = async () => {
        if (!reviewData.rating) {
            alert("평점을 남겨주세요.");
            return;
        } else if (!reviewData.category) {
            alert("카테고리를 선택해주세요.");
            return;
        } else if (reviewData.review.trim("") === "") {
            alert("후기를 작성해주세요.");
            return;
        }
        reviewMutation.mutateAsync();
    }

    console.log(reviewData);

    return (
        <div css={s.layout}>
            <BackButton prevPage={cafeItem.cafeName} prevPageUrl={`/cafe/detail/${cafeItem.id}`} />
            <div css={s.rating}>
                <h1>{cafeItem.cafeName}</h1>
                <StarRating
                    score={score}
                    setScore={setScore}
                    isClick={isClick}
                    setisClick={setisClick} />
            </div>
            <div css={s.category}>
                <div>어떤 카페인가요?</div>
                <div css={s.buttons}>
                    {categories.map(category => (
                        <button
                            key={category.value}
                            onClick={handleCategoryOnClick}
                            value={category.value}
                            css={selectedCategory === category.value ? s.activeButton : null}
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
                        value={reviewData.review}
                        ref={textareaRef}
                        onChange={handleTextareaChange}
                        placeholder='유용한 팁을 알려주세요! 작성한 내용은 마이페이지 카페 상세페이지에 노출 됩니다.'>
                    </textarea>
                </div>
                <button onClick={handleSubmitOnClick}>작성 완료</button>
            </div>
        </div>
    );
}

export default CafeReviewPage;