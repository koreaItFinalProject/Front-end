import React, { useState } from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import logo from '../../assets/logo.png'
import {naver, kakao , google} from '../../assets/image'
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { GoPersonAdd } from "react-icons/go";

function UsersSignupSelectPage(props) {

    const [login , setLogin] = useState(false);
     
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
                            <button>
                                <Link to={"/owner/signup"}><GoPersonAdd/>점주 회원가입</Link>
                            </button>
                        </div>
                        <div css={s.emailbutton}>
                            <button>
                                <p>
                                    <button onClick={() => navigate("/user/signin")}>
                                        이메일로 게속하기
                                    </button>
                                </p> 
                                <p>
                                    <IoIosArrowForward/>
                                </p>
                            </button>
                        </div>
                        <div css={s.loseEmail}>
                            <button>
                                <p>
                                    계정이 기억나지 않아요.
                                </p>
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default UsersSignupSelectPage;