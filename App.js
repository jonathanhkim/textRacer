/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Body } from './components/index.js';

const App: () => React$Node = () => {
  return (
    <ThemeProvider>
      <Body type='custom' />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  }
});

export default App;
