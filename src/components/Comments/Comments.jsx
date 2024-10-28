/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import useGetComments from "../../apis/CommentApis/getCommentsApi";
import { instance } from "../../apis/util/instance";

function Comments({
    commentData,
    handleModifyCommentButtonOnClick,
    handleModifyCommentCancelButtonOnClick,
    handleReplyButtonOnClick,
    handleCancelReplyOnClick
}) {
    const params = useParams();
    const boardId = params.boardId;

    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");

    const comments = useGetComments(boardId);

    const deleteCommentMutation = useMutation(
        async (commentId) => await instance.delete(`/comment/${commentId}`),
        {
            onSuccess: response => {
                comments.refetch();
            }
        }
    );

    const handleDeleteCommentButtonOnClick = (commentId) => {
        const selection = window.confirm("댓글을 삭제하시겠습니까?");
        if (selection) {
            deleteCommentMutation.mutateAsync(commentId);
        }
    };

    return (
        <>
            <div css={s.commentContainer}>
                <div css={s.title}>
                    <div>댓글</div>
                    <div>{comments?.data?.data.commentCount}</div>
                </div>
                <div>
                    {
                        comments?.data?.data.comments.map(comment =>
                            <div key={comment.id}>
                                <div css={s.commentListContainer(comment.level)}>
                                    <div css={s.userInfo}>
                                        <img src={comment.img} alt="" />
                                        <div>{comment.nickname}</div>
                                        <span>{new Date(comment.writeDate).toLocaleString()}</span>
                                    </div>
                                    <div css={s.commentDetail}>
                                        <pre css={s.detailContent}>{comment.content}</pre>
                                        <div css={s.detailButtons}>
                                            {
                                                comment.level < 2 &&
                                                <div css={s.replyButton}>
                                                    {
                                                        commentData.parentId === comment.id
                                                            ?
                                                            <button onClick={handleCancelReplyOnClick}>취소</button>
                                                            :
                                                            <button onClick={() => handleReplyButtonOnClick(comment.id, comment.nickname)}>답글</button>
                                                    }
                                                </div>
                                            }
                                            {
                                                userInfoData?.data?.userId === comment.writerId &&
                                                <div css={s.editDelete}>
                                                    {
                                                        commentData.commentId === comment.id
                                                            ?
                                                            <button onClick={handleModifyCommentCancelButtonOnClick}>취소</button>
                                                            :
                                                            <button onClick={() => handleModifyCommentButtonOnClick(comment.id, comment.content)}
                                                                disabled={comments.parentId === comment.id}>수정</button>
                                                    }
                                                    <button onClick={() => handleDeleteCommentButtonOnClick(comment.id)}
                                                        disabled={comment.parentId === comment.id || commentData.commentId === comment.id}>삭제</button>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Comments;