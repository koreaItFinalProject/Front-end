import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { animationDirectionState } from '../../atom/animationDirection';
import { pageCounter } from '../../atom/pageCount';

function BackButton({ prevPage }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [direction, setDirection] = useRecoilState(animationDirectionState);
    const [pageCount, setPageCount] = useRecoilState(pageCounter);

    const handleBackClick = () => {
        setDirection('right-to-left')
        let page = pageCount <= 3 ? pageCount - 1 : pageCount;
        if (pageCount <= 3&&location.pathname.includes("/board")) {
            page += 1;
        }
        navigate((page - 1 <= 0 ? 1 : page - 1) * -1);
        setPageCount(0);
    };


    return (
        <div css={s.layout}>
            <button onClick={handleBackClick}><FaArrowLeft /></button>
            <p>{prevPage}</p>
        </div>
    );
}

export default BackButton;