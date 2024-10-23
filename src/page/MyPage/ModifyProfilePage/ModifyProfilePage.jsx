import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { FaPencilAlt } from "react-icons/fa";

function ModifyProfilePage({}) {
    const [modifyState, setModifySelect] = useState(true);
    
    const handleChangeOnClick = () => {
        setModifySelect(!modifyState);
    }
    return (
        <div css={s.layout}>
            <div css={s.profileBox}>
                <div>
                    <button onClick={handleChangeOnClick}>수정하기<FaPencilAlt/></button>
                </div>
                <div css={s.profileimage}>
                    <img src="" alt="프로필 이미지" />
                </div>
                <div css={s.userProfile}>
                    {/*
                      이름, 아이디 , 닉네임 , 이메일 수정가능해야함  
                    */}
                    {
                        modifyState?
                        <div css={s.profileinfo}>
                            <div>
                                <p>이름 : </p>
                                <p></p>
                            </div>
                            <div>
                                <p>아이디 :</p>
                                <p></p>
                            </div>
                            <div>
                                <p>닉네임 :</p>
                                <p></p>
                            </div>
                            <div>
                                <p>이메일 :</p>
                                <p></p>
                            </div>
                            <div>
                                <p>전화번호 :</p>
                                <p></p>
                            </div>
                            <div>
                                <p>권한 :</p>
                                <p></p>
                            </div>
                        </div>
                        :
                        <div css={s.modifyProfileInfo}>
                            <div>
                                <p>이름 :</p><input/>
                            </div>
                            <div>
                                <p>아이디 : </p><input/>
                            </div>
                            <div>
                                <p>닉네임 : </p><input/>
                            </div>
                            <div>
                                <p>이메일 : </p><input/>
                            </div>
                            <div>
                                <p>전화번호 :</p><input/>
                            </div>
                            <div>
                                <p>권한 :</p><input/>
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default ModifyProfilePage;