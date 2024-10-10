import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import SearchAdress from '../../../apis/SearchAdress';
import axios from 'axios';
import { usersignupApi } from '../../../apis/signInApis/usersignupApi';
import { useNavigate } from 'react-router-dom';


function OwnerSignupPage(props) {
    const navigate = useNavigate();
    const [loginState , setLoginState] = useState({
        ownerId: '',
        password:'',
        checkPassword:'',
        email:'',
        cafeName:'',
        ownerName:'',
        ownerImage:''
    })

    const [isAddress , setAddress] = useState({
        zonecode:'',
        address:'',
        buildingName:'',
        isText:''
    });

    const [businessNumber, setBusinessNumber] = useState('');
    const [businessInfo, setBusinessInfo] = useState("");
    const [error, setError] = useState('');


    const handleInputOnChange =(e)=> {
        setLoginState({
            [e.target.name] : e.target.value
        })

        console.log(e.target.value);
    }

    const handleAddressInputOnChange = (e) => {
        setAddress({
            ...isAddress,
            isText :e.target.value
        });
        console.log(isAddress.isText);
    }

const handleInputChange = (e) => {
    setBusinessNumber(e.target.value);
    };

    const handleCheckBusiness = async () => {
    if (!businessNumber) {
        setError('사업자 등록번호를 입력해주세요.');
        return;
    }

    const data = {
        b_no: [businessNumber], // 사업자번호를 배열로 전달
    };

    console.log(data);

    const apiKey = process.env.REACT_APP_BUSINESS_API_KEY;// 발급받은 API 키
    const apiUrl = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${apiKey}`;

    console.log(apiUrl);
    
    try {
        const response = await axios.post(apiUrl, data, {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        },
        });
        console.log(response.data);
        // response.data.data의 b_stt_cd 코드 종류(01 계속사업자, 02 휴업자, 03 폐업자)
        if (response.data.data[0].b_stt_cd === "01") {
        setBusinessInfo("인증완료");
        setError('');
        console.log(businessInfo);
        } else {
        setBusinessInfo(null);
        setError('등록된 사업자가 없습니다.');
        alert(`${response.data.data[0].tax_type}`)
        }
    } catch (error) {
        console.error('Error:', error);
        setError('조회 중 오류가 발생했습니다.');
        setBusinessInfo(null);
    }
    };

    const handlesignuppageOnClick = async() => {
        const signupData = await usersignupApi(loginState, isAddress);
        alert("가입 성공");
        navigate("/owner/signin");
    }

    return (
        <div>
            <Header/>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <p>아이디</p>
                            <input type="text" name='ownerId' value={loginState.ownerId} onChange={handleInputOnChange} placeholder='' />
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
                            <p>대표자명</p>
                            <input type="text" name='ownerName' value={loginState.ownerName} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>카페명</p>
                            <input type="text" name='cafeName' value={loginState.cafeName} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>사업자 등록번호</p>
                            <input type="text" 
                                name='businessNumber' value={businessNumber}
                                onChange={handleInputChange} placeholder='' />
                            <button onClick={handleCheckBusiness}>확인</button>
                        </div>
                        <div>
                            <p>등록번호 이미지</p>
                            <input type="file" name='ownerImage' value={loginState.ownerImage} onChange={handleInputOnChange} placeholder='' />
                        </div>
                    </div>
                    <div css={s.addressInfo}>
                        <p>카페 주소</p>
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

export default OwnerSignupPage;