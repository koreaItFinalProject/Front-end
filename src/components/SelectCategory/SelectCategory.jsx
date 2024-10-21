import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function SelectCategory({ check, setCheck }) {
    return (
        <>
            <button
                onClick={() => setCheck(check === "베이커리" ? "전체" : "베이커리")}
                css={s.bakeryButton(check === "베이커리")}
            >
                베이커리
            </button>
            <button
                onClick={() => setCheck(check === "브런치" ? "전체" : "브런치")}
                css={s.brunchButton(check === "브런치")}
            >
                브런치
            </button>
            <button
                onClick={() => setCheck(check === "분위기" ? "전체" : "분위기")}
                css={s.atmosphereButton(check === "분위기")}
            >
                분위기
            </button>
            <button
                onClick={() => setCheck(check === "디저트" ? "전체" : "디저트")}
                css={s.dessertButton(check === "디저트")}
            >
                디저트
            </button>
        </>
    );
}

export default SelectCategory;