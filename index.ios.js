import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Todo } from './src/app/Todo';
import { Fancy } from './src/app/Fancy';
import { Reddit } from './src/app/Reddit';

const Main = () => (<Reddit />);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Todo', () => Main);
