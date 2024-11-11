import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { useMyPageDeleteMutation } from '../../../apis/useMyPageDeleteMutation/useMyPageDeleteMutation';


function CommentBoard({ comment }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const param = "comment"
    const deleteMutation = useMyPageDeleteMutation(param);
    const sortedPosts = [...comment].sort((a, b) => {
        return !recent ?
            new Date(b.commentWriteDate) - new Date(a.commentWriteDate) :
            new Date(a.commentWriteDate) - new Date(b.commentWriteDate);
    });

    const handeleOnRecentClick = () => {
        setRecent(!recent);
        console.log(recent);
        console.log(sortedPosts);
    }

    const handleDeleteClick = (id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        if (selection) {
            deleteMutation.mutateAsync(id)
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
                    게시글 수 : {comment.length}
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
            <div>
                {sortedPosts.map((result) => (
                    <div css={s.layout} key={result.commentId} >
                        <div css={s.view}>
                            <p>입력 날짜 : {result.commentWriteDate}</p>
                        </div>
                        <div css={s.imgTitle}>
                            <div css={s.img}>
                                {extractImageTags(result?.boardContent)}
                            </div>
                            <div css={s.title} >
                                <div>
                                    <p onClick={() => navigate(`/board/detail/${result.boardId}`)}>{result.boardTitle} </p>
                                    <p>에 단 댓글 내용</p>
                                </div>
                                <p>{result.commentContent}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div css={s.button}>
                            <button onClick={() => handleDeleteClick(result.commentId)}>삭제</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentBoard;