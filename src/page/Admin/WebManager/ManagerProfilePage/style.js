import { css } from "@emotion/react";

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
    width: 100%;
    height: 950px;
    border-left: none;

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
        margin: 20px 0;

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

export const buttonBox = css`
    display: flex;
    justify-content: center;

    & > button:nth-of-type(1) {
        margin-right: 40px;
    }

    & > button {
        font-size: 16px;
    }
`;
