import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";


function ManagerBoard({ board }) {

    const extractImageTags = (content) => {
        const pTags = content.match(/<p[^>]*>.*?<\/p>/gi) || [];
        const cleanedPTags = pTags.map(pTag => {
            const cleanedTag = pTag.replace(/<img[^>]*>/gi, '');
            return cleanedTag.trim() === '<p></p>' || cleanedTag.trim() === '<p><br></p>' ? '' : cleanedTag;
        }).filter(pTag => pTag !== '');
        return cleanedPTags.map((p, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: p }} />
        ));
    };

    return (
        <div css={s.column}>
            <h3>최근 게시판</h3>
            <table css={s.cafeListTable}>
                <tr>
                    <th>순번</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>닉네임</th>
                    <th>작성일</th>
                </tr>
                {
                    board?.map((result, index) => (
                        <tr key={result.id}>
                            <td>{index + 1}</td>
                            <td>{result.title}</td>
                            <td>{extractImageTags(result.content)}</td>
                            <td>{result.name}</td>
                            <td>{result.nickname}</td>
                            <td>{result.writeDate}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );
}

export default ManagerBoard;