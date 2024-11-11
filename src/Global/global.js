import { css } from "@emotion/react";

export const reset = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');

    @import url('https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&family=Oswald:wght@200..700&display=swap');
    
    * {
        font-family: "Noto Sans KR", sans-serif;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: ; 폰트 설정 */
        /* 공용으로 사용할 color 정해지면 작성*/
    }

    h1 {
        margin: 0;
    }

    ul, ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s;
    }

    button {
        cursor: pointer; 
        border: none;
        background: transparent; 
    }

    ::-webkit-scrollbar{
        display: none;
    }

    .App {
        width: 100%;
        height: 100%;
    }

    input {
        background-color: transparent;
        padding-left: 10px;
        outline: none;
        border: none;
        border-bottom: 1px solid #ff675b;
        box-sizing: border-box;
        height: 40px;
        caret-color: #ff675b;
        width: 380px;
        color: #222222;
        &::placeholder{
            color: #222222;
        }
    }

`;