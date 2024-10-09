import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import SearchAdress from '../../../apis/SearchAdress';
import { usersignupApi } from '../../../apis/signInApis/usersignupApi';
import { useNavigate } from 'react-router-dom';


function UserSignupPage(props) {
    const navigate = useNavigate();
    const [loginState , setLoginState] = useState({
        userId: '',
        password:'',
        checkPassword:'',
        email:'',
        userName:'',
    })
    const [isAddress , setAddress] = useState({
        zonecode:'',
        address:'',
        buildingName:'',
        isText:''
    });

    const handleInputOnChange =(e)=> {
        setLoginState({
            ...loginState,
            [e.target.name] : e.target.value
        })
        console.log([e.target.name]+':'+e.target.value);
    }

    const handleAddressInputOnChange = (e) => {
        setAddress({
            ...isAddress,
            isText :e.target.value
        });
        console.log(isAddress.isText);
    }

    const handlesignuppageOnClick = async() => {
        const signupData = await usersignupApi(loginState, isAddress);
        alert("가입 성공");
        navigate("/user/signin");
    }

    return (
        <div>
            <Header/>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <p>아이디</p>
                            <input type="text" name='userId' value={loginState.userId} onChange={handleInputOnChange} placeholder='' />
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
                            <p>이메일</p>
                            <input type="email" name='email' value={loginState.email} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='userName' value={loginState.userName} onChange={handleInputOnChange} placeholder='' />
                        </div>
                    </div>
                    <div css={s.addressInfo}>
                        <p>주소</p>
                        <div css={s.addressStyle}>
                            <input 
                                value={isAddress.zonecode} 
                                disabled 
                                placeholder='우편번호'/>
                            <input 
                                value={isAddress.address} 
                                disabled placeholder='주소'/>
                            <input 
                                value={isAddress.buildingName} 
                                disabled placeholder='참고항목'/>
                            <input 
                                value={isAddress.isText} 
                                onChange={handleAddressInputOnChange} placeholder='상세주소'/>
                            <SearchAdress setAddress={setAddress}/>
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