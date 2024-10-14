import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Header from '../../../components/Header/Header';
import SearchAdress from '../../../apis/SearchAddress/SearchAdress';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ownercheckApi } from '../../../apis/signUpApis/onwercheckApi';
import Ocr from '../../../apis/Ocr/Ocr';
import Businessregistration from '../../../apis/BusinessregistrationApi/Businessregistration';
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';

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
        role: "OWNER"
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
    });

    const [businessNumber, setBusinessNumber] = useState('2148813306');
    const [ocrBusinessNumber, setOcrBusinessNumber] = useState('');
    const [ proccess , setProccess] = useState(true);
    const [ isLoading , setLoading] = useState(true);
    const [image, setImage] = useState();


    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        if(image) {
            setOcrBusinessNumber(Ocr(image));
        }
    }

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
            username: '',
            password:'',
            checkPassword:'',
            email:'',
            name:'',
            nickname:'',
            cafename:''
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

    

    const handlesignuppageOnClick = useMutation (
        async () => {
                const signupData = await usersignupApi(loginState);
                console.log(signupData);
                if(!signupData.isSuccess){
                    ShowFiledError(signupData.fieldErrors);
                }
                return signupData;
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
                    
                        const CafeData = await ownercheckApi(data);
                        if(CafeData.isSuccess){
                            alert("가입 성공");
                            navigate("/signin");
                        }
                },
            onError: (signupData) => {
                ShowFiledError(signupData.fieldErrors);
                alert("가입 실패"); 
            }
        }
    );

    const handleRegistrationNumberCheckOnClick = async () => {
        const response = await Businessregistration(businessNumber);
        console.log(response);
        setLoading(true);
        setProccess(false);
        if(response === '인증완료') {
            if (image) {
                Ocr(image)
                    .then((number) => {
                        console.log(`추출된 사업자 등록번호: ${number}`);
                        if(number=== businessNumber){
                            setProccess(false);
                            setLoading(false);
                            console.log(proccess);
                            alert("사업자등록번호 인증을 완료하였습니다.")
                        }else if(number !== businessNumber){
                            alert("일치하지 않습니다");
                            setLoading(false);
                            setProccess(true);
                        }
                    })
                    .catch((error) => {
                        console.error('OCR 처리 중 오류 발생:', error);
                    })
            } else {
                console.log('이미지를 선택해 주세요.');
                alert("이미지를 선택해 주세요.")
                setProccess(true);
            }
        }
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
                                onChange={handleInputChange} placeholder='' disabled={proccess === false ? true : false}/>
                            <button onClick={handleRegistrationNumberCheckOnClick} disabled={proccess === false ? true : false}>확인</button>
                        </div>
                        <div>
                            <p>등록번호 이미지</p>
                            <input type="file" name='ownerImage' onChange={handleImageChange} placeholder='' disabled={proccess === false ? true : false}/>
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
                        <button onClick={() => handlesignuppageOnClick.mutateAsync()} disabled={isLoading === true ? true : false} >가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OwnerSignupPage;