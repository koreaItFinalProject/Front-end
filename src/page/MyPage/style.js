import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding:20px 20px 20px 20px;
    flex-direction: column;
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
    height: 280px;
    width: 100%;
    border-radius: 20px;
    background-color: #ffffff;
    cursor: pointer;
`;

export const profileimage = css`
    cursor: pointer;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: 1px solid black;
    box-sizing: border-box;
    & img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-sizing:border-box
    }
`;

export const infoLayout = css`
    width: 100%;
`;



export const userInfo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
        padding: 5px 0px;
    }
`;

export const mainBox = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0px;
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
`;
