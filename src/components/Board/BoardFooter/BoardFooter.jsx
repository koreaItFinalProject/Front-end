import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowCircleUp } from "react-icons/fa";
import useWriteCommentMutation from '../../../apis/CommentApis/writeCommentApi';
import useGetComments from '../../../apis/CommentApis/getCommentsApi';
import useModifyCommentMutation from '../../../apis/CommentApis/modifyCommentApi';

function BoardFooter({ mode, boardId, commentData, setCommentData, replyTo }) {

    const comments = useGetComments(boardId);
    const writeCommentMutation = useWriteCommentMutation(commentData, setCommentData, comments);
    const modifyCommentMutation = useModifyCommentMutation(commentData, setCommentData, comments)

    const handleCommentInputOnChange = (e) => {
        setCommentData(comment => ({
            ...comment,
            content: e.target.value
        }))
    };

    const handleCommentSubmitOnClick = () => {
        if (mode === 'comment') {
            writeCommentMutation.mutateAsync();
        } else if (mode === 'modify') {
            modifyCommentMutation.mutateAsync();
        }
    };

    console.log(commentData);

    return (
        <div css={s.layout}>
            <div css={s.commentProfileImg}>
                <img src="" alt="" />
            </div>
            <div css={s.input}>
                <textarea
                    value={commentData.content}
                    onChange={handleCommentInputOnChange}
                    placeholder={replyTo ? `${replyTo}님에게 답글 작성` : '댓글을 입력하세요.'} />
                <button onClick={handleCommentSubmitOnClick}>
                    <FaArrowCircleUp size={30} fill='#f2780c'/>
                </button>
            </div>
        </div>
    );
}

export default BoardFooter;