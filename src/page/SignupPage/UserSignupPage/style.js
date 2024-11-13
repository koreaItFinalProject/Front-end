import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const subLayout = css`
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding-bottom: 140px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #ffffff;
    *{
        button:disabled {
        cursor: not-allowed;
        }
    }
    & p {
        display: flex;
        justify-content: center;
        font-size: 12px;
        width: 100%;
        color: #E94334;
        margin: 0;
    }
    & > div{
        margin-bottom: 20px;
    }
    * input{
        color: #222222;
        padding-left: 10px;
    }
    & button {
        background-color: #ff675b;
        margin-left: 10px;
        color: #ffffff;
        border-radius: 20px;
    }
`;

export const logo = css`
    & h1 {
        font-weight: 700;
        font-size: 30px;
        color: #ff675b;
    }
`;

export const underlineInput = css`
    height: 40px;
    box-sizing: border-box;
    border-bottom: 1px solid #ff675b;
    & input {
        height: 40px;
        width: 290px;
        font-size: 16px;
        border: none;
    }
    & button {
        box-sizing: border-box;
        width: 80px;
        height: 35px;
        background-color: #ff675b;
        border: none;
        border-radius: 20px;
        margin-left: 10px;
        color: #ffffff;
    }
`;

export const widthinput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const duplicateinput = css`
    width: 100%;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    & input {
        width: 280px;
    }
    & button {
        box-sizing: border-box;
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
    border-bottom: 1px solid #ff675b;
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

export const category = css`
    margin: 10px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & select {
        width: 250px;
        border-radius: 20px;
        padding:0px 10px;
        & option {
            background-color: #1c1c1b;
            color: #F2780c;
        }
    }
`;
