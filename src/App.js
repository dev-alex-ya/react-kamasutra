import React from 'react';
import './App.css'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"></img>
      </header>
      <nav className='nav'>
        <div>
          <a href=''>Profile</a>
        </div>
        <div>
          <a href=''>Messages</a>
        </div>
        <div>
          <a href=''>News</a>
        </div>
        <div>
          <a href=''>Music</a>
        </div>
        <div>
          <a href=''>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg'></img>
        </div>
        <div>ava + description</div>
        <div>My posts
          <div>
            New post
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>

        <img src='https://cdn.pixabay.com/photo/2014/11/30/14/11/kitty-551554__340.jpg'></img>
      </div>
    </div>
  );
}

export default App;
