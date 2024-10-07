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
    height: 100%;
    & button {
        padding: 0;
    }
    & > div{
        
    }
`;

export const ownerlogin = css`
    height: 100%;
    & button {
        padding: 0;
    }
    & > div{
        
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