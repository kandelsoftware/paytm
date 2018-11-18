import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";

class UserHeader extends Component {
  render() {
    return (
      <View style={styles.subHeader}>
        <View>
          <Text style={styles.fontStyle}>KalPay<Text style={styles.comStyle}>.com</Text></Text>
        </View>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserProfileScreen')}>
          <Image source={require('../../../src/pro.jpg')} style={styles.headerImg}/>
        </TouchableOpacity>
      </View>
    );
  }
}
export default UserHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 22, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  comStyle:{
    color: 'black', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  subHeader: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    height: 60, 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20,    
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  headerImg: {
    height: 50, 
    width: 50, 
    borderRadius: 25,
  }
});