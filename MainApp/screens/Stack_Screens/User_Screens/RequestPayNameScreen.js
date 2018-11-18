import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, Image } from "react-native";

import { NavigationActions,StackActions} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_ReceiveRequest, AC_AcceptRequests} from '../../../reducers/Money_Reducer/actions';

class RequestPayNameScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount(){
    const {state} = this.props.navigation;
    this.setState({
      id     : state.params.id,
      amount : state.params.amount,
      sender : state.params.sender,
      image  : state.params.image,
    })
  }

  submit = () =>{
    let formData = {};
    formData.AccessToken     = this.props.AccountState.token;
    formData.requestId       = this.state.id;
    formData.sendingAmount   = this.state.amount;
    formData.requestedSender = this.state.sender;
    this.props.navigation.navigate('RequestPinScreen', {id: this.state.id, amount: this.state.amount, sender: this.state.sender});
    // this.props.AcceptRequests(formData);
  }

  render() {
    var imageUrl  = require('../../../src/profile.png');
    if(this.state.image != '' && this.state.image != null && this.state.image != undefined){
      imageUrl  = {uri : 'data:image/png;base64,'+this.state.image};
    }
    return (
      <View style={styles.container}>
        <View style={{marginTop: Platform.OS === 'ios' ? 35 : 15,}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='black' size={25}/>
          </TouchableOpacity>
        </View>

        <View style={styles.section12}>

          <LinearGradient colors={['#7A00D2', '#5217ee']} style={{marginHorizontal: 20, elevation: 5, borderRadius: 10, paddingHorizontal: 15,paddingVertical: 25,flexDirection: 'row'}}>
            <Image source={imageUrl} style={{height: 60, width: 60,borderRadius: 30, borderColor: 'white',borderWidth: 2}}/>
            <View style={{flex: 1,marginLeft: 15, justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 16}}>{this.state.sender}</Text>
            </View>
          </LinearGradient>
          
          <View style={{backgroundColor: 'white', borderWidth:1, borderColor: 'white', elevation: 5, marginHorizontal: 40, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingVertical: 15}}>

            <Text style={styles.phoneText}>Requested Amount</Text>
            
              <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                <Text style={{fontSize: 25, color: 'black'}}>CFA </Text>
                <Text style={{fontSize: 25, color: 'black'}}>{this.state.amount}</Text>
              </View> 

            <View style={{marginHorizontal: 30}}>

              <TouchableOpacity onPress={this.submit}
                // onPress={()=>this.props.navigation.navigate('RequestPinScreen')}
                style={styles.box1}>
                <Text style={styles.box1Font}>Ok</Text>
              </TouchableOpacity>

            </View>
            
          </View>            

        </View>

        

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
    AcceptRequests : AC_AcceptRequests
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestPayNameScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
 },
 imgStyle: {
  height: 60, 
  width: 60, 
  marginBottom: 25,
  },
  section11: {
    flex: 0.1, 
    justifyContent: 'center',
    marginHorizontal: 10, 
    alignItems: 'flex-start',
  },
  touch11: {
    paddingHorizontal: 20,
  },
  section12: {
    flex: 1, 
    marginTop: 15,
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 22, 
    textAlign: 'center',
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'black', 
    marginBottom:10,
  },
  confirmText: {
    fontSize: 35, 
    marginVertical: 15,
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    marginVertical: 15,
    textAlign: 'center', 
    color: 'black',
    fontWeight: 'bold',
  },
  main1: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginHorizontal: 10, 
    marginTop: 18,
  },
  numText: {
    fontSize: 22, 
    color: 'black',
    fontWeight: 'bold',
    padding: 8,
  },
  boxStyle:{
    backgroundColor: 'lightgrey', 
    height: 15, 
    width: 15, 
    borderRadius: 15/2,
  },
  box:{
    flexDirection: 'row', 
    marginHorizontal: 20, 
    justifyContent: 'space-around', 
    marginTop: 40,
    marginBottom: 20,
  },
  section22: {
    marginVertical: 30, 
    alignItems: 'center'
  },
  circle1: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    backgroundColor: 'white', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  box1: {
    backgroundColor: ThemeStyle.ThemeColor, 
    marginHorizontal:40, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginTop: 15,
    marginBottom: 10,
    elevation: 3,
  },
  box1Font:{
    color: 'white', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  forgotStyle: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  forgotText: {
    textAlign: 'center', 
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins
  }
});