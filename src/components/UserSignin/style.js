import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
`;

export const login = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 493px;
    border: 1px solid black;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 10px;
    & input{
        width: 300px;
        height: 40px;
        margin: 5px 0px;
        border-radius: 10px;
    }
    & input:nth-last-child(1){
        margin-bottom: 0px;
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

export const button = css`
        padding-bottom: 15px;
    & button {
        padding: 40px 20px;
        margin-left: 10px;
        border-radius: 10px;
        border: 1px solid black;
        /* cursor: pointer; */
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
        
        & li {
            margin-right: 20px;
        }
    }

`;