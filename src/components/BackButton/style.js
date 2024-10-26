import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    height: 50px;
    background-color: #ffffff;

    button {
        padding: 6px 0;
        margin-right: 10px;
        height: 100%;
        
        svg {
            width: 40px;
            height: 40px;
            fill: #f2780c;
        }
    }

    p {
        margin: 0;
        font-size: 18px;
        color: #f2780c;
        font-weight: 600;
        cursor: default;
    }
`;