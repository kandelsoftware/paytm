import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Platform
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { NavigationActions,StackActions} from 'react-navigation';

import Spinner from 'react-native-loading-spinner-overlay';
import Icon from '../../../common/icons';
import ThemeStyle from '../../../styles/ThemeStyle';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserScanToPay, AC_ResetPayee } from '../../../reducers/Money_Reducer/actions';

class UserPayScreen extends Component {
  onSuccess(e) {
    let formData = {};
    formData.AccessToken  = this.props.AccountState.token;
    let userNumber = e.data.split('+').pop();
    formData.MobileNumber  = '%2B'+userNumber;
    this.props.UserScanToPay(formData);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.MoneyState.newPayee == false && nextProps.MoneyState.newPayee == true){
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: 'UserPayAmountScreen' })],
      // });
      // this.props.navigation.dispatch(resetAction);
      this.props.ResetPayee();
      this.props.navigation.navigate('UserPayAmountScreen');
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 70, backgroundColor: ThemeStyle.ThemeColor,flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-arrow-round-back' color='white' size={25}/>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 20, color: ThemeStyle.ThemeColor, textAlign: 'center', marginTop: 30}}>Scan the Qr code to pay</Text>
          <QRCodeScanner
            onRead={this.onSuccess.bind(this)}
            containerStyle={{marginHorizontal: Platform.OS === 'ios' ? 0 : 30, marginVertical: Platform.OS === 'ios' ? 0 : 30}}
          />
        <Spinner visible={this.props.MoneyState.showloader}/>
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
  return bindActionCreators({UserScanToPay : AC_UserScanToPay, ResetPayee : AC_ResetPayee}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPayScreen);

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
