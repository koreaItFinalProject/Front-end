import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px 0 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
`;

export const header = css`
    display: flex;
    flex-direction: column;
    padding: 0px 15px 10px;
    border-bottom: 1px solid #eeeeee;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const box = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 100%;
    margin-bottom: 12px;
    border: 2px solid #ffffff;
    border-radius: 20px;
    padding: 2px 10px 2px 2px;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    
    h2 {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0 20px;
        height: 100%;
        border-radius: 20px;
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        background-color: #ff675b;
        cursor: default;
    }

    input {
        height: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px 15px;
        font-size: 18px;
        width: 100%;
        outline: none;
        border: none;
        font-size: 20px;
        background-color: #ffffff;

        &::placeholder{
        font-weight: 300;
        font-size: 18px;
        line-height: 23px;
        color: #B4B4B4;
        }
    }

    select {
        align-items: center;
        height: 100%;
        border: none;
        border-radius: 20px;
        padding: 5px 10px;
        text-align: center;
        outline: none;
    }
`;

export const listContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 100px;
    height: 100%;
    overflow-y: auto;
`;

export const listbox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    padding: 10px;
    width: calc(100% - 30px);
    height: 150px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;

    :hover {
        cursor: pointer;
    }
`;

export const pictureBox = css`
    box-sizing: border-box;
    margin-right: 20px;
    border-radius: 10px;
    width: 300px;
    height: 130px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
`;

export const showBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const spanBox = css`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
        font-size: 28px;
    }

    p {
        margin: 0;
    }

    p:nth-of-type(2) {
        font-weight: 700;
        color: #ff675b;
    }
`;

export const counts = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 25px;
`;

export const count = css`
    display: flex;
    flex-direction: row;
    margin-right: 10px;

    svg {
        width: 20px;
        height: 20px;
        fill:#ff675b;
    }

    div:nth-of-type(2) {
        margin-left: 5px;
        font-size: 18px;
        position: relative;
        top: -5px;
    }
`;