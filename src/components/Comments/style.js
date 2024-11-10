import { css } from "@emotion/react";

export const commentContainer = css`
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
`;

export const title = css`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    div{
        font-size: 22px;
        font-weight: 600;
        margin-right: 5px;
    }
`;

export const commentListContainer = (level) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-left: ${level * 3}%;
    border-bottom: 1px solid #ff675b;
`;

export const userInfo = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;

    img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    div:nth-of-type(1) {
        margin-right: 5px;
        font-size: 16px;
        font-weight: 600;
    }

    span {
        font-size: 12px;
    }
`;

export const commentDetail = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const detailContent = css`
    margin: 0 0 10px 0;
    max-height: 50px;
    overflow-y: auto;
`;

export const detailButtons = css`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const replyButton = css`
    button {
        padding: 5px 5px;
        font-size: 12px;
        font-weight: 600;
        color: #ff675b;
    }
`;

export const editDelete = css`
    button {
        padding: 5px 5px;
        font-size: 12px;
        font-weight: 600;
    }
`;

export const commentWriteBox = css`
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 824px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    height: 60px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;

    & > textarea {
        width: 800px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
        background-color: #b4b4b4;
        resize: none;
    }

    & > button {
        position: relative;
        z-index: 99;
        right: 100px;
        background-color: #ff675b;
        cursor: pointer;
    }
`;