import React, { useState } from 'react';

/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { usersignInApi } from '../../apis/signInApis/usersignInApi';
import { instance } from '../../apis/util/instance';
import { showFieldErrorMessage } from '../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { handleInputOnChange } from '../../apis/util/handleInputOnChange/handleInputOnChange';

function UserSigninPage(props) {
    const [save , setSave] = useState(false);
    const navigate = useNavigate();
    const [ fieldErrorMessages , setFieldErrorMessages ] = useState({
        username : <></>,
        password : <></>
    });
    const [ isLogin , setIsLogin ] = useState({
        username:"",
        password:"",
        role:"USER"
    });

    const handleSaveOnChange = () => {
        setSave(!save);
        console.log(save);
    }

    const handleOnLoginClick = async() => {
        const signinData = await usersignInApi(isLogin);
        console.log(signinData);
        console.log(signinData.error);
        if(!signinData.isSuccess){
            const newFieldErrors = showFieldErrorMessage(signinData.error);
            alert("로그인 실패");
            setFieldErrorMessages(newFieldErrors);
            return;
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
                    <input type="text" name="username" onChange={handleInputOnChange(setIsLogin)} value={isLogin.username} placeholder='아이디'/>
                    <p>{fieldErrorMessages.username}</p>
                    <input type="password" name="password" onChange={handleInputOnChange(setIsLogin)} value={isLogin.password} placeholder='비밀번호'/>
                    <p>{fieldErrorMessages.password}</p>
                    <div css={s.checkbox}>
                        <span id='checkbox' onClick={handleSaveOnChange}>
                            <input type="checkbox" id='checkboxt' />
                            아이디 저장
                        </span>
                    </div>
                    <button onClick = {handleOnLoginClick}>로그인</button>
                </div>
            </div>
            <div css={s.foundInfo}>
                <ol>
                    <li><button onClick={() => navigate()}>아이디 찾기</button></li>
                    <li><button onClick={() => navigate()}>비밀번호 찾기</button></li>
                    <li><button onClick={() => navigate("/user/signup")}>회원가입</button></li>
                </ol>
            </div>
    </div>
    );
}

export default UserSigninPage;