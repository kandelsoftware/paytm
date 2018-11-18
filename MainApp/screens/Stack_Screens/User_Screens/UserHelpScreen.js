import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserHelpScreen extends Component {
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
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'black'}}>Get Help</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
          <Image source={require('../../../src/info.png')} style={{height: 80, width: 80}}/>
          <View style={{marginVertical: 50,}}>
            <Text style={{fontSize: 16, fontFamily: ThemeStyle.Poppins, textAlign: 'center'}}>For any queries or details kindly contact</Text>
            <Text style={{fontSize: 18, fontFamily: ThemeStyle.Poppins, textAlign: 'center', color: ThemeStyle.ThemeColor}}>Contact@kalpayinc.com</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default UserHelpScreen;

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