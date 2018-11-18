import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform, SafeAreaView } from "react-native";

import { NavigationActions,StackActions} from 'react-navigation';
import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';
import Spinner from 'react-native-loading-spinner-overlay';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_GetUserProfile, AC_GetUserBalance } from '../../../reducers/Profile_Reducer/actions';
import { AC_UserScanToPay, AC_UserPaying, AC_UserSendMoney, AC_TopupRecharge } from '../../../reducers/Money_Reducer/actions';

class MobilePayPinScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      number1 : '',
      number2 : '',
      number3 : '',
      number4 : '',
    }
  }

  componentDidMount(){
    const {state} = this.props.navigation;
    this.setState({
      mobileNumber : state.params.mobileNumber,
      companyId    : state.params.companyId,
      amount       : state.params.amount,
    })
  }

  getNumber = (num) => {
   if(this.state.number1 == ''){
      this.setState({
        number1 : num,
        num1    : '*',
      })
    }
   if(this.state.number1 != '' && this.state.number2 == ''){
      this.setState({
        number2 : num,
        num2    : '*',
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 == ''){
      this.setState({
        number3 : num,
        num3    : '*',
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 != '' && this.state.number4 == ''){
      this.setState({
        number4 : num,
        num4    : '*',
      })
    }
  }

  clearNumber = () => {
    if(this.state.number1 != '' && this.state.number2 == ''){
      this.setState({
        number1: '',
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 == ''){
      this.setState({
        number2: ''
      })
    } 
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 != '' && this.state.number4 == ''){
      this.setState({
        number3: ''
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 != '' && this.state.number4 != ''){
      this.setState({
        number4: ''
      })
    }
  }

  nextScreen = () => {
    const {number1 , number2, number3, number4 } = this.state;
    let formData          = {};
    formData.AccessToken  = this.props.AccountState.token;
    formData.mobileNo     = this.state.mobileNumber;
    formData.amount       = this.state.amount;
    formData.companyId    = this.state.companyId;
    formData.pin          = number1+number2+number3+number4;
    this.props.TopupRecharge(formData);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.MoneyState.toprecharge == true){
      const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'MobilePaySuccessScreen'})],
        });
        this.props.navigation.dispatch(resetAction);
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.back}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='black' size={25}/>
          </TouchableOpacity>
        </View>

        <View style={styles.section12}>
          

            <Text style={styles.phoneText}>Enter Pin</Text>
            <Text style={styles.confirmText}>Enter your 4 digit PIN</Text>

            <View style={{paddingBottom: 15, marginHorizontal: 50,}}>

              <View style={styles.box}>

                {this.state.number1 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.num1}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                    
                  </View>
                }

                {this.state.number2 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.num2}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                    
                  </View>
                }

                {this.state.number3 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.num3}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                   
                  </View>
                }

                {this.state.number4 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.num4}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                    
                  </View>
                }

              </View>

              <View>

                <TouchableOpacity 
                  // onPress={()=>this.props.navigation.navigate('UserPaymentSuccessScreen')}
                  onPress={this.nextScreen}
                  style={styles.box1}>
                  <Text style={styles.box1Font}>Submit</Text>
                </TouchableOpacity>

              </View>
                
                <View style={styles.main1}>
                  <TouchableOpacity onPress={()=>this.getNumber('1')}>
                    <Text style={styles.numText}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber('2')}>
                    <Text style={styles.numText}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber('3')}>
                    <Text style={styles.numText}>3</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.main1}>
                  <TouchableOpacity onPress={()=>this.getNumber('4')}>
                    <Text style={styles.numText}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber('5')}>
                    <Text style={styles.numText}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber('6')}>
                    <Text style={styles.numText}>6</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.main1}>
                  <TouchableOpacity onPress={()=>this.getNumber('7')}>
                    <Text style={styles.numText}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber('8')}>
                    <Text style={styles.numText}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber('9')}>
                    <Text style={styles.numText}>9</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.main1}>
                  <View>
                    <Text style={styles.numText}>-</Text>
                  </View>
                  <TouchableOpacity onPress={()=>this.getNumber('0')}>
                    <Text style={styles.numText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.clearNumber()} style={{alignItems: 'center', justifyContent: 'center'}} style={{padding: 8,}}>
                    <Icon name='md-arrow-round-back' color='black' size={22}/>
                  </TouchableOpacity>
                </View>

            </View>

          </View>

        </ScrollView>
        <Spinner visible={this.props.ProfileState.showloader}/>
      </SafeAreaView>
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
                             UserPaying     : AC_UserPaying,
                             UserSendMoney  : AC_UserSendMoney,
                             GetUserBalance : AC_GetUserBalance,
                             TopupRecharge  : AC_TopupRecharge}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MobilePayPinScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  back: {
    marginTop: Platform.OS === 'ios' ? 35 : 15,
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
    marginTop: 5,
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 22, 
    textAlign: 'center',
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'black', 
    marginBottom:Platform.OS === 'ios' ? 15 : 10,
  },
  confirmText: {
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'black',
    marginBottom:Platform.OS === 'ios' ? 5 : 0,
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
    height: 20, 
    width: 20, 
    borderRadius: 20/2,
  },
  box:{
    flexDirection: 'row', 
    marginHorizontal: 25, 
    justifyContent: 'space-around', 
    marginTop: 30,
    marginBottom: 20,
  },
  boxText: {
    fontWeight: 'bold', 
    fontSize: 18,
    color: 'black'
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
    marginHorizontal:20, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginTop: Platform.OS === 'ios' ? 10 : 10,
    marginBottom: Platform.OS === 'ios' ? 10 : 10,
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
    fontFamily: ThemeStyle.Poppins,
  }
});