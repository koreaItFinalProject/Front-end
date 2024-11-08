import React, { useCallback, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaPlus } from "react-icons/fa6";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid';
import { confirmAlert } from '../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert';
import modifyCafeBannerApi from '../../../apis/CafeApis/modifyCafeBannerApi';
import { useParams } from 'react-router-dom';

function CafeMenu({ viewMode }) {
    const params = useParams();
    const cafeId = params.cafeId;
    const inputRef = useRef(null);
    const [imageModify, setImageModify] = useState(false);
    const [menuImg, setMenuImg] = useState();
    const [modifyMenuImg, setModifyMenuImg] = useState();

    const handleImageChangeClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setImageModify(modifyMenuImg.img !== menuImg?.img ? true : false);
            setModifyMenuImg(img => ({
                ...img,
                img: modifyMenuImg.img
            }));
            return;
        }
        console.log(file);
        const storageRef = ref(storage, `cafe/menu/${modifyMenuImg?.id}/${uuid()}_${modifyMenuImg?.cafeName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            () => { },
            () => { },
            async (success) => {
                try {
                    console.log("check");
                    const url = await getDownloadURL(storageRef)
                    setModifyMenuImg(cafe => ({
                        ...cafe,
                        img: url
                    }));
                    setImageModify(true);
                } catch (error) {
                    console.error("다운로드 에러");
                }
            }
        );
    }

    const handleConfirmOnClick = async () => {
        const response = await modifyCafeBannerApi(cafeId, modifyMenuImg.img);
        setImageModify(false);
        setMenuImg(img => ({
            ...img,
            img: modifyMenuImg.img
        }))
        if (response.status === 200) {
            confirmAlert("이미지 변경 성공");
        }
    }

    const handleImageCancelOnClick = useCallback(() => {
        setImageModify(false);
        setModifyMenuImg((imgs) => ({
            ...imgs,
            img: menuImg?.img
        }))
    }, [modifyMenuImg?.img])

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>Menu</h1>
                {
                    viewMode === 'owner'
                        ?
                        <div>
                            <button onClick={handleImageChangeClick}>이미지 변경</button>
                            <input
                                type="file"
                                accept="image/*"
                                ref={inputRef}
                                style={{ display: 'none' }} // 숨겨진 input
                                onChange={handleImageChange}
                            />
                            {
                                imageModify === true
                                    ?
                                    <div>
                                        <button onClick={handleConfirmOnClick}>확인</button>
                                        <button onClick={handleImageCancelOnClick}>취소</button>
                                    </div>
                                    :
                                    <></>
                            }
                        </div>
                        :
                        <></>
                }
            </div>
            <div css={s.imgContainer}>
                <div css={s.menuImg}>
                    <img src="" alt="" />
                </div>
                <div css={s.menuImg}>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
}

export default CafeMenu;