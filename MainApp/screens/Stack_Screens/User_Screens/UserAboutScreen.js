import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserAboutScreen extends Component {
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
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'black'}}> About Us</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, paddingHorizontal: 20, marginTop: 30,}}>
          <Text style={{fontSize: 18, fontFamily: ThemeStyle.PoppinsMedium,color: 'black'}}>About Us</Text>
          <Text style={{fontSize: 14, color: 'grey', fontFamily: ThemeStyle.Poppins}}>Kalpay is an electronic payment system that will allow Business  to Business, Business  to Customer  , and customer  to Customer  transaction. Kalpay is a created  by Africans, for Africans that have main mission to rewrite the rules of business in Africa by providing high end services with an affordable price. Kalpay believes  Africa can’t afford to miss the numerical revolution like it missed the  agriculture and industrial revolution  and its members are here to materialize that. </Text>

          <Text style={{fontSize: 16, color: 'black', fontFamily: ThemeStyle.Poppins}}>Why doing  the same thing  knowing you will get the same results?</Text>
          <Text style={{fontSize: 18, color: ThemeStyle.ThemeColor, fontFamily: ThemeStyle.Poppins}}>It is time to do things differently  ?</Text>

          <Text style={{fontSize: 18, fontFamily: ThemeStyle.PoppinsMedium,color: 'black', marginTop: 25,}}>Version</Text>
          <Text style={{fontSize: 14, color: 'grey', fontFamily: ThemeStyle.Poppins}}>V 1.0.0</Text>
        </View>
      </View>
    );
  }
}
export default UserAboutScreen;

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