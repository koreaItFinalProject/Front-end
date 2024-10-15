import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../../../components/Header/Header';
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';

function ManagerManagementPage(props) {
    return (
        <div css={s.mainLayout}>
            <div css={s.container}>
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