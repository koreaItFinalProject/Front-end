import { css, keyframes } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #1c1c1b;
    border-radius: 20px;
    & p {
        color:#747474;
        margin: 0;
        font-weight: 700;
    }
`;

export const profileBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 225px;
    border-bottom: 3px solid #f2780c;
    background-color: #ffffff;
`;

export const menuContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    padding: 0 20px 10px 20px;
    background-color: #ffffff;
`;

export const menu = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #f2780c;
    svg {
        margin-right: 10px;
        width: 25px;
        height: 25px;
    }
    p:nth-of-type(1) {
        margin-right: 20px;
        font-size: 16px;
        color: black;
        font-weight: 500;
    }
    p:nth-of-type(2) {
        font-size: 16px;
        color: #f2780c;
        font-weight: 500;
    }
    & button {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 16px;
        color: #f2780c;
        font-weight: 500;
        cursor: pointer;
    }
`;

export const mainBoxLayout = css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    & > div {
        height: 50%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin: 7px 0px;
        &:nth-last-child(1){
            margin-bottom: 0;
        }
        & > div {
            background-color: #ffffff;
            display: flex;
            box-sizing: border-box;
            height: 100%;
            width: 50%;
            padding: 10px;
            border-radius: 20px;
        }
    }
    * svg {
        position: relative;
        width: 30px;
        height: 30px;
        transform: scaleX(-1);
    }
`;


export const blinkIcon= keyframes`
    0%,100% {
        color:black;
        transform: rotate(15deg);
    }
    25% { 
        transform: rotate(-15deg);
    }
    50% { 
        color:red;
        transform: rotate(15deg);
    }
    75% { 
        transform: rotate(-15deg);
    }
`;

export const moveRightToLeft = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`;

export const noticeAlarm = css`
    animation: ${moveRightToLeft} 1s ease-in-out;
    position: absolute;
    top: 50px;
    right: 5px;
    & svg {
        width: 30px;
        height: 30px;
    }
    .alarm-icon > path{
        animation: ${blinkIcon} 1.5s infinite;
        transform-origin: center;
    }
    & p {
        font-size: 14px;
    }
`;

export const alarm = css`
    background-color: #ffebb0;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
        font-size: 16px !important;
    }
`;


export const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 어두운 반투명 배경
    },
    content: {
        background: 'white', // 모달 내부 배경색
        boxSizing: 'border-box',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        padding: '20px',
        width: '600px',
        height: '750px',
        overflow: 'hidden',
    },
};

export const closeButton = css`
    width: 80px;
    height: 30px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 20px;
    border: 1px solid #1c1c1b;
`;