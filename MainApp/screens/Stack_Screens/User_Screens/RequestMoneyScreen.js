import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, FlatList, Alert } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { NavigationActions,StackActions} from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_ReceiveRequest, AC_AcceptRequests, AC_RejectRequests} from '../../../reducers/Money_Reducer/actions';

class RequestMoneyScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.Page = 1;
    formData.PageSize = 10;
    this.props.ReceiveRequest(formData);
  }

  confirmRequest = (id, amount, sender, image) => {
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.requestId   = id;
    // this.props.AcceptRequests(formData);
    // const resetAction = StackActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: 'RequestPayNameScreen' , id: id, amount: amount, sender : sender})],
    // });
    // this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate('RequestPayNameScreen', {id : id, amount: amount, sender : sender, image : image})
  }

  cancelRequest = (id) =>{
    Alert.alert(
      'Alert',
      'Are you sure to cancel?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.confirmCancel(id)},
      ],
      { cancelable: false }
    )
    
  }

  confirmCancel = (id) => {
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.requestId   = id;
    this.props.navigation.navigate('RequestCancelScreen', {id: id});
    // this.props.RejectRequests(formData);
    // setTimeout(()=>{
    //   let formData = {};
    //   formData.AccessToken = this.props.AccountState.token;
    //   formData.Page = 1;
    //   formData.PageSize = 10;
    //   this.props.ReceiveRequest(formData);
    // }, 1);
  }

  renderItems(rowData) {
    console.log('---------rowData---------', rowData);
    let date = moment(rowData.item.createdDate).calendar();
		return (
			<View style={styles.flat1}>
				<View style={styles.flat2}>
					<View style={{ flexDirection: 'row', }}>
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name='arrow-down-left' family='Feather' color='white' size={25}/>
            </View>
						<View style={styles.flat3}>
							<Text style={styles.flatName}>Request received from</Text>
							<Text style={styles.flatName2}>{rowData.item.sender}</Text>
						</View>
            
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, }}>$ {rowData.item.amount}</Text>
					</View>
				</View>
        <View style={{flexDirection: 'row', paddingHorizontal: 15, marginTop: 10}}>
          <View style={{flex: 0.7}}>
            <Text>{date}</Text>
          </View>
          <View style={{flex: 0.3, justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity onPress={()=>this.cancelRequest(rowData.item.id)}>
              <Text style={{fontSize: 13, color: ThemeStyle.ThemeColor}}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              // onPress={()=>this.props.navigation.navigate('RequestPayNameScreen')}
              onPress={()=>this.confirmRequest(rowData.item.id, rowData.item.amount, rowData.item.sender, rowData.item.image)}
            >
              <Text style={{fontSize: 13, color: ThemeStyle.ThemeColor}}>PAY</Text>
            </TouchableOpacity>
          </View>
        </View>
			</View>
		)
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
          <View 
            style={styles.touch12}>
            <Text style={{fontSize: 20, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>Request Money</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
        {(this.props.MoneyState.requestList.length > 0) ? 
          <FlatList
            data={this.props.MoneyState.requestList}
            renderItem={this.renderItems.bind(this)}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          /> : 
          <View style={{marginTop: 25, height: 150, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white'}}>
           <Text>No results found</Text> 
          </View>
          
        }
          <View style={{position: 'absolute', bottom: 20, right: 20}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('RequestContactScreen')}>
            <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.circle1}>
              <Icon name='md-add' color='white' size={25}/>
            </LinearGradient>
          </TouchableOpacity>
          </View>
          
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
    ReceiveRequest : AC_ReceiveRequest,
    AcceptRequests : AC_AcceptRequests,
    RejectRequests : AC_RejectRequests
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestMoneyScreen);

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
    borderWidth: 1,
    borderColor: 'lightgrey',
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
    fontSize: 14,
    color: 'black',
	},
	flat3: {
		paddingHorizontal: 15,
	},
	flatName2: {
		fontSize: 16,
		color: 'black',
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
  circle1: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});