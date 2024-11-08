import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    background-color: #191919;
    overflow: hidden;
`;

export const title = css`
    margin-bottom: 15px;
    font-size: 34px;
    color: #f2780c;
`;

export const writeButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: #f2780c;
    position: absolute;
    top: 92%;
    left: 88%;

    svg {
        width: 30px;
        height: 30px;
        fill: #ffffff;
    }
`;

export const searchContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;

    input {
        width: 550px;
        padding: 10px 50px 10px 20px;
        border: none;
        border-radius: 20px;
        background-color: #ffffff;
    }

    input::placeholder {
        color: #b4b4b4;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        right: 87px;
        top: 50%;
        transform: translateY(-50%);

        svg {
            width: 30px;
            height: 30px;
        }
    }

    select {
        height: 100%;
        border: none;
        border-radius: 20px;
        text-align: center;
        padding: 7px;
    }
`;

export const boardSelector = css`
    margin-bottom: 15px;
`;

export const baseButtonStyle = css`
    margin-right: 10px;
    border-radius: 20px;
    padding: 5px 20px;
    font-size: 14px;
    font-weight: 600;
    background-color: #ffffff;
    cursor: pointer;
`;

export const activeButton = css`
    background-color: #f2780c;
`;

export const boardListLayout = css`
    flex-grow: 1;
    overflow-y: auto;
`;

export const ref = css`
    height: 10px;
`;