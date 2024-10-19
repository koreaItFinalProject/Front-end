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
    top: 10px;
    left: 15px;
`;

export const inputbox = css`
    display: flex;
    position: relative;
    height: 33px;
    padding: 7px 0px;
    background-color: #daa520;
    border-radius: 20px;
    a {
        margin: 0;
        padding-bottom: 10px;
        & > div {
            margin-left: 5px;
            background-image: url(${logo});
            background-size: cover;
            background-position: center;
            width: 45px;
            height: 36px;
        }
    }

    button{
        padding: 0px 5px;
        padding-top: 5px;
    }

    input {
        padding: 0px;
        padding-left: 10px;
        font-size: 15px;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 20px;
        background-color: #ffffff;
    }
`;

export const selectbutton = css`
    display: flex;
    position: absolute;
    z-index: 100;
    margin-top: 55px;
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
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    
    padding: 10px 20px;
    border-radius: 20px;
    
    z-index: 100;
    width: calc(100% - 40px); // 전체 너비에서 패딩을 뺀 너비 설정

    button {
        padding: 20px;
        background-color: aliceblue;
    }
`;

export const cafeInfo = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: aqua;
    h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #333;
    }
    p {
        margin: 5px 0 0;
        font-size: 14px;
        color: #666; 
    }
`;