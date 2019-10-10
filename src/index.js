import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messages = [
    {message: "Hi"},
    {message: "Hey we are going to the cinema."},
    {message: "are you coming with us"}
];

let dialogs = [
    {id: '1', name: "Стивен Роджерс"},
    {id: '2', name: "Энтони Старк"},
    {id: '3', name: "Брюс Брэннер"},
    {id: '4', name: "Наташа Романофф"},
    {id: '5', name: "Тор"},
    {id: '6', name: "Доктор Стивен Стрэндж"},
    {id: '7', name: "Грут"}
];

let posts = [
    {message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate", like: "20"},
    {message: "I shot a new video", like: "20"},
    {message: "Hello, world!", like: "15"},
    {message: "It's my first post!", like: "2"}
];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
