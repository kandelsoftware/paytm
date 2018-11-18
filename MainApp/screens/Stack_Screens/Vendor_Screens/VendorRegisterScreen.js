import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput, Platform } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input'

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorRegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <KeyboardAwareScrollView>
 
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.linearGradient}>

          <View style={styles.section11}>
            <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} 
              style={styles.touch11}>
              <Icon name='md-arrow-round-back' color='white' size={25}/>
            </TouchableOpacity>
          </View>

          <View style={styles.section12}>
            <Image source={require('../../../src/smartphone.png')} 
              style={styles.imgStyle}/>
            <Text style={styles.phoneText}>Phone Number</Text>
            <Text style={styles.confirmText}>Confirm your country code and enter your phone number</Text>
          </View>

        </LinearGradient>

        <View style={styles.section21}>

          <PhoneInput 
            ref='phone'
            style={{paddingBottom: Platform.OS === 'ios' ? 25 : 5}}
          />

          <TextInput 
            placeholder='Your Phone Number'
            keyboardType='phone-pad'
            style={styles.inputStyle}
          />

          <View style={styles.section22}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorVerificationScreen')}
              style={styles.circle1}>
              <Icon name='md-arrow-round-forward' color='white' size={25}/>
            </TouchableOpacity>
          </View>

        </View>

        </KeyboardAwareScrollView>
        
      </View>
    );
  }
}
export default VendorRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
     paddingTop: 20,
     paddingBottom: 30,
  },
  imgStyle: {
    height: 60, 
    width: 60, 
    marginBottom: 25,
  },
  section11: {
    flex: 0.1, 
    justifyContent: 'center',
    marginHorizontal: 10, 
    alignItems: 'flex-start',
    marginTop: 20,
  },
  touch11: {
    paddingHorizontal: 10,
  },
  section12: {
    flex: 0.8, 
    marginTop: 30,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 22, 
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'white', 
    marginBottom:12,
  },
  confirmText: {
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'white'
  },
  section21:{
    marginHorizontal: 20, 
    marginTop: 30,
  },
  inputStyle: {
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    fontSize: 14,
    paddingBottom: Platform.OS === 'ios' ? 5 : null,
  },
  section22: {
    marginTop: 30, 
    alignItems: 'flex-end'
  },
  circle1: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    backgroundColor: ThemeStyle.ThemeColor, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});