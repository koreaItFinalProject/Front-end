import { css } from "@emotion/react";

export const mainLayout = css`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  * p {
    margin: 0;
  }
`;

export const select = css`
  display: flex;
  justify-content: end;
  & button {
    font-size: 16px;
    font-weight: 500;
    border: 1px solid black;
    margin-right: 10px;
    width: 80px;
    height: 30px;
    border-radius: 10px;
    &:active{
      box-shadow: 2px 2px 1px inset;
    }
    &:nth-of-type(1){

    }
    &:nth-of-type(2){

    }
    &:nth-of-type(3){

    }
  }
`;

export const content = css`
  
`;
export const layout = css`
  position: relative;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
`;

export const view = css`
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: end;
  position: absolute;
  right: 0;
  
`;

export const imgTitle = css`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;

 
`;

export const img = css`
  box-sizing: border-box;
  width: 100px !important;
  height: 100px !important;
  margin-right: 20px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  

`;

export const title = css`
  width: 250px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-left: 10px;
  box-sizing: border-box;
  & input {
    font-weight: 700;
    font-size: 16px;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const button = css`
  position: absolute;
  right: 0;
  bottom: 3px;
  display: flex;
  justify-content: end;
`;

export const contentBox = css`
  
`;



