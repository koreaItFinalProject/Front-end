import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    background-color: #191919;
    overflow: hidden;
`;

export const title = css`
    margin-bottom: 15px;
    font-size: 34px;
    color: #f2780c;
`;

export const boardListHeader = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    height: 40px;

    select {
        width: 75px;
        height: 100%;
        border-radius: 20px;
        text-align: center;
        padding: 7px;
    }
`;

export const searchBox = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    position: relative;

    input {
        width: 450px;
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        background-color: #ffffff;
    }

    input::placeholder {
        color: #b4b4b4;
    }

    button {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        padding: 5px 15px;
        border-radius: 20px;
        font-weight: 600;
        background-color: #f2780c;
    }
`;

export const writeButton = css`
        padding: 9px 20px;
        margin-left: 10px;
        border-radius: 20px;
        font-weight: 600;
        background-color: #f2780c;
`;

export const boardNavigater = css`
    margin-bottom: 15px;

    button {
        margin-right: 10px;
        padding: 5px 25px;
        background-color: #ffffff;
        border-radius: 20px;
        font-size: 18px;
        font-weight: 600;
    }
`;

export const boardListLayout = css`
    flex-grow: 1;
    overflow-y: auto;
`;

export const ref = css`
    height: 10px;
`;