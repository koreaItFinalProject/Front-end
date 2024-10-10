import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';

function ManagerManagementPage(props) {
    return (
        <div>
            <Header />
            <div css={s.container}>
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
                    <div css={s.titleBox}>
                        <div>사용자 게시글</div>
                    </div>

                    <div css={s.contentBox}>
                        <div css={s.secondTitleBox}>
                            <p>게시글의 제목</p>
                            <p>사용자 정보</p>
                        </div>

                        <div css={s.secondTitleBox}>
                            <p>게시글의 제목</p>
                            <p>사용자 정보</p>
                        </div>
                    </div>
                </div>

                <div css={s.mainBox}>
                    <div css={s.titleBox}>
                        <div>사용자 댓글</div>
                    </div>

                    <div css={s.contentBox}>
                        <div css={s.secondTitleBox}>
                            <p>댓글</p>
                            <p>사용자 정보</p>
                        </div>

                        <div css={s.secondTitleBox}>
                            <p>댓글</p>
                            <p>사용자 정보</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ManagerManagementPage;