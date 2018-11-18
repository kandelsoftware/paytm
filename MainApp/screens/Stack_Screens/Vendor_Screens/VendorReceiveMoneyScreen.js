import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import VendorReceiveQrScreen from './Tab_Screens/VendorReceiveQrScreen';
import VendorReceivePhoneScreen from './Tab_Screens/VendorReceivePhoneScreen';
import VendorReceiveContactScreen from './Tab_Screens/VendorReceiveContactScreen';


class UserReceiveMoneyScreen extends Component {
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
  VendorReceiveQrScreen: {
    screen: VendorReceiveQrScreen,
    navigationOptions: {
      tabBarLabel: 'Scan',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="qrcode" family='FontAwesome' color={tintColor} size={22} />   
      )
    }
  }, 
  VendorReceivePhoneScreen: {
    screen: VendorReceivePhoneScreen,
    navigationOptions: {
      tabBarLabel: 'Phone Number',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="mobile-phone" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  }, 
  VendorReceiveContactScreen: {
    screen: VendorReceiveContactScreen,
    navigationOptions: {
      tabBarLabel: 'Contact',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="address-card-o" family='FontAwesome' color={tintColor} size={22} />
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

export default UserReceiveMoneyScreen;

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