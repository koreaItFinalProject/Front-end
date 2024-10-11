import { css } from "@emotion/react";

export const mainLayout = css`
    display: flex;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #898484;
    border-top: none;
    width: 300px;
    height: 1000px;

    & > span {
        margin-left: 50px;
        font-size: 25px;
    }
`;

