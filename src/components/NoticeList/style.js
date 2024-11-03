import { css } from "@emotion/react";

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    overflow-y: auto;
`;

export const noticeLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    border-bottom: 1px solid #f2780c;
    background-color: #ffffff;
    cursor: pointer;
`;

export const noticeInfoLayout = css`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        font-size: 18px;
        font-weight: 600;
    }

    p {
        margin: 0;
        margin-right: 10px;
        color: #aaaaaa;
    }

`;

export const writerAndWriteDate = css`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;

    p {
        font-size: 14px;
    }
`;

export const counts = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
    }

    svg {
        padding-top: 2px;
        margin-right: 3px;
    }
    
`;

export const noticeImgContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 130px;
    border-radius: 10px;
    background-color: #ffffff;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;