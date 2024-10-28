import { css } from "@emotion/react";

export const background = css`
    box-sizing: border-box;
    padding: 15px 0px;
    width: 100%;
    height: 100%;
    background-color: #111111;
`;

export const layout = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0px auto;
    border: 2px solid #b4b4b4;
    border-radius: 35px;
    padding: 25px;
    width: 714.75px;
    height: 933px;
    background-color: #000000;
    overflow: hidden;
`;

export const camera = css`
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
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
    overflow: hidden;
`;

export const header = css`
    box-sizing: border-box;
    height: 20px;
    width: 100%;
    position: absolute;
    top: 0;
`;

export const children = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    height: 100%;
    border-radius: 20px;
`;

export const footer = css`
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background-color: #000000;
    border-radius: 0px 0px 10px 10px;
    position: absolute;
    bottom: 0;
`;