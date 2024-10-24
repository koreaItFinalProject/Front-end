import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding:20px 20px 10px 20px;
    flex-direction: column;
    & p {
        color:#747474;
        font-weight: 700;
    }
    & input {
        color:#747474;
        margin: 0;
        font-weight: 700;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
    }
`;

export const profileBox = css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: #ffffff;
    padding: 40px 20px 0px 20px;

    & >div:nth-of-type(1){
        width: 100%;
        display: flex;
        justify-content: end;
        box-sizing: border-box;
        & button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            width: 100px;
            padding: 0;
            & svg {
                margin-left: 10px;
            }
        }
    }
`;

export const profileimage = css`
    cursor: pointer;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    border: 1px solid black;
    box-sizing: border-box;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing:border-box
    }

`;

export const userProfile = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 40px 60px 0px 60px;
    overflow-y: auto;
    & div {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        box-sizing: border-box;
        & div{
            & p:first-of-type {
                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                width: 100px;
                height: 40px;
            }
            & input {
                box-sizing: border-box;
                flex-grow: 1;
            }
        }
        
    }
`;

export const profileinfo = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    & div {
        width: 100%;
        height: 60px;
    }
`;

export const modifyProfileInfo = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    & div {
        width: 100%;
        height: 60px;
    }
`;