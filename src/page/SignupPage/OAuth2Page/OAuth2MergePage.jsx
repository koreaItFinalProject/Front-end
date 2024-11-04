import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { oauth2MergeApi } from '../../../apis/signInApis/oauth2MergeApi';
import { handleInputOnChange } from '../../../apis/util/handleInputOnChange/handleInputOnChange';
import { showFieldErrorMessage } from '../../../apis/util/showFieldErrorMessage/showFieldErrorMessage';

function OAuth2MergePage(props) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [inputUser , setinputUser] = useState({
      username: '',
      password:'',
  })
  const [fieldErrorMessages, setFieldErrorMessages] = useState({
      username: <></>,
      password: <></>,
  });

  const handleMergepageOnClick = async () => {
      const mergeData = {
          username : inputUser.username,
          password : inputUser.password,
          oauth2Name : searchParams.get("oAuth2Name"),
          provider: searchParams.get("provider")
      }
      const oauth = searchParams.get("oAuth2Name")
      console.log(oauth);
      const response = await oauth2MergeApi(mergeData);
      console.log(response);
      if(!response.isSuccess){
          if(response.errorStatus === "loginError"){
              alert(response.error);  
              navigate("/user/signup");
              return;
          }
          if(response.errorStatus === "fieldError"){
              const newErrors = showFieldErrorMessage(response.error);
              setFieldErrorMessages(newErrors);
              return;
          }
      }
      if(response.isSuccess){
          alert("통합 완료");
          navigate("/mypage");
          console.log(mergeData);
      }
  }

  return (
          <div css={s.layout}>
              <div css={s.Info}>
                  <div css={s.loginLayout}>
                      <div css={s.logo}>
                          <h1>
                            Merge Login
                          </h1>
                      </div>
                      <div>
                          <input type="text" name='username' value={inputUser.username} onChange={handleInputOnChange(setinputUser)} placeholder='아이디' />
                          {fieldErrorMessages.username}
                      </div>
                      <div>
                          <input type="password" name='password' value={inputUser.password} onChange={handleInputOnChange(setinputUser)} placeholder='비밀번호' />
                          {fieldErrorMessages.password}
                      </div>
                      <div css={s.signupbutton}>
                          <button onClick={handleMergepageOnClick}>통합하기</button>
                      </div>
                  </div>
              </div>
          </div>
  );
}

export default OAuth2MergePage;