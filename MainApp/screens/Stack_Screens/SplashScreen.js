import React, { Component } from "react";
import { View, Text, StyleSheet, Image, AsyncStorage, Alert } from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import ThemeStyle from "../../styles/ThemeStyle";

import LinearGradient from 'react-native-linear-gradient';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_UserLogin, AC_ResetAccountState} from '../../reducers/Account_Reducer/actions';
import {AC_ResetProfileState} from '../../reducers/Profile_Reducer/actions';
import {AC_ResetMoneyState} from '../../reducers/Money_Reducer/actions';

class SplashScreen extends Component {

  constructor(props){
    super(props);
    this.getKey = this.getKey.bind(this);
  }

  componentDidMount() { 
    this.getKey();
    setTimeout(()=>{
      alert('Your session has been expired, kindly login again');
      this.removeKey();
      this.props.ResetAccountState();
      this.props.ResetProfileState();
      this.props.ResetMoneyState();
      this.props.navigation.dispatch({type:'resetAndGoToScreen', routeName:'UserInitialScreen'});
    }, 3000000);
  }

  async removeKey() {
    try {
      await AsyncStorage.removeItem('@kalPay:key');
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.AccountState.loginSuccess == true){
      setTimeout(()=>{
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'UserMainScreen' })],
        });
        this.props.navigation.dispatch(resetAction);
      }, 3000)
    } 
  }

  async getKey() {
    try {
        const userTokenJson = await AsyncStorage.getItem('@kalPay:key');
        if (userTokenJson !== null && userTokenJson != undefined && userTokenJson != "") {
            var userToken = JSON.parse(userTokenJson);
            let formData = {};
            formData.mobileNumber = userToken.mobileNumber;
            formData.pin          = userToken.pin;
            this.props.UserLogin(formData);
        } else {
            setTimeout(() => {
            const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'StartScreen' })],
            });
            this.props.navigation.dispatch(resetAction);
            }, 3000);
        }
    } catch (error) {
      console.log('asyncerror',error);
        // Error retrieving data    
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white', fontSize: 45, fontFamily: ThemeStyle.Poppins}}>KalPay</Text>
            <Text style={{color: 'white', fontSize: 20, fontFamily: ThemeStyle.Poppins}}>Do things differently!</Text>
        </LinearGradient>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    AccountState : state.AccountState,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    UserLogin         : AC_UserLogin,
    ResetAccountState : AC_ResetAccountState,
    ResetProfileState : AC_ResetProfileState,
    ResetMoneyState   : AC_ResetMoneyState
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 35, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  comStyle:{
    color: 'black', 
    fontSize: 25, 
    fontFamily: ThemeStyle.PoppinsMedium
  }
});