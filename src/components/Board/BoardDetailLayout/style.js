import { css } from "@emotion/react";

export const background = css`
    box-sizing: border-box;
    padding: 15px 0px;
    width: 100%;
    height: 100%;
    background-color: #111111;
`;

export const layout = css`
    box-sizing: border-box;
    margin: 0px auto;
    border: 2px solid #b4b4b4;
    border-radius: 35px;
    padding: 7px 25px 40px 25px;
    width: 714.75px;
    height: 933px;
    background-color: #000000;
`;

export const camera = css`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 3px 0px;
    & div{
        margin-right: 6px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border:1px solid #2c2c2c;
        &:nth-of-type(3) {
            display: flex;
            justify-content: center;
            align-items: center;
            & div{
            margin: 0 auto;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(45,45,50,1) 100%);
            border: 1px solid #0C0D0D;
            }
        }
    }
`;

export const container = css`
    padding-bottom: 0px;
    box-sizing: border-box;
    margin: 0px auto;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-clip: padding-box;
    /* background-color: #F4F4F6; */
    box-shadow: 0px 0px 2px 1px #00000066 inset;
    & * {
        color: #1c1c1b;
        font-size: 16px;
    }
    display: flex;
    flex-direction: column;
    position: relative;

`;

export const header = css`
    box-sizing: border-box;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
`;

export const children = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
`;

export const footer = css`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const commentWriteBox = css`
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 824px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 100%;
    height: 60px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;

    & > textarea {
        width: 800px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        outline: none;
        background-color: #b4b4b4;
        resize: none;
    }

    & > button {
        position: relative;
        z-index: 99;
        right: 100px;
        background-color: #f2780c;
        cursor: pointer;
    }
`;

export const commentProfileImg = css`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 20px;
    background-color: black;
`;