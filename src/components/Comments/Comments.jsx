import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function Comments(props) {
    

    return (
        <div css={s.commentContainer}>
                        <h2>댓글</h2>
                        {
                            // commentData.parentId === null &&
                            <div css={s.commentWriteBox(0)}>
                                <textarea name="content" placeholder='댓글을 입력하세요.'></textarea>
                                <button>작성하기</button>
                            </div>
                        }
                        {/* <div>
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
                                                    <span>{new Date(comment.createDate).toLocaleString()}</span>
                                                </div>
                                                <pre css={s.detailContent}>{comment.content}</pre>
                                                <div css={s.detailButtons}>
                                                    {
                                                        // userInfoData?.data?.userId === comment.writerId &&
                                                        <div>
                                                            {
                                                                modifyCommentData.commentId === comment.id
                                                                    ?
                                                                    <button onClick={handleModifyCommentCancelButtonOnClick}>취소</button> // id가 같을때는 취소버튼이 보인다. 취소 버튼을 누르면 id가 0으로 초기화되면서 수정버튼이 보이게 된다.
                                                                    :
                                                                    <button onClick={() => handleModifyCommentButtonOnClick(comment.id, comment.content)} disabled={commentData.parentId === comment.id}>수정</button>
                                                            }
                                                            <button onClick={() => handleDeleteCommentButtonOnClick(comment.id)}
                                                                disabled={commentData.parentId === comment.id || modifyCommentData.commentId === comment.id}>삭제</button>
                                                        </div>
                                                    }
                                                    {
                                                        comment.level < 3 &&
                                                        <div>
                                                            <button onClick={() => handleReplyButtonOnClick(comment.id)} disabled={modifyCommentData.commentId === comment.id}>답글</button>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            commentData.parentId === comment.id && // 처음엔 답글 작성란이 렌더링 되지 않다가 handleReplyButtonOnClick으로 인해 버튼을 누르면 보임(토글)
                                            <div css={s.commentWriteBox(comment.level)}>
                                                <textarea name="content" onChange={handleCommentInputOnChange} value={commentData.content} placeholder='댓글을 입력하세요.'></textarea>
                                                <button>작성하기</button>
                                            </div>
                                        }
                                        {
                                            modifyCommentData.commentId === comment.id &&
                                            <div css={s.commentWriteBox(comment.level)}>
                                                <textarea name="content" onChange={handleModifyCommentInputOnChange} value={modifyCommentData.content}></textarea>
                                                <button onClick={handleCommentModifySubmitOnClick}>수정하기</button>
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        </div> */}
                    </div>
    );
}

export default Comments;