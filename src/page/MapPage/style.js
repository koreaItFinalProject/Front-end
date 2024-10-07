import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    margin: 0px;
    width: 100%;
    height: 100vh;
`

export const box = css`
    display: flex;
    box-sizing: border-box;
    border: 1px blue;
    height: 100%;
    width: 25%;
`

export const searchbox = css`
    display: flex;
    flex-direction: column; /* 세로 방향으로 정렬 */
    justify-content: flex-start; /* 세로 중앙 정렬 */
    width: 100%;
    height: 100%;
    background-color: blue;
`

export const header = css`
    box-sizing: border-box;
    padding: 10px;
    background-color: lightblue; /* 배경 색상 */
`

export const logobox = css`
box-sizing: border-box;
    margin: 10px 0px;
    background-color: lightblue; /* 배경 색상 */
`

export const footer = css`
    margin: 10px; /* 아이템 간 간격 */
    padding: 20px;
    background-color: lightblue; /* 배경 색상 */
    border: 1px solid #ccc; /* 테두리 */
`
export const inputbox = css`
`

export const radiobutton = css`
    padding: 0px;
    margin: 0px;
    border: none;
`

export const content = css`
    flex: 1; /* 남은 공간을 차지 */
    background: lightgreen; /* 배경 색상 */
    padding: 10px;
`

export const map = css`
    display: flex;
    width: 100%;
    height: 100%;
`