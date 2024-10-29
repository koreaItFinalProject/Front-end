import React, { useCallback, useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';


function CommentState({ isCount }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const sortedPosts = [...isCount].sort((a, b) => b.id - a.id);

    console.log(isCount);

    const handeleOnRecentClick = () => {
        setRecent(!recent);
    }

    const handleDeleteClick = async (id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        let response = null;
        if (selection) {
            console.log(response);
        } else if (response.status !== 200) {
            alert("삭제 실패")
        }
    }

    const extractImageTags = (content) => {
        const imgTags = content.match(/<img[^>]*\/?>/i) || [];
        return imgTags.map((img, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: img }} />
        ));
    };

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <p>
                    게시글 수 : {isCount.length}
                </p>
            </div>
            <div css={s.select}>
                {
                    !recent ?
                        <button onClick={handeleOnRecentClick}>최신순</button>
                        :
                        <button onClick={handeleOnRecentClick}>과거순</button>
                }
            </div>
            <di>
                {sortedPosts.map((result) => (
                    <div css={s.layout} key={result.boardId} >
                        <div css={s.view}>
                            <p>입력 날짜 : {result.commentWriteDate}</p>
                        </div>
                        <div css={s.imgTitle}>
                            <div css={s.img}>
                                {extractImageTags(result.boardContent)}
                            </div>
                            <div css={s.title} onClick={() => navigate(`/board/detail/${result.boardId}`)} >
                                <p>{result.boardTitle} 에 단 댓글 내용</p>
                                <p>{result.commentContent}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div css={s.button}>
                            <button onClick={() => handleDeleteClick(result.boardId)}>삭제</button>
                        </div>
                    </div>
                ))}
            </di>
        </div>
    );
}

export default CommentState;