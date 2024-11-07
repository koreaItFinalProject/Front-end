import { css } from "@emotion/react";

export const mainLayout = css`
  height: 100%;
  padding: 0px 20px;
  width: 500px;
`;

export const AllPost = css`
  margin-left: 10px;
  width: 100%;
  & h2, h3 {
    margin-bottom: 10px;
  }
  border-bottom: 3px solid #F2780C;
`;

export const AlramList = css`
    width: 100%;
    height: 100%;
    max-height: 600px;
    padding-bottom: 30px;
    overflow-y: auto;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    box-sizing: border-box;
    & tr {
    font-size: 16px;
    padding: 0;
    box-sizing: border-box;
    }
`;

export const layout = css`
    position: relative;
    border-bottom: 1px solid #F2780C;
    height: 100px;
    & tr{
        display: flex;
        flex-direction: column;
        cursor: pointer;
        width: 100%;
        & td:nth-last-child(2){
            color: #f2780c;
            text-decoration: underline;
            box-sizing: border-box;
        }
    }
`;