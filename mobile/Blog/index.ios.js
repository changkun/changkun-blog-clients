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
import Home from './src/components/home'

export default class Blog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
})

AppRegistry.registerComponent('Blog', () => Blog);
