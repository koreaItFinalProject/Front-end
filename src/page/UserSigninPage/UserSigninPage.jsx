import React, { useState } from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSignin from '../../components/UserSignin/UserSignin';


function UserSigninPage(props) {

    const [login , setLogin] = useState(false);
    const handleLoginStateOnClick = () => {
        setLogin(false);
        console.log(login);
    }

    const handleOwnerStateOnClick = () => {
        setLogin(true);
        console.log(login);
    }
  
    return (
        <div>
            <div css={s.layout}>
                <div css={s.loginMain}>
                        <div css={s.selectMember}>
                            <button onClick={()=> handleLoginStateOnClick()}
                            >회원 로그인</button>
                        </div>
                    <div css={s.togleLogin}>
                        <UserSignin/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSigninPage;