import React, { useEffect, useState } from 'react';
import { handleloginInputOnChange } from '../../apis/util/handleloginInputOnChange/handleloginInputOnChange';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { confirmAlert } from '../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import EmailDuplicateCheckValue from '../../apis/EmptyDuplicateCheckValue/EmailDuplicateCheckValue';
import emailApi from '../../apis/emailApis/emailApi';
import useCheckInputApi from '../../apis/useCheckInputApi/useCheckInputApi';
import { instance } from '../../apis/util/instance';
import FindByUserPasswordChange from '../../apis/userFindByInfo/FindByUserPasswordChange';
import { useNavigate } from 'react-router-dom';

function FindByPassword(props) {
  const [isUsernameCheck, setUsernameCheck] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerStopped, setIsTimerStopped] = useState();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [emailCheckState, setEmailCheckState] = useState(false);
  const [emailCheck, setEmailCheck] = useState("");
  const [emailNumber, setEmailNumber] = useState("");
  const navigate = useNavigate();
  const [inputUser, setInputUser] = useState({
    email: '',
    username: '',
    password: '',
    checkPassword: ''
  });

  const handleInputOnChange = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value
    });
    console.log(inputUser);
  }
  const handleInputEmailCheck = (e) => {
    const { name, value } = e.target;
    if (name === 'emailCheck' && !/^\d*$/.test(value)) {
      alert("숫자만 입력가능합니다")
      return; // 숫자가 아닌 입력은 무시 
    }
    setEmailCheck(value);
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
        setUsernameCheck(true);
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
    console.log(email);
    try {
      if (email.trim() === '') {
        alert('빈 값은 입력할 수 없습니다.');
        return;
      }
      const emailCheck = await EmailDuplicateCheckValue(email);
      if (!emailCheck.isSucceses) {
        setIsTimerStopped(false);
        setEmailCheckState(true);
        setIsTimerRunning(true);
        setTimer(180);
        const response = await emailApi(email);
        const verificationCode = response.number;
        setEmailNumber(verificationCode);
        return;
      } else if (emailCheck.isSucceses) {
        confirmAlert("이메일 확인 실패");
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("이메일 인증 요청 중 오류가 발생했습니다.");
    }
  }

  const handlePasswordCheck = async () => {
    console.log(inputUser);
    if (inputUser.password !== '' && inputUser.checkPassword !== '') {
      if (inputUser.password !== inputUser.checkPassword) {
        alert("비밀번호가 일치하지 않습니다")
        return;
      }
    }
    const Data = {
      email: inputUser.email,
      value: inputUser.password
    }
    console.log(Data);

    const response = await FindByUserPasswordChange("password", Data);
    console.log(response);
    if (response.status === 200) {
      console.log("확인");
      await confirmAlert("변경 완료");
      navigate("/user/signin");
    }

  }

  const handleCancelEmailButton = () => {
    setIsTimerStopped(true);
    setEmailCheckState(false);
    setIsTimerRunning(false);
    setUsernameCheck(false)
    setTimer(0)
  }

  return (
    <div css={s.login}>
      <div css={s.loginInput}>
        <div css={s.loginTitle}>
          <p>비밀번호 찾기</p>
        </div>
        <input type="email" name="email" autoComplete="off" onChange={handleInputOnChange} value={inputUser.email} placeholder='이메일' readOnly={emailCheckState} />
        {
          emailCheckState ? <></> :
            <button onClick={() => startTimer(inputUser.email)}>확인</button>
        }
        <div>
          {
            emailCheckState ?
              <div css={s.emailTimer}>
                <input type="text" name='emailCheck' autoComplete="off" value={emailCheck} onChange={handleInputEmailCheck} readOnly={isUsernameCheck} />
                {isTimerRunning && <p>시간: {Math.floor(timer / 60)}분 {timer % 60}초</p>}
                <button onClick={startTimer}>재요청</button>
                <button onClick={() => handleOnEmailCheckClick(inputUser.email)}>확인</button>
                <button onClick={handleCancelEmailButton}>취소</button>
              </div>
              : <></>
          }
        </div>
        {
          isUsernameCheck ?
            <div css={s.loginTitle}>
              <input type="password" name="password" autoComplete="off" onChange={handleInputOnChange} value={inputUser.password} placeholder='새 비밀번호' />
              <input type="password" name="checkPassword" autoComplete="off" onChange={handleInputOnChange} value={inputUser.checkPassword} placeholder='비밀번호 확인' />
              <button onClick={handlePasswordCheck}>변경</button>
            </div>
            :
            <></>
        }
      </div>
    </div>
  );
}

export default FindByPassword;