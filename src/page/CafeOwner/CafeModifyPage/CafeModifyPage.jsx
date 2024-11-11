/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCafeDetailQuery } from '../../../apis/CafeApis/getCafeDetailApi';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase/firebase";
import { v4 as uuid } from 'uuid';
import { IoCloseOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import StarRating from "../../../apis/util/starRating";
import CafeReview from "../../../components/CafeDetail/CafeReview/CafeReview";
import CafeMenu from "../../../components/CafeDetail/CafeMenu/CafeMenu";
import modifyCafeBannerApi from "../../../apis/CafeApis/modifyCafeBannerApi";
import { useMutation } from "react-query";
import { instance } from "../../../apis/util/instance";
import NoticeList from "../../../components/NoticeList/NoticeList";
import { useCafeNoticeListQuery } from "../../../apis/CafeApis/getCafeNoticeListApi";
import { useCafeLikeQuery } from "../../../apis/CafeApis/CafeLikeApi";
import { confirmAlert } from "../../../apis/util/SweetAlert2/ConfirmAlert/ConfirmAlert";

function CafeModifyPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const cafeId = params.cafeId;
    const inputRef = useRef(null);
    const [selectMenu, setSelectMenu] = useState('menu');
    const [viewMode, setViewMode] = useState('user');
    const [imageModify, setImageModify] = useState(false);
    const [modifyCafeInfo, setModifyCafeInfo] = useState({});
    const [cafeInfo, setCafeInfo] = useState({});

    const { data: cafeDetail, refetch } = useCafeDetailQuery(cafeId);
    const { data: cafeLike, refetch: refetchCafeLike } = useCafeLikeQuery(cafeId);
    const { data: cafeNoticeList } = useCafeNoticeListQuery(cafeDetail?.ownerId, {
        enabled: !!cafeDetail?.ownerId, // ownerId가 존재할 때만 쿼리 실행
    });

    useEffect(() => {
        if (cafeDetail) {
            setModifyCafeInfo(cafeDetail);
            setCafeInfo(cafeDetail);
        }
    }, [cafeDetail])


    const saveCafeInfoMutation = useMutation(
        async () => {
            return await instance.put(`/cafe/${cafeId}`, modifyCafeInfo);
        },
        {
            onSuccess: () => {
                confirmAlert("카페 정보 수정 완료");
                refetch();
                setViewMode('user');
            },
            onError: () => {
                confirmAlert("카페 정보 수정 실패");
                setModifyCafeInfo(({
                    cafeName: modifyCafeInfo.cafeName,
                    address: modifyCafeInfo.address,
                    category: modifyCafeInfo.category
                }));
            }
        }
    );

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    }

    const handleEditButtonOnClick = () => {
        if (viewMode === 'user') {
            setViewMode('owner');
            return;
        }
        setViewMode('user');
    }

    const handleImageChangeClick = () => {
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file === undefined) {
            setImageModify(modifyCafeInfo.img !== cafeInfo?.img ? true : false);
            setModifyCafeInfo(img => ({
                ...img,
                img: modifyCafeInfo.img
            }));
            return;
        }
        console.log(file);
        const storageRef = ref(storage, `cafe/banner/${modifyCafeInfo?.cafeName}/${uuid()}_${modifyCafeInfo?.cafeName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            () => { },
            () => { },
            async (success) => {
                try {
                    console.log("check");
                    const url = await getDownloadURL(storageRef)
                    setModifyCafeInfo(cafe => ({
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
        const response = await modifyCafeBannerApi(cafeId, modifyCafeInfo.img);
        setImageModify(false);
        setCafeInfo(img => ({
            ...img,
            img: modifyCafeInfo.img
        }))
        if (response.status === 200) {
            confirmAlert("이미지 변경 성공");
        }
    }

    const handleImageCancelOnClick = useCallback(() => {
        setImageModify(false);
        setModifyCafeInfo((imgs) => ({
            ...imgs,
            img: cafeInfo?.img
        }))
    }, [modifyCafeInfo?.img])

    const handleTitleInputOnChange = (e) => {
        setModifyCafeInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }))
    }

    const handleAddressInputOnChange = (e) => {
        setModifyCafeInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }))
    }

    const handleCategoryChange = (e) => {
        setModifyCafeInfo(prevInfo => ({
            ...prevInfo,
            category: e.target.value
        }))
    }

    const handleSaveOnClick = async () => {
        saveCafeInfoMutation.mutateAsync();
    }

    const handleCancelOnClick = () => {
        setModifyCafeInfo(modifyCafeInfo);
        setViewMode('user');
    }

    return (
        <div css={s.layout}>
            {
                viewMode === 'user'
                    ?
                    <div css={s.closeButton}>
                        <button onClick={() => navigate(-1)}><IoCloseOutline /></button>
                    </div>
                    :
                    <div css={s.closeButton}></div>
            }
            <div css={s.bannerImg}>
                <img src={modifyCafeInfo.img} alt="배너 이미지" />
            </div>
            {
                viewMode === 'owner'
                    ?
                    <div css={s.imgChangeButton}>
                        <button onClick={handleImageChangeClick}>이미지 변경</button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={inputRef}
                            style={{ display: 'none' }} // 숨겨진 input
                            onChange={handleImageChange}
                        />
                        {
                            imageModify === true ?
                                <div>
                                    <button onClick={handleConfirmOnClick}>확인</button>
                                    <button onClick={handleImageCancelOnClick}>취소</button>
                                </div>
                                : <></>
                        }
                    </div>
                    :
                    <></>
            }
            <div css={s.detailHeader}>
                <div css={s.title}>
                    {
                        viewMode === 'user'
                            ?
                            <>
                                <div>
                                    <h1>{modifyCafeInfo?.cafeName}</h1>
                                </div>
                                <div css={s.editButton}>
                                    <button onClick={handleEditButtonOnClick}><FaRegEdit /></button>
                                </div>
                            </>
                            :
                            viewMode === 'owner'
                                ?
                                <>
                                    <div css={s.cafeNameInput}>
                                        <input type="text"
                                            name="cafeName"
                                            value={modifyCafeInfo.cafeName}
                                            onChange={handleTitleInputOnChange}
                                        />
                                    </div>
                                    <div css={s.editButton}>
                                        <button onClick={handleSaveOnClick}>저장</button>
                                        <button onClick={handleCancelOnClick}>취소</button>
                                    </div>
                                </>
                                :
                                <></>
                    }
                </div>
                {
                    viewMode === 'user'
                        ?
                        <div css={s.address}>{cafeDetail?.address}</div>
                        :
                        viewMode === 'owner'
                            ?
                            <input css={s.addressInput}
                                name="address"
                                value={modifyCafeInfo?.address}
                                onChange={handleAddressInputOnChange}
                            />
                            :
                            <></>
                }
                <div css={s.reviewStat}>
                    <StarRating
                        averageRating={cafeDetail?.totalRating === null ? 0 : cafeDetail?.totalRating}
                        dimension={"30px"}
                        spacing={5}
                    />
                    <div>{modifyCafeInfo?.totalRating}</div>
                </div>
                <div css={s.detailInfo}>
                    {
                        viewMode === 'user'
                            ?
                            <div>{modifyCafeInfo?.category}</div>
                            :
                            viewMode === 'owner'
                                ?
                                <select value={modifyCafeInfo.category} onChange={handleCategoryChange}>
                                    <option value="베이커리">베이커리</option>
                                    <option value="디저트">디저트</option>
                                    <option value="분위기">분위기</option>
                                    <option value="브런치">브런치</option>
                                </select>
                                :
                                <></>
                    }
                    <div>리뷰 {modifyCafeInfo?.reviewCount}</div>
                    <div>좋아요 {cafeLike?.likeCount}</div>
                </div>
            </div>
            <div css={s.detailContent}>
                <div css={s.menuButtons}>
                    <button
                        css={selectMenu === 'menu' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"menu"}>
                        메뉴
                    </button>
                    <button
                        css={selectMenu === 'review' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"review"}>
                        리뷰
                    </button>
                    <button
                        css={selectMenu === 'notice' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"notice"}>
                        공지사항
                    </button>
                </div>
                {
                    selectMenu === 'menu'
                        ?
                        <CafeMenu
                            viewMode={viewMode}
                            menu1={cafeDetail?.menu1}
                            menu2={cafeDetail?.menu2}
                        />
                        :
                        selectMenu === 'review'
                            ?
                            <CafeReview cafeDetail={cafeDetail} />
                            :
                            selectMenu === 'notice'
                                ?
                                <NoticeList
                                    sortedNoticeList={cafeNoticeList?.boards}
                                    prevPage={'detail'}
                                    cafeId={cafeId}
                                    cafeName={cafeDetail?.cafeName}
                                />
                                :
                                <></>
                }
            </div>
        </div>
    );
}

export default CafeModifyPage;