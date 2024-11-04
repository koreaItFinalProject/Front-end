import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from '../../assets/logo.png'
import { naver, kakao, google } from '../../assets/image';
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { IoPersonAddSharp } from "react-icons/io5";

function UserSignupSelectPage(props) {
     
    const navigate = useNavigate();
    const naverLocation = "http://localhost:8080/oauth2/authorization/naver";
    const kakaoLocation = "http://localhost:8080/oauth2/authorization/kakao";
    const googleLocation = "http://localhost:8080/oauth2/authorization/google";
    return (
            <div css={s.layout}>
                <div css={s.logo}> 
                    <h1>CafeInBusan</h1>
                </div>
                <div css={s.loginMain}>
                    <div css={s.selectMember}>
                        <button css={s.naver} onClick={() => window.location.href = naverLocation}>
                            <img src={naver} alt="Naver Logo"/>
                            <p>네이버로 시작하기</p>
                        </button>
                        <button css={s.kakao} onClick={() => window.location.href = kakaoLocation}>
                            <img src={kakao} alt="kakao Logo"/>
                            <p>카카오로 시작하기</p>
                        </button>
                        <button css={s.google} onClick={() => window.location.href = googleLocation}>
                            <img src={google} alt="kakao Logo"/>
                            <p>google로 시작하기</p>
                        </button>
                        <button onClick = {() => navigate("/user/owner/signup") } css={s.ownerButton}>
                            <IoPersonAddSharp />
                            <p>점주로 시작하기</p>
                        </button>
                    </div>
                    <div css={s.emailbutton}>
                        <button onClick={() => navigate("/user/signin")}>
                            아이디로 게속하기
                        <p>
                            <IoIosArrowForward/>
                        </p>
                        </button>
                    </div>
                    <div css={s.ownerloginButton}>
                        <p>점주들은 아이디로만 로그인 하실 수 있습니다.</p>
                    </div>
                    <div css={s.loseEmail}>
                        <button onClick={() => navigate("/user/find")}>
                            계정이 기억나지 않아요.
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default UserSignupSelectPage;