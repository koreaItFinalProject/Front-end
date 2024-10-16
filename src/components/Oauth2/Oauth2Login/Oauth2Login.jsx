import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useNavigate, useParams } from 'react-router-dom';
import { oauth2MergeApi } from '../../../apis/signInApis/oauth2MergeApi';
import { handleInputUserOnChange } from '../../../apis/handleInputChange/handleInputChange';

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
      checkPassword : "",
      name : "",
      email: ""
    }); 

    const handleMergeSubmitOnClick = async () => {
      const mergeUser = {
          username : inputUser.username,
          password : inputUser.password,
          oauth2Name : searchParams.get("oAuth2Name"),
          provider : searchParams.get("provider"),
      }
      
      const mergeData = await oauth2MergeApi(mergeUser);
      console.log('통합 요청 결과', mergeData);
      console.log(mergeData);

      if(!mergeData.isSuceess){
          if(mergeData.errorStatus === "loginError"){
              alert(mergeData.error);
              return;
          }
          if(mergeData.errorStatus === "fieldError"){
              showFieldErrorMessage(mergeData.error);
              return;
          }
          
      }
      alert("계정 통합이 완료되었습니다.");
      navigate("/user/login");
    }

    const showFieldErrorMessage = (fieldErrors) => {
      let EmptyfieldErrors = {
          username : <></>,
          password : <></>,
          checkPassword : <></>,
          name : <></>,
          email : <></>
          }
          
      // 해당 에러하나에 하나씩 채워줌 - 키 밸류 형태로 넣음 리스트에 객체 형태
      for(let fieldError of fieldErrors){
          EmptyfieldErrors = {
              ...EmptyfieldErrors,
              [fieldError.field] : <p>{fieldError.defaultMessage}</p>
          }
      }
      setFieldErrorMessages(EmptyfieldErrors);
    }
  
  return (
    <div css={s.layout}>
        <div css={s.joinInfoBox}>
        <div>
            <input type="text" name='username' onChange={handleInputUserOnChange(setInputUser)} value={inputUser.username} placeholder='아이디' />
            {/* <p>이미 존재하는 아이디입니다.</p> */}
            {fieldErrorMessages.username}
        </div>
        <div>
            <input type="password" name='password' onChange={handleInputUserOnChange(setInputUser)} value={inputUser.password} placeholder='비밀번호' />
            {fieldErrorMessages.password}
        </div>
        </div>
        {/* <button css={submitJoinButton} onClick={handleMergeSubmitOnClick}>통합하기</button> */}
    </div>
  );
}

export default Oauth2Login;