import { css } from "@emotion/react";

export const mainLayout = css`
    margin: 0px;
    width: 100%;
    height: 100%;
    overflow: auto;
`;

export const userInfo = css`
    width: 100%;
    height: 100%;
    border: 1px solid #dbdbdb;
`
export const userList = css`
    width: 100%;
    height: 28px;
    border: 1px solid #dbdbdb;

    tr,
    td,
    th {
        border: 1px solid #dbdbdb;
    }
`

export const selectbutton = (role) => css`
    button{
        
        padding: 3px 6px;
        margin: 0px 3px;
        :nth-of-type(${role === 'user' ? 1 : 2}) {
            background-color: #8f8f8f;
        }
    }

`
