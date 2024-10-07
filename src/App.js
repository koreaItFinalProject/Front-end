import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import UserSigninpage from './page/UserSigninpage';
import UserSignuppage from './page/UserSignuppage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<UserSignuppage/>}/>
        <Route path='/signin' element={<UserSigninpage/>}/>
      </Routes>
    </div>
  );
}

export default App;
