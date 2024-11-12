import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { oauth2MergeApi } from '../../../apis/signInApis/oauth2MergeApi';
import { instance } from '../../../apis/util/instance';
import { handleloginInputOnChange } from '../../../apis/util/handleloginInputOnChange/handleloginInputOnChange';
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';

function OAuth2MergePage(props) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [inputUser, setinputUser] = useState({
        username: '',
        password: '',
    })
    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        username: <></>,
        password: <></>,
    });

    useEffect(() => {
        const oAuth2Name = searchParams.get("oAuth2Name");
        const provider = searchParams.get("provider");
        const data = {
            username: '',
            password: '',
            oauth2Name: oAuth2Name,
            provider: provider
        }
        if (oAuth2Name && provider) {
            const checkOAuth2User = async () => {
                console.log("시작");
                const response = await oauth2MergeApi(data);
                if (response.isSuccess) {
                    localStorage.setItem("accessToken", "bearer " + response.token.accessToken);
                    instance.interceptors.request.use((config) => {
                        config.headers['Authorization'] = localStorage.getItem('accessToken');
                        return config;
                    });
                    navigate("/map");
                }
            }
            checkOAuth2User();
        }
    }, [searchParams, navigate])

    const handleMergepageOnClick = async () => {
        const mergeData = {
            username: inputUser.username,
            password: inputUser.password,
            oauth2Name: searchParams.get("oAuth2Name"),
            provider: searchParams.get("provider")
        }

        const response = await oauth2MergeApi(mergeData);
        if (!response.isSuccess) {
            confirmAlert(response.error);
            setFieldErrorMessages(response.error);
            return;
        }
        if (response.isSuccess) {
            confirmAlert("통합 완료");
            localStorage.setItem("accessToken", "bearer " + response.token.accessToken);
            instance.interceptors.request.use((config) => {
                config.headers['Authorization'] = localStorage.getItem('accessToken');
                return config;
            });
            navigate("/mypage");
            console.log(mergeData);
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.Info}>
                <div css={s.loginLayout}>
                    <div css={s.logo}>
                        <h1>
                            Merge Login
                        </h1>
                    </div>
                    <div>
                        <input type="text" name='username' value={inputUser.username} autoComplete="off" onChange={handleloginInputOnChange(setinputUser)} placeholder='아이디' />
                        {fieldErrorMessages.username}
                    </div>
                    <div>
                        <input type="password" name='password' value={inputUser.password} autoComplete="off" onChange={handleloginInputOnChange(setinputUser)} placeholder='비밀번호' />
                        {fieldErrorMessages.password}
                    </div>
                    <div css={s.signupbutton}>
                        <button onClick={handleMergepageOnClick}>통합하기</button>
                    </div>
                    <div css={s.ownerloginButton}>
                        <p onClick={() => navigate(`/user/oauth/oauth2/signup?oAuth2Name=${searchParams.get("oAuth2Name")}&provider=${searchParams.get('provider')}`)}>
                            아이디가 없어요 ㅜㅠ
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OAuth2MergePage;