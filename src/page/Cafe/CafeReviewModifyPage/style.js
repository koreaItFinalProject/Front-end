import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #191919;
`;

export const rating = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
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
    padding: 20px;
    height: fit-content;
    gap: 10px;
    background-color: #ffffff;
`;

export const buttons = css`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;

    button {
        padding: 5px 10px;
        border: 1px solid #f2780c;
        border-radius: 36px;
    }
`;

export const activeButton = css`
    color: #111111;
    border: none;
    background-color: #f2780c;
`;

export const review = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
    gap: 10px;
    background-color: #ffffff;

    h2 {
        margin: 0;
    }

    button {
        width: 100%;
        padding: 10px 250px;
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
        min-height: 100px;
        max-height: 230px;
        padding: 10px;
        border-radius: 10px;
        resize: none;
        overflow: scroll;
    }
`;

export const count = css`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
    span {
        font-size: 14px;
    }
`;