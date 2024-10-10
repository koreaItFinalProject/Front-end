import { css } from "@emotion/react";

export const layout = css`
    margin: 0px 340px;
    display: flex;
    flex-direction: column;
`;

export const boardHeader = css`
    display: flex;
    flex-direction: column;
`;

export const noticeLayout = css`
    display: flex;
    flex-direction: column;
`;

export const swiperContainer = css`
    height: 300px;
    border: 1px solid black;

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        border: 1px solid black;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

`;

export const boardListLayout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 50px;
`;

export const boardListHeader = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    width: 100%;
    height: 40px;
`;

export const headerInputs = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 47%;
    height: 100%;
    
    & select {
        box-sizing: border-box;
        width: 100px;
        height: 100%;
        padding: 5px 5px;
        border-radius: 5px;
    }
`;

export const searchBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 40px;

    & input {
        padding: 5px 5px;
        border: 1px solid #333447;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    & button {
        width: 60px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: #333447;
    }
`;

export const writeButton = css`
    box-sizing: border-box;
    width: 150px;
    height: 100%;
    padding: 3px 3px;
    border-radius: 5px;
    background-color: #333447;
    color: white;
`;

export const boardList = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1000px;
`;

export const thead = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-top: 10px solid black;
    
    
    & span {
        font-size: 18px;
        font-weight: 600;
    }

    & span:nth-child(1) {
        width: 100px;
        margin-right: 5px;
        line-height: 35px;
        border-bottom: 3px solid black;
    }

    & span:nth-child(2) {
        width: 1000px;
        margin: 0px 5px;
        line-height: 35px;
        border-bottom: 3px solid black;
    }

    & span:nth-child(3) {
        width: 10%;
        margin: 0px 5px;
        line-height: 35px;
        border-bottom: 3px solid black;
    }

    & span:nth-child(4) {
        width: 10%;
        margin: 0px 5px;
        line-height: 35px;
        border-bottom: 3px solid black;
    }

    & span:nth-child(5) {
        width: 20%;
        line-height: 35px;
        border-bottom: 3px solid black;
    }
`;


export const tbody = css`
    margin-bottom: 10px;
    & span {
        margin: 3px 0px;
    }

    & span:nth-child(1) {
        width: 100px;
        margin-right: 5px;
        line-height: 35px;
        border-bottom: 1px solid black;
    }

    & span:nth-child(2) {
        width: 1000px;
        margin: 0px 5px;
        line-height: 35px;
        border-bottom: 1px solid black;
    }

    & span:nth-child(3) {
        width: 10%;
        margin: 0px 5px;
        line-height: 35px;
        border-bottom: 1px solid black;
    }

    & span:nth-child(4) {
        width: 10%;
        margin: 0px 5px;
        line-height: 35px;
        border-bottom: 1px solid black;
    }

    & span:nth-child(5) {
        width: 20%;
        line-height: 35px;
        border-bottom: 1px solid black;
    }
`;

export const tr = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;

    :hover {
        cursor: pointer;
    }
`;

export const paginateContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;

    & > ul {
        list-style-type: none;
        display: flex;

        & > li {
            margin: 0px 5px;
        }

        & a {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #dbdbdb;
            border-radius: 32px;
            padding: 0px 5px;
            min-width: 32px;
            height: 32px;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
        }

        & .active {
            border-radius: 32px;
            background-color: #bbbbbb;
            color: #ffffff;
        }
    }
`;





