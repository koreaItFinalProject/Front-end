import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
`;

export const logo = css`
    display: flex;
    font-size: 16px;
    & img {
        width: 50px;
        height: 50px;
    }
`;

export const loginMain = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    /* width: 600px; */

    
`;

export const selectMember = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    width: 500px;
        & img:nth-child(1){
            width: 400px;
            height: 60px;
            margin-bottom: 20px;
            border-radius: 20px;
        }
    `;

export const emailbutton = css`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    & button{
        display: flex;
        justify-content: center;
        align-items: center;
        & p{
            margin: 0;
        }
        & p:nth-last-child(1) {
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            & svg {
                font-size: 20px;
            }
        }
    }
`;

export const loseEmail = css`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    & button{
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & p {
            margin: 0;
        }
    }
`;

