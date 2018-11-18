import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import UserPrepaidScreen from './Tab_Screens/UserPrepaidScreen';
import UserCardScreen from './Tab_Screens/UserCardScreen';
import MobileMoney from './Tab_Screens/MobileMoney';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserAddMoneyScreen extends Component {
  render() {
    var imageUrl  = require('../../../src/12.png');
    if(this.props.ProfileState.userDetails.imageUrl != '' && this.props.ProfileState.userDetails.imageUrl != null && this.props.ProfileState.userDetails.imageUrl != undefined){
      imageUrl  = {uri : 'data:image/png;base64,'+this.props.ProfileState.userDetails.imageUrl};
    }
    return (
      <View style={styles.container}>

         <View style={styles.subHeader}>
          <View>
            <Text style={styles.fontStyle}>KalPay</Text>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserProfileScreen')}>
            <Image source={imageUrl} style={styles.headerImg}/>
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
  UserPrepaidScreen: {
    screen: UserPrepaidScreen,
    navigationOptions: {
      tabBarLabel: 'Prepaid Card',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="qrcode" family='FontAwesome' color={tintColor} size={22} />   
      )
    }
  }, 
  UserCardScreen: {
    screen: UserCardScreen,
    navigationOptions: {
      tabBarLabel: 'Credit/Debit',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="credit-card" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  }, 
  MobileMoney: {
    screen: MobileMoney,
    navigationOptions: {
      tabBarLabel: 'Mobile Money',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="money" family='FontAwesome' color={tintColor} size={22} />
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

  function mapStateToProps(state){
    return{
      AccountState : state.AccountState,
      ProfileState : state.ProfileState
    }
  }
  
export default connect(mapStateToProps)(UserAddMoneyScreen);

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