/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CafeMenu from '../../../components/CafeDetail/CafeMenu/CafeMenu';
import CafeReview from '../../../components/CafeDetail/CafeReview/CafeReview';
import StarRating from '../../../apis/util/starRating';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useCafeLikeQuery, useDislikeMutation, useLikeMutation } from '../../../apis/CafeApis/CafeLikeApi';
import BackButton from '../../../components/BackButton/BackButton';
import { useCafeDetailQuery } from '../../../apis/CafeApis/getCafeDetailApi';
import NoticeList from "../../../components/NoticeList/NoticeList";
import { useCafeNoticeListQuery } from "../../../apis/CafeApis/getCafeNoticeListApi";
import { useEffect } from "react";

function CafeDetailPage() {
    const location = useLocation();
    const params = useParams();
    const cafeId = params.cafeId;
    const [selectMenu, setSelectMenu] = useState(new URLSearchParams(location.search).get('selectMenu') || 'menu');

    const { data: cafeDetail } = useCafeDetailQuery(cafeId);
    const { data: cafeLike, refetch: refetchCafeLike } = useCafeLikeQuery(cafeId);
    const { data: cafeNoticeList } = useCafeNoticeListQuery(cafeDetail?.ownerId, {
        enabled: !!cafeDetail?.ownerId, // ownerId가 존재할 때만 쿼리 실행
    });
    const likeMutation = useLikeMutation(cafeId, refetchCafeLike);
    const dislikeMutation = useDislikeMutation(cafeLike?.cafeLikeId, refetchCafeLike);

    useEffect(() => {
        if (selectMenu === '') {
            setSelectMenu('menu');
        }
    }, [selectMenu])

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    }

    const handleLikeOnClick = () => {
        likeMutation.mutateAsync();
    }

    const handleDislikeOnClick = () => {
        dislikeMutation.mutateAsync();
    }

    return (
        <div css={s.layout}>
            <BackButton prevPage={'카페 리스트'} prevPageUrl={'/cafe/list'} />
            <div css={s.subLayout}>
                <div css={s.bannerImg}>
                    <img src={cafeDetail?.img} alt="Banner Image" />
                </div>
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
                    <div css={s.address}>{cafeDetail?.address}</div>
                    <div css={s.reviewStat}>
                        <StarRating
                            averageRating={cafeDetail?.totalRating === null ? 0 : cafeDetail?.totalRating}
                            dimension={"30px"}
                            spacing={5}
                        />
                        <div>{cafeDetail?.totalRating}</div>
                    </div>
                    <div css={s.detailInfo}>
                        <div>{cafeDetail?.category}</div>
                        <div>리뷰 {cafeDetail?.reviewCount}</div>
                        <div>좋아요 {cafeLike?.likeCount}</div>
                    </div>
                </div>
                <div css={s.detailContent}>
                    <div css={s.menuButtons}>
                        <button
                            css={selectMenu === 'menu' ? s.activeButton : null}
                            onClick={handleMenuOnClick}
                            value={"menu"}>
                            메뉴
                        </button>
                        <button
                            css={selectMenu === 'review' ? s.activeButton : null}
                            onClick={handleMenuOnClick}
                            value={"review"}>
                            리뷰
                        </button>
                        <button
                            css={selectMenu === 'notice' ? s.activeButton : null}
                            onClick={handleMenuOnClick}
                            value={"notice"}>
                            공지사항
                        </button>
                    </div>
                    {
                        selectMenu === 'menu'
                            ?
                            <CafeMenu />
                            :
                            selectMenu === 'review'
                                ?
                                <CafeReview cafeDetail={cafeDetail} />
                                :
                                selectMenu === 'notice'
                                    ?
                                    <NoticeList
                                        sortedNoticeList={cafeNoticeList?.boards}
                                        prevPage={'detail'}
                                        cafeId={cafeId}
                                        cafeName={cafeDetail?.cafeName}
                                    />
                                    :
                                    <></>
                    }
                </div>
            </div>
        </div>
    );
}

export default CafeDetailPage;