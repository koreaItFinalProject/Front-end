import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const boardHeader = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    padding: 15px 15px 15px 15px;
    background-color: #ffffff;

    & div {
        font-size: 20px;
        font-weight: 600;
    }

    & input {
        padding: 10px 20px;
        width: 602px;
        height: 100%;
        font-size: 20px;
        font-weight: 600;
        background: #eeeeee;
        outline: none;
        border: none;
        border-radius: 20px;
    }

    input::placeholder {
        font-weight: 400;
        color: #616161ff;
    }
`;


export const buttonLayout = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    width: 100%;

    h1 {
        font-size: 20px;
    }

    button {
        padding: 0;
        font-weight: 600;
        color: #f2780c;

        &:disabled {
            color: #aaaaaa;
            cursor: not-allowed;
        }

        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

export const editorLayout = css`
    display: flex;
    box-sizing: border-box;
    flex-grow: 1;
    background-color: #ffffff;

    .quill {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px 30px 30px 30px;
        width: 100%;
        height: 100%;
        

        img {
            border-radius: 10px;
        }
    }

    .ql-toolbar.ql-snow {
        box-sizing: border-box;
        padding: 0 15px 15px 15px;
        border: none;
        
        span {
            margin: 0%;
            width: 100%;
            height: 100%;
        }

        button {
            width: 30px;
            height: 30px;
            padding: 0;

            & svg {
            width: 30px;
            height: 30px;
            }
        }
    }

    .ql-container.ql-snow {
        position: relative;
        width: 100%;
        border: none;
        overflow-y: auto;
        border-radius: 20px;
        background-color: #eeeeee;
        
    }

    .ql-editor {
        padding: 15px;
    }
`;


export const loadingLayout = css`
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #00000066;
    `;