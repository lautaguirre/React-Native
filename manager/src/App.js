import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import LoginForm from './components/LoginForm';

import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAfARyizvgE-XcG14ITUqhgJjIJZzZ0ALU',
      authDomain: 'manager-cbb88.firebaseapp.com',
      databaseURL: 'https://manager-cbb88.firebaseio.com',
      projectId: 'manager-cbb88',
      storageBucket: 'manager-cbb88.appspot.com',
      messagingSenderId: '329627492670'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)} >
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
