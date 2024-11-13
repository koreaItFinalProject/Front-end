/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from 'react';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { v4 as uuid } from 'uuid';
import { useParams } from 'react-router-dom';
import { useModifyCafeMenuMutation } from "../../../apis/CafeApis/modifyCafeMenuApi";
import Modal from 'react-modal';
Modal.setAppElement('#root');

function CafeMenu({ viewMode, menu1, menu2 }) {
    const params = useParams();
    const cafeId = params.cafeId;
    const inputRefs = [useRef(null), useRef(null)];

    const [images, setImages] = useState([null, null]);
    const [originalImages, setOriginalImages] = useState([null, null]);
    const [imageModify, setImageModify] = useState([false, false]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const modifyCafeMenuMutation = useModifyCafeMenuMutation();

    useEffect(() => {
        setImages([menu1, menu2]);
        setOriginalImages([menu1, menu2]);
    }, [menu1, menu2]);

    const handleImageChangeClick = (index) => {
        inputRefs[index].current.click();
    };

    const handleImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            const newImageModify = [...imageModify];
            newImageModify[index] = false;
            setImageModify(newImageModify);
            return;
        }

        console.log(file);
        const storageRef = ref(storage, `cafe/menu/${uuid()}_${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            () => { },
            (error) => {
                console.error("업로드 에러", error);
            },
            async () => {
                try {
                    const url = await getDownloadURL(storageRef);
                    const newImages = [...images];
                    newImages[index] = url;
                    setImages(newImages);

                    const newImageModify = [...imageModify];
                    newImageModify[index] = true;
                    setImageModify(newImageModify);
                } catch (error) {
                    console.error("다운로드 에러", error);
                }
            }
        );
    };

    const handleConfirmOnClick = async (index) => {
        if (index === 0) {
            modifyCafeMenuMutation.mutate({ imageUrl: images[0], index: 0, cafeId });
            console.log("메뉴 이미지 1 저장");
        } else if (index === 1) {
            modifyCafeMenuMutation.mutate({ imageUrl: images[1], index: 1, cafeId });
            console.log("메뉴 이미지 2 저장");
        }

        const newImageModify = [...imageModify];
        newImageModify[index] = false;
        setImageModify(newImageModify);
    };

    const handleImageCancelOnClick = (index) => {
        const newImages = [...images];
        newImages[index] = originalImages[index]; // 원래 이미지로 복원
        setImages(newImages);

        const newImageModify = [...imageModify];
        newImageModify[index] = false;
        setImageModify(newImageModify);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>Menu</h1>
            </div>
            {viewMode === 'owner' && (
                <div css={s.imgChangeButtons}>
                    {[0, 1].map((index) => (
                        <div key={index}>
                            <button
                                css={s.changeButton}
                                onClick={() => handleImageChangeClick(index)}>메뉴 이미지 {index + 1} 변경
                            </button>
                            <input
                                type="file"
                                accept="image/*"
                                ref={inputRefs[index]}
                                style={{ display: 'none' }}
                                onChange={(e) => handleImageChange(index, e)}
                            />
                            {imageModify[index] && (
                                <div css={s.confirmCancel}>
                                    <button onClick={() => handleConfirmOnClick(index)}>확인</button>
                                    <button onClick={() => handleImageCancelOnClick(index)}>취소</button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div css={s.imgContainer}>
                {[0, 1].map((index) => (
                    <div key={index} css={s.menuImg} onClick={() => handleImageClick(images[index])}>
                        <img src={images[index] || ""} alt={`메뉴 이미지 ${index + 1}`} />
                    </div>
                ))}
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={s.modalStyles} >
                <div css={s.modalImageContainer}>
                    <button css={s.closeButton} onClick={closeModal}>닫기</button>
                    <img css={s.modalImage} src={selectedImage} alt="확대된 메뉴 이미지" />
                </div>
            </Modal>
        </div>
    );
}

export default CafeMenu;