import { css } from "@emotion/react";

export const layout = css`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
  
  & svg {
    font-size: 18px;
    margin-right: 10px;
  }
  
`;