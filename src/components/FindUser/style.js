import { css } from "@emotion/react";

export const subLayout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    background-color: #111111;
    * {
        color: #ffffff;
    }
`;

export const login = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 10px;
    padding: 0px 140px;

    * p{
        display: flex;
        justify-content: center;
        font-size: 12px;
        width: 100%;
        color: #E94334;
    }
`;

export const loginInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input{
        margin: 10px 0px;
    }
    & button {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 10px 0px;
        color: #ffffff;
        font-weight: 600;
        background-color: #F2780C;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & input p {
        display: flex;
        justify-content: center;
    }
`;


export const loginTitle = css`
    & p {
        margin: 0;
        margin-bottom: 20px;
        color: #F2780C;
        font-size: 30px;
        font-weight: 700;
    }
`;

export const loginInputState = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;

export const foundInfo = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    
    & ol {
        display: flex;
        & li:nth-last-child(1){
            border: none;
        }

        & li {
            padding: 0px 15px;
            border-right: 1px solid #F2780C;
            font-weight: 600;
            cursor: pointer;
            & button {
                color: #F2780C;
                font-size: 12px;
            }
        }
    }

`;

export const emailTimer = css`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    border-bottom: 1px solid #F2780C;
    width: 380px;
    & input {
        width: 120px;
        border: none;
    }
    & button {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 10px 0px 10px 5px;
        font-weight: 600;
        height: 30px;
    }
    
`;
