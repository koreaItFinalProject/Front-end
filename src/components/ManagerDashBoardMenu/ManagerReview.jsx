import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import StarRating from '../../apis/util/starRating';


function ManagerReview({ review }) {
    console.log(review);
    return (
        <div css={s.column}>
            <h3>최근 리뷰</h3>
            <table css={s.cafeListTable}>
                <tr>
                    <th>순번</th>
                    <th>카페명</th>
                    <th>작성자</th>
                    <th>닉네임</th>
                    <th>내용</th>
                    <th>평점</th>
                    <th>작성일</th>
                </tr>
                {
                    review?.map((result, index) => (
                        <tr key={result.id}>
                            <td>{index + 1}</td>
                            <td>{result.cafeName}</td>
                            <td>{result.name}</td>
                            <td>{result.nickname}</td>
                            <td>{result.review}</td>
                            <td>
                                <StarRating
                                    averageRating={result.rating}
                                    dimension={"15px"}
                                    spacing={1}
                                />
                            </td>
                            <td>{result.writeDate}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default ManagerReview;