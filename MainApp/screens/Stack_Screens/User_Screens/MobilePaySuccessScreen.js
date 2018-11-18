import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import Spinner from 'react-native-loading-spinner-overlay';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserScanToPay } from '../../../reducers/Money_Reducer/actions';
import { AC_GetUserProfile, AC_GetUserBalance } from '../../../reducers/Profile_Reducer/actions';

class MobilePaySuccessScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    this.props.GetUserBalance(formData);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 0.8, marginHorizontal: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, color: 'black', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>Thank you paying with KalPay.com</Text>
          <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>CFA {this.props.MoneyState.topAmount}</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20, }}>You have succesfully added</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>CFA {this.props.MoneyState.topAmount}</Text>
        </View>

        <View style={{flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserMainScreen')}
            style={{height: 60, width: 60, borderRadius: 30, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-home' color='white' size={30}/>
          </TouchableOpacity>
        </View>
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
  return bindActionCreators({UserScanToPay  : AC_UserScanToPay,
                             GetUserBalance : AC_GetUserBalance}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilePaySuccessScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});