import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
`;

export const highBar = css`
    box-sizing: border-box;
    display: flex;
    height: 20px;
    & div{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
    }
    & svg{
        font-size: 16px;
        margin-right: 5px;
    }
`;