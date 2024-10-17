import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from '../../assets/logo.png'
import {naver, kakao , google} from '../../assets/image'
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { GoPersonAdd } from "react-icons/go";

function UsersSignupSelectPage(props) {
     
    const navigate = useNavigate();
  
    return (
        <div>
            <div css={s.layout}>
                <div css={s.logo}> 
                    <img src={logo} alt="" />
                    <h1>CAFE DEV</h1>
                </div>
                <div css={s.loginMain}>
                    <div css={s.selectMember}>
                        <a href="http://localhost:8080/oauth2/authorization/naver"><img src={naver} alt="" /></a>
                        <a href="http://localhost:8080/oauth2/authorization/kakao"><img src={kakao} alt="" /></a>
                        <a href="http://localhost:8080/oauth2/authorization/google"><img src={google} alt="" /></a>
                        <button onClilck = {() => navigate("/owner/signup") }>
                            <GoPersonAdd/>
                            <div>
                                <button onClick={() => navigate("/owner/signup")}>
                                    점주 회원가입
                                </button>
                            </div>
                        </button>
                    </div>
                    <div css={s.emailbutton}>
                        <button>
                            <button onClick={() => navigate("/user/signin")}>
                                이메일로 게속하기
                            <p>
                                <IoIosArrowForward/>
                            </p>
                            </button>
                        </button>
                    </div>
                    <div css={s.loseEmail}>
                        <button onClick={() => navigate("/user/find")}>
                            계정이 기억나지 않아요.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UsersSignupSelectPage;