/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersignInApi } from '../../apis/signInApis/usersignInApi';
import { instance } from '../../apis/util/instance';
import { showFieldErrorMessage } from '../../apis/util/showFieldErrorMessage/showFieldErrorMessage';
import { handleInputOnChange } from '../../apis/util/handleInputOnChange/handleInputOnChange';
import BackButton from '../../components/BackButton/BackButton';
import { handleloginInputOnChange } from "../../apis/util/handleloginInputOnChange/handleloginInputOnChange";

function UserSigninPage(props) {
    const navigate = useNavigate();
    const [inputUser, setInputUser] = useState({
        username: "",
        password: "",
    });
    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>
    });

    const handleOnLoginClick = async () => {
        const signinData = await usersignInApi(inputUser);
        if (!signinData.isSuccess) {
            const newFieldErrors = showFieldErrorMessage(signinData.error);
            alert("로그인 실패");
            setFieldErrorMessages(newFieldErrors);
            return;
        } else {
            alert("로그인 성공");
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
            <BackButton prevPage={'회원가입'} prevPageUrl={'/user/select/signup'} />
            <div css={s.subLayout}>
                <div css={s.login}>
                    <div css={s.loginInput}>
                        <div css={s.loginTitle}>
                            <p>Login</p>
                        </div>
                        <input type="text" name="username" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.username} placeholder='아이디' />
                        <p>{fieldErrorMessages.username}</p>
                        <input type="password" name="password" autoComplete="off" onChange={handleloginInputOnChange(setInputUser)} value={inputUser.password} placeholder='비밀번호' />
                        <p>{fieldErrorMessages.password}</p>
                        <button onClick={handleOnLoginClick}>로그인</button>
                    </div>
                </div>
                <div css={s.foundInfo}>
                    <ol>
                        <li><button onClick={() => navigate()}>아이디 찾기</button></li>
                        <li><button onClick={() => navigate()}>비밀번호 찾기</button></li>
                        <li><button onClick={() => navigate("/user/signup")}>회원가입</button></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default UserSigninPage;