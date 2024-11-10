import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
`;

export const box = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 100;
    top: 20px;
    left: 15px;
    height: 60px;
    width: 630px;
    background-color: #ffffff;
    border: 2px solid #ffffff;
    border-radius: 20px;
    padding: 2px 10px 2px 2px;
    box-shadow: 0px 0px 10px 4px #00000044;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    
    h2 {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0 20px;
        height: 100%;
        border-radius: 20px;
        font-size: 24px;
        font-weight: 600;
        color: #ffffff;
        background-color: #ff675b;
        cursor: default;
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
        font-size: 18px;
        width: 100%;
        outline: none;
        border: none;
        font-size: 20px;

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
    position: absolute;
    z-index: 100;
    margin-top: 68px;
`;

export const icon = css`
    position: relative;
    top: 2px;
`;

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
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 20px;
    z-index: 100;
    width: calc(100% - 40px); // 전체 너비에서 패딩을 뺀 너비 설정
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    button {
        padding: 0px;
        padding-top: 5px;
        height: 50px;
        width: 50px;
        border: 1px solid #ff675b;
        background-color: #ffffff;
        border-radius: 100%;
        box-shadow: 0px 0px 10px 4px #00000044;

        :active {
            background-color: #eeeeee;
        }
    }
`;

export const pictureBox = css`
    box-sizing: border-box;
    border-radius: 10px;
    width: 150px;
    height: 110px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
`;

export const cafeInfo = (slide) => css`
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 15px;
    background: #ffffff;
    border-radius: 10px;
    border: 1px solid #eeeeee;
    cursor: pointer;
    box-shadow: 0px 0px 10px 4px #00000044;
`;

export const listBox = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    margin-left: 15px;
    
    h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        color: #111111;
    }
    
    p {
        margin: 0;
        font-size: 14px;
        color: #111111;
    
        :nth-last-of-type(1) {
            font-weight: 600;
            color: #ff675b;
        }
    }
`;