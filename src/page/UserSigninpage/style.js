import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    width: 100%;
    height: 802px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export const loginMain = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    height: 100%;
    width: 600px;
    border: 1px solid black;
`;

export const selectMember = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;

    & button {
        border: 1px solid black;
        border-bottom: none;
        border-radius: 10px 10px 0px 0px;
        box-sizing: border-box;
        padding: 18px 60px;
        font-size: 20px;
        font-weight: 600;
    }

    & button:nth-last-of-type(2){
        border-right: none;
    }
    & button:nth-last-of-type(1){
        border-left: none;
    }
        `;

export const togleLogin = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;