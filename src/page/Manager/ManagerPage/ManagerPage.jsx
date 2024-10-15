import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import SideBar from '../../../components/SideBar/SideBar';
import { usersignInApi } from '../../../apis/signInApis/usersignInApi';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';

function ManagerPage(props) {
    const navigate = useNavigate();
    const [ isLogin , setLogin ] = useState({
        username: "",
        password: "",
        role : "ADMIN"
    });

    const handleOnInputChange = (e) => {
        setLogin({
            ...isLogin,
            [e.target.name] : e.target.value
        })
    }

    const handleOnClick = async() => {
        const signinData = await usersignInApi(isLogin);
        if(signinData){
            localStorage.setItem("accessToken", "bearer " + signinData.token.accessToken);
            instance.interceptors.request.use(config => 
                config.headers["Authorization"] = localStorage.getItem("accessToken")
            )
            alert("환영합니다");
            navigate("/manager/home");
        }
    }

    return (
        <div css={s.layout}>
            <div css={s.login}>
                    <p>관리자 페이지</p>
                    <input type="text" name="username" onChange={handleOnInputChange} value={isLogin.username} placeholder='아이디'/>
                    <input type="password" name="password" onChange={handleOnInputChange} value={isLogin.password} placeholder='비밀번호'/>
                    <button onClick={handleOnClick}>Login</button>
            </div>
        </div>
    );
}

export default ManagerPage;


