import React, { useState } from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import UserSignin from '../../components/UserSignin/UserSignin';
import OwnerSignin from '../../components/OwnerSignin/OwnerSignin';


function UserSignInPage(props) {

    const [loginState , setLoginState] = useState(false);
    

    const handleLoginStateOnClick = () => {
        setLoginState(false);
        console.log(loginState);
    }

    const handleOwnerStateOnClick = () => {
        setLoginState(true);
        console.log(loginState);
    }

    return (
        <div>
            <Header/>
            <div css={s.layout}>
                <div css={s.loginMain}>
                        <div css={s.selectMember}>
                            <button onClick={()=> handleLoginStateOnClick()}
                                css={
                                    !loginState ? s.userButton: ''
                                }
                            >개인 회원</button>
                            <button 
                                onClick={()=> handleOwnerStateOnClick()}
                                css={
                                    loginState ? s.ownerButton: ''
                                }
                            >기업 회원</button>
                        </div>
                    <div css={s.togleLogin}>
                    {
                        !loginState 
                        ? <UserSignin/> 
                        : <OwnerSignin/>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSignInPage;