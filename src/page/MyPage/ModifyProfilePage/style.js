import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30px;

    p {
        cursor: default;
    }
`;

export const profileimage = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & div:nth-of-type(1) {
        width: 140px;
        height: 140px;

        & img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 1px solid #dddddd;
            object-fit: cover;
        }
    }

    & input{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }

    p {
        font-size: 18px;
        margin-top: 10px;
    }
`;

export const profileButton = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20px;
    margin: 5px 0;

    button {
        padding: 0;
    }
`;

export const userInfo = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    margin-left: 50px;

    button {
        padding: 5px 20px;
        border: 1px solid #111111;
        border-radius: 20px;
    }
`;

export const userDetailInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 200px;

    p {
        margin: 0;
    }

    p:nth-of-type(1) {
        font-size: 14px;
    }

    p:nth-of-type(2) {
        font-size: 18px;
        font-weight: 600;
        border-bottom: 1px solid #ff675b;
    }
`;

export const profileModify = css`
    display: flex;
`;

export const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 어두운 반투명 배경
    },
    content: {
        background: 'white', // 모달 내부 배경색
        boxSizing: 'border-box',
        transform: 'translate(-50%, -50%)',
        top: '30%',
        left: '50%',
        padding: '20px',
        width: '200px',
        height: '200px',
        overflow: 'hidden',
    },
};

export const modalContent = css`
    top: "30%";
    left: '50%';
`;