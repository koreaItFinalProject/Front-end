import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowCircleUp } from "react-icons/fa";
import useWriteCommentMutation from '../../../apis/CommentApis/writeCommentApi';
import useGetComments from '../../../apis/CommentApis/getCommentsApi';
import useModifyCommentMutation from '../../../apis/CommentApis/modifyCommentApi';
import { useQueryClient } from 'react-query';

function BoardFooter({ mode, setMode, boardId, commentData, setCommentData, replyTo, setReplyTo }) {
    const queryClient = useQueryClient();
    const userInfo = queryClient.getQueryData("userInfoQuery");
    const comments = useGetComments(boardId);
    const writeCommentMutation = useWriteCommentMutation(commentData, setCommentData, comments, boardId);
    const modifyCommentMutation = useModifyCommentMutation(commentData, setCommentData, comments);

    const handleCommentInputOnChange = (e) => {
        setCommentData(comment => ({
            ...comment,
            content: e.target.value
        }))
    };

    const handleCommentSubmitOnClick = () => {
        if (mode === 'comment' || mode === 'reply') {
            writeCommentMutation.mutateAsync();
            setReplyTo("");
        } else if (mode === 'modify') {
            modifyCommentMutation.mutateAsync();
        }
        setMode('comment')
    };

    return (
        <div css={s.layout}>
            <div css={s.commentProfileImg}>
                <img src={userInfo?.data.img} alt="" />
            </div>
            <div css={s.input}>
                <input
                    value={commentData.content}
                    onChange={handleCommentInputOnChange}
                    placeholder={replyTo ? `${replyTo}님에게 답글 작성` : '댓글 추가...'}
                />
                <button
                    onClick={handleCommentSubmitOnClick}
                    disabled={commentData.content.trim() === ''}
                >
                    <FaArrowCircleUp size={30} fill='#f2780c' />
                </button>
            </div>
        </div>
    );
}

export default BoardFooter;