import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import Main from './Pages/Main.jsx'
import NavBar from './components/NavBar.jsx'
import Dashboard from './Pages/Dashboard.jsx';
import Register from "./Pages/Register.jsx";
import Login from './Pages/Login.jsx'
import { UserContext } from './context/UserContext.jsx';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserServices from './services/userServices.js';

function App() {
  const { user, setLoggedUser, setUnloggedUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      const ok = await UserServices.isLoggedUser();
      ok ? setLoggedUser() : setUnloggedUser();
    }
    fetchData();
  }, []);

  useEffect(()=>{
    console.log('cambio a ', user);
  }, [user]);
  
  if (user == undefined) {
    return (
      <div className='text-brown-100'>Loading....</div>
    )
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route element={<ProtectedRoutes user={user} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}


export default App;
