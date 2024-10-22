import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 15px 0px 15px;
    width: 100%;
    height: 100%;
    background-color: #191919;
`;

export const detailHeader = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 10px;
    background-color: #ffffff;
    border-radius: 10px;

    h1 {
        font-size: 36px;
        margin: 0;
    }
`;

export const reviewStat = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div {
        height: 100%;
        margin-left: 10px;
        font-size: 20px;
    }
`;

export const detailInfo = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    div:nth-of-type(1) {
        margin-right: 10px;
        color: #f2780c;
        font-size: 14px;
    }

    div:nth-of-type(2) {
        font-size: 14px;
    }
`;

export const detailContent = css`
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: #ffffff;
`;

export const menuButtons = css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
        border: 1px solid #000000;
        border-radius: 20px;
        margin-right: 5px;
        padding: 5px 50px;
        font-weight: 600;

        :active {
            background-color: #f2780c;
        }
    }
`;

export const activeButton = css`
    background-color: #f2780c;
    color: #111111;
`;