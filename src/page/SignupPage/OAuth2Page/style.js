import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    * {
        color: #ffffff;
    }
`;

export const Info = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 380px;
    width: 380px;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
`;

export const loginLayout =css`
    width: 100%;
    height: 100%;
    & div {
        padding: 20px 0px;
    }
    & p {
        display: flex;
        justify-content: center;
        font-size: 12px;
        width: 100%;
        color: #E94334;
        margin: 0;
    }
    & button {
        display: flex;
        align-items: center;
        padding: 10px 160px;
        box-sizing: border-box;
        border-radius: 10px;
        color: #ffffff;
        font-weight: 600;
        background-color: #F2780C;
        height: 40px;
        width: 380px;
    }
`;
export const logo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    & h1 {
        font-size: 30px;
        font-weight: 700;
        margin: 0;
        color: #F2780C;
    }
`;

export const signupbutton = css`
    height: 40px;
    box-sizing: border-box;
    font-weight: 600;
    cursor: pointer;
`;

