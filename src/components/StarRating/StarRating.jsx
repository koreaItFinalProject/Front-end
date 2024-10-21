import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoStar } from "react-icons/io5";

function StarRating({ score, setScore, isClick, setisClick }) {

    const handleStarOnClick = index => {
        if (score === index + 1) {
            setisClick(isClick.map(() => false));
            setScore(0);
        } else {
            const tempisClick = isClick.map((_, i) => i <= index);
            setisClick(tempisClick);
            setScore(index + 1);
        }
    };

    return (
        <div css={s.reviewStat}>
            {[0, 1, 2, 3, 4].map((element, index) => (
                <IoStar
                    css={isClick[element] ? s.ratingStarOver : s.ratingStarOut}
                    key={index}
                    size={50}
                    onClick={() => handleStarOnClick(index)}
                />
            ))}
        </div>
    );
}

export default StarRating;