import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';
import { NavigationActions,StackActions} from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserScanToPay } from '../../../reducers/Money_Reducer/actions';
import { AC_GetUserProfile, AC_GetUserBalance } from '../../../reducers/Profile_Reducer/actions';

class WithdrawSuccessScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSuccess: true,
      showStatus : false,
    }
  }

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    this.props.GetUserBalance(formData);    
    setTimeout(()=>{this.setState({showSuccess: false, showStatus: true})}, 2000);
  }

  mainScreen = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'UserMainScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.showStatus == true ?
        <View style={{flex: 1}}>
        <View style={{flex: 0.8, marginHorizontal: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20, }}>Thank you for using KalPay.com</Text>
          <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>CFA {this.props.MoneyState.withdrawnAmount}</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20, }}>You have succesfully withdrawn 
          </Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 5, }}>CFA {this.props.MoneyState.withdrawnAmount} from KalPay</Text>
        </View>

        <View style={{flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity onPress={this.mainScreen}
            style={{height: 60, width: 60, borderRadius: 30, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-home' color='white' size={30}/>
          </TouchableOpacity>
        </View>
        </View> : 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../src/checked.png')} style={{height: 80, width: 80}}/>
          <Text style={{fontSize: 25, color: 'black', marginTop: 20}}>CFA {this.props.MoneyState.withdrawnAmount}</Text>
        </View> }

      </View>
    );
  }
}

function mapStateToProps(state){
	return{
    AccountState : state.AccountState,
    MoneyState   : state.MoneyState,
    ProfileState : state.ProfileState,
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({UserScanToPay  : AC_UserScanToPay,
                             GetUserBalance : AC_GetUserBalance}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawSuccessScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});