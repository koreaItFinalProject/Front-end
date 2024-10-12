import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';

function ManagerStoreRequestPage(props) {
    return (
        <div css={s.mainLayout}>
            <SideBar />
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
    );
}

export default ManagerStoreRequestPage;