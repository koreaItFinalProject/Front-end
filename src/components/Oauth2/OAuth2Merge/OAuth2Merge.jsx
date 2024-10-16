import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { oauth2MergeApi } from '../../../apis/signInApis/oauth2MergeApi';
import { oAuth2SignupApi } from '../../../apis/signInApis/oAuth2SignupApi';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';


function OAuth2Merge(props) {
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

    const ShowFiledError = (fieldErrors) => {
        let EmptyfieldErrors = {
            username: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            email: <></>,
            nickname:<></>,
            phoneNumber:<></>
        }

        for (let fieldError of fieldErrors) {
            EmptyfieldErrors = {
                ...EmptyfieldErrors,
                [fieldError.field]: <p>{fieldError.defaultMessage}</p>
            }
        }
        setFieldErrorMessages(EmptyfieldErrors);
    }

    // const handleInputOnChange =(e)=> {
    //     setLoginState({
    //         ...loginState,
    //         [e.target.name] : e.target.value
    //     })
    // }

    const handleMergepageOnClick = async () => {
        const mergeData = {
            username : inputUser.username,
            password : inputUser.password,
            oAuth2Name : searchParams.get("oAuth2Name"),
            provider: searchParams.get("provider")
        }
        console.log(mergeData);
        const response = await oauth2MergeApi(mergeData);
        console.log(response);
        if(!mergeData.isSuccess){
            if(mergeData.errorStatus === "loginError"){
                alert(mergeData.error);       
                return;
            }
            if(mergeData.errorStatus === "fieldError"){
                ShowFiledError(mergeData.error);
                return;
            }
            }else{
                alert("통합 완료");
                navigate("/signin");
            }
    }

    const handleJoinSubmitOnClick = async () => {
        const joinUser = {
         ...inputUser,
         oauth2Name : searchParams.get("oAuth2Name"),
         provider : searchParams.get("provider"),
        }
        console.log(joinUser);
        const joinData = await oAuth2SignupApi(joinUser);
       console.log(joinData);
       if(!joinData.isSuceess){
            showFieldErrorMessage(joinData.fieldErrors);
            return;
       }
       alert("회원가입이 완료되었습니다.");
       navigate("/user/login");
    }

    const showFieldErrorMessage = (fieldErrors) => {
        let EmptyfieldErrors = {
            username : <></>,
            password : <></>,
            checkPassword : <></>,
            name : <></>,
            email : <></>
            }
            
        // 해당 에러하나에 하나씩 채워줌 - 키 밸류 형태로 넣음 리스트에 객체 형태
        for(let fieldError of fieldErrors){
            EmptyfieldErrors = {
                ...EmptyfieldErrors,
                [fieldError.field] : <p>{fieldError.defaultMessage}</p>
            }
        }
        setFieldErrorMessages(EmptyfieldErrors);
    }

    return (
        <div>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <div>
                                <p>아이디</p>
                                <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                                <p>{fieldErrorMessages.username}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                            <p>비밀번호</p>
                            <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setinputUser)} placeholder='' />
                            </div>
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
                        <button onClick={handleMergepageOnClick}>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OAuth2Merge;