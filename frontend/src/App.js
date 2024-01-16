import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import DashBoard from './pages/DashBoard';


const App = () => {
  return (
   <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/' element={<DashBoard/>}/>
    <Route path='*' element={<DashBoard/>}/>
    

   </Routes>
  );
}

export default App;
