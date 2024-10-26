import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowCircleUp } from "react-icons/fa";

function BoardFooter(props) {
    const [commentData, setCommentData] = useState({
        content: "",
    });

    const handleCommentInputOnChange = (e) => {
        setCommentData(comment => ({
            ...comment,
            [e.target.name]: e.target.value
        }))
    };

    return (
        <div css={s.layout}>
            <div css={s.commentProfileImg}>
                <img src="" alt="" />
            </div>
            <div css={s.input}>
                <textarea
                    name="content"
                    value={commentData.content}
                    onChange={handleCommentInputOnChange}
                    placeholder='댓글을 입력하세요.' />
                <button><FaArrowCircleUp size={30} fill='#f2780c' /></button>
            </div>
        </div>
    );
}

export default BoardFooter;