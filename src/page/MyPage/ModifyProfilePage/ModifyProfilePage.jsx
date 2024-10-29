import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { useRecoilValue } from 'recoil';
import { State } from '../../../atom/userState';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import mypageProfileApi from '../../../apis/mypageApis/mypageProfileApi';

function ModifyProfilePage({ handleOnModalClick, value }) {
    const user = useRecoilValue(State);
    const [userInfoProfile, setUserInfoProfile] = useState({});
    const inputRef = useRef(null);
    const [modifyUserInfo, setModifyUserInfo] = useState({})
    const [imageModify, setImageModify] = useState(false);

    useEffect(() => {
        if (user) {
            setModifyUserInfo(user.user);
            setUserInfoProfile(user.user);
        }
    }, [user]);

    const handleImageClick = () => {
        inputRef.current.click(); // 파일 선택창 열기
        console.log(inputRef.current);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setImageModify(modifyUserInfo.img !== userInfoProfile.img ? true : false);
            setModifyUserInfo(user => ({
                ...user,
                img: modifyUserInfo.img
            }));
            return;
        }
        console.log(file);
        const storageRef = ref(storage, `user/profile/${uuid()}_${userInfoProfile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            () => { },
            () => { },
            async (success) => {
                try {
                    console.log("check");
                    const url = await getDownloadURL(storageRef)
                    setModifyUserInfo(user => ({
                        ...user,
                        img: url
                    }));
                    setImageModify(true);
                } catch (error) {
                    console.error("다운로드 에러");
                }
            }
        );
    };

    const handleProfileImageClick = async (id, imgurl) => {
        const response = await mypageProfileApi(id, imgurl);
        console.log(userInfoProfile);
        if (response.status === 200) {
            alert("이미지 변경 성공");
        }
    }

    const handleProfileImageCancel = useCallback(() => {
        setImageModify(false);
        setModifyUserInfo((imgs) => ({
            ...imgs,
            img: userInfoProfile.img
        }))
    }, [modifyUserInfo?.img])

    return (
        <div css={s.layout}>
            <div css={s.modifyButton}>
                <button onClick={handleOnModalClick} value={value} >수정하기<FaPencilAlt /></button>
            </div>
            <div css={s.profileBox}>
                <div css={s.profileimage}>
                    <div onClick={handleImageClick} >
                        <img src={modifyUserInfo?.img} alt="프로필 이미지" />
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            style={{ display: 'none' }} // 숨겨진 input
                            onChange={handleImageChange}
                        />
                    </div>
                    {
                        imageModify === true ?
                            <div>
                                <button onClick={() => handleProfileImageClick(userInfoProfile.id, modifyUserInfo.img)}>확인</button>
                                <button onClick={handleProfileImageCancel}>취소</button>
                            </div>
                            : <></>
                    }
                </div>
                <div css={s.userInfo}>
                    <div>
                        <div>
                            <p>이름 :</p>
                            <p>아이디 :</p>
                            <p>닉네임 :</p>
                            <p>이메일 :</p>
                            <p>전화번호 :</p>
                        </div>
                        <div>
                            <p>{userInfoProfile?.name}</p>
                            <p>{userInfoProfile?.username}</p>
                            <p>{userInfoProfile?.nickname}</p>
                            <p>{userInfoProfile?.email}</p>
                            <p>{userInfoProfile?.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModifyProfilePage;