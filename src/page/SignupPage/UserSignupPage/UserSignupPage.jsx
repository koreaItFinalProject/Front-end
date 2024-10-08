import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import SearchAdress from '../../../apis/SearchAdress';


function UserSignupPage(props) {

    const [loginState , setLoginState] = useState({
        userId: '',
        password:'',
        checkPassword:'',
        email:'',
        username:'',
    })

    const [isAddress , setAddress] = useState({
        zonecode:'',
        address:'',
        buildingName:'',
    })

    const [isText, setText] = useState('');

    const handleInputOnChange =(e)=> {
        setLoginState({
            [e.target.name] : e.target.value
        })

        console.log(e.target.value);
    }

    const handleAddressInputOnChange = (e) => {
        setText(e.target.value);
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
                            <input type="password" name='userId' value={loginState.userId} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>비밀번호 확인</p>
                            <input type="password" name='userId' value={loginState.userId} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>이메일</p>
                            <input type="email" name='userId' value={loginState.userId} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='userId' value={loginState.userId} onChange={handleInputOnChange} placeholder='' />
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
                                value={isText.textAddress} 
                                onChange={handleAddressInputOnChange} placeholder='상세주소'/>
                            <SearchAdress setAddress={setAddress}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSignupPage;