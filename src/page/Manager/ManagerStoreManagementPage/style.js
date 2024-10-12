import { css } from "@emotion/react";

export const mainBox = css`
    display: flex;
`;

export const mainLayout = css`
    display: flex;
`;

export const layout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid #898484;
    border-top: none;
    width: 300px;
    height: 1000px;

    & > span {
        margin-left: 50px;
        font-size: 25px;
    }
`;

export const adornmentBox = css`
    box-sizing: border-box;
    border: 1px solid black;
    width: 100%;
    height: 120px;  
`;

export const box = css` 
    display: flex;
    flex-direction: column;     
    box-sizing: border-box;
    padding-left: 230px;
    margin-top: 50px;
    height: 50px;
 
`;

export const ibBox = css`
    display: flex;

`;

export const inputSection = css`
    margin-bottom: 30px;

    & > span {
        font-size: 24px;
    }

    & > input {
        box-sizing: border-box;
        height: 40px;
        border: none;
        outline: none;
        color: black;
        width: 90%;
        font-size: 40px;    
        background-color: white;
        border-bottom: 1px solid #8f8282;
    }

`;

export const layoutBox = css`
    display: flex;  /* flexbox로 자식들을 배치 */
    flex-direction: column;  /* 자식들이 세로로 배치되도록 설정 */
    justify-content: flex-start; 
    height: 100%;  /* 부모 요소가 적절한 크기를 가지도록 설정 */

    & > div {
        box-sizing: border-box;
        border: 1px solid #000000;
        width: 100%;  
        height: 100px;  /* 자식 요소의 고정된 높이 */
        margin-bottom: 10px;  /* 자식 요소들 간의 여백 설정 */
        padding: 10px;
    }
`;

export const deleteButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    margin-left: 460px;
    font-size: 14px;
    width: 70;
    height: 30px;
`;

export const button = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    margin-left: 10px;
    width: 60px;
    height: 40px;
    font-size: 15px;
    color: #000000;
`;

export const buttonBox = css`
    display: flex;
    justify-content: center;
    
    & > button {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        width: 120px;
        height: 40px;   
        font-size: 15px;
        color: #000000;
    }
   
`;

