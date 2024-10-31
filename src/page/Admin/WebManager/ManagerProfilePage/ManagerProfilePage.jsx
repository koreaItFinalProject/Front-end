import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from './style';

function ManagerProfilePage(props) {
    return (
        <div css={s.mainLayout}>
            <div css={s.layout}>
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