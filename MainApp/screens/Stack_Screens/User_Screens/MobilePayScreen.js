import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, Platform, TouchableHighlight, CheckBox } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';

import Spinner from 'react-native-loading-spinner-overlay';

import PhoneInput from 'react-native-phone-input';
import ModalPickerImage from '../ModalPickerImage';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_CheckUserNumber, AC_ResetNumber} from '../../../reducers/Money_Reducer/actions';

class MobilePayScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : false,
    }
    this.onPressFlag   = this.onPressFlag.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
  }

  componentDidMount(){
    const {state} = this.props.navigation;
    this.setState({
      id        : state.params.topupId,
      topupName : state.params.topupName,
      pickerData: this.refs.phone.getPickerData(),
    })
  }

  onPressFlag(){
    this.refs.myCountryPicker.open()
  }

  selectCountry(country){
    this.refs.phone.selectCountry(country.iso2)
  }

  nextScreen = () => {
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
      if(phoneNoValid == true){
        let formdata = {};
        let phonenumber       = selectedPhoneno;
        let hiddenCode        = selectedCountryDial;
        let mobileNumber      = hiddenCode+phonenumber;
        this.setState({
          mobileNumber : mobileNumber,
        })
        let formData = {};
        formData.AccessToken  = this.props.AccountState.token;
        formData.mobileNumber = mobileNumber;
        this.props.CheckUserNumber(formData);
        // this.props.navigation.navigate('MobilePayAmountScreen', {mobileNumber : mobileNumber, companyId: this.state.id});
      }else {
        alert('Mobile no is invalid');
      }
    }

    componentWillReceiveProps(nextProps){
      if(this.props.MoneyState.numberValid == false && nextProps.MoneyState.numberValid == true){ 
        this.props.ResetNumber();
         this.props.navigation.navigate('MobilePayAmountScreen', {mobileNumber : this.state.mobileNumber, companyId: this.state.id});
      }
    }
  

  topup(rowData) {
		const {value, id} = rowData;
    this.setState({subCategory: value, id : id,})
    return `${value}`;
  }

  topup_renderRow(rowData, rowID, highlighted) {
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_2_row, {backgroundColor: 'white'}]}>
          <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
            {rowData.value}
          </Text>
        </View>
      </TouchableHighlight>
		);
  }

  newNumber = () => {
    this.setState({
      user: !this.state.user,
    })
  }

  render() {

    let airTopup = [];
    if(this.props.MoneyState.buyAirtimeList.length > 0){
      this.props.MoneyState.buyAirtimeList.map(data=>{
          let formData = {};
          formData.id    = data.id;
          formData.value = data.name;
          airTopup.push(formData); 
      })
    }

    return (
      <View style={styles.container}>
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{marginHorizontal: 20, marginTop: 20}}>
              <Text style={{marginBottom:10}}>Air Topup Company</Text>
              <ModalDropdown ref="dropdown_2"
                style={styles.dropdown_2}
                textStyle={styles.dropdown_2_text}
                dropdownStyle={styles.dropdown_2_dropdown}
                options={airTopup}
                renderButtonText={(rowData) => this.topup(rowData)}
                renderRow={this.topup_renderRow.bind(this)}
                defaultValue={this.state.topupName}
              />

              {this.state.user == false ?
              <View style={{marginTop: 20}}>
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
              </View> : null }

               {/* <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
                <CheckBox 
                  onValueChange={this.newNumber}
                  value = {this.state.user}
                />
                <TouchableOpacity onPress={this.newNumber}>
                  <Text style={{color: ThemeStyle.ThemeColor, fontSize: 16, fontWeight: 'bold'}}>Top up for my number</Text>
                </TouchableOpacity>
              </View> */}
              
              <View style={{alignItems: 'flex-end', marginTop: 25}}>
                <TouchableOpacity 
                  // onPress={()=>this.props.navigation.navigate('WithdrawAmountScreen')}
                  onPress={this.nextScreen}
                  style={styles.circle1}>
                  <Icon name='md-arrow-round-forward' color='white' size={25}/>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <Spinner visible={this.props.MoneyState.showloader}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    AccountState : state.AccountState,
    MoneyState   : state.MoneyState,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    CheckUserNumber : AC_CheckUserNumber,
    ResetNumber      : AC_ResetNumber,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilePayScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  touch11: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  touch12: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu1: {
    flexDirection: 'row', 
    marginTop: 30, 
    paddingHorizontal: 25, 
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgrey', 
    paddingBottom: 10
  },
  menu2: {
    flex: 0.12
  },
  menu3: {
    flex: 0.88
  },
  menuColor: {
    color: 'black', 
    fontSize: 14,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: Platform.OS === 'ios' ? 6 : 0,
    marginBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  circle1: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    backgroundColor: ThemeStyle.ThemeColor, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  dropdown_2: {
		borderRadius: 3,
		marginHorizontal: 0,
		borderWidth: 1,
		borderColor: 'lightgrey'
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 14,
    color: ThemeStyle.ThemeColor,
  },
  dropdown_2_dropdown: {
    marginTop: -22,
		width: '91%',
		marginRight: 25,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 14,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
});