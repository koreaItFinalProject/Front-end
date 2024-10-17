import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    display: flex;
    margin: 0;
    width: 100%;
    height: 100%;
`;

export const box = css`
    display: flex;
    position: absolute;
    z-index: 100;
    top: 10px;
    left: 10px;
`;

export const inputbox = css`
    display: flex;
    position: relative;
    padding: 0;
    font: 12px/1.5 'Malgun Gothic', '돋움', dotum, sans-serif;
    height: 36px;
    padding: 2px 3px 4px;
    background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/ico_search.png) no-repeat 0 0;

    & > a {
        margin: 0;
        padding: 0 10px;
        & > h2 {
            font: 12px/1.5 'Malgun Gothic';
            font-weight: 550;
            color: #ceca00ff;
            margin: 0;
            font-size: 100%;
            padding: 5px;
        }
    }

    & > button {
        font: inherit;
        outline: 0;
        padding: 0;
        border-radius: 0;
        overflow: hidden;
        background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/ico_search.png) no-repeat;
        float: left;
        border: 0 none;
        font-size: 0;
        line-height: 0;
        text-indent: -9999px;
        cursor: pointer;
        width: 29px;
        height: 29px;
        margin: 4px 4px 4px 0;
        background-position: 0 -160px;
    }

    & > input {
        padding: 0px 10px;
        font-size: 15px;
        outline: none;
        border: none;
    }
`;

export const selectbutton = css`
    display: flex;
    position: absolute;
    z-index: 100;
    top: 40px;
    margin-top: 10px;
    margin-left: 2px;
`;

export const icon = css`
    position: relative;
    top: 2px;
`


export const map = css`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const cafeContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between; // 버튼을 양 끝으로 배치
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    
    padding: 10px 20px;
    border-radius: 20px;
    
    z-index: 100;
    width: calc(100% - 40px); // 전체 너비에서 패딩을 뺀 너비 설정

    button {
        padding: 20px;
        background-color: aliceblue;
    }
`;

export const cafeInfo = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: aqua; // 반투명 배경
    h3 {
        margin: 0;
        font-size: 18px; // 카페 이름 크기
        font-weight: 600;
        color: #333; // 카페 이름 색상
    }
    p {
        margin: 5px 0 0; // 설명의 여백
        font-size: 14px; // 설명 크기
        color: #666; // 설명 색상
    }
`;

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
