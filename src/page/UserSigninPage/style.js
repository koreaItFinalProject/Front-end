import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 140px;
    background-color: #fafafa;
`;

export const login = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: 10px;
    padding: 0px 140px;
`;

export const loginTitle = css`
    h1 {
        margin: 0;
        margin-bottom: 20px;
        color: #ff675b;
        font-size: 60px;
        font-weight: 700;
    }
`;

export const loginInput = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & input {
        color: #222222;
        margin: 10px 0px;

        &::-webkit-input-placeholder {
            color: #222222;
            font-weight: 500;
        }
    }

    & button {
        display: flex;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 20px 0px;
        color: #ffffff;
        font-weight: 600;
        background-color: #ff675b;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    * p{
        font-size: 14px;
        width: 100%;
        margin: 0;
        color: #ff675b;
    }
`;

export const loginInputState = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
`;

export const foundInfo = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    margin-bottom: 10px;
    
    & ol {
        display: flex;
        & li:nth-last-child(1){
            border: none;
        }

        & li {
            padding: 0px 15px;
            border-right: 1px solid #222222;
            font-weight: 600;
            cursor: pointer;

            & button {
                color: #222222;
                font-size: 14px;
            }
        }
    }
`;

export const selectMember = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const oAuthButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 15px;
    margin: 0 30px;
    padding: 0;
    overflow: hidden;
    &:nth-of-type(1) {
        background-color: #53C758;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const ownerButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 5px 0;
    font-size: 18px;
    color: #ffffff;
    background-color: #ff675b;
   
   svg {
    width: 30px;
    height: 30px;
    margin-left: 10px;
    fill: #ffffff;
   }
`;
