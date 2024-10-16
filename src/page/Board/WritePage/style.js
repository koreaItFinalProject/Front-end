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
    flex-direction: row;
    align-items: center;
    height: 50px;
    margin-bottom: 10px;
    padding: 5px 5px;
    border-top: 5px solid black;
    border-bottom: 1px solid black;

    & div {
        font-size: 20px;
        font-weight: 600;
    }

    & input {
        width: 50%;
        height: 80%;
        margin-left: 10px;
        border: none;
        font-size: 18px;
        background: none;
        outline: none;
    }
`;

export const editorLayout = css`
    height: 60%;
    margin-bottom: 60px;
`;

export const buttonLayout = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 50px;

    & button:nth-child(1) {
        width: 200px;
        height: 50px;
        margin-right: 5px;
        background-color: #5ec298;
        font-size: 16px;
        color: white;
    }

    & button:nth-child(2) {
        width: 200px;
        height: 50px;
        background-color: #333447;
        font-size: 16px;
        color: white;
    }
`;
