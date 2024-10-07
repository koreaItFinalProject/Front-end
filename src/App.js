import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import UserSigninpage from './page/UserSigninpage/UserSigninpage';
import UserSignuppage from './page/UserSignuppage/UserSignuppage';
import ListPage from './page/ListPage';
import { Global } from '@emotion/react';
import { reset } from './Global/global';
import BoardPage from './page/Board/BoardPage/BoardPage';

function App() {
  return (
    <div className="App">
      <Global styles={reset}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<UserSignuppage/>}/>
        <Route path='/signin' element={<UserSigninpage/>}/>
        <Route path='/list' element={<ListPage/>}/>
        <Route path='/board' element={<BoardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
