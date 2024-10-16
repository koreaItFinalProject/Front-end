import React, { useState } from 'react';

/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import { usersignInApi } from '../../apis/signInApis/usersignInApi';
import { instance } from '../../apis/util/instance';

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

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyfieldErrors = {
            username : <></>,
            password : <></>,
        };

        for(let fieldError of fieldErrors){
            EmptyfieldErrors = {
                ...EmptyfieldErrors,
                [fieldError.field] : <p>{fieldError.defaultMessage}</p>
            }
        }
        setFieldErrorMessages(EmptyfieldErrors);
    }


    const handleSaveOnChange = () => {
        setSave(!save);
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
            showFieldErrorMessage(signinData.error);
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