import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const loginMain = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    height: 100%;
    /* width: 600px; */
`;

export const selectMember = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 64px;

    & button {
        border: 1px solid black;
        border-bottom: none;
        box-sizing: border-box;
        width: 246.5px;
        padding: 18px;
        font-size: 20px;
        font-weight: 600;

    }
    
    `;

export const togleLogin = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
