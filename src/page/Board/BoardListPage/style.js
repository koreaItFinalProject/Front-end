import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px 0 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`;

export const header = css`
    display: flex;
    flex-direction: column;
    padding: 0px 15px 10px;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const box = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 100%;
    margin-bottom: 12px;
    border: 2px solid #ffffff;
    border-radius: 20px;
    padding: 2px 10px 2px 2px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    
    h2 {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0 20px;
        height: 100%;
        border-radius: 20px;
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        background-color: #ff675b;
        cursor: default;
    }

    input {
        height: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px 15px;
        font-size: 18px;
        width: 100%;
        outline: none;
        border: none;
        font-size: 20px;
        background-color: #ffffff;

        &::placeholder{
        font-weight: 300;
        font-size: 18px;
        line-height: 23px;
        color: #B4B4B4;
        }
    }

    select {
        align-items: center;
        height: 100%;
        border: none;
        border-radius: 20px;
        padding: 5px 10px;
        text-align: center;
        outline: none;
    }
`;

export const boardSelector = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const writeButton = css`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    background-color: #2f4858;

    svg {
        margin-left: 5px;
        width: 20px;
        height: 20px;
        fill: #ffffff;
    }
`;

export const baseButtonStyle = css`
    margin: 0 10px 0 0;
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

export const activeButton = css`
    color: #ffffff;
    background-color: #2f4858;
`;

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    overflow-y: auto;
`;

export const ref = css`
    height: 10px;
`;