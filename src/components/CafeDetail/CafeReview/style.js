import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 100px;
    gap: 10px;
`;

export const titleAndWrite = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        font-weight: 600;
        
        svg {
            padding-top: 3px;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            fill: #ff675b;
        }
    }
`;

export const title = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    margin-right: 5px;
    font-size: 24px;
    font-weight: 600;

    p {
        margin: 0;
        margin-left: 10px;
        font-size: 20px;
        color: #aaaaaa;
    }
`;

export const reviewStat = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const stat = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        margin: 0;
        margin-right: 5px;
        height: 100%;
        font-size: 20px;
        font-weight: 600;
    }

    div {
        padding-top: 3px;
    }
`;

export const category = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px;
`;

export const categoryItem = (count, totalCount) => css`
    background-color: rgba(255, 103, 91, ${Math.min((count / totalCount) * 0.95, 0.95)});
    padding: 5px 10px;
    width: fit-content;
    border: 1px solid #ff675b;
    border-radius: 36px;
    font-weight: 500;
    cursor: default;
`;

export const review = css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid #ff675b;
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