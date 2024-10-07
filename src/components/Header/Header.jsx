import React from 'react';
/** @jsxImportSource @emotion/react */
import { css as s } from "@emotion/react";
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

    return (
        <div css={s.layout}>
            <div css={s.highBar}>
                <button onClick={signin}>로그인</button>
                <button onClick={signup}>회원가입</button>
            </div>
            <div css={s.logo}>
                {/* <button onClick={navigate("/")}>로고</button> */}
            </div>
        </div>
    );
}

export default Header;