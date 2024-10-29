import { css } from "@emotion/react";

export const mainLayout = css`
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    overflow-y: auto;
`

export const content = css`
    overflow: hidden;
    text-overflow:ellipsis;
    width: 100%;
    border-collapse: collapse; // 테이블 경계 간격 제거
    th, td {
        border: 1px solid #dbdbdb; // 테두리 설정
        padding: 10px; // 패딩 추가
        text-align: center; // 중앙 정렬
        border-left: none;
        :nth-last-child(1){
            border-right: none;
        }
    }

    th{
        border-top: none;
    }

    thead{
        position: sticky;
        top: 0px;
        background-color: #f0f0f0;
    }
`
