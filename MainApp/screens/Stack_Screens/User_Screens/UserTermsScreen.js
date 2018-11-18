import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserTermsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: Platform.OS === 'ios' ? 35 : 15, flexDirection: 'row'}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='black' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch12}>
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'black'}}> Terms and Conditions</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30,}}>
          <Text style={{fontSize: 18, fontFamily: ThemeStyle.PoppinsMedium,color: ThemeStyle.ThemeColor}}>Welcome to Kalpay</Text>
          <Text style={{fontSize: 14, color: 'grey', fontFamily: ThemeStyle.Poppins}}>
          This user agreement is a contract between you and  Kalpay, Inc. that governs your use of your Kalpay  account and the Kalpay  services
          By opening and using a Kalpay l account, you agree to comply with all of the terms and conditions in this user agreement, so please read all of the terms and conditions carefully. The terms include an agreement to resolve disputes by arbitration on an individual basis. You also agree to comply with the following additional policies and each of the other agreements on the Legal Agreements page that apply to you</Text>
        </View>
      </View>
    );
  }
}
export default UserTermsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  touch11: {
    paddingHorizontal: 20,
  },
  touch12: {
    flex: 0.8,
    alignItems: 'center'
  },
});