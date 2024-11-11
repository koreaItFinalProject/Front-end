import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    padding: 10px 0 0;
    gap: 10px;

    h1 {
        margin: 0;
        font-size: 24px;
    }
`;

export const header = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const imgContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 10px;
`;

export const imgChangeButtons = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const changeButton = css`
    font-weight: 500;
    margin-bottom: 5px;
`;

export const confirmCancel = css`
    display: flex;
    flex-direction: row;
    width: 100%;

    button {
        margin-right: 5px;
        font-weight: 600;
    }
`;

export const menuImg = css`
    width: 100%;
    height: 100%;
    cursor: pointer;

    img {
        border-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 어두운 반투명 배경
        zIndex: 1000,
    },
    content: {
        background: 'white', // 모달 내부 배경색
        boxSizing: 'border-box',
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        border: '2px solid #cacaca',
        boxShadow: '0px 0px 10px 4px #00000036',
        top: '50%',
        left: '50%',
        padding: ' 0 20px 20px', // 패딩 제거
        width: '600px',
        height: '800px',
        overflow: 'hidden',
        zIndex: 1001,
        position: 'relative', // 닫기 버튼 위치를 위해 상대 위치 설정
    },
};

export const closeButton = css`
    position: relative;
    margin: 10px;
    font-size: 16px;
    font-weight: 500;
    background: white;
    cursor: pointer;
    z-index: 1002; 
`;

export const modalImageContainer = css`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const modalImage = css`
    width: 100%;
    height: 95%;
    object-fit: cover;
    border-radius: 20px; 
`;