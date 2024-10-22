import React, { useState } from 'react';

/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { usersignInApi } from '../../apis/signInApis/usersignInApi';
import { instance } from '../../apis/util/instance';
import { showFieldErrorMessage } from '../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { handleInputOnChange } from '../../apis/util/handleInputOnChange/handleInputOnChange';

function UserSigninPage(props) {
    const navigate = useNavigate();
    const [ inputUser , setInputUser ] = useState({
        username:"",
        password:"",
        role:"USER"
    });
    const [ fieldErrorMessages , setFieldErrorMessages ] = useState({
        username : <></>,
        password : <></>
    });


    const handleOnLoginClick = async() => {
        const signinData = await usersignInApi(inputUser);
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
                <div css={s.loginTitle}>
                    <p>Login</p>
                </div>
                    <input type="text" name="username" onChange={handleInputOnChange(setInputUser)} value={inputUser.username} placeholder='아이디'/>
                    <p>{fieldErrorMessages.username}</p>
                    <input type="password" name="password" onChange={handleInputOnChange(setInputUser)} value={inputUser.password} placeholder='비밀번호'/>
                    <p>{fieldErrorMessages.password}</p>
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