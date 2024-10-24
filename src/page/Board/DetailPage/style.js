import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    padding: 10px 10px;
    overflow-y: auto;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
`;

export const writerInfo = css`
    display: flex;
    flex-direction: row;
    font-weight: 600;
    cursor: default;

    img {
        margin-right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: black;
    }
`;

export const title = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: default;

    div {
        font-size: 24px;
        font-weight: 600;
    }
    
`;

export const boardInfoContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: default;
`;

export const boardInfo = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        margin-right: 10px;
        font-size: 14px;
    }
`;

export const buttonLayout = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
    }

    button {
        border: none;
        margin-left: 5px;
        padding: 5px;
        font-size: 14px;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    margin-bottom: 5px;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    cursor: default;

    .ql-container.ql-snow {
        border: none;
    }

    & img:not(img[width]) {
        width: 100%;
    }  
`;