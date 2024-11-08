import { css } from "@emotion/react";

const baseButtonStyle = (status) => css`
    margin: 0 10px 0 0;
    border: none;
    border-radius: 20px;
    padding: 7px 20px;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0px 0px 10px 4px #00000044;
    cursor: pointer;
`;

export const bakeryButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#2f4858' : '#ffffff'};
    color: ${status ? '#ffffff' : '#222222'};
`;

export const brunchButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#2f4858' : '#ffffff'};
    color: ${status ? '#ffffff' : '#222222'};
`;

export const atmosphereButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#2f4858' : '#ffffff'};
    color: ${status ? '#ffffff' : '#222222'};
`;

export const dessertButton = (status) => css`
    ${baseButtonStyle(status)};
    background-color: ${status ? '#2f4858' : '#ffffff'};
    color: ${status ? '#ffffff' : '#222222'};
`;