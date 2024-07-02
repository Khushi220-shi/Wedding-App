import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Registration from './page/Registration'
import Login from './page/Login';

function App() {
  return (
   <div>
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Registration' element={<Registration/>}></Route>
      <Route path='/Login' element={<Login/>}/>
    </Routes>

   </div>
  );
}

export default App;
