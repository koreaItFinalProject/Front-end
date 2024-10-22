import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 15px 0px 15px;
    width: 100%;
    height: 100%;
    background-color: #191919;
`;

export const rating = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
    border-radius: 10px;
    background-color: #ffffff;

    h1 {
        font-size: 24px;
        margin: 0;
    }
`;



export const category = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
    border-radius: 10px;
    background-color: #ffffff;
`;

export const buttons = css`
    button {
        margin-right: 8px;
        padding: 5px 10px;
        border: 1px solid #000000;
        border-radius: 36px;
    }
`;

export const activeButton = css`
    color: #111111;
    background-color: #f2780c;
`;

export const review = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px;
    gap: 10px;
    border-radius: 10px;
    background-color: #ffffff;

    h2 {
        margin: 0;
    }

    button {
        width: 100%;
        padding: 5px 250px;
        border-radius: 10px;
        color: #ffffff;
        background-color: #f2780c;
    }
`;

export const textarea = css`
    display: flex;
    width: 100%;

    textarea {
        width: 100%;
        height: auto;
        min-height: 50px;
        max-height: 200px;
        padding: 5px;
        border-radius: 10px;
        resize: none;
        overflow: hidden;
    }
`;