import { css } from "@emotion/react";

export const layout = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #222222;
`;

export const menuButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-radius: 50%;
    padding: 15px;
  
  & svg {
    width: 100%;
    height: 100%;
    fill: ${isSelected ? "#ff675b" : "#ffffff"};
    font-size: 25px;
  }
`;