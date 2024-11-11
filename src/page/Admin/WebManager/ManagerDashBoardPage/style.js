import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
`;

export const row = css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border: 1px solid #191919;
`;

export const column = css`
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-right: 1px solid #191919;
    padding: 10px;

    h3 {
        margin: 0 0 5px 5px;
    }
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