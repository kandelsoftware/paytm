import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView, TextInput } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import Spinner from 'react-native-loading-spinner-overlay';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_UpdateUserCnic, AC_GetUserProfile} from '../../../reducers/Profile_Reducer/actions';

const buttons = ['Cancel', 'Choose From Gallery', 'Capture'];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 0;

class MyIdScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      id          : '',
      idImage     : '',
      showUpadted : true,
      loading     : false,
    }
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
          this.setState({
            idImage : image.data,
          })
      })
      .catch((err)=>{
        console.log('------erroe-----', err);
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
          this.setState({
            idImage : image.data,
          })
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

  resetImage = () => {
    this.setState({
      idImage: '',
    })
  }

  onSubmit = () => {
    if(this.state.id == ''){
      alert('Enter Your Id');
    }else if(this.state.idImage == ''){
      alert('Upload your id');
    }else{
      let formData = {};
      formData.AccessToken = this.props.AccountState.token;
      formData.cnic        = this.state.id;
      formData.cnicUrl     = this.state.idImage;
      this.props.UpdateUserCnic(formData);
      this.setState({
        loading     : true,
        showUpadted : !this.state.showUpadted,
      })
      setTimeout(()=>{this.props.GetUserProfile(formData)
        this.setState({
          loading : false, 
        })
      },100);
    }
  }

  onUpdate = () => {
    this.setState({
      showUpadted : !this.state.showUpadted
    })
  }

  render() {

    let imageUrl;
    if(this.state.idImage != ''){
      imageUrl = {uri : 'data:image/png;base64,'+this.state.idImage}
    }

    let cnicUrl;
    if(this.props.ProfileState.userDetails.cnicImageUrl != ''){
      cnicUrl = {uri : 'data:image/png;base64,'+this.props.ProfileState.userDetails.cnicImageUrl}
    }

    return (
      <View style={styles.container}>
         <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
          <View 
            style={styles.touch12}>
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>My Id</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
          <ScrollView>
            {this.state.showUpadted ?
            <View>
            {this.props.ProfileState.userDetails.cnicImageUrl && this.props.ProfileState.userDetails.cnic == '' ?
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Enter Id Number</Text>
              <TextInput 
                placeholder='Id'
                onChangeText={(id)=>this.setState({id: id})}
                value={this.state.id}
                style={styles.inputStyle}
              />
              {this.state.idImage == '' ?
              <View style={{marginTop: 25, flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.onImagePressed.bind(this)}
                  style={{height: 50, width: 70, borderWidth: 1, borderColor: 'lightgrey',borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                  <Icon name='image' family='FontAwesome' color='grey' size={18}/>
                  <Text style={{fontSize: 12}}>upLoad</Text>
                </TouchableOpacity>
              </View> :
              <View style={{marginTop: 20, height: 300, width: 300,}}>
                <Image source={imageUrl} style={{height: 250, width: 250, borderRadius: 5}}/>
                <TouchableOpacity onPress={this.resetImage}
                  style={{position: 'absolute', top: 0, right:0, backgroundColor: 'white', height: 30, width: 30, elevation: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 15,}}>
                  <Icon name='md-close' color={ThemeStyle.ThemeColor} size={20}/>
                </TouchableOpacity>
              </View> }
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={this.onSubmit}
                  style={{alignItems: 'flex-end', marginTop: 20, backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5,paddingVertical: 10}}>
                  <Text style={{color: 'white', fontSize: 14}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View> : 
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Id Number</Text>
                <Text style={{color: 'black', fontSize: 16, paddingTop: 5}}>{this.props.ProfileState.userDetails.cnic}</Text>
                </View>
                <TouchableOpacity onPress={this.onUpdate}
                  style={{alignItems: 'flex-end', marginTop: 20, backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5,paddingVertical: 10}}>
                  <Text style={{color: 'white', fontSize: 14}}>Update</Text>
                </TouchableOpacity>
                
              </View>
              
              <View style={{marginTop: 20, height: 300, width: 300,}}>
                <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor, marginBottom: 10}}>Id Image</Text>
                <Image source={cnicUrl} style={{height: 250, width: 250, borderRadius: 5, resizeMode: 'contain'}}/>
              </View>
            </View> 
            }
            </View> 
            : 
            <View style={{marginHorizontal: 20, marginTop: 15}}>
              <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Enter Id Number</Text>
              <TextInput 
                placeholder='Id'
                onChangeText={(id)=>this.setState({id: id})}
                value={this.state.id}
                style={styles.inputStyle}
              />
              {this.state.idImage == '' ?
              <View style={{marginTop: 25, flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.onImagePressed.bind(this)}
                  style={{height: 50, width: 70, borderWidth: 1, borderColor: 'lightgrey',borderRadius: 5, alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
                  <Icon name='image' family='FontAwesome' color='grey' size={18}/>
                  <Text style={{fontSize: 12}}>upLoad</Text>
                </TouchableOpacity>
              </View> :
              <View style={{marginTop: 20, height: 300, width: 300,}}>
                <Image source={imageUrl} style={{height: 250, width: 250, borderRadius: 5}}/>
                <TouchableOpacity onPress={this.resetImage}
                  style={{position: 'absolute', top: 0, right:0, backgroundColor: 'white', height: 30, width: 30, elevation: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 15,}}>
                  <Icon name='md-close' color={ThemeStyle.ThemeColor} size={20}/>
                </TouchableOpacity>
              </View> }
              <View style={{alignItems: 'flex-end'}}>
                <TouchableOpacity onPress={this.onSubmit}
                  style={{alignItems: 'flex-end', marginTop: 20, backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 15, paddingVertical: 15, borderRadius: 5,paddingVertical: 10}}>
                  <Text style={{color: 'white', fontSize: 14}}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
            }
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
       <Spinner visible={this.props.ProfileState.showloader} />
       <Spinner visible={this.state.loading} />
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
  return bindActionCreators({
    UpdateUserCnic : AC_UpdateUserCnic,
    GetUserProfile : AC_GetUserProfile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyIdScreen);

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
  }
});