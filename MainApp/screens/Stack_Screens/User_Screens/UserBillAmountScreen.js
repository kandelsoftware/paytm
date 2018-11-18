import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserBillAmountScreen extends Component {

  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../src/invoice.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 16, fontFamily: ThemeStyle.Poppins}}>Your bill is</Text>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>$ 300</Text>
        </View> 

        <View style={{marginVertical: 25, flexDirection: 'row', justifyContent: 'center'}}>

          <RadioGroup
           size={22}
          thickness={2}
          color={ThemeStyle.ThemeColor}
          selectedIndex={1}
          onSelect = {(index, value) => this.onSelect(index, value)}>

            <RadioButton value={'item1'} >
              <Text>Pay Entire Balance</Text>
            </RadioButton>
    
            <RadioButton value={'item2'}>
              <Text>Enter Amount to Pay</Text>
            </RadioButton>

          </RadioGroup>

        </View>

        <View style={{marginHorizontal: 30, }}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserBillAmountPayScreen')}
            style={styles.box1}>
            <Text style={styles.box1Font}>Ok</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
export default UserBillAmountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: ThemeStyle.ThemeColor, 
    marginHorizontal:40, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginBottom: 20,
    elevation: 3,
  },
  box1Font:{
    color: 'white', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
});