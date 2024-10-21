import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosStarOutline } from "react-icons/io";
import CafeMenu from '../../components/CafeDetail/CafeMenu/CafeMenu';
import CafeReview from '../../components/CafeDetail/CafeReview/CafeReview';

function CafeDetailPage(props) {
    const[selectMenu, setSelectMenu] = useState("menu"); 

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    }

    return (
        <div css={s.layout}>
            <div css={s.detailHeader}>
                <h1>Knockout</h1>
                <div>부산 부산진구 동천로 91-2</div>
                <div css={s.reviewStat}>
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <div>3.0</div>
                </div>
                <div css={s.detailInfo}>
                    <div>디저트</div>
                    <div>리뷰 378</div>
                </div>
            </div>
            <div css={s.detailContent}>
                <div css={s.menuButtons}>
                    <button 
                        css={selectMenu === 'menu' ? s.activeButton : null}
                        onClick={handleMenuOnClick} 
                        value={"menu"}>
                        Menu
                        </button>
                    <button 
                        css={selectMenu === 'review' ? s.activeButton : null}
                        onClick={handleMenuOnClick} 
                        value={"review"}>
                        Review
                        </button>
                </div>
                {
                    selectMenu === 'menu'
                    ? <CafeMenu />
                    : <CafeReview />
                }
            </div>
        </div>
    );
}

export default CafeDetailPage;