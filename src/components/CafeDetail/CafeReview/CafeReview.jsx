import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import StarRating from '../../../apis/util/starRating';

function CafeReview({ cafeItem, review, averageRating }) {
    const navigate = useNavigate();

    const handleReviewClick = () => {
        navigate(`/cafe/review/${cafeItem.id}`, { state: { cafeItem } });
    };

    const handleModifyReviewClick = (reviewId, reviewItem) => {
        navigate(`/cafe/review/modify/${reviewId}`, { state: { reviewId, reviewItem, cafeItem }});
    }

    return (
        <div css={s.layout}>
            <h1>Review</h1>
            <div css={s.reviewStat}>
                <div>{averageRating.toFixed(1)} 점</div>
                <StarRating averageRating={averageRating} />
            </div>
            <div css={s.category}>
                <div css={s.buttons}>
                    <button>베이커리</button>
                    <button>브런치</button>
                    <button>분위기</button>
                    <button>디저트</button>
                </div>
                <button onClick={handleReviewClick}>리뷰 쓰기</button>
            </div>
            {
                review?.data?.reviews.map(reviewItem =>
                    <div key={reviewItem.id} css={s.review}>
                        <div css={s.reviewInfo}>
                            <div css={s.profileImg}>
                                <img src="" alt="" />
                            </div>
                            <div>{reviewItem.nickname}</div>
                            <div>{reviewItem.writeDate}</div>
                        </div>
                        <div css={s.stars}>
                            <StarRating averageRating={reviewItem.rating} />
                        </div>
                        <div css={s.contentBox}>
                            <div>{reviewItem.review}</div>
                            <div>
                                <button onClick={() => handleModifyReviewClick(reviewItem.id, reviewItem)}>수정</button>
                                <button>삭제</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default CafeReview;