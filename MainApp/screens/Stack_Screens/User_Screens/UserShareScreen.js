import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, Platform } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';
import Share, {ShareSheet, Button} from 'react-native-share';

import {connect} from 'react-redux';

class UserShareScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  onCancel() {
    console.log("CANCEL")
    this.setState({visible:false});
  }

  onOpen() {
    console.log("OPEN")
    this.setState({visible:true});
  }

  render() {

    let shareOptions = {
      title: "Referal Code",
      message: "Please! download the app and transfer money with KalPay"+ " " +'www.kalpayinc.com/refer/'+this.props.ProfileState.userDetails.referral,
      subject: "Referal Code"
    };

    return (
      <View style={styles.container}>
        <View style={{marginTop: Platform.OS === 'ios' ? 35 : 15, flexDirection: 'row'}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='black' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch12}>
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'black'}}> Share with friends</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <Image source={require('../../../src/share.png')} style={{height: 180, width: 180}}/>
            <Text style={{color: ThemeStyle.ThemeColor, marginTop: 15}}>Your Referral Code</Text>
            <Text style={{color: 'black', marginTop: 10, fontSize: 25}}>{this.props.ProfileState.userDetails.referral}</Text>
            <TouchableOpacity onPress={this.onOpen.bind(this)}
              style={{flexDirection: 'row', paddingHorizontal: 25, paddingVertical: 10, backgroundColor: ThemeStyle.ThemeColor,borderRadius: 5, marginTop: 20}}>
                <Icon name='md-share' color='white' size={20}/>
                <Text style={{color: 'white', fontSize: 16, marginLeft: 10}}>Share</Text>
              </TouchableOpacity>
          </View>
        </View>
        <ShareSheet visible={this.state.visible} onCancel={this.onCancel.bind(this)}>
          <Button iconSrc={require('../../../src/twitter.png')} style={{width:100,height:50}}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "twitter"
                }));
              },300);
            }}>Twitter</Button>
          <Button iconSrc={require('../../../src/fb.png')}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "facebook"
                }));
              },300);
            }}>Facebook</Button>
          <Button iconSrc={require('../../../src/whatsapp1.png')}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "whatsapp"
                }));
              },300);
            }}>Whatsapp</Button>
          <Button iconSrc={require('../../../src/gplus.png')}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "googleplus"
                }));
              },300);
            }}>Google +</Button>
          <Button iconSrc={require('../../../src/mail.png')}
                  onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.shareSingle(Object.assign(shareOptions, {
                  "social": "email"
                }));
              },300);
            }}>Email</Button>
          <Button iconSrc={require('../../../src/more.png')}
            onPress={()=>{
              this.onCancel();
              setTimeout(() => {
                Share.open(shareOptions)
              },300);
            }}>More</Button>
        </ShareSheet>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    ProfileState : state.ProfileState,
  }
}

export default connect(mapStateToProps)(UserShareScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
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