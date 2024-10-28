import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams } from 'react-router-dom';
import CafeMenu from '../../../components/CafeDetail/CafeMenu/CafeMenu';
import CafeReview from '../../../components/CafeDetail/CafeReview/CafeReview';
import StarRating from '../../../apis/util/starRating';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useCafeLikeQuery, useDislikeMutation, useLikeMutation } from '../../../apis/CafeApis/CafeLikeApi';
import BackButton from '../../../components/BackButton/BackButton';
import { useReviewQuery } from '../../../apis/ReviewApis/getReviewList';
import { useCafeDetailQuery } from '../../../apis/CafeApis/getCafeDetailApi';

function CafeDetailPage() {
    const params = useParams();
    const cafeId = params.cafeId;
    const [selectMenu, setSelectMenu] = useState('review');
    const [averageRating, setAverageRating] = useState(0);

    const { data: cafeDetail } = useCafeDetailQuery(cafeId);
    const { data: reviewList, refetch } = useReviewQuery(cafeId);
    const { data: cafeLike, refetch: refetchCafeLike } = useCafeLikeQuery(cafeId);
    const likeMutation = useLikeMutation(cafeId, refetchCafeLike);
    const dislikeMutation = useDislikeMutation(cafeLike?.cafeLikeId, refetchCafeLike);

    useEffect(() => {
        if (reviewList && reviewList?.reviews.length > 0) {
            const totalRating = reviewList?.reviews.reduce((sum, reviewList) => sum + reviewList.rating, 0);
            const average = totalRating / reviewList?.reviews.length;
            setAverageRating(average);
        }
    }, [reviewList]);

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    };

    const handleLikeOnClick = () => {
        likeMutation.mutateAsync();
    }

    const handleDislikeOnClick = () => {
        dislikeMutation.mutateAsync();
    }

    return (
        <div css={s.layout}>
            <BackButton prevPage={'카페 리스트'} prevPageUrl={'/cafe/list'} />
            <div css={s.detailHeader}>
                <div css={s.titleLike}>
                    <div>
                        <h1>{cafeDetail?.cafeName}</h1>
                    </div>
                    <div css={s.heart}>
                        {
                            !!cafeLike?.cafeLikeId
                                ?
                                <button onClick={handleDislikeOnClick}>
                                    <IoMdHeart style={{ fill: '#f2780c' }} />
                                </button>
                                :
                                <button onClick={handleLikeOnClick}>
                                    <IoMdHeartEmpty />
                                </button>
                        }
                    </div>
                </div>
                <div>{cafeDetail?.address}</div>
                <div css={s.reviewStat}>
                    <StarRating averageRating={averageRating} />
                    <div>{averageRating.toFixed(1)}</div>
                </div>
                <div css={s.detailInfo}>
                    <div>{cafeDetail?.category}</div>
                    <div>리뷰 {reviewList?.reviewCount}</div>
                </div>
            </div>
            <div css={s.detailContent}>
                <div css={s.menuButtons}>
                    <button
                        css={selectMenu === 'review' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"review"}>
                        Review
                    </button>
                    <button
                        css={selectMenu === 'menu' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"menu"}>
                        Menu
                    </button>
                </div>
                {
                    selectMenu === 'review'
                        ? <CafeReview
                            cafeDetail={cafeDetail}
                            review={reviewList}
                            averageRating={averageRating}
                            refetch={refetch}
                        />
                        : <CafeMenu />
                }
            </div>
        </div>
    );
}

export default CafeDetailPage;