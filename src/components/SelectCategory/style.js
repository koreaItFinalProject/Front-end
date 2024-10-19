import { css } from "@emotion/react";

const baseButtonStyle = (status) => css`
    border-radius: 20px;
    border: none;
    color: black;
    margin: 0 15px;
    margin-left: 0;
    padding: 5px 13px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.5s ease; /* 트랜지션 추가 */
    box-shadow: 3px 3px 3px #a3a3a3;
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    text-indent: 0;
    white-space: nowrap;
    outline: none;  /* 포커스 아웃라인 제거 */
    transform: ${status ? 'scale(1.2)' : 'scale(1)'}; /* 기본 상태에서의 크기 조정 */
    
    &:hover {
        transform: ${status ? 'scale(1.15)' : 'scale(1.05)'}; /* Hover 시 크기 변화 */
    }
    &:active {
        transform: ${status ? 'scale(1.2)' : 'scale(1.1)'}; /* Active 시 크기 변화 */
    }
`;

export const bakeryButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#ffaa29' : '#ffd89d'};

    &:hover {
        background-color: #ffb366;
    }
    &:active {
        background-color: #e69500;
    }
`;

export const brunchButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#ff7d76' : '#ffb8b0'};

    &:hover {
        background-color: #ff9c96;
    }
    &:active {
        background-color: #ff7d76;
    }
`;

export const atmosphereButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#a1dba1' : '#d3f3d3'};

    &:hover {
        background-color: #b8e3b8;
    }
    &:active {
        background-color: #a1dba1;
    }
`;

export const dessertButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#c392dd' : '#e7b8fd'};

    &:hover {
        background-color: #d4a6ed;
    }
    &:active {
        background-color: #c392dd;
    }
`;

export const icon = css`
    position: relative;
    top: 2px;
`;
