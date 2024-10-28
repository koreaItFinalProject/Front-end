import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { State } from '../../../atom/userState';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid';

/** @jsxImportSource @emotion/react */
import * as s from "./style";
import ReactModal from 'react-modal';

function ModifyProfilePage({ handleOnModalClick, setIsOpen, isOpen, closeModal, value }) {
    const user = useRecoilValue(State);
    const [modifyState, setModifySelect] = useState(true);
    const [userInfo, setUserInfo] = useState({});
    const setUser = useSetRecoilState(State);
    const inputRef = useRef(null);
    const [modifyUserInfo, setModifyUserInfo] = useState({})
    const [check, setCheck] = useState("user");

    const handleOnInput = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber' && value.length > 11) {
            return; // 11자리를 초과하면 입력을 무시
        }
        setModifyUserInfo({
            ...modifyUserInfo,
            [name]: value
        })
        console.log(modifyUserInfo);
    }

    useEffect(() => {
        if (user) {
            setModifyUserInfo(user.user);
            setUserInfo(user.user);
        }
    }, [user]);

    const handleImageClick = () => {
        inputRef.current.click(); // 파일 선택창 열기
        console.log(inputRef.current);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log('1:' + e.target.files[0]);
        const storageRef = ref(storage, `user/profile/${uuid()}_${userInfo.name}`);
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
                } catch (error) {
                    console.error("다운로드 에러");
                }
            }
        );
    };

    return (
        <div css={s.layout}>
            <div css={s.modifyButton}>
                <button onClick={handleOnModalClick} value={value}>수정하기<FaPencilAlt /></button>
            </div>

            <div css={s.profileBox}>
                <div onClick={handleImageClick} css={[
                    s.profileimage,
                    !modifyState && { cursor: 'pointer' }
                ]}>
                    <img src={modifyUserInfo?.img} alt="프로필 이미지" />
                    <input
                        type="file"
                        accept="image/*"
                        ref={inputRef}
                        style={{ display: 'none' }} // 숨겨진 input
                        onChange={handleImageChange}
                    />
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
                            <p>{userInfo?.name}</p>
                            <p>{userInfo?.username}</p>
                            <p>{userInfo?.nickname}</p>
                            <p>{userInfo?.email}</p>
                            <p>{userInfo?.phoneNumber}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModifyProfilePage;