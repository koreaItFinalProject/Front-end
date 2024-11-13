import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import StarRating from '../../../apis/util/starRating';
import { useMutation, useQueryClient } from 'react-query';
import { instance } from '../../../apis/util/instance';
import { BsPencilSquare } from "react-icons/bs";
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import { confirmCancelAlert } from '../../../apis/util/SweetAlert2/ConfirmCancelAlert/ConfirmCancelAlert';

function CafeReview({ cafeDetail, refetchCafeDetail }) {
    const navigate = useNavigate();
    const params = useParams();
    const cafeId = params.cafeId;
    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");
    const totalCount = cafeDetail?.reviewCount || 1; // 전체 리뷰 개수
    const sortedCategories = cafeDetail?.reviewCategoryCounts ? [...cafeDetail.reviewCategoryCounts].sort((a, b) => b.categoryCount - a.categoryCount) : [];

    const deleteReviewMutation = useMutation(
        async (reviewId) => await instance.delete(`/review/${reviewId}`),
        {
            onSuccess: () => {
                confirmAlert("리뷰를 삭제하였습니다.");
                refetchCafeDetail();
            },
            onError: (error) => {
                confirmAlert(error.response.data);
                refetchCafeDetail();
            }
        }
    );

    const reportMutation = useMutation(
        async (report) => await instance.post("/report", report),
        {
            onSuccess: (response) => {
                confirmAlert(response.data);
            }
        }
    )

    const handleWriteReviewClick = () => {
        if (!userInfoData?.data) {
            confirmAlert("로그인 후 작성 가능합니다.");
            return;
        }
        navigate(`/cafe/review/${cafeId}`, { state: { cafeDetail } });
    }

    const handleModifyReviewClick = (reviewItem) => {
        navigate(`/cafe/review/modify/${reviewItem.id}`, { state: { reviewItem, cafeDetail } });
    }

    const handleDeleteReviewOnClick = (reviewId) => {
        deleteReviewMutation.mutateAsync(reviewId);
    }

    const handleReportOnClick = async (review) => {
        if (!userInfoData?.data) {
            confirmAlert("로그인을 하신 후 이용해 주시기 바랍니다.");
            return;
        }

        if (await confirmCancelAlert("정말 신고하시겠습니까?")) {
            const requstBody = {
                contentId: review?.id,
                content: review?.review,
                reportId: userInfoData?.data?.userId,
                reportType: "리뷰",
            }
            reportMutation.mutateAsync(requstBody);
        }
        return;
    }

    return (
        <div css={s.layout}>
            <div css={s.titleAndWrite}>
                <div css={s.title}>
                    방문자 리뷰
                    <p>{cafeDetail?.reviewCount}</p>
                </div>
                <button onClick={handleWriteReviewClick}><BsPencilSquare />리뷰 쓰기</button>
            </div>
            <div css={s.reviewStat}>
                <div css={s.stat}>
                    <p>{cafeDetail?.totalRating === null ? 0 : cafeDetail?.totalRating} 점</p>
                    <StarRating
                        averageRating={cafeDetail?.totalRating === null ? 0 : cafeDetail?.totalRating}
                        dimension={"20px"}
                        spacing={1}
                    />
                </div>
            </div>
            <div css={s.category}>
                {
                    sortedCategories.map((category, index) => (
                        <div key={index} css={s.categoryItem(category.categoryCount, totalCount)}>
                            {category.category.categoryNameKor} · {category.categoryCount}
                        </div>
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
                            <StarRating
                                averageRating={reviewItem.rating}
                                dimension={"15px"}
                                spacing={1}
                            />
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
                                    <button onClick={() => handleReportOnClick(reviewItem)}>신고</button>
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default CafeReview;