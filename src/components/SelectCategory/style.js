import { css } from "@emotion/react";

const baseButtonStyle = css`
    border-radius: 20px;
        background-color: #ffffff; // 버튼 배경색
        /* background-color: inherit; */
        border: none;            // 테두리 제거
        color: black;           // 글자 색상
        margin: 0 15px;         // 버튼 사이의 간격 (좌우)
        padding: 5px 13px;     // 패딩 설정 (위 아래, 좌우)
        cursor: pointer;         // 커서 모양 변경
        transition: 0.3s; // 호버 효과를 위한 트랜지션
        box-shadow: 3px 3px 3px #a3a3a3;
        font-size: 14px;        // 글자 크기 조정
        font-weight: 600;
        line-height: normal;     // 줄 높이 기본값으로 설정
        text-indent: 0;         // 텍스트 들여쓰기 제거
        white-space: nowrap;

    
            margin-left: 0;      // 첫 번째 버튼의 왼쪽 마진 제거

        &:hover {
            background-color: #c9c9c9; // 호버 시 배경색 변경
        }
        &:active {
            background-color: #a3a3a3;
            box-shadow: none;
        }
`;
export const bakeryButton = (status) => css`
    ${baseButtonStyle};
    background-color: ${status? '' :  '#ffebcd' };
`;

export const brunchButton = (status) => css`
    ${baseButtonStyle};
    background-color: ${status? '' :  '#ffa297' };
`;

export const atmosphereButton = (status) => css`
    ${baseButtonStyle};
    background-color: ${status? '' :  '#d3f3d3' };
`;

export const dessertButton = (status) => css`
    ${baseButtonStyle};
    background-color: ${status? '' :  '#dea1fa' };
`;

export const icon = css`
    position: relative;
    top: 2px;
`