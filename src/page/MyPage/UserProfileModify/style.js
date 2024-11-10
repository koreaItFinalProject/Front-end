import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    
    *{
        & button {
            background-color: #ff675b;
            border: none;
            border-radius: 20px;
            margin-right: 8px;
        }
        button:disabled {
        cursor: not-allowed;
        }
        input::placeholder {
            color: #a1a1a1;
            }
        
    }
`;

export const Info = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column; 
    padding: 10px 68px;
    overflow-y: auto;
    & p{
        font-size: 14px;
        /* color: #ff675b; */
        margin: 0;
    }
    & input {
        padding-left: 10px;
        color: #ff675b;
    }
`;

export const logo = css`
    & h1 {
        font-weight: 700;
        font-size: 30px;
        color: #ff675b;
    }
    margin-bottom: 10px;
`;

export const userInfoCheck = css`
    width: 100%;
    border: 2px solid #F2780c;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 10px;
`;
export const basicInfo = css`
        width: 380px;
        display: flex;
        text-align: start;
        align-items: center;
        margin: 20px 0px;
        padding-bottom: 8px;
        border-bottom: 2px solid #a1a1a1;
        & p {
            font-size: 14px;
            margin-left: 10px;
            font-weight: 600;
            color:#a1a1a1;
        }
        & svg{
            color:#a1a1a1;
            margin-left: 5px;
            & path {
                height: 18px;
                width: 18px;
                color: #a1a1a1;
                background-color: #a1a1a1;
            }
        }
`;
export const InputBox = css`
    height: 40px;
    box-sizing: border-box;
    & input {
        height: 40px;
        width: 300px;
        font-size: 14px;
        border: none;
        border-bottom: 1px solid #ff675b;
    }
    & button {
        box-sizing: border-box;
        height: 30px;
        width: 80px;
    }
`;

export const userPasswordCheck = css`
    width: 100%;
    border: 2px solid #F2780c;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 10px;
`;

export const emailCheck = css`
    display: flex;
    align-items: center;
    & input {
        width: 300px;
    }
    & button {
        width: 80px;
        height: 30px;
    }
`;


export const emailTimer = css`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    & > div {
        display: flex;
        align-items: center;
        p {
            width: 80px;

        }
    }
    & input {
        width: 300px;
    }
`;

export const emailCheckButton = css`
    margin-top: 10px;
    display: flex;
    justify-content: end;
    & button {
        width: 80px;
        height: 30px;
    }
`;

export const emailPhoneCheck = css`
    width: 100%;
    border: 2px solid #F2780c;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 10px;
`;

