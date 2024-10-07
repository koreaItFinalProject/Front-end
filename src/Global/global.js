import { css } from "@emotion/react";

export const reset = css`
    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: ; 폰트 설정 */
        /* 공용으로 사용할 color 정해지면 작성*/
    }
    ul, ol {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: inherit;
        transition: color 0.3s;
    }
    button {
        cursor: pointer; 
        border: none;
        background: transparent; 
    }

    .App {
        width: 100%;
        height: 100%;
    }
`;