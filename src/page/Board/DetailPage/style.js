import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #191919;
`;

export const subLayout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
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
        margin: 5px 0px;
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
    background-color: #ffffff;
    cursor: default;
    border-bottom: 5px solid #f2780c;

    img {
        border-radius: 20px;
        cursor: default;
    }

    .quill {
        padding: 13px 10px;
    }

    .ql-container.ql-snow {
        width: 100%;
        border: none;
        overflow-y: auto;
        .q1-editor {
            padding: 0px;
        }
    }

    .ql-container.ql-snow {
        border: none;
    }

    & img:not(img[width]) {
        width: 100%;
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
    border-top: 1px solid #c9c9c9;
    position: absolute;
    top: 100%;
`;