import { css } from "@emotion/react";

export const allLayout = css`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px 15px;
    overflow-y: hidden;
    background-color: white;
`
export const box = css` 
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    margin-top: 20px;
    padding: 0px 15px;
    background-color: white;
    z-index: 2;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;

    position: relative;
`;

export const inputSection = css`
    padding-top: 50px;
    height: 40px;
    input {
        box-sizing: border-box;
        padding-bottom: 10px;
        height: 30px;
        border: none;
        outline: none;
        color: black;
        width: 64%;
        background-color: white;
        border-bottom: 1px solid #8f8282;
        text-decoration: none;
        position: relative;
        background: none;
        z-index: 5;
    }

    input::placeholder { color: #aaaaaa; }
    input:focus { outline: none; }

    span {
        display: block;
        position: absolute;
        left: 0%; 
        background-color: #8f8282;
        width: 0;
        margin-left: 15px;
        height: 1px;
        border-radius: 2px;
        transition: 0.5s;
    }

    label {
        position: absolute;
        color: #aaa;
        left: 20px;
        font-size: 20px;
        transition: all 0.5s ease;
    }

    input:focus ~ label, input:valid ~ label {
        font-size: 20px;
        color: #666;
        font-weight: bold;
        top: 10px;
        transition: all 0.5s ease, color 0.5s ease;
    }

    input:focus ~ span, input:valid ~ span {
        width: 61%;
    }
`;


export const listbox = css`
    display: flex;
    border: 1px solid #dbdbdb;
    padding: 20px;
    margin-top: 30px;
    border-radius: 20px;
`;

export const pictureBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 180px;
`;

export const showBox = css`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
`;

export const viewBox = css`
    display: flex;
    justify-content: space-between;
    margin-left: 23px;
    margin-top: 10px;
`;

export const spanBox = css`
    display: flex;
    flex-direction: column;
    margin: 0px 23px;

    h2 {
        margin-top: 0px;
    }
    p {
        margin: 10px 0px;
    }
`;

export const listContainer = css`
    overflow-y: auto;
    height: calc(100vh - 60px);
`;

export const selectbutton = css`
    display: flex;
    height: 30px;
    margin-top: 10px;
    padding-bottom: 15px;
`;

export const icon = css`
    position: relative;
    top: 2px;
`