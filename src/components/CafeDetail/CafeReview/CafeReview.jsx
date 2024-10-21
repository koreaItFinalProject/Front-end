import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function CafeReview({ cafeItem }) {
    const navigate = useNavigate();

    const handleReviewClick = () => {
        navigate(`/cafe/review/${cafeItem.id}`, { state: { cafeItem } });
    };

    return (
        <div css={s.layout}>
            <h1>Review</h1>
            <div css={s.reviewStat}>
                <div>3.0 점</div>
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
            </div>
            <div css={s.category}>
                <div css={s.buttons}>
                    <button>베이커리</button>
                    <button>브런치</button>
                    <button>분위기</button>
                    <button>디저트</button>
                </div>
                <button onClick={handleReviewClick}>리뷰 쓰기</button>
            </div>
            <div css={s.review}>
                <div css={s.reviewInfo}>
                        <div css={s.profileImg}>
                            <img src="" alt="" />
                        </div>
                        <div>cafeinbusan</div>
                <div>2024.10.21</div>
                </div>
                <div css={s.stars}>
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                </div>
                <div>리뷰 내용이 여기 표시됨</div>
            </div>
        </div>
    );
}

export default CafeReview;