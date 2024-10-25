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
        img: '',
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
            img: user.user?.img,
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
            <div css={s.modifyButton}>
                <button onClick={handleChangeOnClick}>수정하기<FaPencilAlt /></button>
            </div>
            <div css={s.profileBox}>
                <div onClick={handleImageClick} css={s.profileimage}>
                    <img src={userInfo.img} alt="프로필 이미지" />
                    <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: 'none' }} // 숨겨진 input
                        onChange={handleImageChange}
                    />
                </div>
                <div css={s.userInfo}>
                    {
                        modifyState ?
                            <div>
                                <div>
                                    <p>이름 :</p>
                                    <p>아이디 :</p>
                                    <p>닉네임 :</p>
                                    <p>이메일 :</p>
                                    <p>전화번호 :</p>
                                </div>
                                <div>
                                    <p>{userInfo.name}</p>
                                    <p>{userInfo.username}</p>
                                    <p>{userInfo.nickname}</p>
                                    <p>{userInfo.email}</p>
                                    <p>{userInfo.phoneNumber}</p>
                                </div>
                            </div>
                            :
                            <div>
                                <div>
                                    <p>이름 :</p>
                                    <p>아이디 : </p>
                                    <p>닉네임 : </p>
                                    <p>이메일 : </p>
                                    <p>전화번호 :</p>
                                </div>
                                <div>
                                    <input name='name'
                                        value={modifyUserInfo.name}
                                        onChange={handleOnInput} />
                                    <input name='username'
                                        value={modifyUserInfo.username}
                                        onChange={handleOnInput} />
                                    <input name='nickname'
                                        value={modifyUserInfo.nickname}
                                        onChange={handleOnInput} />
                                    <input name='email'
                                        value={modifyUserInfo.email}
                                        onChange={handleOnInput} />
                                    <input name='phoneNumber'
                                        value={modifyUserInfo.phoneNumber}
                                        onChange={handleOnInput} />
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ModifyProfilePage;