import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;
