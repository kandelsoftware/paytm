import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import VendorPrepaidScreen from './Tab_Screens/VendorPrepaidScreen';
import VendorCardScreen from './Tab_Screens/VendorCardScreen';
import VendorMobileMoneyScreen from './Tab_Screens/VendorMobileMoneyScreen';


class VendorAddMoneyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

         <View style={styles.subHeader}>
          <View>
            <Text style={styles.fontStyle}>Almami<Text style={styles.comStyle}>.com</Text></Text>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserProfileScreen')}>
            <Image source={require('../../../src/pro.jpg')} style={styles.headerImg}/>
          </TouchableOpacity>
        </View>

        <AppTab 
           screenProps={{ parentNavigation: this.props.navigation }}
        />

      </View>
    );
  }
}

const AppTab = createMaterialTopTabNavigator({ 
  VendorPrepaidScreen: {
    screen: VendorPrepaidScreen,
    navigationOptions: {
      tabBarLabel: 'Prepaid Card',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="qrcode" family='FontAwesome' color={tintColor} size={22} />   
      )
    }
  }, 
  VendorCardScreen: {
    screen: VendorCardScreen,
    navigationOptions: {
      tabBarLabel: 'Credit/Debit',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="credit-card" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  }, 
  VendorMobileMoneyScreen: {
    screen: VendorMobileMoneyScreen,
    navigationOptions: {
      tabBarLabel: 'Mobile Money',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="mobile-phone" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  }, 
  },
  {
    tabBarOptions: {
      activeTintColor: ThemeStyle.ThemeColor,
      inactiveTintColor: 'grey',
      upperCaseLabel:false,
      showIcon: true,
      indicatorStyle : {
        borderBottomColor: ThemeStyle.ThemeColor,
        borderBottomWidth: 4,
      },
      style: {
        backgroundColor: 'white',
      }
    }
  })

export default VendorAddMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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