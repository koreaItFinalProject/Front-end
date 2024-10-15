import { css } from "@emotion/react";

export const layout = css`
    margin: 0 auto;
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;

`;

export const highBar = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-right: 20px;
    & button {
        font-weight: 600;
        margin-right: 10px;
    }
`;

export const logo = css`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & button {
        font-size: 20px;
        font-weight: 600;
        height: 60px;
    }

    & img {
        width: 100px;
        height: 100px;
    }
`;

export const manubar = css`
    display: flex;
    box-sizing: border-box;
    
    & button{
        margin: 0px 100px;
    }
`;