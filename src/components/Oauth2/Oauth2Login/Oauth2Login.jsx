import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { oAuth2SignupApi } from '../../../apis/signInApis/oAuth2SignupApi';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';

function Oauth2Login(props) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useParams();

    const [ fieldErrorMessages , setFieldErrorMessages ] = useState({
      username : <></>,
      password : <></>,
    });

    const [ inputUser , setInputUser ] = useState({
      username: "",
      password: "",
    }); 

    const handleJoinSubmitOnClick = async () => {
      const joinUser = {
      ...inputUser,
      oauth2Name : searchParams.get("oAuth2Name"),
      provider : searchParams.get("provider"),
      }
      console.log(joinUser);

      const joinData = await oAuth2SignupApi(joinUser);
      console.log(joinData);
      if(!joinData.isSuceess){
          showFieldErrorMessage(joinData.fieldErrors);
          return;
      }
      alert("회원가입이 완료되었습니다.");
      navigate("/user/login");
    }

    
  
  return (
    <div css={s.layout}>
        <div css={s.joinInfoBox}>
        <div>
            <input 
              type="text" 
              name='username' 
              onChange={handleInputOnChange(setInputUser)} 
              value={inputUser.username} 
              placeholder='아이디' />
            {/* <p>이미 존재하는 아이디입니다.</p> */}
            {fieldErrorMessages.username}
        </div>
        <div>
            <input 
              type="password"
              name='password'
              value={inputUser.password} 
              onChange={handleInputOnChange(setInputUser)}
              placeholder='비밀번호'
            />
            {fieldErrorMessages.password}
        </div>
        </div>
        <button css={s.submitJoinButton} onClick={handleJoinSubmitOnClick}>통합하기</button>
    </div>
  );
}

export default Oauth2Login;