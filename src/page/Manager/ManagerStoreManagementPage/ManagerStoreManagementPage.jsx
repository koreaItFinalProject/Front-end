import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';
import { Link } from 'react-router-dom';
import SideBar from '../../../components/SideBar/SideBar';

function ManagerStoreManagementPage(props) {
    return (
        <div css={s.mainLayout}>
            <div css={s.mainBox}>
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