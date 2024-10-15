import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { useNavigate } from 'react-router-dom';


function UserSignupPage(props) {
    const navigate = useNavigate();
    const [loginState , setLoginState] = useState({
        username: '',
        password:'',
        checkPassword:'',
        email:'',
        name:'',
        nickname:'',
        role: "USER"
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname:<></>,
    });

    const handleInputOnChange =(e)=> {
        setLoginState({
            ...loginState,
            [e.target.name] : e.target.value
        })
    }

    const handlesignuppageOnClick = async () => {
        console.log(loginState);
        const signupData = await usersignupApi(loginState);
        console.log(signupData);
        if(!signupData.isSuccess){
            ShowFiledError(signupData.fieldErrors);
            alert("회원가입 실패");       
        }else{
            alert("가입 성공");
            navigate("/signin");
        }
    }

    const ShowFiledError = (fieldErrors) => {
        let EmptyfieldErrors = {
            username: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            email: <></>,
            nickname:<></>,
        }
      
        // 해당 에러하나에 하나씩 채워줌 - 키 밸류 형태로 넣음 리스트에 객체 형태
        for (let fieldError of fieldErrors) {
            EmptyfieldErrors = {
                ...EmptyfieldErrors,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }
        setFieldErrorMessages(EmptyfieldErrors);
      }

    

    return (
        <div>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div ccs={s.inputStyle}>
                            <p>아이디</p>
                            <input type="text" name='username' value={loginState.username} onChange={handleInputOnChange} placeholder='' />
                            <p>{fieldErrorMessages.username}</p>
                        </div>
                        <div>
                            <p>비밀번호</p>
                            <input type="password" name='password' value={loginState.password} onChange={handleInputOnChange} placeholder='' />
                            <p>{fieldErrorMessages.password}</p>
                        </div>
                        <div>
                            <p>비밀번호 확인</p>
                            <input type="password" name='checkPassword' value={loginState.checkPassword} onChange={handleInputOnChange} placeholder='' />
                            <p>{fieldErrorMessages.checkPassword}</p>
                        </div>
                        <div>
                            <p>이름</p>
                            <input type="text" name='name' value={loginState.name} onChange={handleInputOnChange} placeholder='' />
                            <p>{fieldErrorMessages.name}</p>
                        </div>
                        <div>
                            <p>이메일</p>
                            <input type="email" name='email' value={loginState.email} onChange={handleInputOnChange} placeholder='' />
                            <p>{fieldErrorMessages.email}</p>
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='nickname' value={loginState.nickname} onChange={handleInputOnChange} placeholder='' />
                            <p>{fieldErrorMessages.nickname}</p>
                        </div>
                    </div>
                    
                    <div css={s.signupbutton}>
                        <button onClick={ handlesignuppageOnClick}>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSignupPage;