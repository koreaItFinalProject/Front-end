import { css } from "@emotion/react";

export const mainLayout = css`
    margin: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
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
export const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // 어두운 반투명 배경
    },
    content: {
        background: 'white', // 모달 내부 배경색
        boxSizing: 'border-box',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        padding: '20px',
        width: '800px',
        height: '500px',
        overflow: 'hidden',
    },
};
export const layout = css`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`
export const contentBox = css`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    padding-top: 30px;
    div{
        padding: 30px;
    }
`

export const content = css`
    margin-top: 15px;
    margin-left: 10px;
    width: 100%;
    height: 80%;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
`