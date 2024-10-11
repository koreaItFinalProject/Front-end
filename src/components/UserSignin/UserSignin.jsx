import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiCheckboxCircleFill , RiCheckboxCircleLine } from "react-icons/ri";
import { naver, kakao, google } from '../../assets/image';
import { usersignInApi } from '../../apis/signInApis/usersignInApi';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../apis/util/instance';

function UserSignin(props) { // 로그인
    
    const [save , isSave] = useState(false);
    
    const navigate = useNavigate();
    const [ isLogin , setIsLogin ] = useState({
        username:"",
        password:""
    });


    const handleSaveOnChange = () => {
        isSave(!save);
        console.log(save);
    }

    const handleOnInputChange = (e) => {
        setIsLogin({
            ...isLogin,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);
    }

    const handleOnLoginClick = async() => {
        const signinData = await usersignInApi(isLogin);
        console.log(signinData);
        if(!signinData.isSuccess){
            alert("로그인 실패");
        }else{
            alert("로그인 성공");
            localStorage.setItem("accessToken", "bearer " + signinData.token.accessToken);
            instance.interceptors.request.use(config => 
                config.headers["Authorization"] = localStorage.getItem("accessToken")
            )
            navigate("/");
            }
    }

    

    return (
        <div css={s.layout}>
            <div css={s.login}>
                <div css={s.loginInput}>
                    <input type="text" name="username" onChange={handleOnInputChange} value={isLogin.username} placeholder='아이디'/>
                    <input type="password" name="password" onChange={handleOnInputChange} value={isLogin.password} placeholder='비밀번호'/>
                    <div css={s.checkbox}>
                        <span id='checkbox' onClick={handleSaveOnChange}>
                            <input type="checkbox" id='checkboxt' />
                            {
                                save 
                                ? 
                                <RiCheckboxCircleFill/>
                                :
                                <RiCheckboxCircleLine/> 
                            }
                            아이디 저장
                        </span>
                    </div>
                </div>
                <div css={s.button}>
                    <button onClick = {handleOnLoginClick}>로그인</button>
                </div>
            </div>
            <div css={s.oauth2}>
                <button>
                    <img src={naver} alt="네이버 로그인 로고" />
                </button>
                <button>
                    <img src={kakao} alt="카카오 로그인 로그" />
                </button>
                <button>
                    <img src={google} alt="구글 로그인 로고" />
                </button>
            </div>
            <div css={s.foundInfo}>
                <ol>
                    <li><button>아이디 찾기</button></li>
                    <li><button>비밀번호 찾기</button></li>
                    <li><button>회원가입</button></li>
                </ol>
            </div>
        </div>
    );
}

export default UserSignin;