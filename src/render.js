import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {addPost, newPost} from "./redux/state";
import App from "./App";

export let rerenderEntireTree = (state) => {
    // debugger;

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} newPost={newPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
};