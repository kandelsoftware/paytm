import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import VendorBuyForMeScreen from './Tab_Screens/VendorBuyForMeScreen';
import VendorBuyForSomeoneScreen from './Tab_Screens/VendorBuyForSomeoneScreen';

class VendorBuyScreen extends Component {
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
  VendorBuyForMeScreen: {
    screen: VendorBuyForMeScreen,
    navigationOptions: {
      tabBarLabel: 'For Me',
    }
  }, 
  VendorBuyForSomeoneScreen: {
    screen: VendorBuyForSomeoneScreen,
    navigationOptions: {
      tabBarLabel: 'For someone else',  
    }
  }, 
  },
  {
    tabBarOptions: {
      activeTintColor: ThemeStyle.ThemeColor,
      inactiveTintColor: 'grey',
      upperCaseLabel:false,
      showIcon: false,
      indicatorStyle : {
        borderBottomColor: ThemeStyle.ThemeColor,
        borderBottomWidth: 4,
      },
      style: {
        backgroundColor: 'white',
      }
    }
  })

export default VendorBuyScreen;

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