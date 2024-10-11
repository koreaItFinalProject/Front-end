import { css } from "@emotion/react";

export const outBox = css`
    display: flex;
`;

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

export const mainBox = css`
    display: flex;
    margin-top: 30px;
`;

export const columnBox = css`
    display: flex;
    flex-direction: column;
`;

export const pictureBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    margin-left: 50px;
    width: 300px;
    height: 300px;
`;

export const imgChangeButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    margin-top: 20px;
    margin-left: 150px;
    width: 100px;
    height: 40px;
`;

export const showBox = css`
    display: flex;
    flex-direction: column;
`;

export const viewBox = css`
    display: flex;
    
    margin-left: 20px;
`;

export const spanBox = css`
    display: flex;
    flex-direction: column;
    margin: 23px;
`;