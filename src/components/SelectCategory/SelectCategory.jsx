import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { MdOutlineBakeryDining, MdOutlineBrunchDining } from 'react-icons/md';
import { TbCoffee } from 'react-icons/tb';
import { LuDessert } from 'react-icons/lu';

function SelectCategory({check, setCheck}) {
    const handleCheckClick = (e) => {
        const category = e.target.value;
        setCheck(category === check ? "전체" : category);
    };
    return (
        <>
            <button
                value={"베이커리"}
                onClick={handleCheckClick}
                css={s.bakeryButton(check === "베이커리")}
            >
                <MdOutlineBakeryDining css={s.icon} /> 베이커리
            </button>
            <button
                value={"브런치"}
                onClick={handleCheckClick}
                css={s.brunchButton(check === "브런치")}
            >
                <MdOutlineBrunchDining css={s.icon} /> 브런치
            </button>
            <button
                value={"분위기"}
                onClick={handleCheckClick}
                css={s.atmosphereButton(check === "분위기")}
            >
                <TbCoffee css={s.icon} /> 분위기
            </button>
            <button
                value={"디저트"}
                onClick={handleCheckClick}
                css={s.dessertButton(check === "디저트")}
            >
                <LuDessert css={s.icon} /> 디저트
            </button>
        </>
    );
}

export default SelectCategory;