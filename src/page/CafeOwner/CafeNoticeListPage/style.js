import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    overflow: hidden;
`;

export const header = css`
    display: flex;
    flex-direction: column;
    padding: 0px 15px 0;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const inputHeader = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
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

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border: none;
        border-radius: 20px;
        padding: 0;
        text-align: center;
        outline: none;

        svg {
            width: 100%;
            height: 100%;
        }
    }
`;

export const boardNavigater = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;

    button {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    }
`;

export const writeButton = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 7px 20px;
    height: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    background-color: #2f4858;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

    svg {
        margin-top: 2px;
        margin-left: 5px;
        fill: #ffffff;
        width: 20px;
        height: 20px;
    }
`;

export const sortButton = css`
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
    margin: 0 10px 0 0;
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    background-color: #2f4858;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

export const ref = css`
    height: 10px;
`;