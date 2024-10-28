import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    overflow-y: auto;
    padding: 0px 140px;
    padding-top: 50px;
    *{
        color: #ffffff;
        & button {
            background-color: #F2780C;
            border: none;
            border-radius: 20px;
        }
        button:disabled {
        cursor: not-allowed;
    }
    }
`;

export const Info = css`
    
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column; 
    & p{
        display: flex;
        justify-content: center;
        font-size: 12px;
        width: 100%;
        color: #E94334;
        margin: 0;
    }
    & input {
        padding-left: 10px;
    }

    & > div{
        margin-bottom: 30px;
    }

`;

export const logo = css`
    & h1 {
        font-weight: 700;
        font-size: 30px;
        color: #F2780C;
    }
`;

export const usernameInput = css`
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #F2780C;
    & input {
        height: 40px;
        width: 300px;
        font-size: 18px;
        border: none;
    }
    & button {
        box-sizing: border-box;
        height: 30px;
        width: 80px;
    }
`;

export const emailCheck = css`
    display: flex;
    & input {
        width: 290px;
    }
    & button {
        width: 90px;
    }
`;

export const emailButton = css`
    display: flex;
    justify-content: end;
    align-items: start;
    width: 380px;
    box-sizing: border-box;
    height:100px;
    & input {
    }
    & button{
        height: 35px;
        width: 100px;
    }
    & p{
        width: 100px;
        font-size: 14px;
    }
`;

export const emailcert = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:100px;
    padding-bottom: 0;
    margin-bottom: 0;
    padding: 0;
    & div {
        display: flex;
        justify-content: end;
        align-items: end;
        padding-bottom: 0;
        margin-bottom: 0;
        & input{
            height: 50px;
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
        width: 245px;
        border: none;
    }
    & div {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 135px;
    }
`;

export const emailCheckButton = css`
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    padding-top: 10px ;
    & input {
        width: 300px;
    }
    & button{
        width: 80px;
    }
`;

export const registerButton = css`
    height: 30px;
    width: 80px;
`;

export const nickNameStyle = css`
    width: 380px;
    border-bottom: 1px solid #F2780C;
    margin: 0;
    & input {
        width: 300px;
        border: none;
        padding-left: 10px;
    }
    & button{
        width: 80px;
        height: 30px;
    }
`

export const signupbutton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 20px 0px;
    & button {
        width: 200px;
        height: 40px;
        box-sizing: border-box;
    }
    button:disabled {
        cursor: not-allowed;
    }
`;

