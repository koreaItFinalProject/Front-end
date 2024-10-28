import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    & p {
        margin: 5px 0px;
        
    }
`;

export const modifyButton = css`
    position: absolute;
    display: flex;
    justify-content: end;
    width: 100%;
    margin-top: 20px;
    height: 25px;
    button {
        padding-right: 30px;
    }
`;

export const profileBox = css`
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 180px;
    padding-left: 40px;
    box-sizing: border-box;
    flex-direction: row;
    /* background-color: #ffffff; */
`;

export const profileimage = css`
    display: flex;
    align-items: center;
    padding-right: 40px;
    & img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        border: 1px solid black;
        box-sizing: border-box;
        margin-bottom: 10px;
    }
`

export const userInfo = css`
    width: 100%;
    margin-bottom: 10px;
    & > div {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100;
        & > div:nth-child(1) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            width: 80px;
            height: 100%;
            box-sizing: border-box;
        }
        & > div:nth-child(2) {
            display: flex;
            justify-content: center;
            flex-direction: column;
            height:100%;
            & input {
                width: 100%;
                height: 24px;
                margin: 5px 0px;
                padding: 0px;
                color: #747474;
                font-weight: 700;
            }
        }
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