import { css } from "@emotion/react";

export const layout = css`
    margin: 0px 200px;
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
    width: 100%;
`;




