import * as s from "./style";
/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { State } from '../../../atom/userState';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid';
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
        console.log(file);
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
                    const url = await getDownloadURL(storageRef);
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

    const handleProfileImageClick = async (imgurl) => {
        const response = await mypageProfileApi(imgurl);
        setImageModify(false);
        console.log(response);
        console.log(userInfoProfile);
        setUserInfoProfile(user => ({
            ...user,
            img: modifyUserInfo.img
        }));
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
            <div css={s.profileimage}>
                <div onClick={handleImageClick}>
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
                    imageModify === true
                        ?
                        <div css={s.profileButton}>
                            <button onClick={() => handleProfileImageClick(modifyUserInfo.img)}>확인</button>
                            <button onClick={handleProfileImageCancel}>취소</button>
                        </div>
                        :
                        <></>
                }
                <p>{userInfoProfile?.name}</p>
            </div>
            <div css={s.userInfo}>
                <div css={s.userDetailInfo}>
                    <p>별명</p>
                    <p>{userInfoProfile?.nickname}</p>
                </div>
                <div css={s.userDetailInfo}>
                    <p>Email</p>
                    <p>{userInfoProfile?.email}</p>
                </div>
                <button onClick={handleOnModalClick} value={value}>프로필 관리</button>
            </div>
        </div>
    );
}

export default ModifyProfilePage;