import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ReviewInfo({ info }) {
    return (
        <div css={s.mainLayout}>
            <div css={s.content}>
                <tr css={s.contentBox}>
                    <th>번호</th>
                    <th>카페 이름</th>
                    <th>카테고리</th>
                    <th>별점</th>
                    <th>이름</th>
                    <th>날짜</th>
                </tr>
                {info.map((result, index) => (
                    <div css={s.layout}> {/* 고유한 key 추가 */}
                        {/* <div>{result.board_id}</div> */}
                        <div>{index + 1}</div>
                        <div>{result.cafeName}</div>
                        <div>{result.category}</div>
                        <div>{result.rating}</div>
                        <div>{result.review}</div>
                        <div>{result.writeDate}</div>
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default ReviewInfo;