import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    gap: 10px;

    h1 {
        margin: 0;
        font-size: 24px;
    }
`;

export const reviewStat = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        height: 100%;
        margin-right: 10px;
        font-size: 20px;
        font-weight: 600;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const categoryContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        padding: 0;
    }
`;

export const category = css`
    display: flex;
    flex-direction: row;

    div {
        margin-right: 8px;
        padding: 5px 10px;
        border: 1px solid #000000;
        border-radius: 36px;
        cursor: default;
    }
`;

export const review = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid #f2780c;
    padding-bottom: 3px;
`;

export const profileImg = css`
    width: 20px;
    height: 20px;
    margin: 0;
    border-radius: 20px;
    background-color: #000000;
`;

export const reviewInfo = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    div:nth-of-type(1) {
        margin-right: 5px;
    }

    div:nth-of-type(2) {
        height: 100%;
        margin-right: 10px;
        font-weight: 500;
    }

    div:nth-of-type(3) {
        margin-right: 10px;
        font-size: 14px;
    }
`;

export const stars = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        width: 18px;
        height: 18px;
    }
`;

export const contentBox = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        font-size: 14px;
    }
`;