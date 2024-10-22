import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding:20px 20px 20px 20px;
    flex-direction: column;
    & p {
        color:#000000;
        margin: 0;
    }
`;

export const profileBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 280px;
    width: 100%;
    border-radius: 20px;
    background-color: #ffffff;
`;

export const profileimage = css`
    cursor: pointer;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: 1px solid black;
    & input {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        padding: 0;
    }
`;

export const profile = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const infoLayout = css`
    width: 100%;
`;



export const userInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
        padding: 5px 0px;
    }
`;

export const mainBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 30px 10px;
`;

export const mainBoxLayout = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    & > div {
        height: 50%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
            display: flex;
            box-sizing: border-box;
            height: 100%;
            width: 50%;
            border: 1px solid red;
            padding: 10px;
        }
    }
`;

