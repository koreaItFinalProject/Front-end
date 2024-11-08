import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #191919;
    overflow: auto;
`;

export const rating = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 20px 10px;
    gap: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ffffff;

    h1 {
        font-size: 24px;
        margin: 0;
    }
`;

export const cafeImg = css`
    width: 100%;
    height: 220px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const category = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    height: fit-content;
    gap: 10px;
    background-color: #ffffff;
`;

export const buttons = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    button {
        padding: 5px 10px;
        border: 1px solid #f2780c;
        border-radius: 36px;
        font-weight: 500;
    }
`;

export const activeButton = css`
    background-color: #f2780c;
`;

export const review = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 10px 20px;
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