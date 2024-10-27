import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useLocation } from 'react-router-dom';
import CafeMenu from '../../../components/CafeDetail/CafeMenu/CafeMenu';
import CafeReview from '../../../components/CafeDetail/CafeReview/CafeReview';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';
import StarRating from '../../../apis/util/starRating';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useCafeLikeQuery, useDislikeMutation, useLikeMutation } from '../../../apis/CafeApis/CafeLikeApi';
import BackButton from '../../../components/BackButton/BackButton';
import { useReviewQuery } from '../../../apis/ReviewApis/getReviewList';

function CafeDetailPage() {
    const location = useLocation();
    const { cafeItem } = location.state || {};
    const [selectMenu, setSelectMenu] = useState('review');
    const [averageRating, setAverageRating] = useState(0);

    const { data: reviewList, refetch } = useReviewQuery(cafeItem.id);
    console.log(reviewList);

    useEffect(() => {
        if (reviewList && reviewList?.reviews.length > 0) {
            const totalRating = reviewList?.reviews.reduce((sum, reviewList) => sum + reviewList.rating, 0);
            const average = totalRating / reviewList?.reviews.length;
            setAverageRating(average);
        }
    }, [reviewList]);

    const { data: cafeLike, refetch: refetchCafeLike } = useCafeLikeQuery(cafeItem?.id);
    const likeMutation = useLikeMutation(cafeItem?.id, refetchCafeLike);
    const dislikeMutation = useDislikeMutation(cafeLike?.cafeLikeId, refetchCafeLike);

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
                        <h1>{cafeItem?.cafeName}</h1>
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
                <div>{cafeItem?.address}</div>
                <div css={s.reviewStat}>
                    <StarRating averageRating={averageRating} />
                    <div>{averageRating.toFixed(1)}</div>
                </div>
                <div css={s.detailInfo}>
                    <div>{cafeItem?.category}</div>
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
                            cafeItem={cafeItem}
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