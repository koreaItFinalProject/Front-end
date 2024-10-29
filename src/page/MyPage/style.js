import { css } from "@emotion/react";

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 225px;
    width: 100%;
    background-color: #ffffff;
    box-sizing: border-box;
    border-radius: 0px 0px 20px 20px;
    margin-bottom: 7px;
`;

export const mainBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    flex-grow: 1;
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

export const post = css`
    box-sizing: border-box;
    margin-right: 5px;
    & > div {
        position: relative;
        box-sizing: border-box;
        padding: 10px 10px 25px 10px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #dbdbdb;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const postInventory = css`
    position: absolute;
    top: 18px;
    left: 30px;
    padding: 0;
    margin: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    & svg {
        width: 25px;
        height: 25px;
    }
`;

export const comment = css`
    box-sizing: border-box;
    margin-left: 5px;
    & > div {
        position: relative;
        box-sizing: border-box;
        padding: 10px 10px 25px 10px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #dbdbdb;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const commentInventory = css`
    position: absolute;
    top: 15px;
    left: 30px;
    padding: 0;
    margin: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
`;

export const review = css`
    box-sizing: border-box;
    margin-right: 5px;
    & > div {
        position: relative;
        box-sizing: border-box;
        padding: 10px 10px 25px 10px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #dbdbdb;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const reviewInventory = css`
    position: absolute;
    top: 15px;
    left: 30px;
    padding: 0;
    margin: 0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    & svg {
        transform: none;
    }
`;

export const information = css`
    box-sizing: border-box;
    margin-left: 5px;
    & > div {
        position: relative;
        box-sizing: border-box;
        padding: 10px 10px 15px 10px;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 1px solid #dbdbdb;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const alarm = css`
    position: absolute;
    top: 15px;
    left: 30px;
    padding: 0;
    margin: 0;
    height: 40px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .red-alarm-icon > path{
        color: red;
    }
    .white-alarm-icon > path {
        color: #000000;
    }
    display: flex;
    justify-content: space-around;
`;

export const box = css`
    width: 100%;
    height: 200px;
    padding: 10px;
    margin-top: 20px ;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p {
        pointer-events: none; 
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