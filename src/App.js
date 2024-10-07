import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import UserSigninpage from './page/UserSigninPage/UserSigninPage';
import SignupSelectPage from './page/SignupSelectPage/SignupSelectPage';
import ListPage from './page/ListPage';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import MapPage from './page/MapPage/MapPage';
import CafeBoardPage from './page/CafeBoardPage/CafeBoardPage';
import EventPage from './page/EventPage/EventPage';
import BoardPage from './page/Board/BoardPage/BoardPage';
import WritePage from './page/Board/WritePage/WritePage';

function App() {
  return (
    <div className="App">
      <Global styles={reset}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignupSelectPage/>}/>
        <Route path='/signin' element={<UserSigninpage/>}/>
        <Route path='/list' element={<ListPage/>}/>
        <Route path='/map' element={<MapPage/>}/>
        <Route path='/board' element={<CafeBoardPage/>}/>
        <Route path='/event' element={<EventPage />}/>
        <Route path='/board' element={<BoardPage/>}/>
        <Route path='/board/write' element={<WritePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
