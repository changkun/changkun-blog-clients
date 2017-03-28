/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import Main from './src/main'

export default class Blog extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('Blog', () => Blog);
