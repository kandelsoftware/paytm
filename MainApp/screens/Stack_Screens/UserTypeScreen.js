import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from '../../common/icons';
import ThemeStyle from "../../styles/ThemeStyle";

class UserTypeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.fontStyle}>KalPay<Text style={styles.comStyle}>.com</Text></Text>
        <Text style={styles.userStyle}>Select User Type</Text>

        <View style={styles.mainSection}>

          {/* <View style={styles.section}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorInitialScreen')}
              style={styles.section1}>
              <View style={styles.circle}>
                <Icon name='md-briefcase' color='white' size={33}/>
              </View>
              <Text style={styles.sectionText}>Vendor</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.section}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserInitialScreen')}
              style={styles.section1}>
              <View style={styles.circle}>
                <Icon name='md-person' color='white' size={33}/>
              </View>
              <Text style={styles.sectionText}>Customer</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}
export default UserTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 35, 
    fontFamily: ThemeStyle.PoppinsMedium,
    marginBottom: 30,
  },
  comStyle:{
    color: 'black', 
    fontSize: 25, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  userStyle: {
    color: 'black', 
    letterSpacing:0.5,
    fontSize: 20, 
    fontFamily: ThemeStyle.PoppinsMedium,
    marginBottom: 40,
  },
  circle: {
    height: 70, 
    width:70, 
    borderRadius: 35, 
    backgroundColor: ThemeStyle.ThemeColor,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  section:{
    flex: 0.5, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  section1: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  sectionText: {
    fontSize: 14,
    fontFamily: ThemeStyle.Poppins,
    paddingTop: 10, 
    color:'black'
  },
  mainSection: {
    flexDirection: 'row', 
    marginHorizontal: 25,
  }
});