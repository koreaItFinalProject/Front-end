import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { usersignupApi } from '../../../apis/signUpApis/usersignupApi';
import { useNavigate } from 'react-router-dom';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import emailApi from '../../../apis/emailApis/emailApi';
import checkUsernameApi from '../../../apis/checkUsernameApi/checkUsernameApi';

function UserSignupPage(props) {
    const navigate = useNavigate();
    const [ isLoading , setLoading] = useState(true);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isCheckUsername , setCheckUsername] = useState(false);
    const [isTimerStopped, setIsTimerStopped] = useState();
    const [emailCheckState, setEmailCheckState] = useState(false);
    const [emailCheck, setEmailCheck] = useState("");
    const [emailNumber , setEmailNumber] = useState("");
    const [isEndlock , setEndlock] = useState(false);
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

    const handleInputCheckChange = (e) => {
        setEmailCheck(e.target.value);
    }

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

    const handleOnEmailCheckClick = async() => {
        console.log("이메일 넘버" + emailNumber);
        console.log("이메일 체크"+ emailCheck);
        if(emailCheck !== ''){
            if(emailNumber == emailCheck){
                alert("인증성공");
                setEndlock(true);
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
                alert('사용가능한 아이디입니다.');
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
        <div css={s.Info}>
            <div>
                <div css={s.usernameInput}>
                    <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setInputUser)} placeholder='아이디'  style={{color: isCheckUsername ? '#adadad' : '#ffffff'}} />
                    {/* disabled={isCheckUsername ? true : false} */}
                    <button onClick={checkUsername}>확인</button>
                </div>
                    <p>{fieldErrorMessages.username}</p>
            </div>
            <div>
                <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호' />
            </div>
                <p>{fieldErrorMessages.password}</p>
            <div>
                <input type="password" name='checkPassword' value={inputUser.checkPassword} onChange={handleInputOnChange(setInputUser)} placeholder='비밀번호 확인' />
            </div>
                <p>{fieldErrorMessages.checkPassword}</p>
                <p>{fieldErrorMessages.passwordMatching}</p>
            <div>
                <input type="text" name='name' value={inputUser.name} onChange={handleInputOnChange(setInputUser)} placeholder='이름' />
            </div>
                <p>{fieldErrorMessages.name}</p>
                <div>
                    <input type="email" name='email' value={inputUser.email} onChange={handleInputOnChange(setInputUser)} placeholder='이메일' disabled={isEndlock === true ? true : false} />
                </div>
                <div css={s.emailButton}>
                    {!emailCheckState ? (
                        <button onClick={()=>startTimer(inputUser.email)}>이메일 인증</button>   
                    ):( 
                        <div>
                            <div css={s.emailcert}>
                            <input type="text" name='emailCheck' value={emailCheck} onChange={handleInputCheckChange}/>
                            {isTimerRunning && <p>남은 시간: {Math.floor(timer / 60)}분 {timer % 60}초</p>}
                                <div>
                                    <button onClick={()=>startTimer(inputUser.email)}>재요청</button>
                                    <button onClick={handleOnEmailCheckClick}>확인</button>
                                </div>
                            </div>
                        </div>
                    )} 
                </div>
                {fieldErrorMessages.email}
            <div>
                <input type="text" name='nickname' value={inputUser.nickname} onChange={handleInputOnChange(setInputUser)} placeholder='닉네임' />
            </div>
                <p>{fieldErrorMessages.nickname}</p>
            <div>
                <input 
                    type="text" 
                    name='phoneNumber' 
                    value={inputUser.phoneNumber} 
                    onChange={handleInputOnChange(setInputUser)} placeholder='전화번호' />
            </div>
                {fieldErrorMessages.phoneNumber}
            <div css={s.signupbutton}>
                <button 
                onClick={ handlesignuppageOnClick}
                disabled={isLoading === false ? true : false}>가입하기</button>
            </div>
        </div>
    </div>
    );
}

export default UserSignupPage;