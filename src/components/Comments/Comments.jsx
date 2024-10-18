/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { instance } from '../../apis/util/instance';

function Comments(props) {
    const params = useParams();
    const boardId = params.boardId;

    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");
    const accessCheck = queryClient.getQueryData("accessTokenValidQuery");

    const [commentData, setCommentData] = useState({
        boardId,
        parentId: null,
        content: ""
    });

    const [modifyComment, setModifyComment] = useState({
        commentId: 0,
        parentId: null,
        content: ""
    });

    const comments = useQuery(
        ["commentsQuery"],
        async () => {
            return await instance.get(`/comment/${boardId}`);
        },
        {
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const commentMutation = useMutation(
        async () => {
            return await instance.post("/comment", commentData);
        },
        {
            onSuccess: response => {
                setCommentData({
                    boardId,
                    parentId: null,
                    content: ""
                });
                comments.refetch();
            }
        }
    );

    const modifyCommentMutation = useMutation(
        async () => await instance.put(`/comment/${modifyComment.commentId}`, modifyComment),
        {
            onSuccess: () => {
                alert("댓글을 수정하였습니다.");
                setModifyComment({
                    commentId: 0,
                    content: "",
                })
                comments.refetch();
            }
        }
    );

    const deleteCommentMutation = useMutation(
        async (commentId) => await instance.delete(`/comment/${commentId}`),
        {
            onSuccess: response => {
                comments.refetch();
            }
        }
    );

    const handleCommentInputOnChange = (e) => {
        setCommentData(comment => ({
            ...comment,
            content: e.target.value
        }));
    };

    const handleCommentSubmitOnClick = () => {
        commentMutation.mutateAsync();
    };

    const handleModifyCommentButtonOnClick = (commentId, content) => {
        setModifyComment(modifyComment => ({
            commentId,
            content
        }));
    };

    const handleModifyCommentCancelButtonOnClick = () => {
        setModifyComment(modifyComment => ({
            commentId: 0,
            content: ""
        }));
    };

    const handleModifyCommentInputOnChange = (e) => {
        setModifyComment(modifyComment => ({
            ...modifyComment,
            content: e.target.value
        }))
    };

    const handleCommentModifySubmitOnClick = () => {
        modifyCommentMutation.mutateAsync();
    };

    const handleDeleteCommentButtonOnClick = (commentId) => {
        const selection = window.confirm("댓글을 삭제하시겠습니까?");
        if (selection) {
            deleteCommentMutation.mutateAsync(commentId);
        }
    };

    const handleReplyButtonOnClick = (commentId) => {
        if(!accessCheck) {
            alert("로그인 후 작성가능합니다.");
            return;
        }
        setCommentData(comment => ({
            ...comment,
            content: "",
            parentId: commentId === comment.parentId ? null : commentId
        }));
    };

    const handleCancelReplyOnClick = () => {
        setCommentData(comment => ({
            ...comment,
            parentId: null
        }));
    };

    return (
        <div css={s.commentContainer}>
            <h2>댓글</h2>
            {
                commentData.parentId === null &&
                <div css={s.commentWriteBox(0)}>
                    <textarea name="content"
                        value={commentData.content}
                        onChange={handleCommentInputOnChange}
                        placeholder='댓글을 입력하세요.'></textarea>
                    <button onClick={handleCommentSubmitOnClick}>작성하기</button>
                </div>
            }
            <div>
                {
                    comments?.data?.data.comments.map(comment =>
                        <div key={comment.id}>
                            <div css={s.commentListContainer(comment.level)}>
                                <div>
                                    <img src={comment.img} alt="" />
                                </div>
                                <div css={s.commentDetail}>
                                    <div css={s.detailHeader}>
                                        <span>{comment.username}</span>
                                        <span>{new Date(comment.writeDate).toLocaleString()}</span>
                                    </div>
                                    <pre css={s.detailContent}>{comment.content}</pre>
                                    <div css={s.detailButtons}>
                                        {
                                            userInfoData?.data?.userId === comment.writerId &&
                                            <div>
                                                {
                                                    modifyComment.commentId === comment.id
                                                        ?
                                                        <button onClick={handleModifyCommentCancelButtonOnClick}>취소</button>
                                                        :
                                                        <button onClick={() => handleModifyCommentButtonOnClick(comment.id, comment.content)}
                                                            disabled={comments.parentId === comment.id}>수정</button>
                                                }
                                                <button onClick={() => handleDeleteCommentButtonOnClick(comment.id)}
                                                    disabled={comment.parentId === comment.id || modifyComment.commentId === comment.id}>삭제</button>
                                            </div>
                                        }
                                        {
                                            comment.level < 3 &&
                                            <div>
                                                {
                                                    comment.parentId === comment.id
                                                        ?
                                                        <button onClick={handleCancelReplyOnClick}>취소</button>
                                                        :
                                                        <button onClick={() => handleReplyButtonOnClick(comment.id)}
                                                            disabled={modifyComment.commentId === comment.id}>답글</button>
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                commentData.parentId === comment.id &&
                                <div css={s.commentWriteBox(comments.level)}>
                                    <textarea name="content" onChange={handleCommentInputOnChange}
                                        value={commentData.content} placeholder='답글을 입력하세요.'></textarea>
                                    <button onClick={handleCommentSubmitOnClick}>작성하기</button>
                                </div>
                            }
                            {
                                modifyComment.commentId === comment.id &&
                                <div css={s.commentWriteBox(comment.level)}>
                                    <textarea name="content" onChange={handleModifyCommentInputOnChange} value={modifyComment.content}></textarea>
                                    <button onClick={handleCommentModifySubmitOnClick}>수정하기</button>
                                </div>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Comments;