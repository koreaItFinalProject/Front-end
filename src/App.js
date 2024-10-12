import './App.css';
import { Route, Routes } from 'react-router-dom';
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
import ManagerStoreRequestPage from './page/Manager/ManagerStoreRequestPage/ManagerStoreRequestPage';
import ParticularRequestPage from './page/Particular/ParticularRequestPage/ParticularRequestPage';
import ManagerRegisterStore from './page/Manager/ManagerRegisterStore/ManagerRegisterStore';
import ManagerSetting from './page/Manager/ManagerSetting/ManagerSetting';


function App() {
  return (
    <div className="App">
      <Global styles={reset}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignupSelectPage/>}/>
        <Route path='/user/signup' element={<UserSignupPage/>}/>
        <Route path='/owner/signup' element={<OwnerSignupPage/>}/>
        <Route path='/manager' element={<ManagerPage/>}/>
        <Route path='/manager/profile' element={<ManagerProfilePage/>}/>
        <Route path='/manager/dashboard' element={<ManagerDashBoardPage/>}/>
        <Route path='/manager/management' element={<ManagerManagementPage/>}/>
        <Route path='/manager/storemanagement' element={<ManagerStoreManagementPage/>}/>
        <Route path='/manager/storerequest' element={<ManagerStoreRequestPage/>}/>
        <Route path='/manager/registerstore' element={<ManagerRegisterStore/>}/>
        <Route path='/manager/storerequest' element={<ManagerStoreRequestPage/>}/>
        <Route path='/manager/setting' element={<ManagerSetting/>}/>
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
    </div>
  );
}

export default App;
