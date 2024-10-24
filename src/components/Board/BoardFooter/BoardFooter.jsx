import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowCircleUp } from "react-icons/fa";
import { adjustTextareaHeight } from '../../../apis/util/textAreaUtil';

function BoardFooter(props) {
    const textareaRef = useRef(null);
    const commentWriteBoxRef = useRef(null);
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
            <div css={s.commentWriteBox}>
                <div css={s.commentProfileImg}>
                    <img src="" alt="" />
                </div>
                <div css={s.input}>
                    <textarea
                        name="content"
                        ref={textareaRef}
                        value={commentData.content}
                        onChange={handleCommentInputOnChange}
                        placeholder='댓글을 입력하세요.' />
                    <button><FaArrowCircleUp size={30} fill='#f2780c' /></button>
                </div>
            </div>
        </div>
    );
}

export default BoardFooter;