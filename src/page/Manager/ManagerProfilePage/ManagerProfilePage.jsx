import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';

function ManagerProfilePage(props) {
    return (
        <div>
            <Header />
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

                <div css={s.listBox}>
                    <div css={s.list}>
                        <div>
                            <p>아이디:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>이메일:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>대표자명:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>카페명:</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>카페 주소:</p>
                            <input type="text" />
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

export default ManagerProfilePage;