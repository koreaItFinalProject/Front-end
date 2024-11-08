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
import { confirmCancelAlert } from "../../../apis/util/SweetAlert2/ConfirmCancelAlert/ConfirmCancelAlert";
import { confirmAlert } from "../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";

function BoardDetailPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const boardId = params.boardId;
    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");
    const accessCheck = queryClient.getQueryData("accessTokenValidQuery");
    const deleteBoard = useDeleteBoardMutation(boardId, "boardListQuery");
    const [mode, setMode] = useState("comment");
    const [replyTo, setReplyTo] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
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
            onSuccess: () => {
                boardLike.refetch();
            }
        }
    );

    const dislikeMutation = useMutation(
        async () => {
            return await instance.delete(`/board/like/${boardLike.data?.data.boardLikeId}`);
        },
        {
            onSuccess: () => {
                boardLike.refetch();
            }
        }
    );

    const reportMutation = useMutation(
        async(report) => await instance.post("/report", report),
        {
            onSuccess: (response) => {
                confirmAlert(response.data);
            }
        }
    )

    const handleDeleteBoardOnClick = async () => {
        const selection = await confirmCancelAlert("게시글을 삭제하시겠습니까?");
        if (selection) {
            deleteBoard.mutateAsync();
            navigate("/board?page=1");
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
            confirmAlert("로그인 후 작성 가능합니다.");
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

    const handleLikeClick = () => {
        setIsAnimating(true);
        handleLikeOnClick();
        setTimeout(() => setIsAnimating(false), 300); // 애니메이션 시간 후에 클래스 제거
    };

    const handleDislikeClick = () => {
        setIsAnimating(true);
        handleDislikeOnClick();
        setTimeout(() => setIsAnimating(false), 300); // 애니메이션 시간 후에 클래스 제거
    };

    const handleReportOnClick = async(board) => {
        if (!userInfoData?.data) {
            confirmAlert("로그인을 하신 후 이용해 주시기 바랍니다.");
            return;
        }

        if(await confirmCancelAlert("정말 신고하시겠습니까?")){
            const requstBody = {
                contentId: board?.id,
                content: board?.title,
                reportId: userInfoData?.data?.userId,
                reportType: "게시글",
            }
            reportMutation.mutateAsync(requstBody);
        }
        console.log(board)
        return;
        
    }

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
                                    <button onClick={() => handleReportOnClick(board?.data?.data)}>신고</button>
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
                                    <button onClick={handleDislikeClick}
                                        className={isAnimating ? 'animate' : ''}
                                    >
                                        <IoMdHeart style={{ fill: '#f2780c' }} />
                                    </button>
                                    :
                                    <button onClick={handleLikeClick}
                                        className={isAnimating ? 'animate' : ''}
                                    >
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