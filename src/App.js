import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import 'firebase/firestore';
// import { config , settings } from './config';

class App extends Component {
  constructor() {
    super()

    const db = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
    // fires.settings(settings);

    const docu = db.collection('data').doc('edws');
    docu.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
