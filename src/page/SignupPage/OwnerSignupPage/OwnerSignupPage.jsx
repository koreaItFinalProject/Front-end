import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "../UserSignupPage/style";
import SearchAdress from '../../../apis/SearchAddress/SearchAdress';
import { useNavigate } from 'react-router-dom';
import { ownercheckApi } from '../../../apis/signUpApis/onwercheckApi';
import Ocr from '../../../apis/Ocr/Ocr';
import Businessregistration from '../../../apis/BusinessregistrationApi/Businessregistration';
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import emailApi from '../../../apis/emailApis/emailApi';
import BackButton from '../../../components/BackButton/BackButton';
import useCheckInputValueApi from '../../../apis/useCheckInputValueApi/useCheckInputValueApi';
import EmailDuplicateCheckValue from '../../../apis/EmptyDuplicateCheckValue/EmailDuplicateCheckValue';
import { ownerDeleteApi } from '../../../apis/signUpApis/ownerDeleteApi';
import valueDuplicateCheckValue from '../../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';

function OwnerSignupPage(props) {
    const navigate = useNavigate();
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [isTimerStopped, setIsTimerStopped] = useState();
    const [timer, setTimer] = useState(0);
    const [businessNumber, setBusinessNumber] = useState('2148813306');
    const [ocrBusinessNumber, setOcrBusinessNumber] = useState('');
    const [proccess, setProccess] = useState(true);
    const [image, setImage] = useState();
    const [isSelect, setSelect] = useState('');
    const [emailCheckState, setEmailCheckState] = useState(false);
    const [emailCheck, setEmailCheck] = useState("");
    const [emailNumber, setEmailNumber] = useState("");
    const [complete, setComplete] = useState({
        username: false,
        nickname: false,
        email: false,
        ownerImage: false
    });
    const { duplicatedCheckValue, errorData } = useCheckInputValueApi();
    const [coordinates, setCoordinates] = useState({
        latitude: '',
        longitude: ''
    });

    const [inputUser, setInputUser] = useState({
        username: '',
        password: '',
        name: '',
        email: '',
        checkPassword: '',
        nickname: '',
        phoneNumber: '',
        cafename: '',
        role: "OWNER"
    })

    const [isAddress, setAddress] = useState({
        lat: '',
        lng: '',
        buildingName: '',
        address: '',
    });

    console.log(complete);

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname: <></>,
        phoneNumber: <></>,
    });


    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        if (image) {
            setOcrBusinessNumber(Ocr(image));
        }
    }

    const handleCategoryChange = (e) => {
        setSelect(e.target.value);
        console.log(isSelect);
    }

    const handleInputCheckChange = (e) => {
        setEmailCheck(e.target.value);
    }

    const handleCoordinatesChange = (latitude, longitude) => {
        setCoordinates({
            latitude: latitude,
            longitude: longitude
        })
        console.log("latitude " + coordinates.latitude);
        console.log("longitude " + coordinates.longitude);
    };

    const handleInputChange = (e) => {
        setBusinessNumber(e.target.value);
    };
    const handleSignup = async () => {
        const isComplete = !Object.values(complete).some(value => value === false);

        if (!isComplete) {
            confirmAlert("인증을 안받은 값이 존재합니다");
            return;
        }
        if (isAddress.address === '') {
            confirmAlert("주소가 빈 값입니다");
            return
        }
        if (isSelect === null) {
            confirmAlert("카테고리를 선택해주세요");
            return
        }
        if (inputUser.password !== '' && inputUser.checkPassword !== '') {
            if (inputUser.password !== inputUser.checkPassword) {
                confirmAlert("비밀번호가 일치하지 않습니다")
                return;
            }
        }
        try {
            const signupData = await usersignupApi(inputUser);
            console.log(signupData);
            if (!signupData.isSuccess) {
                const newErrors = showFieldErrorMessage(signupData);
                console.log(newErrors);
                setFieldErrorMessages(newErrors);
                return;
            } if (signupData.isSuccess) {
                const data = {
                    ownerId: signupData.ok.user.id,
                    address: isAddress.address,
                    cafename: inputUser.cafename,
                    lat: coordinates.latitude,
                    lng: coordinates.longitude,
                    category: isSelect
                }
                console.log(data);
                const CafeData = await ownercheckApi(data);
                if (CafeData.isSuccess) {
                    confirmAlert("가입 성공");
                    navigate("/user/signin");
                } else if (!CafeData.isSuccess) {
                    confirmAlert("회원가입을 다시 진행해주세요");
                    const DeleteData = await ownerDeleteApi(data.ownerId)
                    console.log(DeleteData);
                    return;
                }
            }
        } catch (error) {
            console.error('Signup error:', error);
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
            confirmAlert("인증시간을 초과하였습니다.");
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timer, isTimerStopped]);

    const startTimer = async (email) => {
        try {
            if (email.trim() === '') {
                confirmAlert('빈 값은 입력할 수 없습니다.');
                return;
            }
            const emailCheck = await EmailDuplicateCheckValue(email);
            if (!emailCheck.isSucceses) {
                confirmAlert('이메일 중복되었습니다.');
                return;
            } else if (emailCheck.isSucceses) {
                setTimer(180);
                setIsTimerStopped(false);
                setIsTimerRunning(true);
                setEmailCheckState(true);
                const response = await emailApi(email);
                const verificationCode = response.number;
                setEmailNumber(verificationCode);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            confirmAlert("이메일 인증 요청 중 오류가 발생했습니다.");
        }
    }

    const handleOnEmailCheckClick = () => {
        console.log("이메일 넘버" + emailNumber);
        console.log("이메일 체크" + emailCheck);
        if (emailCheck !== '') {
            if (emailNumber == emailCheck) {
                confirmAlert("인증성공");
                setTimer(0);
                setEmailCheckState(false);
                setIsTimerStopped(true);
                setIsTimerRunning(false);
                setComplete({
                    ...complete,
                    email: true
                });
            }
            if (emailNumber != emailCheck) {
                confirmAlert("인증번호가 일치하지 않습니다.");
            }
        }
    }

    const handleRegistrationNumberCheckOnClick = async () => {
        const response = await Businessregistration(businessNumber);
        console.log(response);
        setProccess(false);
        if (response === "조회 중 오류가 발생했습니다.") {
            setProccess(true);
        }

        if (response === '인증완료') {
            if (image) {
                Ocr(image)
                    .then((number) => {
                        console.log(`추출된 사업자 등록번호: ${number}`);
                        if (number === businessNumber) {
                            setProccess(false);
                            console.log(proccess);
                            setComplete({
                                ...complete,
                                ownerImage: true
                            });
                            confirmAlert("사업자등록번호 인증을 완료하였습니다.")
                        } else if (number !== businessNumber) {
                            confirmAlert("일치하지 않습니다");
                            setProccess(true);
                        }
                    })
                    .catch((error) => {
                        console.error('OCR 처리 중 오류 발생:', error);
                    })
            } else {
                console.log('이미지를 선택해 주세요.');
                confirmAlert("이미지를 선택해 주세요.")
                setProccess(true);
            }
        }
    }

    const handleCheckUser = (e) => {
        const { name } = e.target;
        console.log(inputUser[name]);
        if (name === 'password' || name === 'checkPassword') {
            if (inputUser.password && inputUser.checkPassword) {
                if (inputUser.password !== inputUser.checkPassword) {
                    confirmAlert("비밀번호와 확인번호 다시 확인해주세요.")
                    return;
                }
            } else {
                confirmAlert("빈 값입니다.");
                return
            }
        }
        if (valueDuplicateCheckValue(inputUser[name])) {
            return;
        }
        duplicatedCheckValue(name, inputUser[name], setComplete)
    }

    return (
        <div css={s.layout}>
            <BackButton prevPage={'회원가입'} prevPageUrl={'/user/select/signup'} />
            <div css={s.subLayout}>
                <div css={s.logo}>
                    <h1>점주 회원가입</h1>
                </div>
                <div>
                    <div css={s.underlineInput}>
                        <input type="text" name='username' autoComplete="off" value={inputUser.username} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='아이디' style={{ color: complete.username ? '#adadad' : '#ffffff' }} />
                        <button name='username' onClick={handleCheckUser}>확인</button>
                        {fieldErrorMessages.username}
                    </div>
                </div>
                <div>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호' />
                    {fieldErrorMessages.password}
                    {fieldErrorMessages.passwordMatching}
                </div>
                <div>
                    <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호 확인' />
                </div>
                {fieldErrorMessages.checkPassword}
                <div css={s.duplicateinput}>
                    <input type="email" name='email' autoComplete="off" value={inputUser.email} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='이메일' disabled={emailCheckState} />
                    <button onClick={() => startTimer(inputUser.email)}>이메일 인증</button>
                </div>
                {fieldErrorMessages.email}
                <div css={s.emailButton}>
                    <div>
                        <div css={s.emailcert}>
                            <div css={s.emailTimer}>
                                <input type="text" name='emailCheck' autoComplete="off" value={emailCheck} onChange={handleInputCheckChange} readOnly={!emailCheckState} />
                                <div>
                                    {isTimerRunning && <p>시간: {Math.floor(timer / 60)}분 {timer % 60}초</p>}
                                </div>
                            </div>
                            <div css={s.emailCheckButton}>
                                {
                                    !emailCheckState ?
                                        <></>
                                        :
                                        <button onClick={() => startTimer(inputUser.email)}>재요청</button>
                                }
                                <button onClick={handleOnEmailCheckClick}>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" name='name' autoComplete="off" value={inputUser.name} onChange={handleInputOnChange(setInputUser)} placeholder='이름' />
                </div>
                {fieldErrorMessages.name}
                <div css={s.duplicateinput}>
                    <input type="text" name='nickname' autoComplete="off" value={inputUser.nickname} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='닉네임' />
                    <button name='nickname' onClick={handleCheckUser}>중복 확인</button>
                </div>
                {fieldErrorMessages.nickname}
                <div>
                    <input type="text" name='phoneNumber' autoComplete="off" value={inputUser.phoneNumber} onChange={handleInputOnChange(setInputUser)} placeholder='전화번호' />
                    {fieldErrorMessages.phoneNumber}
                </div>
                <div>
                    <input type="text" name='cafename' autoComplete="off" value={inputUser.cafename} onChange={handleInputOnChange(setInputUser)} placeholder='카페명' />
                </div>
                <p>
                    {
                        inputUser.cafename === "" ? "카페명 입력해주세요"
                            : ""
                    }
                </p>
                <div css={s.category}>
                    <select onChange={handleCategoryChange}>
                        <option value="베이커리">베이커리</option>
                        <option value="디저트">디저트</option>
                        <option value="분위기">분위기</option>
                        <option value="브런치">브런치</option>
                    </select>
                </div>
                <div>
                    <input type="text"
                        name='businessNumber' value={businessNumber}
                        onChange={handleInputChange} placeholder='사업자 등록번호' autoComplete="off" disabled={!proccess} />
                </div>
                <div css={s.underlineInput}>
                    <input type="file" name='ownerImage' onChange={handleImageChange} disabled={!proccess} />
                    <button css={s.registerButton} onClick={handleRegistrationNumberCheckOnClick} disabled={!proccess}>확인</button>
                </div>
                <div css={s.widthinput}>
                    <input
                        value={isAddress.address} name='address'
                        disabled placeholder='주소' />
                    <input
                        value={isAddress.buildingName}
                        disabled placeholder='참고항목' />
                    <SearchAdress setAddress={setAddress} setCoordinates={handleCoordinatesChange} />
                </div>
                <div css={s.signupbutton}>
                    <button
                        onClick={handleSignup}
                        style={{ display: complete.ownerImage && complete.username && complete.nickname && complete.email ? "block" : "none" }}>가입하기</button>
                </div>
            </div>
        </div>
    );
}

export default OwnerSignupPage;