import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function ManagerComment({ comment }) {
    console.log(comment);

    const formatDate = (writeDate) => {
        const date = new Date(writeDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    return (
        <div css={s.column}>
            <h3>최근 댓글</h3>
            <table css={s.cafeListTable}>
                <tr>
                    <th>순번</th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>닉네임</th>
                    <th>내용</th>
                    <th>입력 날짜</th>
                </tr>
                {
                    comment?.map((result, index) => (
                        <tr key={result.id}>
                            <td>{index + 1}</td>
                            <td>{result.name}</td>
                            <td>{result.nickname}</td>
                            <td>{result.title}</td>
                            <td>{result.content}</td>
                            <td>{formatDate(result.writeDate)}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default ManagerComment;