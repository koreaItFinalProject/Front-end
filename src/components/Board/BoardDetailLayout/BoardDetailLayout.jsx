import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../Header/Header';

function BoardDetailLayout({ children }) {
    return (
        <div css={s.background}>
            <div css={s.layout}>
                <div css={s.camera}>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div css={s.container}>
                    <div css={s.header}>
                        <Header />
                    </div>
                    <div css={s.children}>
                        {children}
                    </div>
                    <div css={s.footer}>
                        <div css={s.commentWriteBox}>
                            <div css={s.commentProfileImg}>
                                <img src="" alt="" />
                            </div>
                            <textarea name="content"
                                // value={commentData.content}
                                // onChange={handleCommentInputOnChange}
                                placeholder='댓글을 입력하세요.'></textarea>
                            <button>작성하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailLayout;