import React, { useState } from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSignin from '../../components/UserSignin/UserSignin';
import logo from '../../assets/logo.png'
import {naver, kakao , google} from '../../assets/image'
import { IoIosArrowForward } from "react-icons/io";

function UserSigninPage(props) {

    const [login , setLogin] = useState(false);
    const handleLoginStateOnClick = () => {
        setLogin(false);
        console.log(login);
    }
  
    return (
        <div>
            <div css={s.layout}>
                <div css={s.logo}> 
                    <img src={logo} alt="" />
                    <h1>CAFE DEV</h1>
                </div>
                <div css={s.loginMain}>
                        <div css={s.selectMember}>
                            <button><img src={kakao} alt="" /></button>
                            <button><img src={naver} alt="" /></button>
                            <button><img src={google} alt="" /></button>
                        </div>
                        <div css={s.emailbutton}>
                            <button>
                                <p>
                                    이메일로 게속하기
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

export default UserSigninPage;