import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;

export const login = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
    & input{
        width: 300px;
        height: 40px;
        margin: 5px 0px;
        border-radius: 10px;
    }
    & input:nth-last-child(1){
        margin-bottom: 0px;
    }
    & button {
        padding: 10px 140px;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px 0px;
        background-color: #131313;
        color: #e4e4e4;
        font-weight: 600;
    }
`;

export const loginInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & input {
        padding-left: 20px;
    }
    
`;

export const checkbox = css`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    & span {
        cursor: pointer;
        font-size: 12px;
    }
    & input {
        box-sizing: border-box;
        width: 10px;
        height: 10px;
        display: none;
    }
`;


export const oauth2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    & button{
        margin: 10px 10px;
        border-radius: 50%;
    }
    & img {
        border-radius: 50%;
        cursor: pointer;
        width: 40px;
        height: 40px;
    }

`;

export const foundInfo = css`
    height: 40px;
    box-sizing: border-box;
    
    & ol {
        display: flex;
        & li:nth-last-child(1){
            border: none;
        }

        & li {
            padding: 0px 15px;
            border-right: 1px solid black;
            font-weight: 600;
            cursor: pointer;
        }
    }

`;