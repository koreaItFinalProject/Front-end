import { css } from "@emotion/react";

export const layout = css`
    /* width: 50%;
    height: 100%; */
`;

export const eventImageBox = css`
    box-sizing: border-box;
    border-bottom: 1px solid black;
    width: 100%;
    height: 400px; 
`;

export const progressEvent = css`
    box-sizing: border-box;
    width: 100%;
    height: 120px;
`;

export const searchBox = css`
    margin-left: 1200px;
   
    & > input {
        box-sizing: border-box;
        margin-bottom: 30px;
        height: 40px;
        border: none;
        outline: none;
        color: black;
        width: 65%;
        font-size: 40px;    
        background-color: white;
        border-bottom: 1px solid #8f8282;
    }
`;

export const eventPost = css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-top: 1px solid black;
    width: 100%;
    height: 450px;

    & > div {
        box-sizing: border-box;
        border: 1px solid black;
        width: 49%;
        height: 100px;

    }
`;