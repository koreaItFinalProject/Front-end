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

export const container = css`
    display: flex;
`;

export const mainBox = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    /* height: 457.6px;  */
    height: 1000px;
`;

export const titleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #000000;
    /* border-top: none; */
    width: 100%;
    height: 15%;
    font-size: 25px;
`;

export const secondTitleBox = css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    font-size: 18px;
`;

export const contentBox = css`
    box-sizing: border-box;
    border: 1px solid #000000;
    /* border-top: none; */
    width: 100%;
    height: 85%;
`;




