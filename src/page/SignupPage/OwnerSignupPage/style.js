import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
`;

export const mainlayout = css`
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const logo = css`
    width: 100%;
    height: 150px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    & img {
        height: 150px;
        width: 150px;
    }
`;

export const Info = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    & p {
        margin: 0;
    }
    & div{
        width: 550px;
        height: 90px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
        & p{
            width: 130px;
            box-sizing: border-box;
        }
        & input{
            width: 420px;
            height: 45px;
            box-sizing: border-box;
            border-radius: 20px;
            padding-left: 20px;
        }
    }
    & > p {
        color: #E94334;
    }
`;

export const emailButton = css`
    display: flex;
    justify-content: end;
    align-items: center;
    & button{
        border-radius: 20px;
        height: 40px;
        width: 100px;
        border: 1px solid black;
    }

    & p{
        width: 100px;
        font-size: 14px;
    }
`;

export const registerButton =css`
    border-radius: 20px;
    height: 30px;
    width: 80px;
    border: 1px solid black;
`;

export const cafeAddress =css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const cafe =css`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    & p {
        width: 130px;
    }
`;


export const signupbutton = css`
    button:disabled {
        cursor: not-allowed;
    }
`;