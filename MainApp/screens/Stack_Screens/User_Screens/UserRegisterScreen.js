import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput, Platform } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';
import ModalPickerImage from '../ModalPickerImage';
import Spinner from 'react-native-loading-spinner-overlay';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserSigningUp } from '../../../reducers/Account_Reducer/actions';

class UserRegisterScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryCode  : '',
      phoneNumber  : '',
      fullName     : '',
      referralCode : '',
      pickerData   : '',
    }
    this.onPressFlag = this.onPressFlag.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
  }

  componentDidMount(){
    this.setState({
      pickerData: this.refs.phone.getPickerData()
    })
  }

  onPressFlag(){
    this.refs.myCountryPicker.open()
  }

  selectCountry(country){
    this.refs.phone.selectCountry(country.iso2)
  }

  onSubmit = () => {
    let phoneNoValid = this.refs.phone.isValidNumber();
    if(phoneNoValid) {
      var allCountryArray     = this.state.pickerData;
      var selectedCountryDial = this.refs.phone.getDialCode();
      var selectedPhoneno     = this.refs.phone.getValue();
      var selectedCountryName = '';
      allCountryArray.map((country, index) => {
        if(country.dialCode  == selectedCountryDial) {
          selectedCountryName = country.label;
          selectedPhoneno     = selectedPhoneno.split(selectedCountryDial).pop();
        }
      })
    }
    if(this.state.fullName != '' && phoneNoValid){
      let formdata = {};
      let phonenumber       = selectedPhoneno;
      let hiddenCode        = selectedCountryDial.split('+').pop();
      formdata.mobileNumber = '+'+hiddenCode+phonenumber;
      formdata.fullName     = this.state.fullName;
      formdata.referalCode  = this.state.referralCode;
      this.props.UserSigningUp(formdata);
    }else if(phoneNoValid == false){
      alert('Mobile no is invalid');
    }else if(this.state.fullName == ''){
      alert('Enter your full name');
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.AccountState.registerSuccess == false && nextProps.AccountState.registerSuccess == true){
      this.props.navigation.navigate('UserVerificationScreen');
    }
  }
  
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

          <View style={styles.inputStyle}>
          <PhoneInput 
            ref='phone'
            onPressFlag={this.onPressFlag}     
            style={{paddingBottom: Platform.OS === 'ios' ? 12 : 12}}
          />
          </View>

          <ModalPickerImage
            ref='myCountryPicker'
            data={this.state.pickerData}
            onChange={(country)=>{ this.selectCountry(country) }}
            cancelText='Cancel'
          />

          <TextInput 
            placeholder='Full Name'
            value={this.state.fullName}
            onChangeText={(fullName)=>this.setState({fullName : fullName})}
            style={styles.inputStyle}
          />

          <TextInput 
            placeholder='Referral Code'
            value={this.state.referralCode}
            onChangeText={(referralCode)=>this.setState({referralCode : referralCode})}
            style={styles.inputStyle}
          />

          <View style={styles.section22}>
            <TouchableOpacity onPress={this.onSubmit}
              style={styles.circle1}>
              <Icon name='md-arrow-round-forward' color='white' size={25}/>
            </TouchableOpacity>
          </View>

        </View>

        </KeyboardAwareScrollView>
        <Spinner visible={this.props.AccountState.showloader}/>
      </View>
    );
  }
}

function mapStateToProps(state){
	return{
		AccountState: state.AccountState
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({UserSigningUp:AC_UserSigningUp}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegisterScreen);

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
    marginTop: 15,
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
    marginTop: 20,
  },
  inputStyle: {
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    fontSize: 14,
    paddingBottom: Platform.OS === 'ios' ? 5 : null,
    marginBottom: Platform.OS === 'ios' ? 15 : null,
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