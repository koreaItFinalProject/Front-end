import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    *{
        color: #ffffff;
    }
    & p {
    margin: 0;
    }
    & > div {
        width: 600px;
        height: 700px;
        border: 1px solid black;
        border-radius: 20px;
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
    }
    
`;


export const Info = css`
    width: 400px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    & p {
        width: 100px;
        margin: 0px;
        padding: 0px;
    }   
    & input {
        padding-left: 10px;
    }

    & div{
        padding-bottom: 20px ;
    }
`;

export const usernameInput = css`
    width: 100%;
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
        border: 1px solid #ffffff;
        border-radius: 20px;
    }
`;
 
export const emailButton = css`
    display: flex;
    justify-content: end;
    align-items: center;
    width: 380px;
    box-sizing: border-box;
    height:60px;
    & button{
        border-radius: 20px;
        height: 35px;
        width: 100px;
        border: 1px solid black;
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
    height:50px;
    padding-bottom: 0;
    margin-bottom: 0;
    & p {
        height: 35px;
        padding-left: 15px;
    }
    & div {
        display: flex;
        justify-content: end;
        align-items: end;
        padding-bottom: 0;
        margin-bottom: 0;
        & input{
            height: 50px;
        }

        & button {
            
        }
    }
`;

export const registerButton =css`
    border-radius: 20px;
    height: 30px;
    width: 80px;
    border: 1px solid black;
`;

export const signupbutton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    padding: 20px 0px;
    & button {
        border: 1px solid black;
        width: 200px;
        height: 40px;
        box-sizing: border-box;
        border-radius: 10px;
    }
    button:disabled {
        cursor: not-allowed;
    }
`;
