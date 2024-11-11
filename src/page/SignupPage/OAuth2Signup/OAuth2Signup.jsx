import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "../UserSignupPage/style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { oAuth2SignupApi } from '../../../apis/signUpApis/oauth2SignupApi';
import emailApi from '../../../apis/emailApis/emailApi';
import useCheckInputValueApi from '../../../apis/useCheckInputValueApi/useCheckInputValueApi';
import EmailDuplicateCheckValue from '../../../apis/EmptyDuplicateCheckValue/EmailDuplicateCheckValue';
import BackButton from '../../../components/BackButton/BackButton';
import valueDuplicateCheckValue from '../../../apis/EmptyDuplicateCheckValue/valueDuplicateCheckValue';
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function OAuth2Signup(props) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerStopped, setIsTimerStopped] = useState();
    const [emailCheckState, setEmailCheckState] = useState(false);
    const [emailCheck, setEmailCheck] = useState("");
    const [emailNumber, setEmailNumber] = useState("");
    const [complete, setComplete] = useState({
        username: false,
        nickname: false,
        email: false,
    });
    const { duplicatedCheckValue, errorData } = useCheckInputValueApi();
    const [inputUser, setInputUser] = useState({
        username: '',
        password: '',
        checkPassword: '',
        email: '',
        name: '',
        nickname: '',
        phoneNumber: '',
        role: "USER",
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname: <></>,
        phoneNumber: <></>,
        oauth2Name: <></>
    });

    const handleInputEmailCheck = (e) => {
        const { name, value } = e.target;
        if (name === 'emailCheck' && !/^\d*$/.test(value)) {
            confirmAlert("숫자만 입력가능합니다")
            return; // 숫자가 아닌 입력은 무시 
        }
        setEmailCheck(value);
    }

    const handleMergepageOnClick = async () => {
        const isComplete = !Object.values(complete).some(value => value === false);

        if (!isComplete) {
            confirmAlert("인증을 안받은 값이 존재합니다");
            return;
        }
        const oAuth2Name = searchParams.get("oAuth2Name");
        const provider = searchParams.get("provider");
        if (inputUser.password !== '' && inputUser.checkPassword !== '') {
            if (inputUser.password !== inputUser.checkPassword) {
                confirmAlert("비밀번호가 일치하지 않습니다")
                return;
            }
        }
        const mergeData = {
            username: inputUser.username,
            password: inputUser.password,
            email: inputUser.email,
            name: inputUser.name,
            nickname: inputUser.nickname,
            phoneNumber: inputUser.phoneNumber,
            oauth2Name: oAuth2Name,
            provider: provider,
            role: 'USER'
        }

        const response = await oAuth2SignupApi(mergeData);
        console.log(response);
        if (!response.isSuccess) {
            if (response.errorStatus === "loginError") {
                confirmAlert(response.error);
                return;
            }
            if (response.errorStatus === "fieldError") {
                console.log(response.errorStatus);
                const newErrors = showFieldErrorMessage(response.error);
                setFieldErrorMessages(newErrors);
                return;
            }
        }
        if (response.isSuccess) {
            confirmAlert("통합 완료");
            navigate(`/user/oauth/oauth2?oAuth2Name=${oAuth2Name}&provider=${provider}`);
            console.log(mergeData);
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
            }
            if (emailNumber != emailCheck) {
                confirmAlert("인증번호가 일치하지 않습니다.");
            }
        }
    }

    useEffect(() => {
        let interval;
        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (timer === 0 && emailCheckState) {
            setIsTimerRunning(false);
            setEmailCheckState(false);
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
                setIsTimerStopped(false);
                setEmailCheckState(true);
                setIsTimerRunning(true);
                setTimer(180);
                const response = await emailApi(email);
                const verificationCode = response.number;
                setEmailNumber(verificationCode);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            confirmAlert("이메일 인증 요청 중 오류가 발생했습니다.");
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
        duplicatedCheckValue(name, inputUser[name], setComplete);
    }

    return (
        <div css={s.layout}>
            <BackButton prevPage={'로그인'} prevPageUrl={'/user/signin'} />
            <div css={s.subLayout}>
                <div css={s.logo}>
                    <h1>
                        통합 회원가입
                    </h1>
                </div>
                <div>
                    <div css={s.duplicateinput}>
                        <input type="text" name='username' autoComplete="off" value={inputUser.username} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='아이디' style={{ color: complete.username ? '#adadad' : '#1c1c1b' }} />
                        <button name='username' onClick={handleCheckUser}>중복 확인</button>
                    </div>
                    {fieldErrorMessages.username}
                </div>
                <div css={s.widthinput}>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호' />
                    {fieldErrorMessages.password}
                </div>
                <div>
                    <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호 확인' />
                    {fieldErrorMessages.checkPassword}
                    {fieldErrorMessages.passwordMatching}
                </div>
                <div>
                    <input type="text" name='name' autoComplete="off" value={inputUser.name} onChange={handleInputOnChange(setInputUser)} placeholder='이름' />
                    {fieldErrorMessages.name}
                </div>
                <div css={s.duplicateinput}>
                    <input type="email" name='email' autoComplete="off" value={inputUser.email} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='이메일' disabled={emailCheckState} />
                    <button onClick={() => startTimer(inputUser.email)}>이메일 인증</button>
                    {fieldErrorMessages.email}
                </div>
                <div css={s.emailButton}>
                    <div>
                        <div css={s.emailcert}>
                            <div css={s.emailTimer}>
                                <input type="text" name='emailCheck' value={emailCheck} onChange={handleInputEmailCheck} readOnly={!emailCheckState} />
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
                    <div css={s.duplicateinput}>
                        <input type="text" name='nickname' autoComplete="off" value={inputUser.nickname} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='닉네임' />
                        <button name='nickname' onClick={handleCheckUser}>중복 확인</button>
                    </div>
                </div>
                {fieldErrorMessages.nickname}
                <div>
                    <input
                        type="text"
                        name='phoneNumber'
                        value={inputUser.phoneNumber}
                        onChange={handleInputOnChange(setInputUser)} autoComplete="off" placeholder='전화번호' />
                    {fieldErrorMessages.phoneNumber}
                </div>
                <div css={s.signupbutton}>
                    <button
                        onClick={handleMergepageOnClick}
                        style={{ display: complete.username && complete.nickname && complete.email ? "block" : "none" }}>가입하기</button>
                </div>
            </div>
        </div>
    );
}

export default OAuth2Signup;