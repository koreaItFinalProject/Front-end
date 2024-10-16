import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0px 15px;
`;

export const boardHeader = css`
    display: flex;
    flex-direction: column;
    
    & h1 {
        font-size: 24px;
    }
`;

export const boardNavigater = css`

    & button {
        padding: 0;
        margin-bottom: 5px;
        font-size: 18px;
    }

    & button:focus, & button:active {
        font-weight: bold;
    }

    & button:nth-of-type(1) {
        margin-right: 10px;
    }
`;

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
`;

export const boardListHeader = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 5px 0px;
    border-top: 3px solid #dbdbdb;
    border-bottom: 3px solid #dbdbdb;
    height: 40px;

    & select {
        margin-left: 10px;
    }
`;

export const searchBox = css`
    display: flex;
    flex-direction: row;
    margin-left: 10px;

    & input {
        width: 150px;
        padding: 0px 10px;
        border: 1px solid #333447;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        outline: none;
    }

    & button {
        padding: 0px 10px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #333447;
        color: #fafafa;
    }
`;

export const writeButton = css`
    margin-left: 10px;
    border-radius: 5px;
    background-color: #333447;
    color: #fafafa;
`;

export const boardList = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;