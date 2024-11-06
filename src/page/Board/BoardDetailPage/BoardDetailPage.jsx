/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Comments from "../../../components/Comments/Comments";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BackButton from "../../../components/BackButton/BackButton";
import BoardFooter from "../../../components/Board/BoardFooter/BoardFooter";
import { useState } from "react";
import useDeleteBoardMutation from "../../../apis/mutation/useDeleteBoardMutation/useDeleteBoardMutation";

function BoardDetailPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const boardId = params.boardId;
    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");
    const accessCheck = queryClient.getQueryData("accessTokenValidQuery");
    const deleteBoard = useDeleteBoardMutation(boardId);
    const [mode, setMode] = useState("comment");
    const [replyTo, setReplyTo] = useState("");
    const [commentData, setCommentData] = useState({
        boardId,
        parentId: null,
        content: ""
    });
    const boardData = queryClient.getQueryData(['boardQuery', boardId]);

    const board = useQuery(
        ["boardQuery", boardId],
        async () => {
            return await instance.get(`/board/${boardId}`);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
        }
    );

    const boardLike = useQuery(
        ["boardLikeQuery"],
        async () => {
            return instance.get(`/board/${boardId}/like`);
        },
        {
            refetchOnWindowFocus: false,
            retry: 0
        }
    );

    const likeMutation = useMutation(
        async () => {
            return await instance.post(`/board/${boardId}/like`);
        },
        {
            onSuccess: response => {
                boardLike.refetch();
            }
        }
    );

    const dislikeMutation = useMutation(
        async () => {
            return await instance.delete(`/board/like/${boardLike.data?.data.boardLikeId}`);
        },
        {
            onSuccess: response => {
                boardLike.refetch();
            }
        }
    );

    const handleDeleteBoardOnClick = async () => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        if (selection) {
            await deleteBoard.mutateAsync();
            queryClient.invalidateQueries('boardListQuery');
            navigate(`/board`);
        } else {
            navigate(`/board/detail/${boardId}`);
        }

    }

    const handleModifyBoardOnClick = () => {
        if (!boardData) {
            queryClient.setQueryData(['boardQuery', boardId], board.data);
        }
        navigate(`/board/modify/${params.boardId}`);
    }

    const handleLikeOnClick = () => {
        likeMutation.mutateAsync();
    }

    const handleDislikeOnClick = () => {
        dislikeMutation.mutateAsync();
    }

    const handleModifyCommentButtonOnClick = (commentId, content) => {
        setCommentData(prevComment => ({
            commentId,
            content
        }));
        setMode("modify");
    };

    const handleModifyCommentCancelButtonOnClick = () => {
        setCommentData(prevComment => ({
            commentId: 0,
            content: ""
        }));
        setMode("comment");
    };

    const handleReplyButtonOnClick = (commentId, nickname) => {
        if (!accessCheck) {
            alert("로그인 후 작성 가능합니다.");
            return;
        }
        setMode('reply');
        setCommentData(comment => ({
            ...comment,
            content: "",
            parentId: commentId === comment.parentId ? null : commentId
        }));
        setReplyTo(nickname);
    };

    const handleCancelReplyOnClick = () => {
        setCommentData(comment => ({
            ...comment,
            parentId: null
        }));
        setReplyTo("");
    };

    console.log(board);

    return (
        <div css={s.layout}>
            <BackButton prevPage={"게시판"} prevPageUrl={"/board"} />
            <div css={s.subLayout}>
                {
                    board.isLoading && <></>
                }
                {
                    board.isError && <h1>{board.error.response.data}</h1>
                }
                {
                    board.isSuccess &&
                    <>
                        <div css={s.header}>
                            <div css={s.writerInfo}>
                                <img src={board.data.data.img} alt="" />
                                <div>{board.data.data.nickname}</div>
                            </div>
                            <div css={s.title}>{board.data.data.title}</div>
                            <div css={s.boardInfoContainer}>
                                <div css={s.boardInfo}>
                                    <div>{board?.data?.data.writeDate} ·</div>
                                    <div>조회수 {board?.data?.data.viewCount}</div>
                                </div>
                                <div css={s.buttonLayout}>
                                    {
                                        board?.data?.data?.writerId === userInfoData?.data?.userId &&
                                        <>
                                            <button onClick={() => handleModifyBoardOnClick()}>수정</button>
                                            <button onClick={handleDeleteBoardOnClick}>삭제</button>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <div css={s.contentBox}>
                            <ReactQuill
                                value={board.data.data.content}
                                readOnly={true}
                                modules={{
                                    toolbar: false
                                }}
                            />
                        </div>
                        <div css={s.likeContainer}>
                            {
                                !!boardLike?.data?.data?.boardLikeId
                                    ?
                                    <button onClick={handleDislikeOnClick}>
                                        <IoMdHeart style={{ fill: '#f2780c' }} />
                                    </button>
                                    :
                                    <button onClick={handleLikeOnClick}>
                                        <IoMdHeartEmpty />
                                    </button>
                            }
                            <div>{boardLike?.data?.data.likeCount}</div>
                        </div>
                    </>
                }
                <div css={s.commentContainer}>
                    <Comments
                        setMode={setMode}
                        commentData={commentData}
                        handleModifyCommentButtonOnClick={handleModifyCommentButtonOnClick}
                        handleModifyCommentCancelButtonOnClick={handleModifyCommentCancelButtonOnClick}
                        handleReplyButtonOnClick={handleReplyButtonOnClick}
                        handleCancelReplyOnClick={handleCancelReplyOnClick}
                    />
                </div>
            </div>
            <div css={s.footer}>
                <BoardFooter
                    mode={mode}
                    setMode={setMode}
                    boardId={boardId}
                    commentData={commentData}
                    setCommentData={setCommentData}
                    replyTo={replyTo}
                    setReplyTo={setReplyTo}
                />
            </div>
        </div>
    );
}

export default BoardDetailPage;