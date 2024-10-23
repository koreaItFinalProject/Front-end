import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BoardInfo({ info }) {
    return (
        <div css={s.mainLayout}>
            <div css={s.content}>
                <tr css={s.contentBox}>
                    <th>번호</th>
                    <th>제목</th>
                    <th>조회수</th>
                    <th>날짜</th>
                </tr>
                {info.map((result, index) => (
                    <div css={s.layout}>
                        <div>{index + 1}</div>
                        <div>{result.title}</div>
                        <div>{result.view_count}</div>
                        <div>{result.write_date}</div>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BoardInfo;