/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Comments from "../../../components/Comments/Comments";
import ReactQuill from "react-quill";

function DetailPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const boardId = params.boardId;

    const queryClient = useQueryClient();
    const userInfoData = queryClient.getQueryData("userInfoQuery");

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

    const deleteBoardMutation = useMutation(
        async () => await instance.delete(`/board/${boardId}`),
        {
            onSuccess: response => {
                alert("게시글을 삭제하였습니다.");
                navigate("/board?page=1");
            }
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

    const handleDeleteBoardOnClick = () => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        if (selection) {
            deleteBoardMutation.mutateAsync();
        } else {
            navigate(`/board/detail/${boardId}`);
        }

    }

    const handleModifyBoardOnClick = () => {
        const boardData = queryClient.getQueryData(['boardQuery', boardId]);
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

    return (
        <div css={s.layout}>
            <Link to={"/board?page=1"}><h1>게시판</h1></Link>
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
                        <div css={s.titleAndLike}>
                            <h1>{board.data.data.title}</h1>
                        </div>
                        <div css={s.boardInfoContainer}>
                            <div>
                                <span>
                                    작성자: {board.data.data.nickname}
                                </span>
                                <span>
                                    작성일: {board?.data?.data.writeDate}
                                </span>
                                <span>
                                    조회수: {board?.data?.data.viewCount}
                                </span>
                                <span>
                                    추천: {boardLike?.data?.data.likeCount}
                                </span>
                            </div>
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
                    <div css={s.contentBox}>
                        <ReactQuill
                            value={board.data.data.content}
                            readOnly={true}
                            theme="snow"
                            modules={{
                                toolbar: false
                            }}
                            style={{
                                boxSizing: 'border-box',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                </>
            }
            <Comments />
        </div>
    );
}

export default DetailPage;