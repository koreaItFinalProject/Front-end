import { css } from "@emotion/react";

export const mainLayout = css`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  * p {
    margin: 0;
  }
`;

export const AllPost = css`
  & p {
    font-weight: 550;
  }
`;

export const select = css`
  display: flex;
  justify-content: end;
  border-bottom: 5px solid #F2780C;
  margin-bottom:10px;
  & button {
    font-size: 14px;
    font-weight: 600;
    border: 1px solid black;
    margin-right: 5px;
    width: 80px;
    height: 30px;
    border-radius: 20px;
    margin-bottom:10px;
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
  & p {
    font-weight: 500;
  }
`;
export const layout = css`
  position: relative;
  display: flex;
  border-bottom: 1px solid #F2780C;
  margin-bottom: 15px;
  height: 100px;
`;

export const view = css`
  display: flex;
  justify-content: end;
  flex-direction: column;
  align-items: end;
  position: absolute;
  right: 10px;
  top: 7px;
`;

export const imgTitle = css`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const img = css`
  box-sizing: border-box;
  display: flex;
  width: 100px;
  margin-right: 20px;
  & img {
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
  }
`;

export const title = css`
  width: 250px;
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-left: 10px;
  box-sizing: border-box;
  cursor: pointer;
  & input {
    font-weight: 500;
    font-size: 16px;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const button = css`
  position: absolute;
  right: 7px;
  bottom: 3px;
  display: flex;
  justify-content: end;
`;




