import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    * {
        color: #ffffff;
    }
`;

export const Info = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
    border-top: none;
    border-radius: 0px 0px 10px 10px;
`;

export const signupbutton = css`
    height: 40px;
    box-sizing: border-box;
    padding: 0px 15px;
    border-right: 1px solid #F2780C;
    font-weight: 600;
    cursor: pointer;
`;