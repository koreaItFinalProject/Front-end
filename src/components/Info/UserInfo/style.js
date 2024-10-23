import { css } from "@emotion/react";
export const mainLayout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0px;

    
`
export const header = css`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const layout = css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    padding: 0px 20px;
    margin: 0px auto;
`

export const profileImg = css`
    background-color: antiquewhite;
    width: 200px;
    height: 200px;
`

export const userInfo = css`
    box-sizing: border-box;
    flex-direction: column;

    div{
        padding: 5px;
        margin: 25px 0px;
        border-radius: 20px;
        background-color: #dbdbdb;
    }
`