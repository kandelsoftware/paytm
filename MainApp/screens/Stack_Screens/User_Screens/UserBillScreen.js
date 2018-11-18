import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, Platform, TouchableHighlight } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserBillScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
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
            <View style={{marginHorizontal: 20}}>
              {/* <ModalDropdown ref="dropdown_2"
                style={styles.dropdown_2}
                textStyle={styles.dropdown_2_text}
                dropdownStyle={styles.dropdown_2_dropdown}
                options={bankList}
                renderButtonText={(rowData) => this.banks(rowData)}
                renderRow={this.banks_renderRow.bind(this)}
                defaultValue='Select your bank'
              /> */}
              <TextInput 
                placeholder='Account Number'
                keyboardType="phone-pad"
                onChangeText={(accountNumber)=>this.setState({accountNumber: accountNumber})}
                value={this.state.accountNumber}
                style={styles.inputStyle}
              />
              <View style={{marginTop: 5}}>
                <TextInput 
                  placeholder='Confirm Account Number'
                  keyboardType="phone-pad"
                  onChangeText={(confirmNumber)=>this.setState({confirmNumber: confirmNumber})}
                  value={this.state.confirmNumber}
                  style={styles.inputStyle}
                />
              </View>
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

export default UserBillScreen;

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
});