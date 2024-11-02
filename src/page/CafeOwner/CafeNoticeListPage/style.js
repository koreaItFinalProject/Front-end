import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    background-color: #191919;
    overflow: hidden;
`;

export const searchContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;

    input {
        width: 530px;
        padding: 10px 70px 10px 20px;
        border: none;
        border-radius: 20px;
        background-color: #ffffff;
    }

    input::placeholder {
        color: #b4b4b4;
    }

    button:nth-of-type(1) {
        position: absolute;
        right: 117px;
        top: 50%;
        transform: translateY(-50%);
        padding: 5px 15px;
        border-radius: 20px;
        font-weight: 600;
        background-color: #f2780c;
    }

    button:nth-of-type(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100%;
        border-radius: 25px;
        background-color: #f2780c;
        font-weight: 600;

        svg {
            width: 15px;
            height: 15px;
            margin-left: 5px;
            fill: #191919;
        }
    }
`;

export const boardNavigater = css`
    height: 30px;
    margin-bottom: 15px;
`;

export const sortButton = css`
    border-radius: 20px;
    border: none;
    color: black;
    margin: 0 10px 0 0;
    padding: 5px 13px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    background-color: #ffffff;
    cursor: pointer;
`;

export const activeButton = css`
    border-radius: 20px;
    border: none;
    color: black;
    margin: 0 10px 0 0;
    padding: 5px 13px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    outline: none;
    background-color: #f2780c;
    cursor: pointer;
`;

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    overflow-y: auto;
`;

export const noticeLayout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    cursor: pointer;
`;

export const noticeInfoLayout = css`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
        font-size: 18px;
        font-weight: 600;
    }

    p {
        margin: 0;
        margin-right: 10px;
        color: #aaaaaa;
    }

`;

export const writerAndWriteDate = css`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;

    p {
        font-size: 14px;
    }
`;

export const counts = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
    }

    svg {
        padding-top: 2px;
        margin-right: 3px;
    }
    
`;

export const noticeImgContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 130px;
    border-radius: 10px;
    background-color: #ffffff;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`;

export const ref = css`
    height: 10px;
`;