/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersignInApi } from '../../apis/signInApis/usersignInApi';
import { instance } from '../../apis/util/instance';
import { showFieldErrorMessage } from '../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { handleloginInputOnChange } from "../../apis/util/handleloginInputOnChange/handleloginInputOnChange";
import { confirmAlert } from "../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";
import { showToast } from "../../apis/util/SweetAlert2/Toast/Toast";
import { naver, kakao, google } from '../../assets/image';
import { FaArrowRightLong } from "react-icons/fa6";

function UserSigninPage(props) {
    const navigate = useNavigate();

    const naverLocation = "http://localhost:8080/oauth2/authorization/naver";
    const kakaoLocation = "http://localhost:8080/oauth2/authorization/kakao";
    const googleLocation = "http://localhost:8080/oauth2/authorization/google";

    const [inputUser, setInputUser] = useState({
        username: "",
        password: "",
    })

    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>
    })

    const handleOnLoginClick = async () => {
        const signinData = await usersignInApi(inputUser);
        if (!signinData.isSuccess) {
            const newFieldErrors = showFieldErrorMessage(signinData.error);
            confirmAlert("로그인 실패");
            setFieldErrorMessages(newFieldErrors);
            return;
        } else {
            showToast("로그인 성공");
            localStorage.setItem("accessToken", "bearer " + signinData.token.accessToken);
            instance.interceptors.request.use((config) => {
                config.headers['Authorization'] = localStorage.getItem('accessToken');
                return config;
            });
            navigate("/map");
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.login}>
                <div css={s.loginTitle}>
                    <h1>Login</h1>
                </div>
                <div css={s.loginInput}>
                    <input type="text" name="username" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.username} placeholder='아이디' />
                    <p>{fieldErrorMessages.username}</p>
                    <input type="password" name="password" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.password} placeholder='비밀번호' />
                    <p>{fieldErrorMessages.password}</p>
                    <button onClick={handleOnLoginClick}>로그인</button>
                </div>
            </div>
            <div css={s.foundInfo}>
                <ol>
                    <li><button onClick={() => navigate("/user/find", { state: { mode: "findId" } })}>아이디 찾기</button></li>
                    <li><button onClick={() => navigate("/user/find", { state: { mode: "findPassword" } })}>비밀번호 찾기</button></li>
                    <li><button onClick={() => navigate("/user/signup")}>회원가입</button></li>
                </ol>
            </div>
            <div css={s.selectMember}>
                <button css={s.oAuthButton} onClick={() => window.location.href = naverLocation}>
                    <img src={naver} alt="Naver Logo" />
                </button>
                <button css={s.oAuthButton} onClick={() => window.location.href = kakaoLocation}>
                    <img src={kakao} alt="kakao Logo" />
                </button>
                <button css={s.oAuthButton} onClick={() => window.location.href = googleLocation}>
                    <img src={google} alt="kakao Logo" />
                </button>
            </div>
            <button onClick={() => navigate("/user/owner/signup")} css={s.ownerButton}>점주 회원가입<FaArrowRightLong /></button>
        </div>
    );
}

export default UserSigninPage;