import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #191919;
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
    background-color: #ffffff;
    border-radius: 20px;
    margin-bottom: 10px;
`;

export const menuContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    padding: 10px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background-color: #ffffff;
`;

export const menu = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    width: 100%;
    height: 95px;
    border-bottom: 3px solid #f2780c;
    cursor: pointer;

    p {
        font-size: 16px;
        color: #f2780c;
        font-weight: 500;
    }
`;

export const menuName = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 10px;

    svg {
        margin-right: 20px;
        width: 30px;
        height: 30px;
    }

    p:nth-of-type(1) {
        font-size: 16px;
        color: black;
        font-weight: 500;
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