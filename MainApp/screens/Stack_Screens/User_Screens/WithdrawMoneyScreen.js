import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, Platform, TouchableHighlight } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_GetBankList} from '../../../reducers/Money_Reducer/actions';

class WithdrawMoneyScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      accountNumber : '',
      confirmNumber : '',
      id            : '',
    }
  }

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    this.props.GetBankList(formData);
  }

  banks(rowData) {
		const {value, id} = rowData;
    this.setState({subCategory: value})
    this.setState({
      id : id,
    })
		return `${value}`;
  }

  banks_renderRow(rowData, rowID, highlighted) {
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

  nextScreen = () => {
    if(this.state.id == ''){
      alert('Select your bank');
    } else if(this.state.accountNumber == '' && this.state.confirmNumber == ''){
      alert('Enter you account number and confirm number');
    } else if(this.state.accountNumber != this.state.confirmNumber){
      alert('Account Number and confirm number dosen\'t match');
    }else {
      let formData      = {};
      formData.id       = this.state.id;
      formData.acNumber = this.state.accountNumber;
      this.props.navigation.navigate('WithdrawAmountScreen', {id : this.state.id, acNumber : this.state.accountNumber})
    }
  }

  render() {
    let bankList = [];
    if(this.props.MoneyState.bankList){
      if(this.props.MoneyState.bankList.length > 0){
        this.props.MoneyState.bankList.map(data=>{
          let formData = {};
          formData.id    = data.id;
          formData.value = data.name;
          bankList.push(formData);
        })
      }
    }
    
    return (
      <View style={styles.container}>
         <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
          <View 
            style={styles.touch12}>
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>Withdraw Money</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <ModalDropdown ref="dropdown_2"
                style={styles.dropdown_2}
                textStyle={styles.dropdown_2_text}
                dropdownStyle={styles.dropdown_2_dropdown}
                options={bankList}
                renderButtonText={(rowData) => this.banks(rowData)}
                renderRow={this.banks_renderRow.bind(this)}
                defaultValue='Select your bank'
              />
              <View style={{marginTop: 20}}>
              <TextInput 
                placeholder='Account Number'
                keyboardType="phone-pad"
                onChangeText={(accountNumber)=>this.setState({accountNumber: accountNumber})}
                value={this.state.accountNumber}
                style={styles.inputStyle}
              />
              </View>
               <TextInput 
                placeholder='Confirm Account Number'
                keyboardType="phone-pad"
                onChangeText={(confirmNumber)=>this.setState({confirmNumber: confirmNumber})}
                value={this.state.confirmNumber}
                style={styles.inputStyle}
              />
              <View style={{alignItems: 'flex-end', marginTop: 25}}>
                <TouchableOpacity 
                  // onPress={()=>this.props.navigation.navigate('WithdrawAmountScreen')}
                  onPress={()=>this.nextScreen()}
                  style={styles.circle1}>
                  <Icon name='md-arrow-round-forward' color='white' size={25}/>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    AccountState : state.AccountState,
    MoneyState : state.MoneyState
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    GetBankList : AC_GetBankList,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawMoneyScreen);

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