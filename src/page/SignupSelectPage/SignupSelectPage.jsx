import React from 'react';
import Header from '../../components/Header/Header';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { naver, kakao, google } from '../../assets/image';

function SignupSelectPage(props) {
    return (
        <div>
            <Header/>
            <div css={s.layout}>
                    <div css={s.userlogin}>
                            <h1>개인회원</h1>
                            <p>기업 없는 회원</p>
                            <button>개인 회원 가입</button>
                            <div css={s.oauth2Logo}>
                                <button>
                                    <img src={naver} alt="네이버 로그인 로고" />
                                </button>
                                <button>
                                    <img src={kakao} alt="카카오 로그인 로그" />
                                </button>
                                <button>
                                    <img src={google} alt="구글 로그인 로고" />
                                </button>
                            </div>
                    </div>
                    <div css={s.ownerlogin}>
                        <div>
                            <h1>기업회원</h1>
                            <p>기업 있는 회원</p>
                            <button>기업 회원 가입</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default SignupSelectPage;