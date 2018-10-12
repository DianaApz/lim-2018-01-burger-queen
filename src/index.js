import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from 'firebase';
import 'firebase/firestore';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyC3mfRjVM8aqFk3nSb0zgGt7brKcr-Evt0",
    authDomain: "burger-queen-b150c.firebaseapp.com",
    databaseURL: "https://burger-queen-b150c.firebaseio.com",
    projectId: "burger-queen-b150c",
    storageBucket: "burger-queen-b150c.appspot.com",
    messagingSenderId: "710186037838"
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
