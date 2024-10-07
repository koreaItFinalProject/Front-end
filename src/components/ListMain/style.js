import { css } from "@emotion/react";


export const adornmentBox = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 120px;  
`;

export const box = css` 
    display: flex;
    padding-left: 400px;
    margin-top: 25px;
`;  

export const inputSection = css`

    & > span {
        font-size: 24px;
    }

    & > input {
        box-sizing: border-box;
        height: 40px;
        border: none;
        outline: none;
        color: black;
        width: 90%;
        font-size: 40px;    
        background-color: white;
        border-bottom: 1px solid #8f8282;
    }

`;

export const searchOption = css`
    font-size: 19px;
`;

export const layout = css`
    display: flex;
    margin-top: 30px;
`;

export const pictureBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    margin-left: 50px;
    width: 200px;
    height: 200px;
`;

export const showBox = css`
    display: flex;
    flex-direction: column;
`;

export const viewBox = css`
    display: flex;
    
    margin-left: 20px;
`;

export const spanBox = css`
    display: flex;
    flex-direction: column;
    margin: 23px;

    & > span {
        padding-bottom: 10px;
    }

    
`;









