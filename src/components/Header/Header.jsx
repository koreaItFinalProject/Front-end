import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import MainLayout from '../MainLayout/MainLayout';

function Header() {

    const navigate = useNavigate();

    return (
        <>
            <div css={s.layout}>
                <div css={s.highBar}>
                    <div>
                        <button onClick={() => navigate('/signin')}>로그인</button>
                        <button onClick={() => navigate('/signup')}>회원가입</button>
                    </div>
                </div>
                <div css={s.logo}>
                    <div>
                        <button onClick={()=> navigate("/")}>
                            <img src={logo} alt='로고'></img>
                        </button>
                    </div>
                    <div css={s.manubar}>

                        <button onClick={() => navigate('/board?page=1')}>게시판</button>
                        <button onClick={() => navigate('/list')}>리스트</button>
                        <button onClick={() => navigate('/map')}>지도</button>
                        <button onClick={() => navigate('/event')}>이벤트</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;