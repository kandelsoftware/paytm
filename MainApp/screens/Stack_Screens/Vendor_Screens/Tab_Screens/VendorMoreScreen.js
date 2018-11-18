import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from '../../../../styles/ThemeStyle';
import Icon from '../../../../common/icons';

class VendorMoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.linearGradient}>
          <View style={{borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: 10, marginBottom: 25}}>
            <Text style={{color: 'white', fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium}}>More</Text>
          </View>

          <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('UserHelpScreen')}
            style={styles.main}>
            <Icon name='ios-help-circle-outline' size={20} color='white' style={{flex: 0.15}}/>
            <Text style={styles.section1}>Ask Help</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('UserShareScreen')}
            style={styles.main}>
            <Icon name='md-contacts' size={20} color='white' style={{flex: 0.15}}/>
            <Text style={styles.section1}>Share with friends</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('UserAboutScreen')}
            style={styles.main}>
            <Icon name='ios-information-circle-outline' size={20} color='white' style={{flex: 0.15}}/>
            <Text style={styles.section1}>About Us</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('UserTermsScreen')}
            style={styles.main}>
            <Icon name='ios-paper' size={20} color='white' style={{flex: 0.15}}/>
            <Text style={styles.section1}>Terms and conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('UserTypeScreen')}
            style={styles.main}>
            <Icon name='ios-log-out' size={20} color='white' style={{flex: 0.15}}/>
            <Text style={styles.section1}>Logout</Text>
          </TouchableOpacity>

        </LinearGradient>
      </View>
    );
  }
}
export default VendorMoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  main: {
    flexDirection: 'row', 
    marginBottom: 20,
  },
  section1: {
    color: 'white', 
    flex: 0.85, 
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins
  }
});