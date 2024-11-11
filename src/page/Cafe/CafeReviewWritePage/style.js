import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    overflow: auto;
`;

export const rating = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 10px;
    gap: 10px;
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
`;

export const baseButtonStyle = css`
    border-radius: 20px;
    border: 1px solid #ff675b;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    transition: transform 0.1s ease, background-color 0.1s ease; 
    
    &:active {
        transform: scale(0.9); 
    }
`;

export const activeButton = css`
    border-radius: 20px;
    border: 1px solid #ff675b;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    background-color: #ff675b;
    transform: scale(1);

    &:active {
        transform: scale(0.9); 
    }
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
        background-color: #ff675b;
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
    margin-bottom: 50px;
    
    span {
        font-size: 14px;
    }
`;