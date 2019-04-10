import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import  { Updater } from './Updater';

export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    /* @info Before we can use the BarCodeScanner we need to ask the user for permission to access their camera. <a href='permissions.html'>Read more about Permissions.</a> */
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    /* @end */
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    Alert.alert(
      `${data}`,
      "Er du sikker på at du vil oppdatere informasjonen om dette produktet?",
      [
        { text: "Lukk" },
        { text: "Ok", onPress: () => Updater(data)}
      ]
    );
  }
}