import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, FlatList, Image } from "react-native";

import { NavigationActions,StackActions} from 'react-navigation';
import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-loading-spinner-overlay';

import PhoneInput from 'react-native-phone-input';
import ModalPickerImage from '../../ModalPickerImage';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_CheckUserNumber, AC_ResetNumber, AC_RecentContacts} from '../../../../reducers/Money_Reducer/actions';

class UserPhoneNumberScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberList   : true,
      phoneNumber  : '',
      moneyRequest : false,
      number       : '',
      newNumber    : false,
      size         : 10,
      followList: [
				{
					name: '1234567890',
          icon: 'arrow-up-right'
				},
				{
          name: '1234567890',
          icon: 'arrow-down-left'
				},
				{
					name: '1234567890',
          icon: 'arrow-up-right'
        },
      ],
      contactList: [
				{
					name   : 'Albert',
          image  : require('../../../../src/man1.jpg'),
          number : '+91123456789',
				},
				{
          name: 'Beckam',
          image: require('../../../../src/man.jpg'),
          number : '+91123456789',
        },
        {
          name: 'Catlin',
          image: require('../../../../src/women.jpg'),
          number : '+91123456789',
				},
      ],
    }
    this.onPressFlag = this.onPressFlag.bind(this)
    this.selectCountry = this.selectCountry.bind(this)
  }

  componentDidMount(){
    this.setState({
      pickerData: this.refs.phone.getPickerData()
    })
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.Page        = 1;
    formData.PageSize    = this.state.size;
    formData.OrderBy     = true;
    this.props.RecentContacts(formData);
  }

  loadMore = () => {
    this.setState({
      size : this.state.size+10,
    })

    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.Page        = 1;
    formData.PageSize    = this.state.size+10;
    formData.OrderBy     = true;
    this.props.RecentContacts(formData);
  }

  onPressFlag(){
    this.refs.myCountryPicker.open()
  }

  selectCountry(country){
    this.refs.phone.selectCountry(country.iso2)
  }

  numberSuccess = () => {
    let phoneNoValid = this.refs.phone.isValidNumber();
    if(phoneNoValid) {
      var allCountryArray     = this.state.pickerData;
      var selectedCountryDial = this.refs.phone.getDialCode();
      var selectedPhoneno     = this.refs.phone.getValue();
      var selectedCountryName = '';
      allCountryArray.map((country, index) => {
        if(country.dialCode  == selectedCountryDial) {
          selectedCountryName = country.label;
          selectedPhoneno     = selectedPhoneno.split(selectedCountryDial).pop();
        }
      })
    }if(phoneNoValid == true){
      let phonenumber  = selectedPhoneno;
      let hiddenCode   = selectedCountryDial;
      let mobileNumber = hiddenCode+phonenumber;
      let formData = {};
      formData.AccessToken  = this.props.AccountState.token;
      formData.mobileNumber = mobileNumber;
      this.props.CheckUserNumber(formData);
      // this.props.screenProps.parentNavigation.navigate('UserSendAmountScreen', {mobileNumber: mobileNumber});
    }else if(phoneNoValid == false){
      alert('Mobile no is invalid');
    }else if(this.state.fullName == ''){
      alert('Enter your full name');
    }
  }

  checkRecent = (mobileNumber) => {
    let formData = {};
    formData.AccessToken  = this.props.AccountState.token;
    formData.mobileNumber = mobileNumber;
    this.props.CheckUserNumber(formData);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.MoneyState.numberValid == false && nextProps.MoneyState.numberValid == true){
      this.props.ResetNumber();
       this.props.screenProps.parentNavigation.navigate('UserSendAmountScreen');
    }
  }

  getNumber = (num) => {
    if(this.state.number.length < 12){
    var prevMoney = this.state.number;
    this.setState({
      number: prevMoney+num,
    })
    }
  }

  clearNumber = () => {
    var prevMoney = this.state.number;
    if(prevMoney.length > 0){
      this.setState({
        number: prevMoney.slice(0, -1),
      })
      
    }
  }

  nextScreen = () => {
    if(this.state.number.length > 0){
      // this.props.screenProps.parentNavigation.navigate('UserRequestSuccessScreen')
    }
  }

  showMoneyRequest = () => {
    this.setState({
      numberList   : false,
      moneyRequest : true,
    })
  }

  renderContacts(rowData) {
    var imageUrl  = require('../../../../src/profile.png');
      if(rowData.item.imageUrl != '' && rowData.item.imageUrl != null && rowData.item.imageUrl != undefined){
        imageUrl  = {uri : 'data:image/png;base64,'+rowData.item.imageUrl};
      }
		return (
      <View style={styles.flat1}>
				<TouchableOpacity onPress={()=>this.checkRecent(rowData.item.mobileNumber)}
          style={styles.flat2}>
					<View style={{ flexDirection: 'row', }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={imageUrl} style={{height: 50, width:50, borderRadius: 25,}}/>
            </View>
						<View style={{marginLeft: 20}}>
							<Text style={styles.flatName}>{rowData.item.fullName}</Text>
							<Text style={styles.flatName}>{rowData.item.mobileNumber}</Text>
						</View>
					</View>
        </TouchableOpacity>
      </View>
		)
  }

  renderItems(rowData) {
		return (
      <View style={styles.flat1}>
				<TouchableOpacity onPress={()=>this.showMoneyRequest()}
          style={styles.flat2}>
					<View style={{ flexDirection: 'row', }}>
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize:18, color: 'white'}}>0</Text>
            </View>
						<View style={styles.flat3}>
							<Text style={styles.flatName}>{rowData.item.name}</Text>
						</View>
					</View>
        </TouchableOpacity>
      </View>
		)
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.numberList ?
          <View>
            <View style={{marginHorizontal: 20, marginTop:20, }}>
              {/* <TextInput 
                placeholder='Enter Phone Number'
                onChangeText={(phoneNumber)=>{this.setState({phoneNumber : phoneNumber})}}
                value={this.state.phoneNumber}
                style={{paddingVertical: 8, 
                  borderWidth: 1, borderColor: 'lightgrey', paddingHorizontal: 10, borderRadius: 5,}}
              /> */}

              <View style={styles.inputStyle}>
                <PhoneInput 
                  ref='phone'
                  onPressFlag={this.onPressFlag}     
                  style={{paddingBottom: Platform.OS === 'ios' ? 12 : 12}}
                />
              </View>
                
              <ModalPickerImage
                ref='myCountryPicker'
                data={this.state.pickerData}
                onChange={(country)=>{ this.selectCountry(country) }}
                cancelText='Cancel'
              />

              <View style={{alignItems: 'flex-end', marginTop: 15,}}>
                <TouchableOpacity 
                  // onPress={()=>this.showMoneyRequest()}
                  onPress={this.numberSuccess}
                  style={{height: 50, width: 50, borderRadius: 25, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
                  <Icon name='md-arrow-round-forward' color='white' size={25}/>
                </TouchableOpacity>
              </View>

              <View style={{marginTop: 20,}}>
                <Text style={{fontFamily:ThemeStyle.Poppins, color:'black', fontSize: 16,}}>Recents</Text>
                {(this.props.MoneyState.recentContacts.length > 0) ?
                <FlatList
                  data={this.props.MoneyState.recentContacts}
                  renderItem={this.renderContacts.bind(this)}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                /> 
                : 
                <View style={{marginTop: 25, height: 150, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white'}}>
                  <Text>No Recent contacts found</Text> 
                </View>
                }
                {this.props.MoneyState.recentContacts.length > 0 ?
                  <View style={{position: 'absolute', bottom: 20, right: 20}}>
                  <TouchableOpacity onPress={this.loadMore}>
                    <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.circle1}>
                      <Icon name='refresh' family='FontAwesome' color='white' size={17}/>
                    </LinearGradient>
                  </TouchableOpacity>
                  </View>
                  : null
                }
              </View>

            </View>
            {/* <View style={{marginHorizontal: 20, marginTop: 10,}}>
              <Text style={{fontFamily:ThemeStyle.Poppins, color:'black', fontSize: 16,}}>Recent</Text>
              <FlatList
                data={this.state.followList}
                renderItem={this.renderItems.bind(this)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View> */}
          </View> : null }

          {this.state.moneyRequest ? 
            
            <View style={styles.section12}>
            
              <Text style={styles.phoneText}>Enter  Amount to Request</Text>
              {this.state.number.length > 0 ?
                  <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                    <Text style={{fontSize: 25, color: 'black'}}>$ </Text>
                    <Text style={{fontSize: 25, color: 'black'}}>{this.state.number}</Text>
                  </View> : 
                  
                  <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', }}>
                    <Text style={{fontSize: 25, color: 'black'}}>$ </Text>
                    <Text style={{fontSize: 25, color: 'black'}}>0</Text>
                  </View>
                  
              }

              <View style={{paddingBottom: 15, marginHorizontal: 50,}}>

                <View>

                <TouchableOpacity onPress={()=>this.nextScreen()}
                  style={styles.box1}>
                  <Text style={styles.box1Font}>Ok</Text>
                </TouchableOpacity>

                </View>

                <View style={styles.main1}>
                  <TouchableOpacity onPress={()=>this.getNumber(1)}>
                    <Text style={styles.numText}>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber(2)}>
                    <Text style={styles.numText}>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber(3)}>
                    <Text style={styles.numText}>3</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.main1}>
                  <TouchableOpacity onPress={()=>this.getNumber(4)}>
                    <Text style={styles.numText}>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber(5)}>
                    <Text style={styles.numText}>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber(6)}>
                    <Text style={styles.numText}>6</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.main1}>
                  <TouchableOpacity onPress={()=>this.getNumber(7)}>
                    <Text style={styles.numText}>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber(8)}>
                    <Text style={styles.numText}>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.getNumber(9)}>
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

            </View> : null 
          
          }

        </ScrollView>
        <Spinner visible={this.props.MoneyState.showloader}/>
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
    CheckUserNumber : AC_CheckUserNumber,
    ResetNumber     : AC_ResetNumber,
    RecentContacts  : AC_RecentContacts,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPhoneNumberScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flat1: {
		backgroundColor: 'white',
		marginTop: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 10,
    borderRadius: 10,
	},
	flat2: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	flatImage: {
		height: 45,
    width: 45,
    borderRadius: 45/2,
	},
	flatName: {
    fontSize: 16,
    color: 'black',
	},
	flat3: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
	},
	flatName2: {
		fontSize: 14,
		color: 'grey',
	},
	flat4: {
		paddingVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
  select: {
		backgroundColor: ThemeStyle.ThemeColor,
		paddingHorizontal: 18,
		borderRadius: 5,
		paddingVertical: 7,
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 22, 
    fontFamily: ThemeStyle.PoppinsMedium
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
    fontSize: 20, 
    textAlign: 'center',
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'black', 
    marginBottom:8,
  },
  confirmText: {
    fontSize: 30, 
    marginVertical: 5,
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'black',
    fontWeight: 'bold',
  },
  main1: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginHorizontal: 10, 
    marginTop: 15,
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
  inputStyle: {
    borderBottomWidth: 1, 
    borderBottomColor: 'grey', 
    fontSize: 14,
  },
});