import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    & p {
        margin: 5px 0px;
    }
`;

export const modifyButton = css`
    display: flex;
    justify-content: end;
    width: 100%;
    margin-top: 20px;
    height: 25px;
    button {
        padding-right: 30px;
    }
`;

export const profileBox = css`
    display: flex;
    width: 100%;
    height: 180px;
    padding-left: 50px;
    box-sizing: border-box;
    flex-direction: row;
    /* background-color: #ffffff; */
`;

export const profileimage = css`
    display: flex;
    align-items: center;
    padding-right: 10px;
    & img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 1px solid black;
        box-sizing: border-box;
    }
`

export const userInfo = css`
    width: 100%;
    
    & > div {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100;
        & > div:nth-child(1) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 80px;
            height: 100%;
            box-sizing: border-box;
        }
        & > div:nth-child(2) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            height:100%;
            & input {
                width: 100%;
                height: 24px;
                margin: 5px 0px;
                padding: 0px;
                color: #747474;
                font-weight: 700;
            }
        }
    }
`;

export const profileModify = css`
    display: flex;
`;