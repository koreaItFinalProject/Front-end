import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function BackButton({ prevPage, prevPageUrl }) {
    const navigate = useNavigate();

    return (
        <div css={s.layout}>
            <button onClick={() => navigate(prevPageUrl)}><FaArrowLeft /></button>
            <p>{prevPage}</p>
        </div>
    );
}

export default BackButton;