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
  border-bottom: 5px solid #ff675b;
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
  }
`;

export const layout = css`
  position: relative;
  display: flex;
  border-bottom: 1px solid #ff675b;
  margin-bottom: 15px;
  height: 130px;
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
  width: 200px;
  margin-right: 20px;
  height: 120px;
  & img {
    height: 100%;
    width: 100%;
    flex-grow: 1;
    box-sizing: border-box;
    object-fit: cover;
  }
`;

export const title = css`
  width: 500px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 10px;
  box-sizing: border-box;
  & p {
    font-size: 16px;
    padding: 0;
    box-sizing: border-box;
    }
  & div {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    & p:nth-of-type(1){
      cursor: pointer;
      color: #ff675b;
      box-sizing: border-box;
      text-decoration: underline;
    }
    & p:nth-of-type(2){
      color: #1c1c1b;
    }
  }
`;

export const category = css`
  color:#ff675b;
  font-size: 12px;
`

export const button = css`
  position: absolute;
  right: 7px;
  bottom: 3px;
  display: flex;
  justify-content: end;
`;

export const reviewStat = css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    svg {
        width: 40px;
        height: 40px;
        margin-right: 5px;
    }
    .star-ratings {
      display: flex;
      flex-direction: row;
      width: 150px;
    }

    .star-container {
        width: 25px;
        height: 25px;
    }
`;


