import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import SearchAdress from '../../../apis/SearchAddress/SearchAdress';
import { useNavigate } from 'react-router-dom';
import { ownercheckApi } from '../../../apis/signUpApis/onwercheckApi';
import Ocr from '../../../apis/Ocr/Ocr';
import Businessregistration from '../../../apis/BusinessregistrationApi/Businessregistration';
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import emailApi from '../../../apis/emailApis/emailApi';
import checkUsernameApi from '../../../apis/checkUsernameApi/checkUsernameApi';

function OwnerSignupPage(props) {
    const navigate = useNavigate();
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isTimerStopped, setIsTimerStopped] = useState();
    const [timer, setTimer] = useState(0);
    const [businessNumber, setBusinessNumber] = useState('2148813306');
    const [ocrBusinessNumber, setOcrBusinessNumber] = useState('');
    const [ proccess , setProccess] = useState(true);
    const [ isLoading , setLoading] = useState(false);
    const [image, setImage] = useState();
    const [emailCheckState, setEmailCheckState] = useState(false);
    const [emailCheck, setEmailCheck] = useState("");
    const [emailNumber , setEmailNumber] = useState("");
    const [ complete , setComplete ] = useState(false);
    const [isCheckUsername , setCheckUsername] = useState(false);
    const [coordinates, setCoordinates] = useState({ 
        latitude: '',
        longitude: ''
     });
    
    const [inputUser , setInputUser] = useState({
        username: '',
        password:'',
        name:'', 
        email:'',
        checkPassword:'',
        nickname:'',
        phoneNumber:'',
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
        phoneNumber:<></>,
    });

    
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        if(image) {
            setOcrBusinessNumber(Ocr(image));
        }
    }

    const handleInputTextChange = (e) => {
        setCafe(e.target.value);
        console.log(isCafe);
    }

    const handleInputCheckChange = (e) => {
        setEmailCheck(e.target.value);
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
    const handleSignup = async () => {
        setLoading(true);
        try {
            const signupData = await usersignupApi(inputUser);
            console.log(signupData);
            if (!signupData.isSuccess) {
                const newErrors = showFieldErrorMessage(signupData.fieldErrors);
                console.log(newErrors);
                setFieldErrorMessages(newErrors);
                console.log("1");
                setLoading(false);
                return;
            }if(signupData.isSuccess){
            const data = {
                ownerId: signupData.ok.user.id,
                address: isAddress.address,
                lat: coordinates.latitude,
                lng: coordinates.longitude,
                cafename: isCafe.cafename,
            };
            console.log(coordinates);
            const CafeData = await ownercheckApi(data);
            if (CafeData.isSuccess) {
                alert("가입 성공");
                navigate("/signin");
            }
        }
        } catch (error) {
            console.error('Signup error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let interval;
        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (timer === 0 && emailCheckState) {
            setIsTimerRunning(false);
            alert("인증시간을 초과하였습니다.");
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timer ,isTimerStopped]);

    const startTimer = async(email) => {
        try{
            if(email.trim() === '') {
                alert('빈 값은 입력할 수 없습니다.');
                return;
            }
            setTimer(180);
            setIsTimerStopped(false);
            setIsTimerRunning(true);
            setEmailCheckState(true);
            const response = await emailApi(email);
            const verificationCode = response.number;
            setEmailNumber(verificationCode);

        }catch (error) {
            console.error("Error occurred:", error);
            alert("이메일 인증 요청 중 오류가 발생했습니다.");
        }
    }

    const handleOnEmailCheckClick = async() => {
        console.log("이메일 넘버" + emailNumber);
        console.log("이메일 체크"+ emailCheck);
        if(emailCheck !== ''){
            if(emailNumber == emailCheck){
                alert("인증성공");
                setTimer(0);
                setEmailCheckState(false);
                setIsTimerStopped(true);
                setIsTimerRunning(false);
            }
            if(emailNumber != emailCheck){
                alert("인증번호가 일치하지 않습니다.");
            }
        }
    }

    const handleRegistrationNumberCheckOnClick = async () => {
        const response = await Businessregistration(businessNumber);
        console.log(response);
        setLoading(true);
        setProccess(false);
        if(response === "조회 중 오류가 발생했습니다."){
            setLoading(false);
            setProccess(true);
        }

        if(response === '인증완료') {
            if (image) {
                Ocr(image)
                    .then((number) => {
                        console.log(`추출된 사업자 등록번호: ${number}`);
                        if(number=== businessNumber){
                            setProccess(false);
                            setLoading(false);
                            setComplete(true);
                            console.log(proccess);
                            alert("사업자등록번호 인증을 완료하였습니다.")
                        }else if(number !== businessNumber){
                            alert("일치하지 않습니다");
                            setLoading(false);
                            setProccess(true);
                            setComplete(false);
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

    const checkUsername = async () => {
        if(inputUser.username === ''){
            alert("빈 값을 넣으면 안됩니다")
            return
        }
        console.log(inputUser.username);
        try {
            const response = await checkUsernameApi(inputUser.username);
            console.log(response);
            if(response.isSuccess){
                setCheckUsername(true);
                alert('사용가능한 이름입니다.');
            }else{
                alert(response.data);
                setCheckUsername(false);
            }
        }catch(error){
            console.error('Username check error:', error.response.data);
            setCheckUsername(false);
            alert(error.response.data);
        }
    }

    return (
        <div css={s.layout}>
                <div>
                    <h1>점주 회원가입</h1>
                </div>
                <div>
                    <div css={s.usernameInput}>
                        <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setInputUser)} placeholder='아이디' />
                        <button onClick={checkUsername}>확인</button>
                    </div>
                    <p>{fieldErrorMessages.username}</p>
                </div>
                <div>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호' />
                </div>
                    <p>{fieldErrorMessages.password}</p>
                    <p>{fieldErrorMessages.passwordMatching}</p>
                <div>
                    <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호 확인' />
                </div>
                    <p>{fieldErrorMessages.checkPassword}</p>
                <div css={s.emailCheck}>
                    <input type="email" name='email' value={inputUser.email} onChange={handleInputOnChange(setInputUser)} placeholder='이메일' disabled={emailCheckState} />
                    <button onClick={()=>startTimer(inputUser.email)}>이메일 인증</button>   
                </div>
                <div css={s.emailButton}>
                    <div>
                        <div css={s.emailcert}>
                            <div css={s.emailTimer}>
                                <input type="text" name='emailCheck' value={emailCheck} onChange={handleInputCheckChange} readOnly={!emailCheckState}/>
                                <div>
                                {isTimerRunning && <p>남은 시간: {Math.floor(timer / 60)}분 {timer % 60}초</p>}
                                </div>
                            </div>
                            <div css={s.emailCheckButton}>
                                {
                                    !emailCheckState? 
                                    <></>
                                    : 
                                    <button onClick={()=>startTimer(inputUser.email)}>재요청</button>
                                }
                                <button onClick={handleOnEmailCheckClick}>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
                    <p>{fieldErrorMessages.email}</p>
                <div>
                    <input type="text" name='name' value={inputUser.name} onChange={handleInputOnChange(setInputUser)} placeholder='이름' />
                </div>
                    <p>{fieldErrorMessages.name}</p>
                <div css={s.nickNameStyle}>
                    <input type="text" name='nickname' value={inputUser.nickname} onChange={handleInputOnChange(setInputUser)} placeholder='닉네임' />
                    <button onClick={checkUsername}>중복 확인</button>
                </div>
                    <p>{fieldErrorMessages.nickname}</p>
                <div>
                    <input type="text" name='phoneNumber' value={inputUser.phoneNumber} onChange={handleInputOnChange(setInputUser)} placeholder='전화번호' />
                </div>
                    <p>{fieldErrorMessages.phoneNumber}</p>
                <div>
                    <input type="text" name='cafename' value={isCafe.cafename} onChange={handleInputTextChange} placeholder='카페명' />
                </div>
                    <p>
                        {
                            isCafe.cafename === "" ? "카페명 입력해주세요"
                            : ""
                        }
                    </p>
                <div>
                    <input type="text" 
                        name='businessNumber' value={businessNumber}
                        onChange={handleInputChange} placeholder='사업자 등록번호' disabled={!proccess}/>
                </div>
                <div>
                    <input type="file" name='ownerImage' onChange={handleImageChange} disabled={!proccess}/>
                    <button css={s.registerButton} onClick={handleRegistrationNumberCheckOnClick} disabled={!proccess}>확인</button>
                </div>
                <div css={s.cafe}>
                    <div css={s.cafeAddress}>
                        <input 
                            value={isAddress.address} 
                            disabled placeholder='주소'/>
                        <input 
                            value={isAddress.buildingName} 
                            disabled placeholder='참고항목'/>
                    </div>
                </div>
                        <SearchAdress setAddress={setAddress} setCoordinates={handleCoordinatesChange}/>
                <div css={s.signupbutton}>
                    <button onClick={handleSignup} >가입하기</button>
                    {/* disabled={!complete} */}
                </div>
        </div>
    );
}

export default OwnerSignupPage;