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
  
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
