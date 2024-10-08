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
        height: 500px;
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
        margin: 10px 0px;
        & input {
            height: 35px;
            width: 320px;
            border-radius: 10px;
            padding-left: 20px;
            font-size: 18px;
        }
    }
    & p {
        width: 100px;
        margin-right: 10px;
        padding: 10px;
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
