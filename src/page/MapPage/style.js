import { css } from "@emotion/react";
import { logo } from "../../assets/image";

export const layout = css`
    position: relative;
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
`;

export const box = css`
    display: flex;
    box-sizing: border-box;
    position: absolute;
    z-index: 100;
    top: 15px;
    left: 15px;
    height: 50px;
    width: 631px;
    background-color: #111111;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    h2 {
        margin: 0px;
        padding: 0px 10px;
        padding-top: 8px;
        align-items: center;
        color: #F2780C;
        font-family: 'Kulim Park';
        font-style: normal;
        font-weight: 'Bold', 600;
        font-size: 30px;
        line-height: 34px;
    }
`;

export const inputbox = css`
    display: flex;
    position: relative;
    width: 100%;
    padding: 0px;
    input {
        height: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px 15px;
        font-size: 15px;
        width: 100%;
        outline: none;
        border: none;
        font-size: 20px;
        background-color: #ffffff;


        &::placeholder{
        font-family: 'Kulim Park';
        font-style: normal;
        font-weight: 300;
        font-size: 20px;
        line-height: 23px;
        color: #B4B4B4;
        
        }
    }
`;
export const selectbutton = css`
    display: flex;
    position: absolute;
    z-index: 100;
    margin-top: 60px;
`;

export const icon = css`
    position: relative;
    top: 2px;
`

export const map = css`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const cafeContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between; // 버튼을 양 끝으로 배치
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    
    padding: 10px 20px;
    border-radius: 20px;
    
    z-index: 100;
    width: calc(100% - 40px); // 전체 너비에서 패딩을 뺀 너비 설정
    button {
        padding: 0px;
        padding-top: 5px;
        height: 50px;
        width: 50px;
        background-color: #111111;
        border-radius: 100%;
    }
`;

export const pictureBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    background-color: white;
    border-radius: 10px;
    width: 120px;
    height: 110px;
`;

export const cafeInfo = (slide) => css`
    display: flex;
    align-items: center;
    padding: 10px;
    background: #111111;
    border-radius: 20px;
    h3 {
        margin: 0;
        padding: 10px 0px;
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
    }
    p {
        padding: 5px 0px;
        margin: 5px 0 0;
        font-size: 14px;
        color: #FFFFFF;

        :nth-last-of-type(1){
            color: #F2780C;
        }
    }
`;

export const listBox = css`
    display: flex;
    padding-left: 15px;
    flex-direction: column;

`