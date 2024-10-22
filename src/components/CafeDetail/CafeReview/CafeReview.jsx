import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import StarRating from '../../../apis/util/starRating';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';

function CafeReview({ cafeItem, review, averageRating, refetch }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");
    const accessCheck = queryClient.getQueryData("accessTokenValidQuery");

    const deleteReviewMutation = useMutation(
        async (reviewId) => await instance.delete(`/review/${reviewId}`),
        {
            onSuccess: () => {
                alert("리뷰를 삭제하였습니다.");
                refetch();
            },
            onError: (error) => {
                alert(error.response.data);
                refetch();
            }
        }
    );

    const handleWriteReviewClick = () => {
        if (!accessCheck) {
            alert("로그인 후 작성 가능합니다.");
            return;
        }
        navigate(`/cafe/review/${cafeItem.id}`, { state: { cafeItem } });
    };

    const handleModifyReviewClick = (reviewId, reviewItem) => {
        navigate(`/cafe/review/modify/${reviewId}`, { state: { reviewId, reviewItem, cafeItem } });
    };

    const handleDeleteReviewOnClick = (reviewId) => {
        deleteReviewMutation.mutateAsync(reviewId);
    };

    return (
        <div css={s.layout}>
            <h1>Review</h1>
            <div css={s.reviewStat}>
                <div>{averageRating.toFixed(1)} 점</div>
                <StarRating averageRating={averageRating} />
            </div>
            <div css={s.categoryContainer}>
                <div css={s.category}>
                    <div>베이커리</div>
                    <div>브런치</div>
                    <div>분위기</div>
                    <div>디저트</div>
                </div>
                <button onClick={handleWriteReviewClick}>리뷰 쓰기</button>
            </div>
            {
                review?.reviews.map(reviewItem =>
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
                            {
                                userInfoData?.data?.userId === reviewItem.writerId
                                    ?
                                    <div>
                                        <button onClick={() => handleModifyReviewClick(reviewItem.id, reviewItem)}>수정</button>
                                        <button onClick={() => handleDeleteReviewOnClick(reviewItem.id)}>삭제</button>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default CafeReview;