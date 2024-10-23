import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 5px 15px;
    overflow-y: hidden;
    background-color: #191919;
`;

export const title = css`
    margin-bottom: 15px;
    font-size: 34px;
    color: #f2780c;
`;

export const searchContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;

    input {
        width: 550px;
        border: none;
        border-radius: 40px;
        padding: 10px 20px;
        background-color: #ffffff;
    }

    input::placeholder {
        color: #b4b4b4;
    }

    button {
        position: absolute;
        right: 87px;
        top: 50%;
        transform: translateY(-50%);
        padding: 5px 15px;
        border-radius: 20px;
        background-color: #f2780c;
    }

    select {
        height: 42px;
        border-radius: 20px;
        text-align: center;
        padding: 7px;
    }
`;

export const selectbutton = css`
    height: 30px;
    margin-bottom: 15px;
`;

export const listContainer = css`
    height: 100%;
    overflow-y: auto;
`;

export const listbox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 10px;
    height: 150px;
    background-color: #ffffff;
    
    :hover {
        cursor: pointer;
    }
`;

export const pictureBox = css`
    box-sizing: border-box;
    margin-right: 20px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    width: 250px;
    height: 130px;
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
        color: #f2780c;
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
        fill:#f2780c;
    }

    div:nth-of-type(2) {
        margin-left: 5px;
        font-size: 18px;
        position: relative;
        top: -5px;
    }
`;