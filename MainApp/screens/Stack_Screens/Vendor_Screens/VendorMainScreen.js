import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";

import { createTabNavigator, TabBarBottom } from 'react-navigation';

import VendorHomeScreen from './Tab_Screens/VendorHomeScreen';
import VendorActivityScreen from './Tab_Screens/VendorActivityScreen';
import VendorMoreScreen from './Tab_Screens/VendorMoreScreen';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorMainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.subHeader}>
          <View>
            <Text style={styles.fontStyle}>KalPay<Text style={styles.comStyle}>.com</Text></Text>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserProfileScreen')}>
            <Image source={require('../../../src/pro.jpg')} style={styles.headerImg}/>
          </TouchableOpacity>
        </View>

        <AppTab 
          screenProps={{ parentNavigation: this.props.navigation }}
        />

      </View>
    )
  }
}
      

const AppTab = createTabNavigator({
  VendorHomeScreen: {
    screen: VendorHomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  },
  VendorActivityScreen: {
    screen: VendorActivityScreen,
    navigationOptions: {
      tabBarLabel: 'Activities',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map-signs" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  },
  VendorMoreScreen: {
    screen: VendorMoreScreen,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ellipsis-h" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  },
}, 
{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled :true,
  animationEnabled :true,
  tabBarOptions: {
    showLabel :true,
    activeTintColor:'white',
    inactiveTintColor:'black',
    activeBackgroundColor: ThemeStyle.ThemeColor,
    tabStyle: {
      flex: 1,
    },
    labelStyle: {
	    fontSize: 14,
    },
  },
})

export default VendorMainScreen;

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