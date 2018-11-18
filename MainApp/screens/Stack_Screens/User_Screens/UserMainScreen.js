import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform, AsyncStorage } from "react-native";

import { createTabNavigator, TabBarBottom } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import UserHomeScreen from './Tab_Screens/UserHomeScreen';
import UserActivityScreen from './Tab_Screens/UserActivityScreen';
import UserMoreScreen from './Tab_Screens/UserMoreScreen';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AC_FcmTokenProcess, AC_ResetAccountState} from '../../../reducers/Account_Reducer/actions';
import { AC_GetUserProfile, AC_GetUserBalance, AC_ResetProfileState} from '../../../reducers/Profile_Reducer/actions';
import {AC_BillPayment, AC_BuyAirTime, AC_ResetMoneyState} from '../../../reducers/Money_Reducer/actions';

class UserMainScreen extends Component {

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.type        = 1;
    formData.buyType     = 0;
    formData.fcmId       = this.props.AccountState.fcmToken;
    this.props.GetUserProfile(formData);
    this.props.GetUserBalance(formData);
    this.props.BillPayment(formData);
    this.props.BuyAirTime(formData);
    this.props.FcmTokenProcess(formData);
  }

  render() {
      var imageUrl  = require('../../../src/profile.png');
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

        <Spinner visible={this.props.ProfileState.showloader}/>
      </View>
    )
  }
}
      

const AppTab = createTabNavigator({
  UserHomeScreen: {
    screen: UserHomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  },
  UserActivityScreen: {
    screen: UserActivityScreen,
    navigationOptions: {
      tabBarLabel: 'Activities',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="map-signs" family='FontAwesome' color={tintColor} size={22} />
      )
    }
  },
  UserMoreScreen: {
    screen: UserMoreScreen,
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

function mapStateToProps(state){
	return{
    AccountState : state.AccountState,
    ProfileState : state.ProfileState,
    MoneyState   : state.MoneyState,
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({GetUserProfile    : AC_GetUserProfile,
                             GetUserBalance    : AC_GetUserBalance,
                             BillPayment       : AC_BillPayment,
                             BuyAirTime        : AC_BuyAirTime,
                             FcmTokenProcess   : AC_FcmTokenProcess,
                             ResetAccountState : AC_ResetAccountState,
                             ResetProfileState : AC_ResetProfileState,
                             ResetMoneyState   : AC_ResetMoneyState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMainScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 25, 
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