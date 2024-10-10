import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';

function ManagerStoreManagementPage(props) {
    return (
        <div>
            <Header />
            <div css={s.outBox}>
                <div css={s.mainLayout}>
                    <div css={s.layout}>
                        <span>프로필</span>
                        <span>대시보드</span>
                        <span>사용자 관리</span>
                        <span>점포 관리</span>
                        <span>점포 등록</span>
                        <span>요청 관리</span>
                        <span>설정</span>
                        <span>로그아웃</span>
                    </div>
                </div>

                <div css={s.mainBox}>
                    <div css={s.columnBox}>
                        <div css={s.pictureBox}>카페사진</div>
                        <button css={s.imgChangeButton}>사진 바꾸기</button>
                    </div>
                       
                    <div css={s.showBox}>

                       
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ManagerStoreManagementPage;