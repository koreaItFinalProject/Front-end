import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaPencilAlt } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { State } from '../../../atom/userState';
import { useQuery } from 'react-query';
import { instance } from '../../../apis/util/instance';

function ModifyProfilePage() {
    const [modifyState, setModifySelect] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const user = useRecoilValue(State);
    const setUser = useSetRecoilState(State);
    const [imagePreview, setImagePreview] = useState(userInfo.img);
    const [selectedImage, setSelectedImage] = useState(null);
    const inputRef = useRef(null);
    const [modifyUserInfo, setModifyUserInfo] = useState({
        name: '',
        username: '',
        email: '',
        nickname: '',
        phoneNumber: '',
        img:'',
        role: ''
    })
    const handleChangeOnClick = () => {
        setModifySelect(!modifyState);
    }

    const handleOnInput = (e) => {
        setModifyUserInfo({
            ...modifyUserInfo,
            [e.target.name]: e.target.value
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

    useEffect(() => {
        setModifyUserInfo({
            name: user.user?.name,
            username: user.user?.username,
            email: user.user?.email,
            nickname: user.user?.nickname,
            phoneNumber: user.user?.phoneNumber,
            img:user.user?.img,
            role: user.user?.role
        })
        console.log(user);
    }, [user]);
    console.log(user);

    const handleImageClick = () => {
        inputRef.current.click(); // 파일 선택창 열기
        console.log(inputRef.current);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            console.log(reader);
            setSelectedImage(file);
            console.log(file.name);
            return file;
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <div>
                    <button onClick={handleChangeOnClick}>수정하기<FaPencilAlt /></button>
                </div>
                <div css={s.profileimage}>
                    <div css={s.imgSelect} onClick={handleImageClick}>
                        <img src={userInfo.img} alt="프로필 이미지" />
                        <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: 'none' }} // 숨겨진 input
                        onChange={handleImageChange}
                        />
                    </div>
                </div>
                <div css={s.userProfile}>
                    {/*
                      이름, 아이디 , 닉네임 , 이메일 수정가능해야함  
                    */}
                    {
                        modifyState ?
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
                                    <p>{userInfo.role === "USER" ? '사용자' :
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
                                        onChange={handleOnInput} />
                                </div>
                                <div>
                                    <p>아이디 : </p>
                                    <input name='username'
                                        value={modifyUserInfo.username}
                                        onChange={handleOnInput} />
                                </div>
                                <div>
                                    <p>닉네임 : </p>
                                    <input name='nickname'
                                        value={modifyUserInfo.nickname}
                                        onChange={handleOnInput} />
                                </div>
                                <div>
                                    <p>이메일 : </p>
                                    <input name='email'
                                        value={modifyUserInfo.email}
                                        onChange={handleOnInput} />
                                </div>
                                <div>
                                    <p>전화번호 :</p>
                                    <input name='phoneNumber'
                                        value={modifyUserInfo.phoneNumber}
                                        onChange={handleOnInput} />
                                </div>
                                <div>
                                    <p>권한 :</p>
                                    <p>{modifyUserInfo.role === "USER" ? '사용자' :
                                        modifyUserInfo.role === "OWNER" ? '점주' :
                                            modifyUserInfo.role === "admin" ? '관리자' : '권한 정보가 없습니다'}</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ModifyProfilePage;