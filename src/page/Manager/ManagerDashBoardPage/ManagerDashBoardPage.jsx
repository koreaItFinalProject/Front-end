import React from 'react';
import Header from '../../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';

function ManagerDashBoardPage(props) {
    return (
        <div>
            <Header />
            <div css={s.mainLayout}>
                <div css={s.layout}>
                    <Link to="/manager/profile">프로필</Link>
                    <Link to="/manager/dashboard">대시보드</Link>
                    <Link to="/manager/management">사용자 관리</Link>
                    <Link to="/manager/storemanagement">점포 관리</Link>
                    <Link to="/manager/storerequest">점포 등록</Link>
                    <Link>요청 관리</Link>
                    <Link>설정</Link>
                    <Link to="/">로그아웃</Link>
                </div>

                <div css={s.mainBox}>
                    <div css={s.contentBox}></div>

                    <div css={s.box}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ManagerDashBoardPage;