import { css } from "@emotion/react";
import { logo } from "../../../assets/image";

export const layout = css`
    width: 100%;
    height: 100%;
    /* display: flex; */
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
    overflow-y: auto;
    /* padding: 10px; */
`;

export const logoStyle = css`
    width: 100%;
   
    height: 120px;
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* box-sizing: border-box;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
    padding: 100px 0px; */
    /* width: 45px;
    height: 36px; */
    & img {
        height: 120px;
        width: 120px;
    }
`;

export const Info = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* &:nth-of-type(1){
        padding-top: 200px;
    } */
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

export const usernameInput =css`
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
    width: 100%;
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
    height:100px;
    & p {
        height: 35px;
        padding-left: 15px;
    }
    & div {
        display: flex;
        justify-content: end;
        align-items: end;
        & input{
            
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