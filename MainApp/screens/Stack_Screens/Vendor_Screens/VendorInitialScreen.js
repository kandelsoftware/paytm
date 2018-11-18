import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Platform } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorInitialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.arrowStyle}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}
            style={{paddingHorizontal: 10,}}>
            <Icon name='md-arrow-round-back' color={ThemeStyle.ThemeColor} size={25}/>
          </TouchableOpacity>
        </View>

        <View style={styles.subContainer}>

          <View style={{alignItems: 'center'}}>
            <Text style={styles.fontStyle}>Kalpay<Text style={styles.comStyle}>.com</Text></Text>
          </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorRegisterScreen')}
            style={styles.box1}>
            <Text style={styles.box1Font}>New Vendor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorLoginScreen')}
            style={styles.box2}>
            <Text style={styles.box2Font}>Returning Vendor</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}
export default VendorInitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 35, 
    fontFamily: ThemeStyle.PoppinsMedium,
    marginBottom: 60,
  },
  comStyle:{
    color: 'black', 
    fontSize: 25, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  box1: {
    backgroundColor: ThemeStyle.ThemeColor, 
    marginHorizontal:60, 
    paddingVertical: 12, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginBottom: 30,
  },
  box1Font:{
    color: 'white', 
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins
  },
  box2: {
    marginHorizontal:60, 
    paddingVertical: 12, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginBottom: 25,
    borderWidth: 1,
    borderColor: ThemeStyle.ThemeColor,
  },
  box2Font:{
    color: 'black', 
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins
  },
  arrowStyle: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    height: 60, 
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    marginHorizontal: 10, 
  }
});