import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { useNavigate } from 'react-router-dom';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import emailApi from '../../../apis/emailApis/emailApi';

function UserSignupPage(props) {
    const navigate = useNavigate();
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [inputUser , setInputUser] = useState({
        username: '',
        password:'',
        checkPassword:'',
        email:'',
        name:'',
        nickname:'',
        phoneNumber:'',
        role: "USER"
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
        checkPassword: <></>,
        name: <></>,
        email: <></>,
        nickname:<></>,
        phoneNumber:<></>,
    });

    const handlesignuppageOnClick = async () => {
        console.log(inputUser);
        const signupData = await usersignupApi(inputUser);
        console.log(signupData);
        if(!signupData.isSuccess){
            const newFieldErrors = showFieldErrorMessage(signupData.fieldErrors);
            setFieldErrorMessages(newFieldErrors);
            alert("회원가입 실패");       
        }else{
            alert("가입 성공");
            navigate("/user/signin");
        }
    }

    useEffect(() => {
        let interval;
        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerRunning(false);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timer]);

    const startTimer = async(email) => {
        console.log(email);
        const response = await emailApi(email);
        console.log(response);
        setTimer(180);
        setIsTimerRunning(true);
    }

    return (
    <div css={s.layout}>
        <div css={s.Info}>
            <div>
                <div>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setInputUser)} placeholder='아이디' />
                    <p>{fieldErrorMessages.username}</p>
                    <button>확인</button>
                </div>
            </div>
            <div>
                <div>
                    <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호' />
                    </div>
                    <p>{fieldErrorMessages.password}</p>
                </div>
            <div>
                <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호 확인' />
                <p>{fieldErrorMessages.checkPassword}</p>
                <p>{fieldErrorMessages.passwordMatching}</p>
            </div>
            <div>
                <input type="text" name='name' value={inputUser.name} onChange={handleInputOnChange(setInputUser)} placeholder='이름' />
                <p>{fieldErrorMessages.name}</p>
            </div>
            <div>
                <input type="email" name='email' value={inputUser.email} onChange={handleInputOnChange(setInputUser)} placeholder='이메일은 공백일 수 없습니다.' />
            </div>
                <div css={s.emailButton}>
                        {isTimerRunning && <p>남은 시간: {Math.floor(timer / 60)}분 {timer % 60}초</p>}
                    <button onClick={()=> startTimer(inputUser.email)}>이메일 인증</button>
                </div>
                {fieldErrorMessages.email}
            <div>
                <input type="text" name='nickname' value={inputUser.nickname} onChange={handleInputOnChange(setInputUser)} placeholder='닉네임' />
                <p>{fieldErrorMessages.nickname}</p>
            </div>
            <div>
                <input type="text" name='phoneNumber' value={inputUser.phoneNumber} onChange={handleInputOnChange(setInputUser)} placeholder='휴대전화 인증을 받아야 합니다.' />
                {fieldErrorMessages.phoneNumber}
            </div>
            <div css={s.signupbutton}>
                <button onClick={ handlesignuppageOnClick}>가입하기</button>
            </div>
        </div>
    </div>
    );
}

export default UserSignupPage;