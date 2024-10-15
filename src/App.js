import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import SignupSelectPage from './page/SignupSelectPage/SignupSelectPage';
import ListPage from './page/ListPage';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import MapPage from './page/MapPage/MapPage';
// import CafeBoardPage from './page/CafeBoardPage/CafeBoardPage';
import EventPage from './page/EventPage/EventPage';
import BoardPage from './page/Board/BoardPage/BoardPage';
import WritePage from './page/Board/WritePage/WritePage';
import UserSigninPage from './page/UserSigninPage/UserSigninPage';
import UserSignupPage from './page/SignupPage/UserSignupPage/UserSignupPage';
import OwnerSignupPage from './page/SignupPage/OwnerSignupPage/OwnerSignupPage';
import ManagerPage from './page/Manager/ManagerPage/ManagerPage';
import ManagerProfilePage from './page/Manager/ManagerProfilePage/ManagerProfilePage';
import ManagerDashBoardPage from './page/Manager/ManagerDashBoardPage/ManagerDashBoardPage';
import ManagerManagementPage from './page/Manager/ManagerManagementPage/ManagerManagementPage';
import DetailPage from './page/Board/DetailPage/DetailPage';
import ManagerStoreManagementPage from './page/Manager/ManagerStoreManagementPage/ManagerStoreManagementPage';
import ModifyPage from './page/Board/ModifyPage/ModifyPage';
import ParticularStorePage from './page/Particular/ParticularStorePage/ParticularStorePage';
import ParticularRequestPage from './page/Particular/ParticularRequestPage/ParticularRequestPage';
import ManagerSetting from './page/Manager/ManagerSetting/ManagerSetting';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { instance } from './apis/util/instance';
import MainLayout from './components/MainLayout/MainLayout';
import Header from './components/Header/Header';
import ManagerMainLayout from './components/Manager/ManagerMainLayout/ManagerMainLayout';
import SideBar from './components/SideBar/SideBar';


function App() {
  const location = useLocation();
  const navigeter = useNavigate();
  const [ authRefresh , setAuthRefresh ] = useState(true);

  const accessTokenValid = useQuery(
    ["accessTokenValidQuery"],
    async () => { 
        setAuthRefresh(false);
        console.log("쿼리1")
        return await instance.get("/auth/access" , {
            params: { 
                accessToken : localStorage.getItem("accessToken") 
            }
        });
    } ,
      {
        enabled: authRefresh,
        retry: 0, 
        refetchOnWindowFocus:false,
        onSuccess : response => {
            const permitAllPasths = [ "/user" ];
          for(let permitAllPasth of permitAllPasths){
            if(location.pathname.startsWith(permitAllPasth)){
              alert("잘못된 요청입니다.")
              navigeter("/"); 
              break;
              }
            }
        },
        onError : error => {
          const authPaths = [ "/profile" ];
          for(let authPath of authPaths){
            if(location.pathname.startsWith(authPath)){
              alert("로그인 후 이용해주세요")
              navigeter("/user/login");
              break;
              }
            }
          }
    }
  );

  return (
    <>
      <Global styles={reset}/>
      <Routes>
        <Route path='/manager/*' element={
          <ManagerMainLayout>
            <Routes>
              <Route path='/signIn' element={<ManagerPage/>}/>
              <Route path='/profile' element={<ManagerProfilePage/>}/>
              <Route path='/home' element={<ManagerDashBoardPage/>}/>
              <Route path='/management' element={<ManagerManagementPage/>}/>
              <Route path='/storemanagement' element={<ManagerStoreManagementPage/>}/>
              <Route path='/setting' element={<ManagerSetting/>}/>
            </Routes>
          </ManagerMainLayout>
        }/>
        <Route path='/*' element={
          <MainLayout>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/signup' element={<SignupSelectPage/>}/>
              <Route path='/user/signup' element={<UserSignupPage/>}/>
              <Route path='/owner/signup' element={<OwnerSignupPage/>}/>
              <Route path='/particular/store' element={<ParticularStorePage/>}/>
              <Route path='/particular/request' element={<ParticularRequestPage/>}/>
              <Route path='/signin' element={<UserSigninPage/>}/>
              <Route path='/list' element={<ListPage/>}/>
              <Route path='/map' element={<MapPage/>}/>
              <Route path='/event' element={<EventPage />}/>
              <Route path='/board' element={<BoardPage/>}/>
              <Route path='/board/write' element={<WritePage/>}/>
              <Route path='/board/detail/:boardId' element={<DetailPage/>}/>
              <Route path='/board/modify/:boardId' element={<ModifyPage/>}/>
            </Routes>
            <Header/>
          </MainLayout>
        }/>
        
        
      </Routes>
    </>
  );
}

export default App;
