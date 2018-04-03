import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TestingBrain from './components/TestingBrain.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TestingBrain />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
  },
});
