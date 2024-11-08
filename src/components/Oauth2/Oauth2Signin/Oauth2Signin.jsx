import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { instance } from '../../../apis/util/instance';

function Oauth2Signin(props) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    if (!accessToken) {
      confirmAlert("잘못된 접근입니다.");
      navigate("/user/login");
      return;
    }
    localStorage.setItem("accessToken", "Bearer " + accessToken);
    instance.interceptors.request.use(config => {
      config.headers["Authorization"] = localStorage.getItem("accessToken")
      return config;
    });
    navigate("/");
  }, []);
  return (
    <>
    </>
  );
}

export default Oauth2Signin;