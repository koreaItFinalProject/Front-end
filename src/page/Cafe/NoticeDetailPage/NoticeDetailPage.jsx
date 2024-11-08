/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Comments from "../../../components/Comments/Comments";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BackButton from "../../../components/BackButton/BackButton";
import BoardFooter from "../../../components/Board/BoardFooter/BoardFooter";
import { useState } from "react";
import useGetComments from "../../../apis/CommentApis/getCommentsApi";
import useDeleteBoardMutation from "../../../apis/mutation/useDeleteBoardMutation/useDeleteBoardMutation";

function NoticeDetailPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cafeId = queryParams.get('cafeId');
    const cafeName = queryParams.get('cafeName');
    const boardId = params.boardId;
    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");
    const accessCheck = queryClient.getQueryData("accessTokenValidQuery");
    const [mode, setMode] = useState("comment");
    const [replyTo, setReplyTo] = useState("");

    const deleteBoard = useDeleteBoardMutation(boardId);

    const [commentData, setCommentData] = useState({
        boardId,
        parentId: null,
        content: ""
    });

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

    const comments = useGetComments(boardId);

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

    const handleDeleteBoardOnClick = () => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        if (selection) {
            deleteBoard.mutateAsync();
        } else {
            navigate(`/board/detail/${boardId}`);
        }

    }

    const handleModifyBoardOnClick = () => {
        const boardData = queryClient.getQueryData(['boardQuery', boardId]);
        if (!boardData) {
            queryClient.setQueryData(['boardQuery', boardId], board.data);
        }
        navigate(`/owner/notice/modify/${params.boardId}`);
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
            confirmAlert("로그인 후 작성 가능합니다.");
            return;
        }
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

    return (
        <div css={s.layout}>
            <BackButton prevPage={cafeName} prevPageUrl={`/cafe/detail/${cafeId}?&selectMenu=notice`} />
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
                                <img src="" alt="" />
                                <div>{board.data.data.nickname}</div>
                            </div>
                            <div css={s.title}>
                                <div>{board.data.data.title}</div>
                            </div>
                            <div css={s.boardInfoContainer}>
                                <div css={s.boardInfo}>
                                    <div>{board?.data?.data.writeDate}</div>
                                    <div>조회수 {board?.data?.data.viewCount}</div>
                                    <div>좋아요 {boardLike?.data?.data.likeCount}</div>
                                </div>
                                <div css={s.buttonLayout}>
                                    <div>
                                        {
                                            !!boardLike?.data?.data?.boardLikeId
                                                ?
                                                <button onClick={handleDislikeOnClick}>
                                                    <IoMdHeart />
                                                </button>
                                                :
                                                <button onClick={handleLikeOnClick}>
                                                    <IoMdHeartEmpty />
                                                </button>
                                        }
                                    </div>
                                    <div>
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
                    </>
                }
                <div css={s.commentContainer}>
                    <Comments
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
                    boardId={boardId}
                    commentData={commentData}
                    setCommentData={setCommentData}
                    replyTo={replyTo}
                />
            </div>
        </div>
    );
}

export default NoticeDetailPage;