import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function CafeReviewPage(props) {;
    return (
        <div css={s.layout}>
            <div css={s.rating}>
                <h1>Knockout</h1>
            </div>
            <div css={s.category}>
                <div>어떤 카페인가요?</div>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div css={s.review}>
                <div>후기를 작성해 보세요!</div>
                <textarea name="" id="" placeholder='유용한 팁을 알려주세요! 작성한 내용은 마이페이지 카페 상세페이지에 노출 됩니다.'></textarea>
                <button>작성 완료</button>
            </div>
        </div>
    );
}

export default CafeReviewPage;