import { css } from "@emotion/react";


export const column = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-right: 1px solid #191919;
    padding: 10px;
    
    h3 {
        margin: 0 0 5px 5px;
    }
`;

export const cafeListTable = css`
    width: 100%;
    height: 20px;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;
    border-top: none;
    border-collapse: collapse;
    border-spacing: 0;
    tr:nth-child(1){
        position: sticky;
        top: -1px;
        background-color: #EFECE8;
    }
    th, td {
        border: 1px solid #dbdbdb;
        padding: 3px 5px; // 패딩 추가
        text-align: center; // 중앙 정렬
        white-space : nowrap;
    }
    & p {
        margin: 0;
    }

`;