import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosStarOutline } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import CafeMenu from '../../../components/CafeDetail/CafeMenu/CafeMenu';
import CafeReview from '../../../components/CafeDetail/CafeReview/CafeReview';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

function CafeDetailPage() {
    const location = useLocation();
    const { cafeItem } = location.state || {};
    const[ selectMenu, setSelectMenu ] = useState('review'); 

    const review = useQuery(
        ["reviewQuery", cafeItem?.id],
        async () => {
            if(!cafeItem?.id) return;
            const reviewList =  await instance.get(`/review/${cafeItem.id}`);
            return reviewList;
        },
        {
            enabled: !!cafeItem?.id,
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    };

    return (
        <div css={s.layout}>
            <div css={s.detailHeader}>
                <h1>{cafeItem?.cafeName}</h1>
                <div>{cafeItem?.address}</div>
                <div css={s.reviewStat}>
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <div>3.0</div>
                </div>
                <div css={s.detailInfo}>
                    <div>{cafeItem?.address}</div>
                    <div>리뷰 378</div>
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
                    ? <CafeReview cafeItem={cafeItem} review={review}/>
                    : <CafeMenu />
                }
            </div>
        </div>
    );
}

export default CafeDetailPage;