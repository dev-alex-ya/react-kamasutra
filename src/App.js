import React from 'react';
import './App.css';
import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';

const App = (props) => {
    debugger;
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav friends={props.store.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    {/*state={state.posts} dialogs={state.dialogs} messages={state.messages}*/}
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}

                    <Route path="/profile" render={ () => <Profile
                        posts={props.store.profilePage.posts}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}
                        newPostText={props.store.profilePage.newPostText} /> }
                    />
                    <Route path="/dialogs" render={ () => <Dialogs
                        dialogs={props.store.messagesPage.dialogs}
                        messages={props.store.messagesPage.messages} /> }
                    />
                    <Route path="/news" render={ () => <News /> }/>
                    <Route path="/music" render={ () => <Music /> }/>
                    <Route path="/settings" render={ () => <Settings /> }/>
                </div>
            </div>
    );
};

export default App;
