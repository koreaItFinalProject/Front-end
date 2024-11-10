import { css } from "@emotion/react";

export const reviewStat = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
        width: 40px;
        height: 40px;
        margin-right: 5px;
    }
`;

export const ratingStarOver = css`
    cursor: pointer;
    fill: #ff675b;
`;

export const ratingStarOut = css`
    cursor: pointer;
    fill: rgb(216, 216, 216);
`;