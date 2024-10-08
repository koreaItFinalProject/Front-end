import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    width: 100%;
    height: 802px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    & h1,p {
        margin: 0;
    }
`;

export const layoutMain = css`

`;

export const userlogin = css`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 500px;
    border: 1px solid black;
    margin-right: 20px;
    & > button {
        padding: 10px 50px;
        font-size: 30px;
        font-weight: 600; 
        border:1px solid black;
        margin-bottom: 15px;
    }
    & > div{
        
    }
`;

export const ownerlogin = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    height: 60%;
    width: 500px;
    border: 1px solid black;
    margin-left: 20px;
    & button {
        padding: 20px 50px;
        font-size: 30px;
        font-weight: 600; 
        border:1px solid black;

    }
    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }
`;

export const oauth2Logo = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    & button{
        margin: 10px 10px;
        border-radius: 50%;
    }
    & img {
        border-radius: 50%;
        cursor: pointer;
        width: 40px;
        height: 40px;
    }
`;