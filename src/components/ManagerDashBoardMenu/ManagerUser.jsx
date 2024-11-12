import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ManagerUser({ user }) {
    console.log(user);
    return (
        <div css={s.column}>
            <h3>최근 가입한 유저</h3>
            <table css={s.cafeListTable}>
                <tr>
                    <th>순번</th>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>권한</th>
                </tr>
                {
                    user?.map((result, index) => (
                        <tr key={result.id}>
                            <td>{index + 1}</td>
                            <td>{result.username}</td>
                            <td>{result.name}</td>
                            <td>{result.nickname}</td>
                            <td>{result.email}</td>
                            <td>{result.role}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default ManagerUser;