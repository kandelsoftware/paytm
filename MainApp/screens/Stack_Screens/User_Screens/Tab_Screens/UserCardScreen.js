import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform, TextInput } from "react-native";

import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

import Spinner from 'react-native-loading-spinner-overlay';
import Stripe from 'react-native-stripe-api';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class UserCardScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLoader : false,
      email      : 'a@c.com',
      cardStatus : false
    }
  }

  _onChange = (form) => {
    if(form.status.number == 'valid' && form.status.expiry == 'valid' && form.status.cvc == 'valid'){
      this.setState({
        cardNumber : form.values.number,
        expiry     : form.values.expiry,
        cvc        : form.values.cvc,
        cardStatus : true
      })
    }
  }

  onSubmit = () => {
    if (this.state.cardStatus == true) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if(this.state.email == ''){
        alert('Enter your email');
      } else if(reg.test(this.state.email) == false){
        alert('Invalid Email Address');
      } else {
        this.setState({
          showLoader : true,
        })
        let expMonth = (this.state.expiry).slice(0,2);
        let expYear  = (this.state.expiry).slice(-2);
        const apiKey = 'sk_test_qUPbrwRxLzH3172atu3JC0pW';
        // const apiKey = 'sk_test_92n867LxxHed494XuF7qjO4H';
        // const apiKey = 'sk_test_qUPbrwRxLzH3172atu3JC0pW';
        const client = new Stripe(apiKey);
        client.createToken({
        number      : this.state.cardNumber,
        exp_month   : expMonth,
        exp_year    : expYear,
        cvc         : this.state.cvc,
        }).then((response)=>{
          this.setState({
            showLoader : false,
          })
          this.props.screenProps.parentNavigation.navigate('UserCardAmountScreen', {token: response.id, email : this.state.email});
        }).catch((err)=>{
          console.log(err);
        })
      }
    }else {
      alert('Please fill all the details');
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={{marginTop: 15}}>
            <CreditCardInput onChange={this._onChange} />
          </View>

           {/* <TextInput
            placeholder='Email'
            value={this.state.email}
            onChangeText={(email)=>this.setState({email : email})}
            style={styles.inputStyle}
          /> */}

          <View style={styles.section22}>
            <TouchableOpacity
              onPress={this.onSubmit}
              style={styles.circle1}>
              <Icon name='md-arrow-round-forward' color='white' size={25}/>
            </TouchableOpacity>
          </View>

          <Spinner visible={this.state.showLoader}/>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default UserCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  section22: {
    marginTop: 30,
    alignItems: 'flex-end',
    marginHorizontal: 25,
  },
  circle1: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: ThemeStyle.ThemeColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    fontSize: 14,
    marginHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 5 : null,
    marginBottom: Platform.OS === 'ios' ? 15 : null,
    marginTop: Platform.OS === 'ios' ? 20 : null,
  },
});
