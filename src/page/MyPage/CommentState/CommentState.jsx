import React, { useCallback, useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';

function CommentState({ comment, board }) {
    const [recent, setRecent] = useState(false);
    const navigate = useNavigate();
    const sortedPosts = [...comment].sort((a, b) => b.id - a.id);

    console.log(comment);
    console.log(board);

    const handeleOnRecentClick = () => {
        setRecent(!recent);
    }

    const handleDeleteClick = async (id) => {
        const selection = window.confirm("게시글을 삭제하시겠습니까?");
        let response = null;
        if (selection) {
            console.log(response);
        } else if (response.status !== 200) {
            alert("삭제 실패")
        }
    }

    const handleDateCut = useCallback((write_date) => {
        if (write_date) {
            const dateOnly = new Date(write_date).toISOString().split('T')[0];
            console.log(dateOnly); // "YYYY-MM-DD" 형식의 날짜만 출력
            return dateOnly;
        }
        return null;
    }, [comment.write_date])

    useEffect(() => {
        handleDateCut(comment.write_date);
    }, [comment.write_date]);

    return (
        <div css={s.mainLayout}>
            <div css={s.AllPost}>
                <p>
                    게시글 수 : {comment.length}
                </p>
            </div>
            <div css={s.select}>
                {
                    !recent ?
                        <button onClick={handeleOnRecentClick}>최신순</button>
                        :
                        <button onClick={handeleOnRecentClick}>과거순</button>
                }
            </div>
            <di>
                {sortedPosts.map((result) => (
                    <div css={s.layout} key={result.id} >
                        <div css={s.view}>
                            <p>입력 날짜 : {result.write_date}</p>
                        </div>
                        <div css={s.imgTitle}>
                            <div css={s.title} onClick={() => navigate(`/board/detail/${result.board_id}`)} >
                                <p>{result.content}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div css={s.button}>
                            <button onClick={() => handleDeleteClick(result.id)}>삭제</button>
                        </div>
                    </div>
                ))}
            </di>
        </div>
    );
}

export default CommentState;