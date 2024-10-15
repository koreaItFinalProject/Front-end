import { css } from "@emotion/react";

export const layout = css`
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & button{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-size: 18px;
    font-weight: 600;
    margin: 0px;
    padding: 0px 30px;
    width: 100%;
    height: 50px;
    color: #1c1c1b;
    & div{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
    }
    & svg{
      font-size: 23px;
      margin-right: 20px;
      color: #1c1c1b;
    }
    
  }
`;

