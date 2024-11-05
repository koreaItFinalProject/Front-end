import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { useNavigate } from 'react-router-dom';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import emailApi from '../../../apis/emailApis/emailApi';
import BackButton from '../../../components/BackButton/BackButton';
import EmailDuplicateCheckValue from '../../../apis/EmptyDuplicateCheckValue/EmailDuplicateCheckValue';
import SignupDuplicateCheckValue from '../../../apis/EmptyDuplicateCheckValue/SignupDuplicateCheckValue';
import useCheckInputValueApi from '../../../apis/useCheckInputValueApi/useCheckInputValueApi';

function UserSignupPage(props) {
    const navigate = useNavigate();
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
        role: "USER"
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname: <></>,
        phoneNumber: <></>,
    });

    const handleInputEmailCheck = (e) => {
        const { name, value } = e.target;
        if (name === 'emailCheck' && !/^\d*$/.test(value)) {
            alert("숫자만 입력가능합니다")
            return; // 숫자가 아닌 입력은 무시 
        }
        setEmailCheck(value);
    }

    const handlesignuppageOnClick = async () => {
        const isComplete = !Object.values(complete).some(value => value === false);

        if (!isComplete) {
            alert("인증을 안받은 값이 존재합니다");
            return;
        }
        if (inputUser.password !== '' && inputUser.checkPassword !== '') {
            if (inputUser.password !== inputUser.checkPassword) {
                alert("비밀번호가 일치하지 않습니다")
                return;
            }
        }
        const signupData = await usersignupApi(inputUser);
        console.log(signupData);
        if (!signupData.isSuccess) {
            const newFieldErrors = showFieldErrorMessage(signupData);
            console.log(signupData.fieldErrors);
            console.log(newFieldErrors);
            setFieldErrorMessages(newFieldErrors);
            alert(`회원가입 실패`);
        } else {
            alert("가입 성공");
            navigate("/user/signin");
        }
    }

    const handleOnEmailCheckClick = () => {
        console.log("이메일 넘버" + emailNumber);
        console.log("이메일 체크" + emailCheck);
        if (emailCheck !== '') {
            if (emailNumber == emailCheck) {
                alert("인증성공");
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
                alert("인증번호가 일치하지 않습니다.");
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
            alert("인증시간을 초과하였습니다.");
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timer, isTimerStopped]);

    const startTimer = async (email) => {
        try {
            if (email.trim() === '') {
                alert('빈 값은 입력할 수 없습니다.');
                return;
            }
            const emailCheck = await EmailDuplicateCheckValue(email);
            if (!emailCheck.isSucceses) {
                alert('이메일 중복되었습니다.');
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
            alert("이메일 인증 요청 중 오류가 발생했습니다.");
        }
    }

    const handleCheckUser = (e) => {
        const { name } = e.target;
        console.log(inputUser[name]);
        if (name === 'password' || name === 'checkPassword') {
            if (inputUser.password && inputUser.checkPassword) {
                if (inputUser.password !== inputUser.checkPassword) {
                    alert("비밀번호와 확인번호 다시 확인해주세요.")
                    return;
                }
            } else {
                alert("빈 값입니다.");
                return
            }
        }
        if (SignupDuplicateCheckValue(inputUser[name])) {
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
                        회원가입
                    </h1>
                </div>
                <div>
                    <div css={s.duplicateinput}>
                        <input type="text" name='username' autoComplete="off" value={inputUser.username} onChange={handleInputOnChange(setInputUser, setComplete)} placeholder='아이디' style={{ color: complete.username ? '#adadad' : '#ffffff' }} />
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
                        onClick={handlesignuppageOnClick}
                        style={{ display: complete.username && complete.nickname && complete.email ? "block" : "none" }}>가입하기</button>
                </div>
            </div>
        </div>
    );
}

export default UserSignupPage;