import { css } from "@emotion/react";

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

export const bakeryButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#f2780c' : '#ffffff'};
`;

export const brunchButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#f2780c' : '#ffffff'};
`;

export const atmosphereButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#f2780c' : '#ffffff'};
`;

export const dessertButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#f2780c' : '#ffffff'};
`;