import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorBillPaySuccessScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 0.75, marginHorizontal: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: 'black', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>Thank you paying with Almami.com</Text>
          <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>$ 300</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20, }}>You have succesfully paid</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>$ 300 to Senelec</Text>
        </View>

        <View style={{flex: 0.1, alignItems: 'center',}}>
          <TouchableOpacity>
            <Text style={{color: ThemeStyle.ThemeColor, fontSize: 14, fontFamily: ThemeStyle.Poppins}}>Would you like to receive the receipt</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 0.1, alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorMainScreen')}
            style={{height: 60, width: 60, borderRadius: 30, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-home' color='white' size={30}/>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
export default VendorBillPaySuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});