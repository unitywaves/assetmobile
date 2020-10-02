/**
 * @format
 * @flow strict-local
 */

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

FontAwesomeIcon.getStyledIconSet('brand').loadFont();
FontAwesomeIcon.getStyledIconSet('light').loadFont();
FontAwesomeIcon.getStyledIconSet('regular').loadFont();
FontAwesomeIcon.getStyledIconSet('solid').loadFont();
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
