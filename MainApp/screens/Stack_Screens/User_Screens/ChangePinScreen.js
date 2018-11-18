import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_ResetAccountState } from '../../../reducers/Account_Reducer/actions';
import { AC_GetUserProfile, AC_GetUserBalance, AC_UserChangePin } from '../../../reducers/Profile_Reducer/actions';

class ChangePinScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      oldPin      : '',
      newPin      : '',
      confirmPin  : '',
      showOld     : true,
      showNew     : true,
      showConfirm : true,
    }
  }

  showOldPin = () => {
    this.setState({
      showOld: !this.state.showOld,
    })
  }

  showNewPin = () => {
    this.setState({
      showNew: !this.state.showNew,
    })
  }

  showConfirmPin = () => {
    this.setState({
      showConfirm: !this.state.showConfirm,
    })
  }

  changePin = () => {
    const {oldPin , newPin, confirmPin} = this.state;
    if((oldPin && newPin && confirmPin).length  != 4){
      alert('Insert 4 digits');
    }else if(oldPin == newPin){
      alert('Old pin and new pin shouldn\'t be same' );
    }else if(newPin != confirmPin){
      alert('New pin and confirm pin dosent match');
    }else {
      let formData = {};
      formData.AccessToken = this.props.AccountState.token;
      formData.currentPin  = oldPin;
      formData.newPin      = newPin;
      this.props.UserChangePin(formData);
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.ProfileState.pinChange == false && nextProps.ProfileState.pinChange == true){
      this.onLogoutBtnPress()
    }
  }

  onLogoutBtnPress(){
		Alert.alert(
			'Pin Successfully Changed',
			'Kindly logout and login again',
			[
				{ text: 'No', onPress: () => console.log('Cancel Pressed!') },
				{ text: 'Yes', onPress: () => this.onLogoutPress()},

			]
		)
  }

  onLogoutPress(){
    this.props.ResetAccountState();
    this.props.navigation.dispatch({type:'resetAndGoToScreen', routeName:'UserPhoneLogin'});
  }

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
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>Change Pin</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Old Pin</Text>
              <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', alignItems: 'center'}}>
                <TextInput 
                  placeholder='Old Pin'
                  secureTextEntry={this.state.showOld}
                  keyboardType="number-pad"
                  onChangeText={(oldPin)=>this.setState({oldPin: oldPin})}
                  value={this.state.oldPin}
                  style={{flex: 0.85}}
                />
                {this.state.showOld ?
                  <TouchableOpacity onPress={this.showOldPin}
                    style={{flex: 0.15}}>
                    <Icon name='md-eye-off' color='grey' size={23}/>
                  </TouchableOpacity> 
                  : 
                  <TouchableOpacity onPress={this.showOldPin}
                    style={{flex: 0.15}}>
                    <Icon name='md-eye' color='grey' size={23}/>
                  </TouchableOpacity> 
                }
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>New Pin</Text>
                <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', alignItems: 'center'}}>
                  <TextInput 
                    placeholder='New Pin'
                    secureTextEntry={this.state.showNew}
                    keyboardType="number-pad"
                    onChangeText={(newPin)=>this.setState({newPin: newPin})}
                    value={this.state.newPin}
                    style={{flex: 0.85}}
                  />
                  {this.state.showNew ?
                    <TouchableOpacity onPress={this.showNewPin}
                      style={{flex: 0.15}}>
                      <Icon name='md-eye-off' color='grey' size={23}/>
                    </TouchableOpacity> 
                    : 
                    <TouchableOpacity onPress={this.showNewPin}
                      style={{flex: 0.15}}>
                      <Icon name='md-eye' color='grey' size={23}/>
                    </TouchableOpacity> 
                  }
                </View>
              </View>
              <View style={{marginTop: 20}}>
                <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Confirm Pin</Text>
                <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', alignItems: 'center'}}>
                  <TextInput 
                    placeholder='Confirm Pin'
                    secureTextEntry={this.state.showConfirm}
                    keyboardType="number-pad"
                    onChangeText={(confirmPin)=>this.setState({confirmPin: confirmPin})}
                    value={this.state.confirmPin}
                    style={{flex: 0.85}}
                  />
                  {this.state.showConfirm ?
                    <TouchableOpacity onPress={this.showConfirmPin}
                      style={{flex: 0.15}}>
                      <Icon name='md-eye-off' color='grey' size={23}/>
                    </TouchableOpacity> 
                    : 
                    <TouchableOpacity onPress={this.showConfirmPin}
                      style={{flex: 0.15}}>
                      <Icon name='md-eye' color='grey' size={23}/>
                    </TouchableOpacity> 
                  }
                </View>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={this.changePin}
                  style={{alignItems: 'flex-end', marginTop: 20, backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5,paddingVertical: 10}}>
                  <Text style={{color: 'white', fontSize: 14}}>Update Changes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <Spinner visible={this.props.ProfileState.showloader}/>
      </View>
    );
  }
}
function mapStateToProps(state){
	return{
    AccountState : state.AccountState,
    ProfileState : state.ProfileState
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({GetUserProfile    : AC_GetUserProfile,
                             GetUserBalance    : AC_GetUserBalance,
                             UserChangePin     : AC_UserChangePin,
                             ResetAccountState : AC_ResetAccountState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePinScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  touch11: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  touch12: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});