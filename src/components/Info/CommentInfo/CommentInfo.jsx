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
                    </tr>
                </thead>
                <tbody>
                    {info.map((result, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{result.content}</td>
                            <td>{result.write_date}</td>
                            <button>수정</button>
                            <button>삭제</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CommentInfo;