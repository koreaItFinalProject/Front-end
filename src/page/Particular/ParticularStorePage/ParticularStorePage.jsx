import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';
import { Link } from 'react-router-dom';

function ParticularStorePage(props) {
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

                <div css={s.listBox}>
                    <div css={s.list}>

                        <div css={s.title}>
                            <a>점포 상세 페이지</a>
                        </div>

                        <div>
                            <p>점주명:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>점포명:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>점포 주소:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>사업자 번호:</p>
                            <input type="text" />
                        </div>

                        <div css={s.registeredPhoto}>
                            <p>사업자 등록증 사진</p>
                        </div>

                        <div css={s.buttonBox}>
                            <button>수정</button>
                            <button>취소</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default ParticularStorePage;