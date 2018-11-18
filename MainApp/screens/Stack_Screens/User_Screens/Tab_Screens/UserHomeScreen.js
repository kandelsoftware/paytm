import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Dimensions } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from '../../../../styles/ThemeStyle';
import Icon from '../../../../common/icons';

const {width, height} = Dimensions.get('window');

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_GetUserProfile, AC_GetUserBalance } from '../../../../reducers/Profile_Reducer/actions';

class UserHomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  }

  refreshBalance = () => {
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    this.props.GetUserBalance(formData);
  }

  renderItems(rowData) {
		return (
      <View style={{flexDirection: 'row', paddingHorizontal: 25,
        justifyContent: 'center', borderRightWidth: 1, marginTop: 15, borderRightColor: 'lightgrey'}}>
				<TouchableOpacity 
        onPress={()=>this.props.screenProps.parentNavigation.navigate('BillProcessScreen', {billId : rowData.item.id, billName : rowData.item.name})}
        >
          <Image source={{uri : rowData.item.imageUrl}} style={{height: 60, width: 60, resizeMode: 'contain'}}/>
        </TouchableOpacity>
      </View>
		)
  }

  renderairItems(rowData) {
		return (
      <View style={{flexDirection: 'row',borderRightWidth: 1, marginTop: 15, 
      borderRightColor: 'lightgrey', paddingHorizontal: 25}}>
				<TouchableOpacity 
        onPress={()=>this.props.screenProps.parentNavigation.navigate('UserTopupScreen', {topupId : rowData.item.id, topupName : rowData.item.name})}
        >
        <Image source={{uri : rowData.item.imageUrl}} style={{height: 60, width: 60, resizeMode: 'contain'}}/> 
        </TouchableOpacity>
      </View>
		)
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

          <LinearGradient colors={['#7A00D2', '#5217ee']} style={{paddingVertical: 15,}}>

            <View style={{flexDirection: 'row', paddingHorizontal: 12, justifyContent: 'space-between'}}>
             
              <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('UserPayScreen')}
                style={{backgroundColor: 'white', paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, paddingTop: 5}}>
                <Image source={require('../../../../src/qr-code.png')} style={{height: 50, width: 50,}}/>
                <Text style={{fontSize: 14, color: 'black', paddingTop: 10, fontFamily: ThemeStyle.PoppinsMedium}}>Scan to Pay</Text>
              </TouchableOpacity>

              <View style={{alignItems: 'flex-end'}}>
                <Text style={{color: 'white', fontSize: 16, fontFamily: ThemeStyle.Poppins}}>My Balance</Text>
                <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold', marginRight: 5}}>CFA</Text>
                  <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', marginRight: 10}}>{this.props.ProfileState.userBalance.balance}</Text>
                  <TouchableOpacity onPress={this.refreshBalance} style={{paddingHorizontal: 5}}>
                    <Icon name='refresh' family='FontAwesome' color='white' size={15}/>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('UserAddMoneyScreen')}
                  style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'white',paddingHorizontal: 20, borderRadius: 10, marginTop: 10, paddingVertical: 5,}}>
                    <Image source={require('../../../../src/coin.png')} style={{height: 18, width: 18, alignItems: 'center', justifyContent: 'center'}}/>
                  <Text style={{fontSize: 12, color: 'black', marginLeft: 10, alignItems: 'center', justifyContent: 'center', fontFamily: ThemeStyle.PoppinsMedium}}>Add Money</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.mainTab}>

              <View style={styles.tabCircle}>
                <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('UserSendMoneyScreen')} 
                  style={styles.tabCircle0}>  
                  <View style={styles.tabCircle1}>
                    <Image source={require('../../../../src/mobPay.png')} style={{height: 25, width: 25}}/>
                  </View>
                  <Text style={styles.tabFont}>Send Money</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.tabCircle}>
               <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('RequestMoneyScreen')} 
                  style={styles.tabCircle0}>  
                  <View style={styles.tabCircle1}>
                    <Image source={require('../../../../src/give.png')} style={{height: 25, width: 25}}/> 
                  </View>
                  <Text style={styles.tabFont}>Request Money</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.tabCircle, {borderRightWidth: 0}]}>
                <TouchableOpacity onPress={()=>this.props.screenProps.parentNavigation.navigate('WithdrawMoneyScreen')}
                  style={styles.tabCircle0}>    
                  <View style={styles.tabCircle1}>
                    <Image source={require('../../../../src/dec.png')} style={{height: 25, width: 25}}/> 
                  </View>
                  <Text style={styles.tabFont}>Withdraw Money</Text>
                </TouchableOpacity>
              </View>
              
            </View>

          </LinearGradient>

          <View style={{borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, 
            marginHorizontal: 20, paddingBottom: 20, marginTop: 20,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
              <Text style={{fontSize: 16, marginTop: 15, color: 'black', fontFamily: ThemeStyle.Poppins}}>Bill Payments</Text>
              <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('ViewBillPaymentsScreen')}>
                <Text style={{fontSize: 14, marginTop: 15, color: 'black', fontFamily: ThemeStyle.Poppins, color: ThemeStyle.ThemeColor}}>View All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.props.MoneyState.billCompanyList}
              renderItem={this.renderItems.bind(this)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={{borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, 
            marginHorizontal: 20, paddingBottom: 20, marginVertical: 20,}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10}}>
              <Text style={{fontSize: 16, marginTop: 15, color: 'black', fontFamily: ThemeStyle.Poppins}}>Buy Airtime</Text>
              <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('ViewAirtimeScreen')}>
                <Text style={{fontSize: 14, marginTop: 15, color: 'black', fontFamily: ThemeStyle.Poppins, color: ThemeStyle.ThemeColor}}>View All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.props.MoneyState.buyAirtimeList}
              renderItem={this.renderairItems.bind(this)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

        </ScrollView>

      </View>
    );
  }
}

function mapStateToProps(state){
	return{
    AccountState : state.AccountState,
    ProfileState : state.ProfileState,
    MoneyState   : state.MoneyState,
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({GetUserProfile : AC_GetUserProfile,
                             GetUserBalance : AC_GetUserBalance}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  tabCircle: {
    flex: 0.5, 
    borderRightWidth: 1, 
    borderRightColor: 'lightgrey', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 5,
    marginTop: 10,
  },
  tabCircle0: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  tabCircle1: {
    height: 50, 
    width: 50, 
    backgroundColor: '#5900c9', 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginBottom: 10,
  },
  tabFont: {
    color:'white', 
    fontSize: 14, 
    fontFamily: ThemeStyle.Poppins
  },
  mainTab: {
    borderTopWidth: 1, 
    borderTopColor: 'white',
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  billBox: {
    paddingVertical: 15, 
    marginHorizontal: 15, 
    marginTop: 30,
    borderWidth: 1, 
    borderColor: 'lightgrey', 
    borderRadius: 10,
  },
  billTitle : {
    textAlign: 'center', 
    color: 'black', 
    fontSize: 18, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  mainBill : {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  billsection: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'lightgrey',
  },
  billImage : {
    height:70, 
    width: 70, 
    resizeMode: 'contain',
  },
  subHeader: {
    height: 60, 
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
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
	},
	flat2: {
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
});