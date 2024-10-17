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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
        width: 100px;
        height: 100px;
    }

    & h1{
        font-size: 24px;
        margin: 0;
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
    height: 400px;
    width: 400px;
        & img:nth-of-type(1) {
            width: 400px;
            height: 60px;
            /* margin-bottom: 20px; */
        }
        & a{
            border-radius: 20px;
            width: 400px;
            height: 60px;
            box-sizing: border-box;
            margin-bottom: 20px;
        }

        & a img {
            border-radius: 20px;
            
        }

        & a:nth-last-child(1) {
            margin-bottom: 20px;
            width: 400px;
            height: 60px;
            background-color: #ffe1a1;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        & button {
            display: flex;
            align-items: center;
            width: 100%;
            height: 60px;
            padding: 0;
            border-radius: 20px;
            background-color: #ffe1a1;
            font-size: 20px;
            justify-content: center;
            & div {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            & * {
                margin: 0px 20px;
                font-weight: 600;
            }
            & svg {
                font-size: 40px;
                /* margin: 0px 30px; */
                width: 40px;
                height: 40px;
            }
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
        margin: 0;
        & p {
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
        margin: 0;
    }
`;

