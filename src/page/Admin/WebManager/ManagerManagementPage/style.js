import { css } from "@emotion/react";

export const mainLayout = css`
    margin: 0px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`;
export const userList = css`
    width: 100%;
    height: 28px;
    border-collapse: collapse;
    border: 1px solid #dbdbdb;
    border-top: none;

    tr:nth-child(1){
        position: sticky;
        top: -1px;
        background-color: #EFECE8;
    }
    th, td {
        border: 1px solid #dbdbdb;
        padding: 10px; // 패딩 추가
        text-align: center; // 중앙 정렬
        white-space : nowrap;
    }

`
export const listContainer = css`
    flex-grow: 1;
    overflow: auto;
    height: 100%;
`

export const selectbutton = (role) => css`
    button{
        padding: 3px 6px;
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
        width: '850px',
        height: '500px',
        overflow: "hidden",
    },
};
export const boxlayout = css`
    height: 100%;
    width: 100%;
`

export const selects = css`
    display: flex;
    justify-content: space-between; /* 양쪽 끝에 정렬 */
    height: 30px;
`
export const radioContainer = css`
    display: flex; /* Flexbox 사용 */
    align-items: center; /* 수직 중앙 정렬 */

    input{
        height: 20px;
        width: 30px;
    }
`;

export const radioLabel = css`
    display: flex; /* Flexbox 사용 */
    align-items: center; /* 수직 중앙 정렬 */
`;

export const layout2 = css`
    display: flex;
    border: 1px solid #dbdbdb;
    height: calc(100% - 30px);
    width: 100%;
`
export const contentBox = css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    white-space: nowrap;
    div{
        border: 1px solid #dbdbdb;
        border-right: none;
        border-left: none;
        padding: 20px;

        :nth-child(1){
            border-top: none;
        }

        :nth-last-child(1){
            border-bottom: none;
        }
        :hover{
            background-color: #a5a5a5;
        }
        :active{
            background-color: #7e7e7e;
        }
    }
`

export const content = css`
    width: 100%;
    border-left: 1px solid #dbdbdb;
    box-sizing: border-box;
`