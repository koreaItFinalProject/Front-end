import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    background-color: #191919;
    display: flex;
    flex-direction: column;
`;

export const header = css`
    display: flex;
    flex-direction: column;
`;

export const box = css`
    display: flex;
    box-sizing: border-box;
    height: 60px;
    width: 631px;
    background-color: #ffffff;
    margin-top: 20px;
    margin-bottom: 12px;
    border: 2px solid #ffffff;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 4px #00000044;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    h2 {
        margin: 2px;
        border-radius: 19px;
        background-color: #ff675b;
        padding: 0px 20px;
        padding-top: 8px;
        color: #ffffff;
        font-family: 'Kulim Park';
        font-style: normal;
        font-weight: 'Bold', 600;
        font-size: 24px;
        line-height: 34px;
        cursor: default;
    }
`;

export const inputbox = css`
    display: flex;
    flex-grow: 1;
    width: 100%;
    padding: 0px;

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
`;

export const selectbutton = css`
    display: flex;
    z-index: 100;
    margin-left: 2px;
`;

export const searchContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 40px;
    margin: 10px;

    select {
        height: 100%;
        border: none;
        border-radius: 20px;
        text-align: center;
        align-items: center;
        padding: 7px;
    }
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