import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  align-items: center;
`;

export const commentWriteBox = css`
    position: absolute;
    box-sizing: border-box;
    left: 0;
    right: 0;
    top: 824px;
    display: flex;
    padding: 10px;
    width: 100%;
    height: 60px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;
`;

export const commentProfileImg = css`
    width: 43px;
    height: 40px;
    border-radius: 100%;
    background-color: black;
`;

export const input = css`
    position: relative;
    display: flex;
    width: 100%;
    margin-left: 10px;
    box-sizing: border-box;


    input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
        background-color: #b4b4b4;
        resize: none;

    }

    button {
        position: absolute;
        top: 4px;
        bottom: 5px;
        right: 5px;
        border-radius: 20px;
        cursor: pointer;
    }
`;

