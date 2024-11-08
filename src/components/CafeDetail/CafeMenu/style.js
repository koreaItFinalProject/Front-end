import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    gap: 10px;

    h1 {
        margin: 0;
        font-size: 24px;
    }
`;

export const header = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;

        svg {
            margin-left: 5px;
            width: 18px;
            height: 18px;
        }
    }
`;

export const imgContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const menuImg = css`
    width: 50%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;