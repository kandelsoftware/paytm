import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import VendorBillQrScreen from './Tab_Screens/VendorBillQrScreen';
import VendorBillBarCodeScreen from './Tab_Screens/VendorBillBarCodeScreen';
import VendorBillAcNoScreen from './Tab_Screens/VendorBillAcNoScreen';


class VendorBillPaymentsScreen extends Component {
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
  VendorBillQrScreen: {
    screen: VendorBillQrScreen,
    navigationOptions: {
      tabBarLabel: 'Scan QR Code',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="qrcode" family='FontAwesome' color={tintColor} size={22} />   
      )
    }
  }, 
  VendorBillBarCodeScreen: {
    screen: VendorBillBarCodeScreen,
    navigationOptions: {
      tabBarLabel: 'Scan Barcode',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="barcode" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  }, 
  VendorBillAcNoScreen: {
    screen: VendorBillAcNoScreen,
    navigationOptions: {
      tabBarLabel: 'Ac Number',
      tabBarIcon: ({ tintColor }) => (
        <Text style={{color: tintColor}}>123</Text>
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

export default VendorBillPaymentsScreen;

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