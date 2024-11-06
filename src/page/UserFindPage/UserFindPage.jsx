import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import FindByUsername from '../../components/FindUser/FindByUsername';
import FindByPassword from '../../components/FindUser/FindByPassword';
import { useLocation } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';


function UserFindPage() {
    const location = useLocation();
    const mode = location.state?.mode;
    return (
        <div css={s.layout}>
            <BackButton/>
            <div css={s.Sublayout}>
                {
                    mode === 'findId'?
                        <FindByUsername/>
                        :
                        mode === 'findPassword'?
                            <FindByPassword/>
                            :<></>
                }
            </div>
        </div>
    );
}

export default UserFindPage;