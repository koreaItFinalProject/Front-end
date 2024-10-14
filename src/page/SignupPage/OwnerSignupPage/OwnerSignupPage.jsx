import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import SearchAdress from '../../../apis/SearchAddress/SearchAdress';
import { ownersignupApi } from '../../../apis/signUpApis/ownersignupApi';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ownercheckApi } from '../../../apis/signUpApis/onwercheckApi';
import Businessregistration from '../../../apis/BusinessregistrationApi/Businessregistration';

function OwnerSignupPage(props) {
    const navigate = useNavigate();
    const [coordinates, setCoordinates] = useState({ 
        latitude: '',
        longitude: ''
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
        cafename:'',
    });

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname:<></>,
        address:<></>,
        cafename:<></>
    });

    const [businessNumber, setBusinessNumber] = useState('');

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
            latitude: latitude,
            longitude: longitude 
        })
        console.log("latitude " +coordinates.latitude);
        console.log("longitude " +coordinates.longitude);
    };


    const handleInputChange = (e) => {
        setBusinessNumber(e.target.value);
    };


    const ShowFiledError = (fieldErrors) => {
        let EmptyfieldErrors = {
            username: <></>,
            password: <></>,
            checkPassword: <></>,
            name: <></>,
            email: <></>,
            nickname:<></>,
            address:<></>,
            cafename:<></>
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

    const handlesignuppageOnClick = useMutation(
        async () => {
                const signupData = await ownersignupApi(loginState);
                if(!signupData.isSuccess){
                    ShowFiledError(signupData.fieldErrors);
                }
                return signupData 
            },
            {
            onSuccess: async(response) =>{
                    console.log(response);
                    console.log(coordinates);
                    const data = {
                        ownerId: response.ok.user.id ,
                        address:isAddress.address,
                        lat:coordinates.latitude,
                        lng:coordinates.longitude,
                        cafename:isCafe.cafename
                        };    
                    console.log(coordinates);               
                    if(response.ok){
                        const CafeData = await ownercheckApi(data);
                        if(CafeData.isSuccess){
                            alert("가입 성공");
                            navigate("/signin");
                        }
                    }          
                },
            onError: (error) => {
                console.error("Signup failed:", error);
                
                alert("가입 실패"); 
            }
        }
    );

    return (
        <div>
            <Header/>
            <div css={s.layout}>
                <div>
                    <div css={s.Info}>
                        <div>
                            <p>아이디</p>
                            <input type="text" name='username' value={loginState.username} onChange={handleInputOnChange} placeholder='' />
                            {fieldErrorMessages.username}
                        </div>
                        <div>
                            <p>비밀번호</p>
                            <input type="password" name='password' value={loginState.password} onChange={handleInputOnChange} placeholder='' />
                            {fieldErrorMessages.password}
                        </div>
                        <div>
                            <p>비밀번호 확인</p>
                            <input type="password" name='checkPassword' value={loginState.checkPassword} onChange={handleInputOnChange} placeholder='' />
                            {fieldErrorMessages.checkPassword}
                        </div>
                        <div>
                            <p>이메일</p>
                            <input type="email" name='email' value={loginState.email} onChange={handleInputOnChange} placeholder='' />
                            {fieldErrorMessages.email}
                        </div>
                        <div>
                            <p>대표자명</p>
                            <input type="text" name='name' value={loginState.name} onChange={handleInputOnChange} placeholder='' />
                            {fieldErrorMessages.name}
                        </div>
                        <div>
                            <p>닉네임</p>
                            <input type="text" name='nickname' value={loginState.nickname} onChange={handleInputOnChange} placeholder='' />
                            {fieldErrorMessages.nickname}
                        </div>
                        <div>
                            <p>카페명</p>
                            <input type="text" name='cafename' value={isCafe.cafename} onChange={handleInputTextChange} placeholder='' />
                            {fieldErrorMessages.cafename}
                        </div>
                        <div>
                            <p>사업자 등록번호</p>
                            <input type="text" 
                                name='businessNumber' value={businessNumber}
                                onChange={handleInputChange} placeholder='' />
                            <button onClick={() => Businessregistration(businessNumber)}>확인</button>
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