import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import emailApi from '../../../apis/emailApis/emailApi';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CiUnlock, CiMail } from "react-icons/ci";
import useCheckInputApi from '../../../apis/useCheckInputApi/useCheckInputApi';
import isEmptyAndIsEqualsCheckFieldValue from '../../../apis/EmptyDuplicateCheckValue/EmptyDuplicateCheckValue';
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function UserProfileModify({ user }) {
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isTimerStopped, setIsTimerStopped] = useState();
    const [emailCheck, setEmailCheck] = useState("");
    const [emailNumber, setEmailNumber] = useState("");
    const [inputUser, setInputUser] = useState(user);
    const [modifyUser, setModifyUser] = useState({
        ...user,
        password: ''
    });
    const [emailCheckState, setEmailCheckState] = useState(false);
    const { duplicatedCheck, errorData } = useCheckInputApi();
    console.log(user);
    const handleInputCheckChange = (e) => {
        setEmailCheck(e.target.value);
    }

    const handleOnEmailCheckClick = async () => {
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

    const handleModifyFiledValue = (e) => {
        const { name } = e.target;
        console.log(name);
        console.log(inputUser[name], modifyUser[name]);
        if (name === 'password' || name === 'checkPassword') {
            if (modifyUser.password && modifyUser.checkPassword) {
                if (modifyUser.password !== modifyUser.checkPassword) {
                    confirmAlert("비밀번호와 확인번호 다시 확인해주세요.")
                    return;
                }
            }
            else {
                confirmAlert("빈 값입니다.");
                return
            }
        }
        if (isEmptyAndIsEqualsCheckFieldValue(inputUser[name], modifyUser[name])) {
            return;
        }

        duplicatedCheck(name, modifyUser[name]);
    }

    const handleOnEmailCancelClick = () => {
        setIsTimerRunning(false);
        setEmailCheckState(false);
        setEmailCheck("");
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
        } else if (isTimerStopped === false && isTimerRunning === true) {
            setTimer(0);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timer, isTimerStopped]);

    const startTimer = async (e) => {
        const { name } = e.target;
        try {
            if (isEmptyAndIsEqualsCheckFieldValue(inputUser[name], modifyUser[name])) {
                return;
            }
            setIsTimerStopped(false);
            setIsTimerRunning(true);
            setEmailCheckState(true);
            setTimer(180);
            const response = await emailApi(modifyUser.email);
            const verificationCode = response.number;
            setEmailNumber(verificationCode);

        } catch (error) {
            console.error("Error occurred:", error);
            confirmAlert("이메일 인증 요청 중 오류가 발생했습니다.");
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.Info}>
                <div css={s.logo}>
                    <h1>프로필 관리</h1>
                </div>
                <div css={s.userInfoCheck}>
                    <div css={s.basicInfo}>
                        <p>기본 정보 </p>
                        <AiOutlineExclamationCircle />
                    </div>
                    <div css={s.InputBox}>
                        <input type="text" name='name' value={modifyUser.name} onChange={handleInputOnChange(setModifyUser)} placeholder='이름' />
                        <button name='name' onClick={handleModifyFiledValue}>확인</button>
                    </div>
                    <div css={s.InputBox}>
                        <input type="text" name='username' value={modifyUser.username} onChange={handleInputOnChange(setModifyUser)} placeholder='아이디' />
                        <button name='username' onClick={handleModifyFiledValue}>확인</button>
                    </div>
                    <div css={s.InputBox}>
                        <input type="text" name='nickname' value={modifyUser.nickname} onChange={handleInputOnChange(setModifyUser)} placeholder='닉네임' />
                        <button name='nickname' onClick={handleModifyFiledValue}>확인</button>
                    </div>
                </div>
                <div css={s.userPasswordCheck}>
                    <div css={s.basicInfo}>
                        <p>비밀번호 수정</p>
                        <CiUnlock />
                    </div>
                    <div css={s.InputBox}>
                        <input type="password" name='password' value={modifyUser.password} onChange={handleInputOnChange(setModifyUser)} placeholder='비밀번호' />
                        <button name="password" onClick={handleModifyFiledValue}>확인</button>
                    </div>
                    <div>
                        <input type="password" name='checkPassword' value={modifyUser.checkPassword} onChange={handleInputOnChange(setModifyUser)} placeholder='비밀번호 확인' />
                    </div>
                </div>
                <div css={s.emailPhoneCheck}>
                    <div css={s.basicInfo}>
                        <p>보안 정보</p>
                        <CiMail />
                    </div>
                    <div css={s.emailCheck}>
                        <input type="email" name='email' value={modifyUser.email} onChange={handleInputOnChange(setModifyUser)} placeholder='이메일' />
                        <button name="email" onClick={startTimer}>이메일 인증</button>
                    </div>
                    <div>
                        <div>
                            <div css={s.emailTimer}>
                                <input type="text" name='emailCheck' value={emailCheck} onChange={handleInputCheckChange} placeholder='이메일 확인' readOnly={!emailCheckState} />
                                <div>
                                    {isTimerRunning && <p>{Math.floor(timer / 60)}분 {timer % 60}초</p>}
                                </div>
                            </div>
                            <div css={s.emailCheckButton}>
                                {
                                    !emailCheckState ?
                                        <></>
                                        :
                                        <>
                                            <button onClick={startTimer}>재요청</button>
                                            <button onClick={handleOnEmailCheckClick}>확인</button>
                                            <button onClick={handleOnEmailCancelClick}>취소</button>
                                        </>
                                }
                            </div>
                        </div>
                        <div css={s.InputBox}>
                            <input
                                type="text"
                                name='phoneNumber'
                                value={modifyUser.phoneNumber}
                                onChange={handleInputOnChange(setModifyUser)} placeholder='전화번호' />
                            <button name='phoneNumber'onClick={handleModifyFiledValue}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfileModify;