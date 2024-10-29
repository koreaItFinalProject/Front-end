import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border-radius: 10px;
    width: 350px;
    height: 100%;
    background: linear-gradient(180deg, rgba(249,249,249,1) 0%, rgba(239,236,232,1) 100%);
    overflow: hidden;

    & * {
        color: #1c1c1b;
    }
`;

export const profile = css`
    height: 35%;
    border-bottom: 1px solid #bbbbbb ;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px 40px;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        & > img  {
            width: 70px;
            height: 70px;
        }

        & > h1 {
            padding-right: 20px;
            font-size: 25px;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        overflow: hidden;
        box-shadow: 0px 0px 5px 2px #00000066 inset;
        
        & > img  {
            width: 100%;
            height: 100%;
        }
    }


    & div {
        margin-bottom: 5px;
    }

    & div:nth-of-type(1) {
        cursor: pointer;
    }
    & button {
        border: 1px solid #bbbbbb;
        font-weight: 550;
        font-size: 16px;
    }
`;

export const sidebox = css`
    padding-top: 20px;
    height: 50%;
`;

export const footbox = css`
    height: 15%;
    border-top: 1px solid #bbbbbb;
`;

