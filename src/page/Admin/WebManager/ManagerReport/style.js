import { css } from "@emotion/react";

export const mainLayout = css`
    margin: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;

export const listContainer = css`
    flex-grow: 1;
    overflow: auto;
    height: 100%;
`

export const box = css` 
    display: flex;
    flex-direction: column;     
    box-sizing: border-box;
    margin-top: 50px;
    height: 50px;
    & button {
        border: 1px solid black;
        padding: 3.5px 20px;
    }
`;

export const ibBox = css`
    display: flex;
`;

export const inputSection = css`
    margin-bottom: 1px;

    & > span {
        font-size: 24px;
    }

    & > input {
        box-sizing: border-box;
        height: 40px;
        border: none;
        outline: none;
        color: black;
        width: 90%;
        font-size: 40px;    
        background-color: white;
        border-bottom: 1px solid #8f8282;
    }

`;

export const button = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    margin-left: 10px;
    width: 60px;
    height: 40px;
    font-size: 15px;
    color: #000000;
`;

export const cafeListTable = css`
    width: 100%;
    height: 28px;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;
    border-top: none;

    tr:nth-child(1){
        position: sticky;
        top: -1px;
        background-color: #EFECE8;
    }
    th, td {
        border: 1px solid #dbdbdb;
        padding: 10px; // 패딩 추가
        text-align: center; // 중앙 정렬
        white-space : nowrap;
    }

`;

