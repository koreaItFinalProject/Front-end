import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BoardInfo({ info, sortOrder }) {
    console.log(info)
    return (
        <div css={s.mainLayout}>
            <table css={s.content}>
                <thead>
                    <tr >
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>조회수</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((result, index) => (
                        <tr >
                            <td>{index + 1}</td>
                            <td>{result.title}</td>
                            <td>{result.writeDate}</td>
                            <td>{result.view_count}</td>
                            <td><button>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BoardInfo;