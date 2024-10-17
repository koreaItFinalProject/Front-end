import { css } from "@emotion/react";

export const cardLayout = css`
    margin-top: 10px;
`;

export const card = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 20px;
    height: 500px;
    box-shadow: 0px 3px 5px #00000011;
    background-color: #ffffff;
    cursor: pointer;
`;

export const cardMain = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export const cardImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    overflow: hidden;
    background-color: #000000;

    & > img {
        width: 100%;
    }
`;

export const cardContent = (isShowImg) => css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px;

    & > h3 {
        margin: 0px 0px 4px;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    & > div {
        display: -webkit-box;
        overflow: hidden;
        word-break: break-all;
        -webkit-line-clamp: ${isShowImg ? 3 : 11};
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;

        & > * {
            margin: 0px;
            font-size: 16px;
            font-weight: 400;
        }

    }
`;

export const cardFooter = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f5f5f5;
    padding: 0px 15px;
    height: 50px;

    & > div:nth-of-type(1) {
        display: flex;
        align-items: center;
        font-weight: 600;

        & > img {
            margin-right: 5px;
            border: 1px solid #dbdbdb;
            border-radius: 50%;
            width: 20px;
            height: 20px;
        }

        & > span {
            margin-right: 8px;
            font-weight: 400;
            font-size: 14px;
            color: #999999;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        align-items: center;

        & > span {
            line-height: 10px;
        }
    }

    & svg {
        margin-right: 5px;
    }
`;