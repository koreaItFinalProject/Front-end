import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from 'react-icons/ri';
import { ownersigninAPi } from '../../apis/signInApis/ownersigninAPi';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../apis/util/instance';

function OwnerSignin(props) {
    const [ownersave , isOwnerSave] = useState(false);
    const navigate = useNavigate();
    const [isLogin , setLogin] = useState({
        username: '',
        password: ''
    })


    const handleSaveOnChange = () => {
        isOwnerSave(!ownersave);
        console.log(ownersave);
    }

    const handleOnInputChanger = (e) => {
        setLogin({
            ...isLogin,
            [e.target.name]:e.target.value 
        })
        console.log(e.target.value);
    }

    const handleOnLoginClick = async() => {
        const signinData = await ownersigninAPi(isLogin);
        console.log(signinData);
        if(!signinData.isSuccess){
            alert("로그인 실패");
        }else{
            alert("로그인 성공");
            localStorage.setItem("accessToken", "bearer " + signinData.token.accessToken);
            instance.interceptors.request.use(config => 
                config.headers["Authorization"] = localStorage.getItem("accessToken")
            )
            navigate("/");
            }
    }

    return (
        <div css={s.layout}>
            <div css={s.login}>
                <div css={s.loginInput}>
                    <input name="username" type="text" placeholder='아이디' value={isLogin.username} onChange={handleOnInputChanger}/>
                    <input name="password" type="password" placeholder='비밀번호' value={isLogin.password} onChange={handleOnInputChanger}/>
                    <div css={s.checkbox}>
                        <span id='checkbox' onClick={handleSaveOnChange}>
                            <input type="checkbox" id='checkboxt' />
                            {
                                ownersave 
                                ? 
                                <RiCheckboxCircleFill/>
                                :
                                <RiCheckboxCircleLine/> 
                            }
                            아이디 저장
                        </span>
                    </div>
                </div>
                <div css={s.button}>
                    <button onClick={handleOnLoginClick}>로그인</button>
                </div>
            </div>
        </div>
    );
}


export default OwnerSignin;