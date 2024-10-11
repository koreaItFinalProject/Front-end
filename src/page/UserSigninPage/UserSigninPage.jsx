import React, { useState } from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSignin from '../../components/UserSignin/UserSignin';
import OwnerSignin from '../../components/OwnerSignin/OwnerSignin';


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
            <Header/>
            <div css={s.layout}>
                <div css={s.loginMain}>
                        <div css={s.selectMember}>
                            <button onClick={()=> handleLoginStateOnClick()}
                                css={
                                    !login ? s.userButton: ''
                                }
                            >개인 회원</button>
                            <button 
                                onClick={()=> handleOwnerStateOnClick()}
                                css={
                                    login ? s.ownerButton: ''
                                }
                            >기업 회원</button>
                        </div>
                    <div css={s.togleLogin}>
                    {
                        !login 
                        ? <UserSignin/> 
                        : <OwnerSignin/>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSigninPage;