import React from 'react';
import Header from '../../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ManagerPage(props) {
    return (
        <div>
            <Header />
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

            <div></div>


        </div>
    );
}

export default ManagerPage;


