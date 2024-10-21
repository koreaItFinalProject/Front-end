import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
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
    & div{
        position: relative;
        width: 350px;
        height: 50px;
        & input {
            position: absolute;
            height: 40px;
            width: 350px;
            padding-left: 20px;
            font-size: 18px;
        }
    }
    & p {
        width: 100px;
        margin-right: 0px;
        padding: 0px;
    }    
`;
 
export const emailButton = css`
    /* display: flex;
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
    } */
`;

export const addressInfo = css`
    /* width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    & > div {
        width: 340px;
    }
    & p {
        width: 80px;
        margin-right: 40px;
        padding: 10px;
    } */
`;

export const addressStyle = css`
    /* display: flex;
    flex-direction: column;
    width: 100px;
    box-sizing: border-box;
    & input {    
    border-radius: 10px;
    padding-left: 10px;
    } */
    
`;

export const signupbutton = css`
    /* margin-top: 20px;
    & button {
        padding: 10px 50px;
    } */
`;
