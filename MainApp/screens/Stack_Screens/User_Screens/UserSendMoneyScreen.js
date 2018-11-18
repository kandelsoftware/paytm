import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';
import LinearGradient from 'react-native-linear-gradient';

import UserPrepaidScreen from './Tab_Screens/UserPrepaidScreen';
import UserPhoneNumberScreen from './Tab_Screens/UserPhoneNumberScreen';
import UserContactScreen from './Tab_Screens/UserContactScreen';


class UserSendMoneyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
          <View 
            style={styles.touch12}>
            <Text style={{fontSize: 18, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>Send Money</Text>
          </View>
        </LinearGradient>

        <AppTab 
           screenProps={{ parentNavigation: this.props.navigation }}
        />

      </View>
    );
  }
}

const AppTab = createMaterialTopTabNavigator({ 
  UserPhoneNumberScreen: {
    screen: UserPhoneNumberScreen,
    navigationOptions: {
      tabBarLabel: 'Phone Number',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="mobile-phone" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  }, 
  UserContactScreen: {
    screen: UserContactScreen,
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

export default UserSendMoneyScreen;

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
  },
  touch11: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  touch12: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});