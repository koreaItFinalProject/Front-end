import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import StarRating from '../../../apis/util/starRating';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { IoPencil } from "react-icons/io5";

function CafeReview({ cafeDetail, refetch }) {
    const navigate = useNavigate();
    const params = useParams();
    const cafeId = params.cafeId;
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
        navigate(`/cafe/review/${cafeId}`, { state: { cafeDetail } });
    };

    const handleModifyReviewClick = (reviewItem) => {
        navigate(`/cafe/review/modify/${reviewItem.id}`, { state: { reviewItem, cafeDetail } });
    };

    const handleDeleteReviewOnClick = (reviewId) => {
        deleteReviewMutation.mutateAsync(reviewId);
    };

    return (
        <div css={s.layout}>
            <div css={s.title}>
                <h1>Review</h1>
                <div>{cafeDetail?.reviewCount}</div>
            </div>
            <div css={s.reviewStat}>
                <div css={s.stat}>
                    <div>{cafeDetail?.totalRating === null ? 0 : cafeDetail?.totalRating} 점</div>
                    <StarRating averageRating={cafeDetail?.totalRating === null ? 0 : cafeDetail?.totalRating} />
                </div>
                <button onClick={handleWriteReviewClick}><IoPencil />리뷰 쓰기</button>
            </div>
            <div css={s.category}>
                {
                    cafeDetail?.reviewCategoryCounts.map((category, index) => (
                        <div key={index}>{category.category.categoryNameKor} {category.categoryCount}</div>
                    ))
                }
            </div>
            {
                cafeDetail?.reviews.map((reviewItem, index) =>
                    <div key={index} css={s.review}>
                        <div css={s.reviewInfo}>
                            <div css={s.profileImg}>
                                <img src="" alt="" />
                            </div>
                            <div>{reviewItem.user.nickname}</div>
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
                                        <button onClick={() => handleModifyReviewClick(reviewItem)}>수정</button>
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