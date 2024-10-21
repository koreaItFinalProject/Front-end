import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import MapPage from './page/MapPage/MapPage';
import BoardPage from './page/Board/BoardPage/BoardPage';
import WritePage from './page/Board/WritePage/WritePage';
import UserSignupPage from './page/SignupPage/UserSignupPage/UserSignupPage';
import OwnerSignupPage from './page/SignupPage/OwnerSignupPage/OwnerSignupPage';
import ManagerProfilePage from './page/Manager/ManagerProfilePage/ManagerProfilePage';
import ManagerDashBoardPage from './page/Manager/ManagerDashBoardPage/ManagerDashBoardPage';
import ManagerManagementPage from './page/Manager/ManagerManagementPage/ManagerManagementPage';
import DetailPage from './page/Board/DetailPage/DetailPage';
import ManagerStoreManagementPage from './page/Manager/ManagerStoreManagementPage/ManagerStoreManagementPage';
import ModifyPage from './page/Board/ModifyPage/ModifyPage';
import ManagerSetting from './page/Manager/ManagerSetting/ManagerSetting';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { instance } from './apis/util/instance';
import MainLayout from './components/MainLayout/MainLayout';
import ManagerMainLayout from './components/Manager/ManagerMainLayout/ManagerMainLayout';
import CafeListPage from './page/CafeListPage/CafeListPage';
import UsersSignupSelectPage from './page/UsersSignupSelectPage/UsersSignupSelectPage';
import UserSigninPage from './page/UserSigninPage/UserSigninPage';
import UserFindPage from './page/UserFindPage/UserFindPage';
import OAuth2Page from './page/SignupPage/OAuth2Page/OAuth2Page';
import MyPage from './page/MyPage/MyPage';
import SignLayout from './components/MainLayout/SignLayout/SignLayout';
import CafeDetailPage from './page/CafeDetailPage/CafeDetailPage';

function App() {
  const location = useLocation();
  const navigete = useNavigate();
  const [authRefresh, setAuthRefresh] = useState(true);
  const [check, setCheck] = useState("전체");
  const [inputvalue, setInputvalue] = useState("");

  useEffect(() => {
    if (!authRefresh) {
        setAuthRefresh(true);
    }
  }, [location.pathname, authRefresh]);

  const cafe = useQuery(
    ["cafeQuery", check, inputvalue],
    async () => {
      return instance.get(`/cafe/get/${check}/${inputvalue}`);
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  const accessTokenValid = useQuery(
    ["accessTokenValidQuery"],
    async () => {
      setAuthRefresh(false);
      return await instance.get("/auth/access", {
        params: {
          accessToken: localStorage.getItem("accessToken")
        }
      });
    },
    {
      enabled: authRefresh,
      retry: 0,
      refetchOnWindowFocus: false,
      onSuccess: response => {
        const permitAllPaths = ["/user/auth", "/owner"];
        for (let permitAllPasth of permitAllPaths) {
          if (location.pathname.startsWith(permitAllPasth)) {
            console.log(permitAllPasth);
        const blockPaths = ["/user", "/owner"];
        for (let blockPath of blockPaths) {
          if (location.pathname.startsWith(blockPath)) {
            alert("잘못된 요청입니다.")
            navigete("/");
            break;
          }
        }
      },
      onError: error => {
        const authPaths = ["/profile"];
        for (let authPath of authPaths) {
          if (location.pathname.startsWith(authPath)) {
            alert("로그인 후 이용해주세요")
            navigete("/user/login");
            break;
          }
        }
      }
    }
  );

  const userInfo = useQuery(
    ["userInfoQuery"],
    async () => {
      return await instance.get("/user/me");
    },
    {
      enabled: accessTokenValid.isSuccess && accessTokenValid.data?.data,
      refetchOnWindowFocus:false
    }
  )

  return (
    <>
      <Global styles={reset} />
      <Routes>
        <Route path='/manager/*' element={
          <ManagerMainLayout>
            <Routes>
              <Route path='/profile' element={<ManagerProfilePage />} />
              <Route path='/home' element={<ManagerDashBoardPage />} />
              <Route path='/management' element={<ManagerManagementPage />} />
              <Route path='/storemanagement' element={<ManagerStoreManagementPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue}/>} />
              <Route path='/setting' element={<ManagerSetting />} />
            </Routes>
          </ManagerMainLayout>
        } />
        <Route path='/*' element={
          <MainLayout setCheck={setCheck} setInputvalue={setInputvalue}>
            <Routes>
              <Route path='/list' element={<CafeListPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue}/>} />
              <Route path='/cafe/detail' element={<CafeDetailPage />} />
              <Route path='/map' element={<MapPage check={check} setCheck={setCheck} inputvalue={inputvalue} setInputvalue={setInputvalue}/>} />
              <Route path='/board' element={<BoardPage />} />
              <Route path='/board/write' element={<WritePage />} />
              <Route path='/board/detail/:boardId' element={<DetailPage />} />
              <Route path='/board/modify/:boardId' element={<ModifyPage />} />
            </Routes>
          </MainLayout>
        } />
        <Route path='/user/*' element={
          <SignLayout>
            <Routes>
              <Route path='/oauth/oauth2' element={<OAuth2Page/>}/>
              <Route path='/auth/mypage' element={<MyPage/>}/>
              <Route path='/find' element={<UserFindPage/>}/>
              <Route path='/signup' element={<UserSignupPage />} />
              <Route path='/signin' element={<UserSigninPage />} />
              <Route path='/owner/signup' element={<OwnerSignupPage />} />
              <Route path='/select/signup' element={<UsersSignupSelectPage />} />
            </Routes>
          </SignLayout>  
        } />
      </Routes>

    </>
  );
}

export default App;
