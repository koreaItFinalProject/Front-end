import { css } from "@emotion/react";

const baseButtonStyle = (status) => css`
    margin: 0 10px 0 0;
    border: none;
    border-radius: 20px;
    padding: 5px 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
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