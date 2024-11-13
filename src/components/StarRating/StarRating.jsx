import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoStar } from "react-icons/io5";

function StarRating({ score, setScore, isClick, setisClick }) {

    const handleStarOnClick = (index) => {
        if (score === index + 1) { // 사용자가 이미 선택한 별을 다시 클릭한 경우
            setisClick(isClick.map(() => false)); // 모든 별을 비운다
            setScore(0);
        } else {
            const tempisClick = isClick.map((_, i) => i <= index); // 선택한 별의 index까지 true로 설정
            setisClick(tempisClick); // isClick 배열에 tempisClick 배열 적용
            setScore(index + 1); // score를 현재 채워진 별의 갯수로 설정
        }
    };

    return (
        <div css={s.reviewStat}>
            {[0, 1, 2, 3, 4].map((index) => (
                <IoStar
                key={index}
                    css={isClick[index] ? s.ratingStarOver : s.ratingStarOut}
                    size={50}
                    onClick={() => handleStarOnClick(index)}
                />
            ))}
        </div>
    );
}

export default StarRating;