import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>

                    {/*state={state.posts} dialogs={state.dialogs} messages={state.messages}*/}
                    {/*<Route path="/dialogs" component={Dialogs}/>*/}
                    <Route path="/profile" render={ () => <Profile posts={props.state.posts} /> }/>
                    <Route path="/dialogs" render={ () => <Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages} /> }/>
                    <Route path="/news" render={ () => <News /> }/>
                    <Route path="/music" render={ () => <Music /> }/>
                    <Route path="/settings" render={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
