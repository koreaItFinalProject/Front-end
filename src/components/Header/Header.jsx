import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    // 로그인 페이지 이동
    const signup = () => {
        navigate("/signup");
    }

    // 회원가입 페이지 이동
    const signin = () => {
        navigate("/signin");
    }

    // 게시판 페이지 이동
    const boardPage = () => {
        navigate("/board");
    }

    // 리스트 페이지 이동
    const listPage = () => {
        navigate("/list");
    }

    // 맵 페이지 이동
    const mapPage = () => {
        navigate("/map");
    }

    const eventPage = () => {
        navigate("/event");
    }

    return (
        <div css={s.layout}>
            <div css={s.highBar}>
                <div>
                    <button onClick={signin}>로그인</button>
                    <button onClick={signup}>회원가입</button>
                </div>
            </div>
            <div css={s.logo}>
                <div>
                    <button onClick={()=> navigate("/")}>
                        <img src="https://img.craiyon.com/2024-10-07/S-BEupxFSh2QESqNqrpyoA.webp" alt='로고'></img>
                    </button>
                </div>
                <div css={s.manubar}>
                    <button onClick={boardPage}>게시판</button>
                    <button onClick={listPage}>리스트</button>
                    <button onClick={mapPage}>지도</button>
                    <button onClick={eventPage}>이벤트</button>
                </div>
            </div>
        </div>
    );
}

export default Header;