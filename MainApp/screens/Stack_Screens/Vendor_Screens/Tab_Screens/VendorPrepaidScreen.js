import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class VendorPrepaidScreen extends Component {
  onSuccess(e) {
    Alert.alert(
      'Success',
        e.data,
      [
        {text: 'OK', onPress: () => this.props.navigation.navigate('UserMoneyAddedScreen')},
      ],
      { cancelable: false }
    )
  }


  render() {
    return (
      <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          //onRead={(e) => alert(e.data)}
          //reactivate={true}
      />
    ); 
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
