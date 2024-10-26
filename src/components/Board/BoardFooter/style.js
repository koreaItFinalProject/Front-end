import { css } from "@emotion/react";

export const layout = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
  height: 100%;
`;

export const commentProfileImg = css`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: black;
`;

export const input = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 605px;
    height: 100%;

    textarea {
        padding: 10px 45px 10px 10px;
        width: 100%;
        height: auto;
        min-height: 30px;
        max-height: 200px;
        overflow: visible;
        border-radius: 10px;
        border: none;
        outline: none;
        resize: none;
        font-size: 20px;
        background-color: #B4B4B44D;
    }
    
    input::placeholder {
        color: #b4b4b4;
    }
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 570px;
        transform: translateY(35%);
        padding: 0;
        border-radius: 20px;
        cursor: pointer;
    }
`;