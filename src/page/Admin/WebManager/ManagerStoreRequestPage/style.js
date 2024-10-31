import { css } from "@emotion/react";

export const mainLayout = css`
    display: flex;
`;

export const layout = css`
`;

export const columnBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const titleBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #000000;
    border-top: none;
    border-left: none;
    width: 100%;
    height:90px;

    & > a {
        font-size: 25px;
    }
    
`;

export const titleButtonBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 100%;
    height: 90px;

    & > :nth-of-type(1) {
        margin-left: 1000px;
    }
`;

export const buttonBox = css`

   
   & > button {
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 60px;
    height: 40px;

   }

   & > :nth-of-type(1) {
    margin-right: 10px;
   }
    


`;