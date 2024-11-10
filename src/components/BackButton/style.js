import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 65px;
    padding: 0 10px;
    background-color: #ffffff;

    button {
        padding: 6px 0;
        margin-right: 10px;
        height: 100%;
        
        svg {
            width: 40px;
            height: 40px;
            fill: #ff675b;
        }
    }

    p {
        margin: 0;
        font-size: 18px;
        color: #ff675b;
        font-weight: 600;
        cursor: default;
    }
`;