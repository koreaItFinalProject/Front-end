import { css } from "@emotion/react";

export const mainLayout = css`
    display: flex;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #898484;
    border-top: none;
    width: 300px;
    height: 1000px;

    & > span {
        margin-left: 50px;
        font-size: 25px;
    }
`;

export const mainBox = css`
    width: 100%;
    height: 100%;
`;

export const contentBox = css`
    box-sizing: border-box;
    border: 1px solid #000000;
    border-top: none;
    border-left: none;
    width: 100%;
    height: 85px;
`;

export const box = css`
    display: flex;
    flex-wrap: wrap;

    & > div {
        box-sizing: border-box;
        border: 1px solid #000000;
        width: 50%;
        height: 457.6px;
    }
`;

