import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeScanner from './src/BarcodeScanner';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BarcodeScanner/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
