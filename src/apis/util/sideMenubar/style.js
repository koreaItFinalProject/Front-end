import { css } from "@emotion/react";

export const layout = css`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  & button{
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 28px;
    font-weight: 600;
    margin: 0px;
    padding: 0px;
    width: 300px;
    height: 50px;
    & svg{
      font-size: 26px;
      margin-right: 10px;
    }
  }
`;