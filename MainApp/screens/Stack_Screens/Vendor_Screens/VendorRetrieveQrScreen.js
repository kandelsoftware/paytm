import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity, Platform } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorRetrieveQrScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.section11}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} 
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={25}/>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 18, fontFamily: ThemeStyle.Poppins, paddingVertical: 15,}}>Scan the QR code</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorRetrieveAmountScreen')}>
            <Image source={require('../../../src/qr.png')} style={{height: 170, width: 170, borderWidth:4, borderColor: ThemeStyle.ThemeColor}}/>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 20,}}>
            <TouchableOpacity>
            <Icon name='md-flash-off' color='white' style={{paddingHorizontal: 15}}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name='md-images' color='white' style={{paddingHorizontal: 15}}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default VendorRetrieveQrScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  section11: {
    marginTop: Platform.OS === 'ios' ? 15 : null,
    flex: 0.1, 
    justifyContent: 'center',
    marginHorizontal: 10, 
    alignItems: 'flex-start',
  },
  touch11: {
    paddingHorizontal: 10,
  },
});