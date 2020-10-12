import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { auth } from './config/firebase';
import { userLogout } from './redux/user/userActions';


function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  console.log(user);

  return (
    <div className="app">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </> ) : (
          <Login />
        )}
      
    </div>
  );
}

export default App;
