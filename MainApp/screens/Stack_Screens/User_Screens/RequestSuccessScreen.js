import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';
import { NavigationActions,StackActions} from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_ReceiveRequest, AC_AcceptRequests} from '../../../reducers/Money_Reducer/actions';
import { AC_GetUserProfile, AC_GetUserBalance } from '../../../reducers/Profile_Reducer/actions';

class RequestSuccessScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSuccess: true,
      showStatus : false,
    }
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({showSuccess: false, showStatus: true})}, 2000);
    let formData         = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.Page        = 1;
    formData.PageSize    = 10;
    this.props.ReceiveRequest(formData);
    this.props.GetUserBalance(formData);
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
            <Text style={{fontSize: 20, color: 'black', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>Thank you paying with KalPay.com</Text>
            <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
            <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>CFA {this.props.MoneyState.requestAmount}</Text>
            <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20, }}>You Paid CFA {this.props.MoneyState.requestAmount} to</Text>
            <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>{this.props.MoneyState.requestedSender}</Text>
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
          <Text style={{fontSize: 25, color: 'black', marginTop: 20}}>CFA {this.props.MoneyState.requestAmount}</Text>
        </View>
        }
        <Spinner visible={this.props.MoneyState.showloader}/>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    AccountState : state.AccountState,
    MoneyState   : state.MoneyState,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    ReceiveRequest : AC_ReceiveRequest,
    AcceptRequests : AC_AcceptRequests,
    GetUserBalance : AC_GetUserBalance,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestSuccessScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});