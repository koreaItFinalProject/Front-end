import { css } from "@emotion/react";

export const mainLayout = css`
    margin: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const alarmBanner = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
`;

export const boxLayout = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 0 auto;
    & textarea{
        width: 380px;
        height: 100px;
        resize: none;
        padding: 0;
    }
`;

export const eachBox = css`
    display: flex;
    width: 100%;
    margin-bottom: 50px;
    align-items: center;
    justify-content: center;
    & p {
        margin: 0;
        width: 100px;
        box-sizing: border-box;
    }
`;

export const listContainer = css`
    flex-grow: 1;
    overflow: auto;
    height: 100%;
`

export const box = css` 
    display: flex;
    flex-direction: column;     
    box-sizing: border-box;
    margin-top: 50px;
    height: 50px;
    & button {
        border: 1px solid black;
        padding: 3.5px 20px;
    }
`;

export const ibBox = css`
    display: flex;
`;

export const inputSection = css`
    margin-bottom: 1px;

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

export const button = css`
    width: 100%;
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    margin-left: 10px;
    height: 40px;
    font-size: 15px;
    color: #000000;
    
    & button {
        font-size: 20px;
        border-radius: 20px;
        padding: 5px 20px;
        border: 1px solid #191919;
        &:hover {
            color: #6d6d6d;
            background-color: #dfdfdf;
        }
    }
`;

