import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function CommentInfo({ info }) {
    return (
        <div css={s.mainLayout}>
            <div css={s.content}>
                <tr css={s.contentBox}>
                    <th>번호</th>
                    <th>내용</th>
                    <th>날짜</th>
                </tr>
                {info.map((result, index) => (
                    <div css={s.layout}> {/* 고유한 key 추가 */}
                        {/* <div>{result.board_id}</div> */}
                        <div>{index + 1}</div>
                        <div>{result.content}</div>
                        <div>{result.write_date}</div>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentInfo;