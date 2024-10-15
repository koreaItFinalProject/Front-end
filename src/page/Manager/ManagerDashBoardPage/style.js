import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    height: 100%;
`;

export const innerlayout = css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
    
`;
export const contentlayout = css`
        width: 100%;
        height: 880px;
        display: flex;
        background-color: #EFECE8;
        justify-content: center;
        align-items: center;
`;

export const contentBox = css`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, 1fr);   
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    place-items: center;
    & div{
        width: 95%;
        height: 95%;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        background-color: #E3E2DE;
    }
`;