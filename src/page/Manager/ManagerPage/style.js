import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    box-sizing: border-box;
`;

export const login = css`
    background-color: rgba(223,227,235);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 950px;
    & p{
        font-weight: 600;
    }
    & input{
        height: 30px;
        width: 200px;
        margin-bottom: 20px;
        outline: none;
        border: none;
        padding-left: 10px;
        font-size: 16px;
    }
    & button{
        background-color: #e6e6e6;
        border: 1px solid #afafaf;
        width: 212px;
        height: 28px;
        box-sizing: border-box;
        border: none;
        font-size: 14px;
        font-weight: 550;
        &:active{
            background-color: #dbdbdb;
            box-shadow: 1px 1px 0.5px inset;
        }
        &:hover{
            background-color: #dbdbdb;
        }
    }
`