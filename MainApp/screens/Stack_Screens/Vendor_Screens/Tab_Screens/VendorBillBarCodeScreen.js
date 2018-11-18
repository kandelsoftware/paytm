import React, { Component } from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";

import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

class VendorBillBarCodeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 18, fontFamily: ThemeStyle.Poppins, paddingVertical: 15,}}>Scan the QR code</Text>
          <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('VendorBillAmountScreen')} style={{height: 120, width: 120, borderWidth:4, borderColor: ThemeStyle.ThemeColor, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../../../src/bar.jpg')} style={{height: 90, width: 90}}/>
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
export default VendorBillBarCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  section11: {
    flex: 0.1, 
    justifyContent: 'center',
    marginHorizontal: 10, 
    alignItems: 'flex-start',
  },
  touch11: {
    paddingHorizontal: 10,
  },
});