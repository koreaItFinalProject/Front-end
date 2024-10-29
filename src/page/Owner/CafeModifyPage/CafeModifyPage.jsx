/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCafeDetailQuery } from '../../../apis/CafeApis/getCafeDetailApi';
import StarRating from "../../../apis/util/starRating";
import CafeReview from "../../../components/CafeDetail/CafeReview/CafeReview";
import CafeMenu from "../../../components/CafeDetail/CafeMenu/CafeMenu";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

function CafeModifyPage(props) {
    const navigate = useNavigate();
    const params = useParams();
    const cafeId = params.cafeId;
    const [selectMenu, setSelectMenu] = useState('review');
    const [viewMode, setViewMode] = useState('user');

    const { data: cafeDetail } = useCafeDetailQuery(cafeId);

    const handleMenuOnClick = (e) => {
        setSelectMenu(e.target.value);
    };

    const handleEditButtonOnClick = () => {
        if (viewMode === 'user') {
            setViewMode('owner');
            return;
        }
        setViewMode('user');
    };

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
            <div css={s.detailHeader}>
                <div css={s.title}>
                    {
                        viewMode === 'user'
                            ?
                            <>
                                <div>
                                    <h1>{cafeDetail?.cafeName}</h1>
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
                                    <input type="text" value={cafeDetail?.cafeName} />
                                </div>
                                <div css={s.editButton}>
                                    <button onClick={handleEditButtonOnClick}>취소</button>
                                </div>
                                </>
                                :
                                <></>
                    }
                </div>
                {
                    viewMode === 'user'
                        ?
                        <div>{cafeDetail?.address}</div>
                        :
                        viewMode === 'owner'
                        ?
                            <input css={s.addressInput} value={cafeDetail?.address} />
                            :
                            <></>
                }
                <div css={s.reviewStat}>
                    <StarRating averageRating={cafeDetail?.totalRating} />
                    <div>{cafeDetail?.totalRating}</div>
                </div>
                <div css={s.detailInfo}>
                    {
                        viewMode === 'user'
                            ?
                            <div>{cafeDetail?.category}</div>
                            :
                            viewMode === 'owner'
                                ?
                                <select>
                                    <option>베이커리</option>
                                    <option>디저트</option>
                                    <option>분위기</option>
                                    <option>브런치</option>
                                </select>
                                :
                                <></>
                    }
                    <div>리뷰 {cafeDetail?.reviewCount}</div>
                </div>
            </div>
            <div css={s.detailContent}>
                <div css={s.menuButtons}>
                    <button
                        css={selectMenu === 'menu' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"menu"}>
                        Menu
                    </button>
                    <button
                        css={selectMenu === 'review' ? s.activeButton : null}
                        onClick={handleMenuOnClick}
                        value={"review"}>
                        Review
                    </button>
                </div>
                {
                    selectMenu === 'review'
                        ? <CafeReview cafeDetail={cafeDetail} />
                        : <CafeMenu />
                }
            </div>
        </div>
    );
}

export default CafeModifyPage;