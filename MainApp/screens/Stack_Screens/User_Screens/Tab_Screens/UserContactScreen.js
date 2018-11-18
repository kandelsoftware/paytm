import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Platform,
  PermissionsAndroid, TextInput } from "react-native";

import Contacts from 'react-native-contacts';
import { NavigationActions,StackActions} from 'react-navigation';

import Spinner from 'react-native-loading-spinner-overlay';

import ThemeStyle from '../../../../styles/ThemeStyle';
import Icon from '../../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_CheckUserNumber} from '../../../../reducers/Money_Reducer/actions';

class UserContactScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts  : '',
      search    : '',
      searching : '',
      newNumber : false,
    }
  }

  componentDidMount(){ 
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
              'title': 'Contacts',
              'message': 'All kalPay to access your accounts'
          }
      )
      .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              Contacts.getAll((err, contacts) => {
                  this.setState({
                      contacts: contacts
                  });
              });
          }
          else {
              alert('Allow KalPay to access your contacts');
          }
      })
      .catch(err => {
          console.log('PermissionsAndroid', err)
      })
    } 
  }

  searchField = (search) => {
    this.setState({
      search : search,
    })
    Contacts.getContactsMatchingString(this.state.search, (err, contacts) => {
      this.setState({
        searching: contacts
    });
    })
  }

  selectedNumber = (number) => {
    var num = number.replace(/-|\s/g,"");
    
    var format = /[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]+/;
    if(format.test(num)){
      alert('Invalid number format');
    } else {
      let formData = {};
      formData.AccessToken  = this.props.AccountState.token;
      formData.mobileNumber = num;
      this.props.CheckUserNumber(formData);
      // this.props.screenProps.parentNavigation.navigate('UserSendAmountScreen', {mobileNumber: num})
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.MoneyState.numberValid == false && nextProps.MoneyState.numberValid == true){
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: 'UserSendAmountScreen'})],
      // });
      // this.props.screenProps.parentNavigation.dispatch(resetAction);
      this.props.ResetNumber();
       this.props.screenProps.parentNavigation.navigate('UserSendAmountScreen');
    }
  }
  
  renderContacts(rowData) {
    let number;
    if(rowData.item.phoneNumbers != undefined && rowData.item.phoneNumbers != '' && rowData.item.phoneNumbers != null && rowData.item.phoneNumbers.length > 0){
      if(rowData.item.phoneNumbers[0] != undefined){
        if(rowData.item.phoneNumbers[0].number != ''){
          number = rowData.item.phoneNumbers[0].number;
        }
      }
    }

		return (
      <View>
      {(rowData.item.phoneNumbers.length > 0 && rowData.item.phoneNumbers != undefined && rowData.item.phoneNumbers != '' && rowData.item.phoneNumbers != null) ?
      <View style={styles.flat1}>
				<TouchableOpacity 
        // onPress={()=>this.props.screenProps.parentNavigation.navigate('UserSendAmountScreen', {mobileNumber: number})}
        onPress={()=>this.selectedNumber(number)}
          style={styles.flat2}>
					<View style={{ flexDirection: 'row', }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={rowData.item.image} style={{height: 50, width:50, borderRadius: 25,}}/>
            </View>
						<View style={styles.flat3}>
							<Text style={styles.flatName}>{rowData.item.givenName}</Text>
							<Text style={styles.flatName}>{number}</Text>
						</View>
					</View> 
        </TouchableOpacity>
      </View>
      : null }
      </View>
		)
  }

  render() {
    console.log('----------contacts--------', this.state.contacts);
    return (
      <View style={styles.container}>
         <View style={{flex: 1,}}>
         <View style={{marginHorizontal: 20, marginTop:20, flexDirection: 'row',borderRadius: 5,}}>
            <TextInput 
            placeholder='Enter Name'
            onChangeText={(ser)=>this.searchField(ser)}
            value = {this.state.search}
            style={{paddingVertical: 8, 
              paddingHorizontal: 10, borderRadius: 5, flex: 1, backgroundColor: 'white'}}
            />
            
          </View>
          <View style={{marginHorizontal: 20, marginTop: 10,}}>
            <Text style={{fontSize: 16, color: ThemeStyle.ThemeColor}}>Contacts</Text>
          </View>
          {this.state.search == '' ?
            <FlatList
              data={this.state.contacts}
              renderItem={this.renderContacts.bind(this)}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            /> 
          : 
            <FlatList
              data={this.state.searching}
              renderItem={this.renderContacts.bind(this)}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            /> 
          }
        </View>
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContactScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efedea',
  },
  subHeader: {
    height: 60, 
    backgroundColor: 'white',
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20,    
    justifyContent: 'space-between',
  },
  headerImg: {
    height: 50, 
    width: 50, 
    borderRadius: 25,
  },
  flat1: {
		backgroundColor: 'white',
		marginTop: 15,
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 15,
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
  comStyle:{
    color: 'black', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
});