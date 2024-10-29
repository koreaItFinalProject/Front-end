import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function CommentInfo({ info }) {
    return (
        <div css={s.mainLayout}>
            <table css={s.content}>
                <thead>
                    <tr >
                        <th>번호</th>
                        <th>내용</th>
                        <th>날짜</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((result, index) => (
                        <tr >
                            <td>{index + 1}</td>
                            <td>{result.content}</td>
                            <td>{result.write_date}</td>
                            <td><button>수정</button></td>
                            <td><button>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CommentInfo;