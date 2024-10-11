import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';
import { Link } from 'react-router-dom';

function ManagerStoreRequestPage(props) {
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

                <div css={s.columnBox}>
                    <div>
                        <div css={s.titleBox}>
                            <p>점포 등록 요청 관리</p>
                        </div>
                    </div>

                    <div css={s.titleButtonBox}>
                        점포 등록 요청 리스트
                        <div css={s.buttonBox}>
                            <button>승인</button>
                            <button>거절</button>
                        </div>
                    </div>
                    <div css={s.titleButtonBox}>
                        점포 등록 요청 리스트
                        <div css={s.buttonBox}>
                            <button>승인</button>
                            <button>거절</button>
                        </div>
                    </div>
                    <div css={s.titleButtonBox}>
                        점포 등록 요청 리스트
                        <div css={s.buttonBox}>
                            <button>승인</button>
                            <button>거절</button>
                        </div>
                    </div>
                    <div css={s.titleButtonBox}>
                        점포 등록 요청 리스트
                        <div css={s.buttonBox}>
                            <button>승인</button>
                            <button>거절</button>
                        </div>
                    </div>
                    <div css={s.titleButtonBox}>
                        점포 등록 요청 리스트
                        <div css={s.buttonBox}>
                            <button>승인</button>
                            <button>거절</button>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    );
}

export default ManagerStoreRequestPage;