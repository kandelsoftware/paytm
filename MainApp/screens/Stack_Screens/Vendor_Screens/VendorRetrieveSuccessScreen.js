import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorRetrieveSuccessScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 0.8, marginHorizontal: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>$ 300</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20,}}>You have retrieved $ 300</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}></Text>
          <Text style={{fontSize: 14, color: 'black', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 40,}}>Thank you for using almai.com</Text>
        </View>

        <View style={{flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorMainScreen')}
            style={{height: 60, width: 60, borderRadius: 30, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-home' color='white' size={30}/>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
export default VendorRetrieveSuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});