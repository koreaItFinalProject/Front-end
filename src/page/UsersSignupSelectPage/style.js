import { css } from "@emotion/react";

export const layout = css`
    * {
        color : #F2780C;
    }
    width: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    background-color: #191919;
`;

export const logo = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    & h1{
        font-size: 50px;
        font-family: "Oswald", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        margin: 0;
    }
`;

export const loginMain = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


export const naver = css`
    display: flex;
    align-items: center;
    background-color: #03C75A;
    justify-content: space-around;
    width: 350px;
    height: 60px;
    margin-bottom: 10px;
    border-radius: 20px;
    & img {
        font-size: 40px;
        width: 50px;
        height: 50px;
    }
    & a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & p {
        margin: 0px 20px 4px 0px ;
        color: #FDF3F2;
        font-size: 20px;
        font-weight: 500;
    }
`;
export const kakao = css`
    display: flex;
    align-items: center;
    background-color: #FEE500;
    justify-content: space-around;
    width: 350px;
    height: 60px;
    margin-bottom: 10px;
    border-radius: 20px;
    & img {
        font-size: 40px;
        width: 50px;
        height: 50px;
    }
    & a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & p {
        margin: 0px 20px 4px 0px ;
        color: #393200;
        font-size: 20px;
        font-weight: 500;
    }
    `;
export const google = css`
    background-color: #E94334;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    height: 60px;
    margin-bottom: 10px;
    border-radius: 20px;
    & img {
        font-size: 40px;
        width: 40px;
        height: 40px;
        margin-left: 6px;
    }
    & a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & p {
        margin: 0px 20px 4px 0px ;
        color: #FDF3F2;
        font-size: 20px;
        font-weight: 500;
    }
`;

export const ownerButton =css`
    background-color: #9146FF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 350px;
    height: 60px;
    margin-bottom: 10px;
    border-radius: 20px;
    padding: 0;
    & svg {
        width: 30px;
        height: 30px;
        margin-left: 4px;
        & path {
            color: #FDF3F2;
        }
        & circle{
            color: #FDF3F2;
        }
    }
    & a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & button {
        margin: 0px 20px 4px 0px ;
        color: #FDF3F2;
        font-size: 20px;
        font-weight: 450;
        
    }
`;


export const selectMember = css`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    width: 400px;
    `;
 
export const emailbutton = css`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: end;
    & button{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 30px;
        & p {
            margin-left: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            & svg {
                font-size: 20px;
            }
        }
    }
`;

export const ownerloginButton = css`
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
    font-size: 10px;
    margin: 0;
    }
`;

export const loseEmail = css`
    padding-top: 50px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    & button{
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
`;

