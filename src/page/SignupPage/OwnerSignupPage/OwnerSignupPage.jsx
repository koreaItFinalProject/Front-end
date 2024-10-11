import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import SearchAdress from '../../../apis/SearchAddress/SearchAdress';
import axios from 'axios';
import { ownersignupApi } from '../../../apis/signUpApis/ownersignupApi';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ownercheckApi } from '../../../apis/signUpApis/onwercheckApi';


function OwnerSignupPage(props) {
    const navigate = useNavigate();
    const mutate = useMutation();
    const [coordinates, setCoordinates] = useState({ 
        lat: null,
        lng: null
     });
    const [loginState , setLoginState] = useState({
        username: '',
        password:'',
        name:'', 
        email:'',
        checkPassword:'',
        nickname:'',
    })

    const [isAddress , setAddress] = useState({
        lat:'',
        lng:'',
        buildingName:'',
        address:'',
        });
    const [isCafe , setCafe] = useState({
        cafeName:'',
    })

    const [businessNumber, setBusinessNumber] = useState('');
    const [businessInfo, setBusinessInfo] = useState("");
    const [error, setError] = useState('');


    const handleInputOnChange =(e)=> {
        setLoginState({
            ...loginState,
            [e.target.name] : e.target.value
        })
        console.log(e.target.value);
    }

    const handleInputTextChange = (e) => {
        setCafe({
            ...isCafe,
            [e.target.name] : e.target.value
        })
        console.log(isCafe);
    }

    const handleCoordinatesChange = (latitude, longitude) => {
        setCoordinates({
            latitude, longitude });
        console.log(coordinates);
        console.log(isAddress);
    };


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

    const handlesignuppageOnClick = useMutation(
        async () => {
            return await ownersignupApi(loginState);
            },
            {
            onSuccess: async(response) =>{
                    console.log(response);
                    const data = {param:{
                        ownerId: response.ok.user.id ,
                        address:isAddress,
                        lat:coordinates.lat,
                        lng:coordinates.lng ,
                        cafename:isCafe.cafeName
                        }};                   
                    await ownercheckApi(data);
                alert("가입 성공");
                navigate("/owner/signin");
                },
            onError: (error) => {
                console.error("Signup failed:", error);
                alert("가입 실패"); 
            }
        }
    );
//     const handlesignuppageOnClick = async() => {
//         const result = await ownersignupApi(loginState);
//         if(result.isSuccess){
//             SuceessSignupData.mutate(result);
//         }
//     }
        
            
//     const SuceessSignupData = useMutation( 
//         async (signupData) => {
//             return await ownercheckApi(signupData);
//             },
//             {
//             onSuccess: (signupData => {
//                 if(signupData.isSuccess){
//                     alert("가입 성공");
//                     navigate("/owner/signin");
//                 }
//             }),
//         retry: 0,
//         refetchOnWindowFocus: false
//     }
// );

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
                            <p>이메일</p>
                            <input type="email" name='email' value={loginState.email} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>대표자명</p>
                            <input type="text" name='name' value={loginState.name} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='nickname' value={loginState.nickname} onChange={handleInputOnChange} placeholder='' />
                        </div>
                        <div>
                            <p>카페명</p>
                            <input type="text" name='cafeName' value={isCafe.cafeName} onChange={handleInputTextChange} placeholder='' />
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
                            <input type="file" name='ownerImage' onChange={handleInputOnChange} placeholder='' />
                        </div>
                    </div>
                    <div css={s.addressInfo}>
                        <p>카페 주소</p>
                        <div css={s.addressStyle}>
                            <input 
                                value={isAddress.address} 
                                disabled placeholder='주소'/>
                            <input 
                                value={isAddress.buildingName} 
                                disabled placeholder='참고항목'/>
                            <SearchAdress setAddress={setAddress} setCoordinates={handleCoordinatesChange}/>
                        </div>
                    </div>
                    <div css={s.signupbutton}>
                        <button onClick={() => handlesignuppageOnClick.mutateAsync()}>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnerSignupPage;