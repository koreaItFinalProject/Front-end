import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function MyPage(props) {

    const navigate = useNavigate();

    return (
        <div css={s.layout}>
            <div css={s.profileBox} onClick={() => navigate('')}>
                <div css={s.profileimage}>
                </div>
                <div css={s.infoLayout}>
                    <div css={s.userInfo}>
                        <p>닉네임 </p>
                    </div>
                </div>
            </div>
            <div css={s.mainBox}>
                <div css={s.mainBoxLayout}>
                    <div>
                        <div>작성한 게시글</div>
                        <div>댓글 관리</div>
                    </div>
                    <div>
                        <div>리뷰관리</div>
                        <div>알림정보</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default MyPage;