import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput, Platform } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import { Dropdown } from 'react-native-material-dropdown';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserSetPassword } from '../../../reducers/Account_Reducer/actions';

class UserQuestionScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer : ''
    }
  }

  componentDidMount(){
    const {state} = this.props.navigation;
    this.setState({
      newPin: state.params.Pin,
    })
  }

  onSubmit = () => {
    
    if(this.state.answer != ''){
      let formData          = {};
      formData.mobileNumber = this.props.AccountState.mobileNumber;
      formData.pin          = this.state.newPin;
      formData.token        = this.props.AccountState.token;
      formData.questionId   = 1;
      formData.answer       = this.state.answer; 
      this.props.UserSetPassword(formData);
    }else {
      alert('Enter your answer');
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.AccountState.passwordSuccess == false && nextProps.AccountState.passwordSuccess == true){
      this.props.navigation.navigate('UserPhoneLogin');
    }
  }
  
  render() {
    let data = [{
      value: 'Who is your favourite teacher?',
    }, {
      value: 'What is your favorite color?',
    }, {
      value: 'What is your favorite sport?',
    }];

    return (
      <View style={styles.container}>

        <KeyboardAwareScrollView>
 
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.linearGradient}>

          <View style={styles.section11}>
            <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} 
              style={styles.touch11}>
              <Icon name='md-arrow-round-back' color='white' size={25}/>
            </TouchableOpacity>
          </View>

          <View style={styles.section12}>
            <Image source={require('../../../src/lock.png')} 
              style={styles.imgStyle}/>
            <Text style={styles.confirmText}>Kindly enter your security question and answer</Text>
          </View>

        </LinearGradient>

        <View style={styles.section21}>

          <Dropdown
            label='Choose a question'
            data={data}
          />

          <TextInput 
            placeholder='Answer'
            value={this.state.answer}
            onChangeText={(answer)=>this.setState({answer : answer})}
            style={styles.inputStyle}
          />

          <View style={styles.section22}>
            <TouchableOpacity onPress={this.onSubmit}
              style={styles.circle1}>
              <Icon name='md-arrow-round-forward' color='white' size={25}/>
            </TouchableOpacity>
          </View>

        </View>

        </KeyboardAwareScrollView>
        <Spinner visible={this.props.AccountState.showloader}/>
      </View>
    );
  }
}

function mapStateToProps(state){
	return{
		AccountState: state.AccountState
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({UserSetPassword:AC_UserSetPassword}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserQuestionScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
     paddingTop: 20,
     paddingBottom: 30,
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
    marginTop: 15,
  },
  touch11: {
    paddingHorizontal: 10,
  },
  section12: {
    flex: 0.8, 
    marginTop: 30,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 22, 
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'white', 
    marginBottom:12,
  },
  confirmText: {
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'white'
  },
  section21:{
    marginHorizontal: 20, 
    marginTop: 20,
  },
  inputStyle: {
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    fontSize: 14,
    paddingBottom: Platform.OS === 'ios' ? 5 : null,
  },
  section22: {
    marginTop: 30, 
    alignItems: 'flex-end'
  },
  circle1: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    backgroundColor: ThemeStyle.ThemeColor, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});