import { css } from "@emotion/react";

export const mainBox = css`
    display: flex;
`;

export const mainLayout = css`
    display: flex;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #898484;
    border-top: none;
    width: 300px;
    height: 1135px;

    & > span {
        margin-left: 50px;
        font-size: 25px;
    }
`;

export const listBox = css`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
`;

export const list = css`

    & > div {
        display: flex;
        margin-top: 20px; 

        & > p {
            margin-right: 8px;
            font-size: 20px;
        }

        & > input {
            box-sizing: border-box;
            height: 40px;
            border: none;
            outline: none;
            color: black;
            width: 70%; 
            font-size: 40px;    
            background-color: white;
            border-bottom: 1px solid #8f8282;
        }
    }
`;

export const title = css`
    display: flex;
`;

export const titleBox = css`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    font-size: 30px;
`;

export const registeredPhoto = css`
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    border: 1px solid #000000;
    width: 550px;
    height: 600px;
`;

export const buttonBox = css`
    margin-left: 200px;

    & > button:nth-of-type(1) {
        margin-right: 60px;
    }

    & > button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        width: 60px;
        height: 40px;
        font-size: 16px;
    }
`;
