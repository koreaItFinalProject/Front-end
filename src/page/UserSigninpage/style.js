import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    width: 100%;
    height: 802px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export const loginMain = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px auto;
    height: 100%;
    width: 600px;
`;

export const selectMember = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 65px;

    & button {
        border: 1px solid black;
        border-bottom: none;
        box-sizing: border-box;
        padding: 18px 80.5px;
        font-size: 20px;
        font-weight: 600;
    }
    
    & button:nth-last-of-type(2){
        border-radius: 10px 0px 0px 0px;
        border-right: none;
    }
    & button:nth-last-of-type(1){
        border-radius: 0px 10px 0px 0px;
        border-left: none;
    }
    `;

export const userButton = css`
    border-radius: 10px 0px 10px 0px !important;
    background-color: #dbdbdb ;
    box-shadow: 5px 2px 3px #757575 inset;
`;

export const ownerButton = css`
    border-radius: 0px 10px 0px 10px !important;
    background-color: #dbdbdb ;
    box-shadow: 2px 2px 3px #757575 inset;
`;




export const togleLogin = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;