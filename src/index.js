import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={ store._state }
                addPost={ store.addPost.bind(store) }
                updateNewPostText={ store.updateNewPostText.bind(store) }
            />
        </BrowserRouter>, document.getElementById('root')
    );
};

debugger;
store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
