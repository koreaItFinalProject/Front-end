import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: end;
    box-sizing: border-box;
    & button {
        margin-top: 10px;
        padding: 5px 20px;
        border: 1px solid black;
        border-radius: 10px;

        &:hover {
            background-color: #dbdbdb;
            box-shadow: 1px 1px 2px inset;
        }

        &:active{
            box-shadow: 1px 1px 3px inset;
        }
    }
`;