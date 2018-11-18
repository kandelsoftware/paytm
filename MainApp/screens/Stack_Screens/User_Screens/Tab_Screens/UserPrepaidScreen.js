import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Linking,
  Platform
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Spinner from 'react-native-loading-spinner-overlay';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserScanToAdd } from '../../../../reducers/Money_Reducer/actions';
import { AC_GetUserBalance } from '../../../../reducers/Profile_Reducer/actions';

class UserPrepaidScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      scanningSuccess : true,
    }
  }

  onSuccess(e) {
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.id          = e.data;
    this.props.UserScanToAdd(formData);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.MoneyState.scanSuccess == false && nextProps.MoneyState.scanSuccess == true){
      this.props.screenProps.parentNavigation.navigate('UserMainScreen');
      setTimeout(()=>{
        let formData = {};
        formData.AccessToken = this.props.AccountState.token;
        this.props.GetUserBalance(formData);
      }, 200);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          containerStyle={{ marginHorizontal: Platform.OS === 'ios' ? 0 : 30 }}
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
  return bindActionCreators({UserScanToAdd  : AC_UserScanToAdd,
                             GetUserBalance : AC_GetUserBalance}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPrepaidScreen);

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
