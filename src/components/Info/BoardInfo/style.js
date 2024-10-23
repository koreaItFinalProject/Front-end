import { css } from "@emotion/react";

export const mainLayout = css`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
`

export const content = css`
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-direction: column;
`

export const contentBox = css`
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;

    padding-right: 230px;
`
export const layout = css`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`