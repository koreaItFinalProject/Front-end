import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #191919;
    overflow: auto;
`;

export const subLayout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ffffff;
`;

export const writerInfo = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: default;

    img {
        margin-right: 10px;
        width: 30px;
        height: 30px;
        border: 1px solid #dddddd;
        border-radius: 30px;
        background-color: black;
    }
`;

export const title = css`
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 24px;
    font-weight: 600;
    cursor: default;
`;

export const boardInfoContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30px;
    cursor: default;
`;

export const boardInfo = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        margin-right: 2px;
        font-size: 14px;
        color: #555555;
    }
`;

export const buttonLayout = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    svg {
        width: 20px;
        height: 20px;
    }

    button {
        border: none;
        margin-left: 20px;
        padding: 0;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const contentBox = css`
    box-sizing: border-box;
    background-color: #ffffff;
    cursor: default;

    img {
        border-radius: 20px;
        cursor: default;
    }

    .quill {
        padding: 0;
    }

    .ql-container.ql-snow {
        width: 100%;
        border: none;
        overflow-y: auto;
    }

    & img:not(img[width]) {
        width: 100%;
    }  
`;

export const likeContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        padding: 0;

        svg {
            width: 30px;
            height: 30px;
        }
    }

    div {
        font-size: 22px;
    }
`;

export const commentContainer = css`
    display: flex;
    flex-grow: 1;
`;

export const footer = css`
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #F4F4F6;
    border-radius: 0px 0px 10px 10px;
`;