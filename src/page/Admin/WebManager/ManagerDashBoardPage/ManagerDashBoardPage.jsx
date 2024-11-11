import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ManagerDashBoardPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.row}>
                <div css={s.column}>
                    <h3>최근 리뷰</h3>
                    <table css={s.cafeListTable}>
                        <tr>
                            <th>순번</th>
                            <th>작성자</th>
                            <th>카페명</th>
                            <th>내용</th>
                            <th>평점</th>
                            <th>작성일</th>
                        </tr>
                        <tr>
                        </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                    </table>
                </div>
            </div>
            <div css={s.row}>
            </div>
        </div>
    );
}

export default ManagerDashBoardPage;