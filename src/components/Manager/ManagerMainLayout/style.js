import { css } from "@emotion/react";


export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 20px;
    width: 100%;
    height: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 20px;
`;

export const contentBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    border-radius: 10px;
    background-color: #EFECE8;
    overflow: hidden;
`;