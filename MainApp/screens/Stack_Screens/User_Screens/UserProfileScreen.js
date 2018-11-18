import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, Alert, AsyncStorage} from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import Spinner from 'react-native-loading-spinner-overlay';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_GetUserProfile, AC_GetUserBalance, AC_UserChangeImage, AC_ResetProfileState } from '../../../reducers/Profile_Reducer/actions';
import { AC_ResetAccountState } from '../../../reducers/Account_Reducer/actions';
import {AC_ResetMoneyState} from '../../../reducers/Money_Reducer/actions';

const buttons = ['Cancel', 'Choose From Gallery', 'Capture'];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 0;

class UserProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.onImagePressed = this.onImagePressed.bind(this);
    this.onSheetPressed = this.onSheetPressed.bind(this);	
  }

  onSheetPressed(index) {
    //choose from gallery1
    if(index == 1) {
      ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        includeBase64:true,
    compressImageQuality: 0.5,
        mediaType:'photo'
      }).then(image => {
          var formdata   = {};
          formdata.image = image.data;
          formdata.AccessToken  = this.props.AccountState.token;
          this.props.UserChangeImage(formdata);
          // this.props.GetUserProfile(formdata);
          setTimeout(()=>{this.props.GetUserProfile(formdata)},50);
      })
      .catch((err)=>{
        console.log('------erroe-----', err);
        // alert('You have cancelled it');
      })
    }
    //capture 2
    if(index == 2) {
      ImagePicker.openCamera({
          width: 400,
          height: 400,
          cropping: true,
          includeBase64:true,
      compressImageQuality: 0.5,
        }).then(image => {
          var formdata   = {};
          formdata.image = image.data;
          formdata.AccessToken  = this.props.AccountState.token;
          this.props.UserChangeImage(formdata);
          setTimeout(()=>{this.props.GetUserProfile(formdata)},50);
        })
        .catch((err)=>{
          console.log('------erroe-----', err);
        })
    }
  }

  onImagePressed()
  {
    this.ActionSheet.show();
  }

  onLogoutBtnPress(){
		Alert.alert(
			'Confirmation',
			'Are you sure want to logout ?',
			[
				{ text: 'No', onPress: () => console.log('Cancel Pressed!') },
				{ text: 'Yes', onPress: () => this.onLogoutPress()},

			]
		)
  }

  onLogoutPress(){
    this.removeKey();
    this.props.ResetAccountState();
    this.props.ResetProfileState();
    this.props.ResetMoneyState();
    this.props.navigation.dispatch({type:'resetAndGoToScreen', routeName:'UserInitialScreen'});
  }

  async removeKey() {
    try {
      await AsyncStorage.removeItem('@kalPay:key');
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  render() {
      var imageUrl  = require('../../../src/profile.png');
      if(this.props.ProfileState.userDetails.imageUrl != '' && this.props.ProfileState.userDetails.imageUrl != null && this.props.ProfileState.userDetails.imageUrl != undefined){
        imageUrl  = {uri : 'data:image/png;base64,'+this.props.ProfileState.userDetails.imageUrl};
      }
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
          <View style={styles.touch12}>
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>Profile</Text>
          </View>
          <TouchableOpacity onPress={()=>this.onLogoutBtnPress()}
            style={styles.touch13}>
            <Text style={{fontSize: 14, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>LOGOUT</Text>
          </TouchableOpacity>
        </LinearGradient>
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
              <View style={{marginTop: 20, height: 100, width: 100,}}>
                <Image source={imageUrl} style={{height: 100, width: 100, borderRadius: 75,}}/>
                <TouchableOpacity onPress={this.onImagePressed.bind(this)}
                  style={{position: 'absolute', bottom: 5, right:3, backgroundColor: 'white', height: 30, width: 30, elevation: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 15,}}>
                  <Image source={require('../../../src/cam.png')} style={{height: 20, width: 20}}/>
                </TouchableOpacity>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 20, flex: 1}}>
                <Text style={{fontSize: 20, fontFamily: ThemeStyle.Poppins, marginTop: 20, color: 'black', flexWrap: 'wrap'}}>{this.props.ProfileState.userDetails.fullName}</Text>
                <Text style={{fontSize: 16, marginTop: 2, color: 'black'}}>{this.props.ProfileState.userDetails.mobileNumber}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyQrScreen')}
              style={styles.menu1}>
              <View style={styles.menu2}>
                <Icon name='qrcode' family='FontAwesome' size={22} color='black'/>
              </View>
              <View style={styles.menu3}>
                <Text style={styles.menuColor}>My QR Code</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyAddressScreen')}
              style={styles.menu1}>
              <View style={styles.menu2}>
                <Icon name='map-marker' family='FontAwesome' size={22} color='black'/>
              </View>
              <View style={styles.menu3}>
                <Text style={styles.menuColor}>My Address</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyIdScreen')}
              style={styles.menu1}>
              <View style={styles.menu2}>
                <Icon name='id-card-o' family='FontAwesome' size={20} color='black'/>
              </View>
              <View style={styles.menu3}>
                <Text style={styles.menuColor}>My ID</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyTransactionsScreen')}
              style={styles.menu1}>
              <View style={styles.menu2}>
                <Icon name='exchange' family='FontAwesome' size={20} color='black'/>
              </View>
              <View style={styles.menu3}>
                <Text style={styles.menuColor}>My payment request</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyReferralScreen')}
              style={styles.menu1}>
              <View style={styles.menu2}>
                <Icon name='money' family='FontAwesome' size={20} color='black'/>
              </View>
              <View style={styles.menu3}>
                <Text style={styles.menuColor}>Referral</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ChangePinScreen')}
              style={styles.menu1}>
              <View style={styles.menu2}>
                <Icon name='key' family='FontAwesome' size={20} color='black'/>
              </View>
              <View style={styles.menu3}>
                <Text style={styles.menuColor}>Change Pin</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <ActionSheet
					ref={(o) => this.ActionSheet = o}
					title="Choose Your Profile Picture"
					options={buttons}
					cancelButtonIndex={CANCEL_INDEX}
					destructiveButtonIndex={DESTRUCTIVE_INDEX}
					onPress={this.onSheetPressed.bind(this)}
			 />
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
                             ResetAccountState : AC_ResetAccountState,
                             UserChangeImage   : AC_UserChangeImage,
                             ResetProfileState : AC_ResetProfileState,
                             ResetMoneyState   : AC_ResetMoneyState}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen);

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
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touch13 : {
    flex: 0.3,
    alignItems: 'center',
    paddingBottom: 5,
  },
  menu1: {
    flexDirection: 'row', 
    marginTop: 30, 
    paddingHorizontal: 25, 
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgrey', 
    paddingBottom: 10
  },
  menu2: {
    flex: 0.12
  },
  menu3: {
    flex: 0.88
  },
  menuColor: {
    color: 'black', 
    fontSize: 14,
  }
});