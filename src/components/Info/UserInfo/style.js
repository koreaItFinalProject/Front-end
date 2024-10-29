import { css } from "@emotion/react";
export const mainLayout = css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px auto;
`
export const header = css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const layout = css`
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    margin: 10px auto;
`

export const profileImg = css`
    margin: 0px auto;
    border-radius: 100%;
    border: 2px solid #dbdbdb;
    background-color: transparent;
    width: 220px;
    height: 220px;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
    }
`

export const userInfo = css`
    margin: 0px auto;
    /* margin-left: 100px; */
    box-sizing: border-box;
    flex-direction: column;

    div{
        :nth-child(1){
            margin-top: 0px;
        }
        padding: 5px;
        margin: 25px 0px;
        border-radius: 20px;
        background-color: #dbdbdb;
    }
`