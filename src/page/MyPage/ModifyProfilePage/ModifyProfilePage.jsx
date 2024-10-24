import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaPencilAlt } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { State } from '../../../atom/userState';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

function ModifyProfilePage() {
    const [modifyState, setModifySelect] = useState(true);
    const [userInfo , setUserInfo] = useState({});
    const user = useRecoilValue(State);
    const setUser = useSetRecoilState(State);
    const [modifyUserInfo , setModifyUserInfo] = useState({
        name : '',
        username :'',
        email : '',
        nickname : '',
        phoneNumber : '',
        role:''
    })
    const handleChangeOnClick = () => {
        setModifySelect(!modifyState);
    }

    const handleOnInput = (e) => {
        setModifyUserInfo({
            ...modifyUserInfo,
            [e.target.name] : e.target.value
        })
    }

    // ModifyProfilePage로 직접 접근 시에 오류 처리
    const userInfoRess = useQuery(
        'fetchUserInfo',
        async () => {
            const response = await instance.get(`/user/auth/info`);
            console.log(response);
            return response.data;
        },
        {
            enabled: !user.data,  
            onSuccess: (data) => {
                setUser(data);  
                setUserInfo(data.user); 
            },
        }
    );

    useEffect(()=> {
        setModifyUserInfo({
            name : user.user?.name,
            username :user.user?.username,
            email : user.user?.email,
            nickname : user.user?.nickname,
            phoneNumber : user.user?.phoneNumber,
            role:user.user?.role
        })
        console.log(user);
    },[user]);
    console.log(user);

    if(!user){
        return <div>Loading...</div>
    }

    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <div>
                    <button onClick={handleChangeOnClick}>수정하기<FaPencilAlt/></button>
                </div>
                <div css={s.profileimage}>
                    <img src={userInfo.img} alt="프로필 이미지" />
                </div>
                <div css={s.userProfile}>
                    {/*
                      이름, 아이디 , 닉네임 , 이메일 수정가능해야함  
                    */}
                    {
                        modifyState?
                        <div css={s.profileinfo}>
                            <div>
                                <p>이름 :</p>
                                <p>{userInfo.name}</p>
                            </div>
                            <div>
                                <p>아이디 :</p>
                                <p>{userInfo.username}</p>
                            </div>
                            <div>
                                <p>닉네임 :</p>
                                <p>{userInfo.nickname}</p>
                            </div>
                            <div>
                                <p>이메일 :</p>
                                <p>{userInfo.email}</p>
                            </div>
                            <div>
                                <p>전화번호 :</p>
                                <p>{userInfo.phoneNumber}</p>
                            </div>
                            <div>
                                <p>권한 :</p>
                                <p>{userInfo.role === "USER" ? '사용자':
                                    userInfo.role === "OWNER" ? '점주' :
                                    userInfo.role === "admin" ? '관리자' : '권한 정보가 없습니다'}</p>
                            </div>
                        </div>
                        :
                        <div css={s.modifyProfileInfo}>
                            <div>
                                <p>이름 :</p>
                                <input name='name' 
                                value={modifyUserInfo.name} 
                                onChange={handleOnInput}/>
                            </div>
                            <div>
                                <p>아이디 : </p>
                                <input name='username' 
                                value={modifyUserInfo.username} 
                                onChange={handleOnInput}/>
                            </div>
                            <div>
                                <p>닉네임 : </p>
                                <input name='nickname' 
                                value={modifyUserInfo.nickname} 
                                onChange={handleOnInput}/>
                            </div>
                            <div>
                                <p>이메일 : </p>
                                <input name='email' 
                                value={modifyUserInfo.email} 
                                onChange={handleOnInput}/>
                            </div>
                            <div>
                                <p>전화번호 :</p>
                                <input name='phoneNumber' 
                                value={modifyUserInfo.phoneNumber} 
                                onChange={handleOnInput}/>
                            </div>
                            <div>
                                <p>권한 :</p>
                                <p>{modifyUserInfo.role}</p>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default ModifyProfilePage;