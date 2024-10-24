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
import { useCafeLikeQuery, useDislikeMutation, useLikeMutation } from '../../../apis/CafeLikeApi/CafeLikeApi';

function CafeDetailPage() {
    const location = useLocation();
    const { cafeItem } = location.state || {};
    const [selectMenu, setSelectMenu] = useState('review');
    const [averageRating, setAverageRating] = useState(0);

    const { data: review, refetch } = useQuery(
        ["reviewQuery", cafeItem?.id],
        async () => {
            if (!cafeItem?.id) return;
            const reviewList = await instance.get(`/review/${cafeItem.id}`);
            return reviewList.data;
        },
        {
            enabled: !!cafeItem?.id,
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    useEffect(() => {
        if (review && review?.reviews.length > 0) {
            const totalRating = review?.reviews.reduce((sum, review) => sum + review.rating, 0);
            const average = totalRating / review?.reviews.length;
            setAverageRating(average);
        }
    }, [review]);

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
                    <div>{cafeItem.category}</div>
                    <div>리뷰 {review?.reviewCount}</div>
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
                            review={review}
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