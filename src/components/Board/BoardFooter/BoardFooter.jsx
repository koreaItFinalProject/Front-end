import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowCircleUp } from "react-icons/fa";

function BoardFooter(props) {
    return (
        <div css={s.layout}>
            <div css={s.commentWriteBox}>
                <div css={s.commentProfileImg}>
                    <img src="" alt="" />
                </div>
                <div css={s.input}>
                <input name="content"
                    // value={commentData.content}
                    // onChange={handleCommentInputOnChange}
                    placeholder='댓글을 입력하세요.' />
                    <button><FaArrowCircleUp size={30} fill='#f2780c'/></button>
                </div>
            </div>
        </div>
    );
}

export default BoardFooter;