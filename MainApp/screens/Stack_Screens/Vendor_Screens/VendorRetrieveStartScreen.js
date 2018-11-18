import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorRetrieveStartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{marginHorizontal: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>$ 300</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20,}}>304856565 retrieved $ 300</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>from 26556484</Text>
          <Text style={{fontSize: 14, color: 'black', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 40,}}>Click ok to retrieve money</Text>
        </View>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorRetrieveSuccessScreen')}
          style={{backgroundColor: ThemeStyle.ThemeColor, marginHorizontal: 120, paddingVertical: 12, alignItems: 'center', justifyContent: 'center', borderRadius: 50, marginTop: 30,}}>
            <Text style={{color: 'white'}}>Ok</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
export default VendorRetrieveStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  }
});