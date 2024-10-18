import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { useNavigate } from 'react-router-dom';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';


function UserSignupPage(props) {
    const navigate = useNavigate();
    const [inputUser , setInputUser] = useState({
        username: '',
        password:'',
        checkPassword:'',
        email:'',
        name:'',
        nickname:'',
        phoneNumber:'',
        role: "USER"
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname:<></>,
        phoneNumber:<></>,
    });

    const handlesignuppageOnClick = async () => {
        console.log(inputUser);
        const signupData = await usersignupApi(inputUser);
        console.log(signupData);
        if(!signupData.isSuccess){
            const newFieldErrors = showFieldErrorMessage(signupData.fieldErrors);
            setFieldErrorMessages(newFieldErrors);
            alert("회원가입 실패");       
        }else{
            alert("가입 성공");
            navigate("/user/signin");
        }
    }

    return (
        <div>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <div>
                                <p>아이디</p>
                                <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setInputUser)} placeholder='' />
                                <p>{fieldErrorMessages.username}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>비밀번호</p>
                                <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setInputUser)} placeholder='' />
                                </div>
                                <p>{fieldErrorMessages.password}</p>
                            </div>
                        <div>
                            <p>비밀번호 확인</p>
                            <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setInputUser)} placeholder='' />
                            <p>{fieldErrorMessages.checkPassword}</p>
                            <p>{fieldErrorMessages.passwordMatching}</p>
                        </div>
                        <div>
                            <p>이름</p>
                            <input type="text" name='name' value={inputUser.name} onChange={handleInputOnChange(setInputUser)} placeholder='' />
                            <p>{fieldErrorMessages.name}</p>
                        </div>
                        <div>
                            <p>이메일</p>
                            <input type="email" name='email' value={inputUser.email} onChange={handleInputOnChange(setInputUser)} placeholder='' />
                            <p>{fieldErrorMessages.email}</p>
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='nickname' value={inputUser.nickname} onChange={handleInputOnChange(setInputUser)} placeholder='' />
                            <p>{fieldErrorMessages.nickname}</p>
                        </div>
                        <div>
                            <p>전화번호</p>
                            <input type="text" name='phoneNumber' value={inputUser.phoneNumber} onChange={handleInputOnChange(setInputUser)} placeholder='휴대전화 인증을 받아야 합니다.' />
                            {fieldErrorMessages.phoneNumber}
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