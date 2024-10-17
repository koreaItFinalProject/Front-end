import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { oauth2MergeApi } from '../../../apis/signInApis/oauth2MergeApi';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';


function OAuth2Signup(props) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [inputUser , setinputUser] = useState({
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

    const handleMergepageOnClick = async () => {
        const mergeData = {
            username : inputUser.username,
            password : inputUser.password,
            oauth2Name : searchParams.get("oAuth2Name"),
            provider: searchParams.get("provider")
        }
        const response = await oauth2MergeApi(mergeData);
        console.log(response);
        if(!mergeData.isSuccess){
            if(mergeData.errorStatus === "loginError"){
                alert(mergeData.error);       
                return;
            }
            if(mergeData.errorStatus === "fieldError"){
                const newErrors = showFieldErrorMessage(mergeData.error);
                setFieldErrorMessages(newErrors);
                return;
            }
        }
        if(response.isSuccess){
            alert("통합 완료");
            navigate("/oauth/oauth2");
            console.log(mergeData);
        }
    }


    return (
        <div>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <p>아이디</p>
                            <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            <p>{fieldErrorMessages.username}</p>
                        </div>
                        <div>
                            <p>비밀번호</p>
                            <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            <p>{fieldErrorMessages.password}</p>
                        </div>
                        <div>
                            <p>비밀번호 확인</p>
                            <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            <p>{fieldErrorMessages.checkPassword}</p>
                        </div>
                        <div>
                            <p>이름</p>
                            <input type="text" name='name' value={inputUser.name} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            <p>{fieldErrorMessages.name}</p>
                        </div>
                        <div>
                            <p>이메일</p>
                            <input type="email" name='email' value={inputUser.email} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            <p>{fieldErrorMessages.email}</p>
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='nickname' value={inputUser.nickname} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            <p>{fieldErrorMessages.nickname}</p>
                        </div>
                        <div>
                            <p>전화번호</p>
                            <input type="text" name='phoneNumber' value={inputUser.phoneNumber} onChange={handleInputOnChange(setinputUser)} placeholder='휴대전화 인증을 받아야 합니다.' />
                            {fieldErrorMessages.phoneNumber}
                        </div>
                    </div>
                    
                    <div css={s.signupbutton}>
                        <button onClick={handleMergepageOnClick}>통합하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OAuth2Signup;