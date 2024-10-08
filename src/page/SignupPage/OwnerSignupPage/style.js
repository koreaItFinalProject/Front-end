import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 802px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & > div {
        width: 600px;
        height: 640px;
        border: 1px solid black;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    
`;

export const Info = css`
    & div{
        width: 480px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px 0px;
        & input {
            height: 35px;
            width: 320px;
            border-radius: 10px;
            padding-left: 20px;
            font-size: 18px;
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
            &:hover{
                background-color: #dbdbdb;
                box-shadow: 2px 2px 1px inset;
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
