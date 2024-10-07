import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import UserSigninpage from './page/UserSigninpage';
import UserSignuppage from './page/UserSignuppage';
import ListPage from './page/ListPage';
import CafeBoardPage from './page/CafeBoardPage/CafeBoardPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<UserSignuppage/>}/>
        <Route path='/signin' element={<UserSigninpage/>}/>
        <Route path='/list' element={<ListPage/>}/>
        <Route path='/board' element={<CafeBoardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
