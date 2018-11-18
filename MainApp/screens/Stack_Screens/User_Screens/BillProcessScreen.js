import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, Platform, TouchableHighlight } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import ModalDropdown from 'react-native-modal-dropdown';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';

class BillProcessScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      billNumber      : '',
      referenceNumber : '',
    }
  }

  componentDidMount(){
    const {state} = this.props.navigation;
    this.setState({
      id        : state.params.billId,
      billName  : state.params.billName,
    })
  }

  nextScreen = () => {
    if(this.state.billNumber == '' && this.state.referenceNumber == ''){
      alert('Enter Bill number and reference number');
    }else {
      this.props.navigation.navigate('BillAmountScreen', {billNumber : this.state.billNumber,referenceNumber: this.state.referenceNumber, id : this.state.id});
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

  render() {
    let airTopup = [];
    if(this.props.MoneyState.billCompanyList.length > 0){
      this.props.MoneyState.billCompanyList.map(data=>{
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
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <ModalDropdown ref="dropdown_2"
                style={styles.dropdown_2}
                textStyle={styles.dropdown_2_text}
                dropdownStyle={styles.dropdown_2_dropdown}
                options={airTopup}
                renderButtonText={(rowData) => this.topup(rowData)}
                renderRow={this.topup_renderRow.bind(this)}
                defaultValue={this.state.billName}
              />
              <TextInput 
                placeholder='Bill No'
                keyboardType="phone-pad"
                onChangeText={(billNumber)=>this.setState({billNumber: billNumber})}
                value={this.state.billNumber}
                style={styles.inputStyle}
              />
              <View style={{marginTop: 5}}>
               <TextInput 
                placeholder='Reference No'
                keyboardType="phone-pad"
                onChangeText={(referenceNumber)=>this.setState({referenceNumber: referenceNumber})}
                value={this.state.referenceNumber}
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

function mapStateToProps(state){
  return {
    ProfileState : state.ProfileState,
    MoneyState   : state.MoneyState
  }
}
export default connect (mapStateToProps)(BillProcessScreen);

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