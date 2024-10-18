import { css } from "@emotion/react";

export const layout = css`
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    & > div {
        width: 600px;
        height: 100%;
        /* border: 1px solid black; */
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const logo = css`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
    & img {
        height: 150px;
        width: 150px;
    }
`;

export const Info = css`
    max-height: 900px; /* 최대 높이 설정 */
    min-height: 500px; /* 최소 높이 설정 */
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & div{
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5px 0px;
        & input {
            height: 35px;
            width: 320px;
            border-radius: 10px;
            padding-left: 20px;
            font-size: 13px;
        }
        & p {
            margin: 0;
        }
    }

    & div:nth-last-child(1){
        display: flex;
        justify-content: start;
        align-items: center;
        
        & input {
            height: 30px;
            width: 220px;
            font-size: 15px;
            padding-left: 5px;
        }
    }
    & div:nth-last-child(2){
        display: flex;
        justify-content: start;
        align-items: center;
        box-sizing: border-box;
        & input {
            height: 30px;
            width: 220px;
            font-size: 15px;
            padding-left: 15px;
        }

        & button {
            border: 1px solid black;
            width: 50px;
            height: 36px;
            border-radius: 10px;
            margin-left: 20px; 
            &:disabled{
                cursor: not-allowed;
            }
            &:hover{
                background-color: #dbdbdb;
                box-shadow: 2px 2px 1px inset;
            }
            &:hover:disabled{
                box-shadow: none;
                background-color: white;
            }

            &:active{
                background-color: #dbdbdb;
                box-sizing: 3px 3px 2px inset;
            }
        }
    }

    & p {
        width: 120px;
        padding-right: 15px;
    }
`;

export const addressInfo = css`
    width: 480px;
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
    }
`;

export const addressStyle = css`
    display: flex;
    flex-direction: column;
    width: 100px;
    box-sizing: border-box;
    & input {    
    border-radius: 10px;
    padding-left: 10px;
    }
    
`;

export const signupbutton = css`
    button:disabled {
        cursor: not-allowed;
    }
`;