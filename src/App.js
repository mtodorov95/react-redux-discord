import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';


function App() {
  const user = useSelector((state) => state.user.user);

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
