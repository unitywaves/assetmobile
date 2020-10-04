/**
 * @format
 * @flow strict-local
 */

import Icon from 'react-native-vector-icons/dist/FontAwesome';
Icon.loadFont();

import React, { Component } from 'react';

import { Provider } from 'react-redux';

import Router from './app/index'
import store from './app/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
