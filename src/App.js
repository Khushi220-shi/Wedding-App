import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Registration from './page/Registration';
import Login from './page/Login';
import Main from './page/Venues/Main';
import MainPhoto from './page/Photos/Main'
import Header from './components/Header';
import Footer1 from './components/Footer1';
import Header1 from './components/Header1';
import Copyright from './components/Copyright';

function App() {
  const location = useLocation();
  const isLoginOrRegistration = location.pathname === '/Login' || location.pathname === '/Registration' || location.pathname === '/';

  return (
    <div>
      {!isLoginOrRegistration && <Header />}
      {!isLoginOrRegistration && <Header1 />}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/MainPhoto' element={<MainPhoto/>}/>
      </Routes>
      {!isLoginOrRegistration && <Footer1 />}
      {!isLoginOrRegistration && <Copyright />}
    </div>
  );
}

export default App;
