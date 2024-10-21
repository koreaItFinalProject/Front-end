import React, { useEffect, useRef } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { IoIosStarOutline } from "react-icons/io";

function CafeReviewPage(props) {
    const textareaRef = useRef(null);

    const handleTextareaChange = (e) => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // 높이를 자동으로 설정
        textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞게 높이 조정
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // 초기 높이 설정
            textarea.style.height = `${textarea.scrollHeight}px`; // 내용에 맞게 높이 조정
        }
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.rating}>
                <h1>Knockout</h1>
                <div css={s.reviewStat}>
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                </div>
            </div>
            <div css={s.category}>
                <div>어떤 카페인가요?</div>
                <div css={s.buttons}>
                    <button>베이커리</button>
                    <button>브런치</button>
                    <button>분위기</button>
                    <button>디저트</button>
                </div>
            </div>
            <div css={s.review}>
                <h2>후기를 작성해 보세요!</h2>
                <div css={s.textarea}>
                    <textarea 
                        name="" 
                        id="" 
                        ref={textareaRef}
                        onChange={handleTextareaChange}
                        placeholder='유용한 팁을 알려주세요! 작성한 내용은 마이페이지 카페 상세페이지에 노출 됩니다.'></textarea>
                </div>
                <button>작성 완료</button>
            </div>
        </div>
    );
}

export default CafeReviewPage;