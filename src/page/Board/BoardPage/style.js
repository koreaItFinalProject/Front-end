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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
`;

export const headerInputs = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    width: 60%;
    height: 50px;

    & select {
        width: 150px;
    }
`;

export const boardList = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const thead = css`

`;


export const tbody = css`

`;

export const tr = css`
    display: flex;
    flex-direction: row;
    align-items: center;

    & span {
        margin: 0px 10px 0px 0px;
    }

    :hover {
        cursor: pointer;
    }
`;

export const paginateContainer = css`
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





