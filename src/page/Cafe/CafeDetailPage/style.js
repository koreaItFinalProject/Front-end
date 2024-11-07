import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const subLayout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    background-color: #191919;
`;

export const bannerImg = css`
    box-sizing: border-box;
    width: 100%;
    height: 220px;
    padding: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #ffffff;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
`;

export const detailHeader = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 10px;
    background-color: #ffffff;

    h1 {
        font-size: 36px;
        margin: 0;
    }
    
`;

export const titleLike = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
    position: relative;
`;

export const heart = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 20px;

    div {
        font-size: 20px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        padding: 0;
    }

    svg {
        width: 35px;
        height: 35px;
    }
`;

export const address = css`
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 600;
`;

export const reviewStat = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    gap: 10px;

    div {
        font-size: 20px;
        padding-top: 5px;
    }
`;

export const detailInfo = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;

    div {
        font-size: 16px;
        font-weight: 500;
    }

    div:nth-of-type(1) {
        color: #f2780c;
    }
`;

export const detailContent = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px 10px;
    background-color: #ffffff;
`;

export const menuButtons = css`
    display: flex;
    flex-direction: row;
    padding: 10px;
    border-bottom: 1px solid #f2780c;

    button {
        border: 1px solid #f2780c;
        border-radius: 20px;
        margin-left: 10px;
        padding: 5px 20px;
        font-weight: 600;
    }

    button:nth-of-type(1) {
        margin: 0;
    }
`;

export const activeButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#f2780c' : '#ffffff'};
    color: #111111;
`;

const baseButtonStyle = (status) => css`
    border-radius: 20px;
    border: none;
    color: black;
    margin: 0 10px 0 0;
    padding: 5px 13px;
    cursor: pointer;
    transition: transform 0.1s ease, background-color 0.1s ease; /* 트랜지션 추가 */
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    text-indent: 0;
    white-space: nowrap;
    outline: none;  /* 포커스 아웃라인 제거 */
    transform: ${status ? 'scale(1.13)' : 'scale(1)'}; /* 기본 상태에서의 크기 조정 */
    
    &:active {
        transform: ${status ? 'scale(1.2)' : 'scale(1.1)'}; /* Active 시 크기 변화 */
    }
`;