import React from 'react';
import './App.css';
import Nav from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
