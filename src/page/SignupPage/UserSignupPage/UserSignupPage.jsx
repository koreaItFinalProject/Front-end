import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import { usersignupApi } from '../../../apis/signInApis/usersignupApi';
import { useNavigate } from 'react-router-dom';


function UserSignupPage(props) {
    const navigate = useNavigate();
    const [loginState , setLoginState] = useState({
        username: '',
        password:'',
        checkPassword:'',
        email:'',
        nickname:'',
        name:'',
    })

    const handleInputOnChange =(e)=> {
        setLoginState({
            ...loginState,
            [e.target.name] : e.target.value
        })
        console.log([e.target.name]+':'+e.target.value);
    }

    const handlesignuppageOnClick = async () => {
        console.log(loginState);
        const signupData = await usersignupApi(loginState);
        console.log(signupData);

        // alert("가입 성공");
        // navigate("/user/signin");
    }

    return (
        <div>
            <Header/>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <p>아이디</p>
                            <input type="text" name='username' value={loginState.username} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>비밀번호</p>
                            <input type="password" name='password' value={loginState.password} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>비밀번호 확인</p>
                            <input type="password" name='checkPassword' value={loginState.checkPassword} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>이름</p>
                            <input type="text" name='name' value={loginState.name} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>이메일</p>
                            <input type="email" name='email' value={loginState.email} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='nickname' value={loginState.nickname} onChange={handleInputOnChange} placeholder='' />
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