import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from 'react-icons/ri';

function OwnerSignin(props) {
    const [ownersave , isOwnerSave] = useState(false);

    const handleSaveOnChange = () => {
        isOwnerSave(!ownersave);
        console.log(ownersave);
    }

    return (
        <div css={s.layout}>
            <div css={s.login}>
                <div css={s.loginInput}>
                    <input type="text" placeholder='아이디'/>
                    <input type="text" placeholder='비밀번호'/>
                    <div css={s.checkbox}>
                        <span id='checkbox' onClick={handleSaveOnChange}>
                            <input type="checkbox" id='checkboxt' />
                            {
                                ownersave 
                                ? 
                                <RiCheckboxCircleFill/>
                                :
                                <RiCheckboxCircleLine/> 
                            }
                            아이디 저장 사장님
                        </span>
                    </div>
                </div>
                <div css={s.button}>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}


export default OwnerSignin;