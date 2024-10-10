/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useMutation, useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

function DetailPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const boardId = params.boardId;

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

    const deleteBoardMutation = useMutation(
        async() => await instance.delete(`/board/${boardId}`),
        {
            onSuccess: response => {
                alert("게시글을 삭제하였습니다.");
                navigate("/board?page=1");
            }
        }
    )

    const handleDeleteBoardOnClick = () => {
        deleteBoardMutation.mutateAsync();
    }

    return (
        <div css={s.layout}>
            <Link to={"/"}><h1>사이트 로고</h1></Link>
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
                                    작성일: {board.data.data.writeDate}
                                </span>
                                <span>
                                    조회수: {board.data.data.viewCount}
                                </span>
                                <span>
                                    추천: 5
                                </span>
                            </div>
                            <div>
                                <button>수정</button>
                                <button onClick={handleDeleteBoardOnClick}>삭제</button>
                            </div>
                        </div>
                    </div>
                    <div css={s.contentBox} dangerouslySetInnerHTML={{
                        __html: board.data.data.content
                    }}>
                    </div>
                </>
            }
        </div>
    );
}

export default DetailPage;