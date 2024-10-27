import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 30px;
    height: 30px;
  }
  
  & svg {
    width: 100%;
    height: 100%;
    fill: #f2780c;
  }
  
`;