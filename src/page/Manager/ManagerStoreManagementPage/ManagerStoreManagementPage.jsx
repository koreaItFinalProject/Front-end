import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';
import { Link } from 'react-router-dom';

function ManagerStoreManagementPage(props) {
    return (
        <div>
            <Header />
            <div css={s.mainBox}>
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
                </div>

                <div css={s.box}>
                    <div css={s.ibBox}>
                        <div css={s.inputSection}>
                            <p>조회:</p>
                            <input type="text" />
                        </div>
                        <button css={s.button}>검색</button>
                    </div>

                    <div>
                        <div css={s.layoutBox}>
                            <div>
                                <Link to="/particular/store">점포 리스트</Link>
                                <button css={s.deleteButton}>삭제</button>
                            </div>
                            <div>
                                <Link to="/particular/store">점포 리스트</Link>
                                <button css={s.deleteButton}>삭제</button>
                            </div>
                            <div>
                                <Link to="/particular/store">점포 리스트</Link>
                                <button css={s.deleteButton}>삭제</button>
                            </div>
                            <div>
                                <Link to="/particular/store">점포 리스트</Link>
                                <button css={s.deleteButton}>삭제</button>
                            </div>
                            <div>
                                <Link to="/particular/store">점포 리스트</Link>
                                <button css={s.deleteButton}>삭제</button>
                            </div>
                            

                        </div>
                    </div>

                    <div css={s.buttonBox}>
                        <button>점포 추가하기</button>
                    </div>
                </div>


            </div>



        </div>
    );
}

export default ManagerStoreManagementPage;