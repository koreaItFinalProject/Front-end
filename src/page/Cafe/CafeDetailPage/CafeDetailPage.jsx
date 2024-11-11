/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CafeMenu from '../../../components/CafeDetail/CafeMenu/CafeMenu';
import CafeReview from '../../../components/CafeDetail/CafeReview/CafeReview';
import StarRating from '../../../apis/util/starRating';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { useCafeLikeQuery, useDislikeMutation, useLikeMutation } from '../../../apis/CafeApis/CafeLikeApi';
import BackButton from '../../../components/BackButton/BackButton';
import { useCafeDetailQuery } from '../../../apis/CafeApis/getCafeDetailApi';
import NoticeList from "../../../components/NoticeList/NoticeList";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

function CafeDetailPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialSelectMenu = queryParams.get('selectMenu') || 'menu';
    const params = useParams();
    const cafeId = params.cafeId;
    const queryClient = useQueryClient();
    const authCheck = queryClient.getQueryData("userInfoQuery");
    const [selectMenu, setSelectMenu] = useState(initialSelectMenu);
    const [isAnimating, setIsAnimating] = useState(false);

    const { data: cafeDetail, refetch: refetchCafeDetail } = useCafeDetailQuery(cafeId);
    const { data: cafeLike, refetch: refetchCafeLike } = useCafeLikeQuery(cafeId);
    const likeMutation = useLikeMutation(cafeId, refetchCafeLike);
    const dislikeMutation = useDislikeMutation(cafeLike?.cafeLikeId, refetchCafeLike);

    useEffect(() => {
        if (selectMenu !== initialSelectMenu) {
            navigate(`${location.pathname}?selectMenu=${selectMenu}`, { replace: true });
        }
    }, [selectMenu, initialSelectMenu, navigate, location.pathname]);

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    }

    const handleLikeOnClick = () => {
        likeMutation.mutateAsync();
    }

    const handleDislikeOnClick = () => {
        dislikeMutation.mutateAsync();
    }

    const handleLikeClick = () => {
        setIsAnimating(true);
        handleLikeOnClick();
        setTimeout(() => setIsAnimating(false), 300); // 애니메이션 시간 후에 클래스 제거
    };

    const handleDislikeClick = () => {
        setIsAnimating(true);
        handleDislikeOnClick();
        setTimeout(() => setIsAnimating(false), 300); // 애니메이션 시간 후에 클래스 제거
    };

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
                        {
                            authCheck
                                ?
                                <div css={s.heart}>
                                    {
                                        !!cafeLike?.cafeLikeId
                                            ?
                                            <button
                                                onClick={handleDislikeClick}
                                                className={isAnimating ? 'animate' : ''}
                                            >
                                                <IoMdHeart style={{ fill: '#ff675b' }} />
                                            </button>
                                            :
                                            <button
                                                onClick={handleLikeClick}
                                                className={isAnimating ? 'animate' : ''}
                                            >
                                                <IoMdHeartEmpty />
                                            </button>
                                    }

                                </div>
                                :
                                <></>
                        }
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
                            css={[s.baseButtonStyle, selectMenu === 'menu' && s.activeButton]}
                            onClick={handleMenuOnClick}
                            value={"menu"}>
                            메뉴
                        </button>
                        <button
                            css={[s.baseButtonStyle, selectMenu === 'review' && s.activeButton]}
                            onClick={handleMenuOnClick}
                            value={"review"}>
                            리뷰
                        </button>
                        <button
                            css={[s.baseButtonStyle, selectMenu === 'notice' && s.activeButton]}
                            onClick={handleMenuOnClick}
                            value={"notice"}>
                            공지사항
                        </button>
                    </div>
                    {
                        selectMenu === 'menu'
                            ?
                            <CafeMenu
                                menu1={cafeDetail?.menu1}
                                menu2={cafeDetail?.menu2}
                            />
                            :
                            selectMenu === 'review'
                                ?
                                <CafeReview
                                    cafeDetail={cafeDetail}
                                    refetchCafeDetail={refetchCafeDetail}
                                />
                                :
                                selectMenu === 'notice'
                                    ?
                                    <NoticeList
                                        sortedNoticeList={cafeDetail?.noticeList}
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