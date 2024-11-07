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
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
`;

export const commentProfileImg = css`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid #dddddd;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        object-fit: cover;
    }
`;

export const input = css`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 605px;
    height: 100%;

    input {
        padding: 10px 50px 10px 10px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: none;
        outline: none;
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
        left: 565px;
        transform: translateY(20%);
        padding: 0;
        border-radius: 20px;
        cursor: pointer;

        &:disabled {
            color: #aaaaaa;
            cursor: default;

            svg {
                fill: #aaaaaa;
            }
        }

        svg {
            width: 35px;
            height: 35px;
        }
    }
`;