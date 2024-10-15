import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQueryClient } from "react-query";

function Cafelist({check, inputvalue}) {
  const queryClient = useQueryClient();
  const cafe = queryClient.getQueryData(["cafeQuery", check, inputvalue]);
  return (
    <div css={s.content}>
      카페리스트
      <div css={s.contentlist}>
        <ul>
          {cafe?.data?.map((result, index) => (  // 데이터 구조에 맞게 접근
            <li key={index}>
              <p>카페이름: {result.cafeName}</p>
              <p>평점: {result.rating || 'N/A'}</p> {/* 평점 추가 */}
              <p>주소: {result.address}</p>
              <p>카테고리/ 리뷰수: {result.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cafelist;
