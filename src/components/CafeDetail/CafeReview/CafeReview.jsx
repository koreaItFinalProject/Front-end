import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import StarRating from '../../../apis/util/starRating';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { IoPencil } from "react-icons/io5";

const categories = [
    { label: '인테리어가 멋져요' },
    { label: '음악이 좋아요' },
    { label: '뷰가 좋아요' },
    { label: '반려동물과 가기 좋아요' },
    { label: '집중하기 좋아요' },
    { label: '주차하기 편해요' },
    { label: '사진이 잘 나와요' },
    { label: '아이와 가기 좋아요' },

];
function CafeReview({ cafeItem, review, averageRating, refetch }) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");

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
        if (!userInfoData?.data) {
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
                <div css={s.stat}>
                    <div>{averageRating.toFixed(1)} 점</div>
                    <StarRating averageRating={averageRating} />
                </div>
                <button onClick={handleWriteReviewClick}><IoPencil />리뷰 쓰기</button>
            </div>
                <div css={s.category}>
                    {
                        categories.map(category => (
                        <div>{category.label}</div>
                        ))
                    }
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