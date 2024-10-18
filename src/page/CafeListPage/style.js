import { css } from "@emotion/react";

export const allLayout = css`
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px 15px;
    background-color: white;
`
export const box = css` 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    margin-top: 20px;
    padding: 0px 10px;
    background-color: white;
    position: sticky;
    top: 0px;
    z-index: 2;

    box-sizing: border-box;
    border: 1px solid #dbdbdb;
`;

export const inputSection = css`
    & > input {
        box-sizing: border-box;
        padding-bottom: 10px;
        height: 30px;
        font-size: 25px;
        border: none;
        outline: none;
        color: black;
        width: 64%;
        background-color: white;
        border-bottom: 1px solid #8f8282;
    }

`;
export const listbox = css`
    display: flex;
    margin-top: 30px;
`;

export const pictureBox = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 200px;
    height: 200px;
`;

export const showBox = css`
    display: flex;
    flex-direction: column;
`;

export const viewBox = css`
    display: flex;
    margin-left: 20px;
    
    p {
        margin-top: 5px;
    }
`;

export const spanBox = css`
    display: flex;
    flex-direction: column;
    margin: 23px;
    margin-top: 0px;

    & > span {
        padding-bottom: 10px;
    }
`;

export const listContainer = css`
    overflow-y: auto;
    height: calc(100vh - 60px);
`;

export const selectbutton = css`
    display: flex;
    height: 30px;
    margin-top: 10px;
    padding-bottom: 15px;
`;

export const icon = css`
    position: relative;
    top: 2px;
`

const baseButtonStyle = css`
    border-radius: 20px;
    background-color: #ffffff; // 버튼 배경색
    /* background-color: inherit; */
    border: none;            // 테두리 제거
    color: black;           // 글자 색상
    margin: 0 13px;         // 버튼 사이의 간격 (좌우)
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

    :last-of-type{
        margin-right: 0px;
    }
    &:hover {
        background-color: #c9c9c9; // 호버 시 배경색 변경
    }
    &:active {
        background-color: #a3a3a3;
        box-shadow: none;
    }
`;

// 각 카테고리별 스타일
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