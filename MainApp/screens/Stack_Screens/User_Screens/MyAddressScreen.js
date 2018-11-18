import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput, Platform, Alert } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserChangeAddress, AC_GetUserProfile } from '../../../reducers/Profile_Reducer/actions';

class MyAddressScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      address1 : '',
      changeAddress : false,
    }
  }

  changeAddress = () => {
    const {address1} = this.state;
    if(this.state.address1 != ''){
      let formData = {};
      formData.AccessToken = this.props.AccountState.token;
      formData.address     = address1;
      this.props.UserChangeAddress(formData);
      this.setState({
        address1      : '',
        changeAddress : !this.state.changeAddress,
      })
    }else {
      alert('Enter your address');
    }
  }

  showChangeScreen = () =>{
    this.setState({
      changeAddress: !this.state.changeAddress
    })
  }

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    this.props.GetUserProfile(formData);
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.ProfileState.adressChanged == false && nextProps.ProfileState.adressChanged == true){
  //     this.props.navigation.navigate('UserProfileScreen');
  //     // Alert.alert(
  //     //   'Success!!',
  //     //   'Your address has been changed successfully',
  //     //   [
  //     //     // { text: 'No', onPress: () => console.log('Cancel Pressed!') },
  //     //     { text: 'OK', onPress: () => this.props.navigation.navigate('UserProfileScreen')},
  
  //     //   ]
  //     // )
  //   }
  // }

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
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>My Address</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
          <ScrollView>
            {this.state.changeAddress == false ?
            <View>
            {this.props.ProfileState.userDetails.address == '' || this.props.ProfileState.userDetails.address == null ?
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Address</Text>
                <TextInput 
                  placeholder='Address 1'
                  onChangeText={(address1)=>this.setState({address1: address1})}
                  value={this.state.address1}
                  style={styles.inputStyle}
                />
                <View style={{alignItems: 'flex-end'}}>
                  <TouchableOpacity onPress={this.changeAddress}
                    style={{alignItems: 'flex-end', marginTop: 20, backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5,paddingVertical: 10}}>
                    <Text style={{color: 'white', fontSize: 14}}>Update Changes</Text>
                  </TouchableOpacity>
                </View> 
              </View> : 
              <View style={{marginHorizontal: 20, marginTop: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Address</Text>
                  <TouchableOpacity onPress={this.showChangeScreen}>
                    <Text style={{color: ThemeStyle.ThemeColor, fontSize: 14}}>Change</Text>
                  </TouchableOpacity>
                </View>
                {this.props.ProfileState.userAddress == '' ?
                <Text>{this.props.ProfileState.userDetails.address}</Text> :
                <Text>{this.props.ProfileState.userAddress}</Text> }
              </View> 
            }
            </View> : 
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Address</Text>
              <TextInput 
                placeholder='Address 1'
                onChangeText={(address1)=>this.setState({address1: address1})}
                value={this.state.address1}
                style={styles.inputStyle}
              />
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={this.changeAddress}
                  style={{alignItems: 'flex-end', marginTop: 20, backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5,paddingVertical: 10}}>
                  <Text style={{color: 'white', fontSize: 14}}>Update Changes</Text>
                </TouchableOpacity>
              </View> 
            </View>
            }
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
  return bindActionCreators({UserChangeAddress : AC_UserChangeAddress ,
                             GetUserProfile: AC_GetUserProfile}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAddressScreen);

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
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingBottom: Platform.OS === 'ios' ? 6 : 0,
    marginBottom: Platform.OS === 'ios' ? 20 : 0,
  }
});