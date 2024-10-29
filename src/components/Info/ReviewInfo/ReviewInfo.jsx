import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ReviewInfo({ info }) {
    return (
        <div css={s.mainLayout}>
            <table css={s.content}>
                <thead>
                    <tr >
                        <th>번호</th>
                        <th>카페 이름</th>
                        <th>별점</th>
                        <th>이름</th>
                        <th>날짜</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((result, index) => (
                        <tr >
                            <td>{index + 1}</td>
                            <td>{result.cafeName}</td>
                            <td>{result.rating}</td>
                            <td>{result.review}</td>
                            <td>{result.writeDate}</td>
                            <td><button style={{ whiteSpace: "nowrap" }}>수정</button></td>
                            <td><button style={{ whiteSpace: "nowrap" }}>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default ReviewInfo;