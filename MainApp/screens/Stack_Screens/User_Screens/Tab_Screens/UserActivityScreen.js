import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import ThemeStyle from '../../../../styles/ThemeStyle';
import Icon from '../../../../common/icons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AC_UserActivities } from '../../../../reducers/Money_Reducer/actions';

class UserActivityScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      size : 10,
      followList: [
				{
					name: 'Jim Harry',
          date: 'Today',
          cost: 100,
          icon: 'arrow-up-right'
				},
				{
					name: 'Riyan Harris',
          date: 'Today',
          cost: 95,
          icon: 'arrow-down-left'
				},
				{
					name: 'Varun Chris',
          date: 'Today',
          cost: 125,
          icon: 'arrow-up-right'
				},
      ],
    }
  }

  componentDidMount(){
    let formData = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.Page        = 1;
    formData.PageSize    = this.state.size;
    formData.OrderBy     = true;
    this.props.UserActivities(formData);
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
    this.props.UserActivities(formData);
  }

  renderItems(rowData) {
		return (
			<View style={styles.flat1}>
				<View style={styles.flat2}>
					<View style={{ flexDirection: 'row', flex: 1}}>
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
              {(rowData.item.isReceived == false && rowData.item.loadType == 3) ?
                <Image source={require('../../../../src/mobPay.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.isReceived == true && rowData.item.loadType == 3) ?
                <Image source={require('../../../../src/give.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.isReceived == false && rowData.item.loadType == 4) ?
                <Image source={require('../../../../src/give.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.isReceived == true && rowData.item.loadType == 4) ?
                <Image source={require('../../../../src/give.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.loadType == 9) ?
              <Image source={require('../../../../src/dec.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.loadType == 7 && rowData.item.isReceived == true) ?
                <Image source={require('../../../../src/crd.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.loadType == 0) ?
                <Image source={require('../../../../src/crd.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.loadType == 6) ?
                <Image source={require('../../../../src/bil.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.loadType == 10) ?
                <Image source={require('../../../../src/bil.png')} style={{height: 25, width: 25}}/>
              : null }
              {(rowData.item.loadType == 8) ?
                <Image source={require('../../../../src/give.png')} style={{height: 25, width: 25}}/>
              : null }
            </View>
						<View style={styles.flat3}>
              {(rowData.item.isReceived == false && rowData.item.loadType == 3) ?
							<Text style={styles.flatName}>You have succesfully sent money to {rowData.item.receiver.fullName}</Text>
              : null }
              {(rowData.item.isReceived == true && rowData.item.loadType == 3) ?
							<Text style={styles.flatName}>Received the payment from {rowData.item.sender.fullName}</Text>
              : null }
              {(rowData.item.isReceived == false && rowData.item.loadType == 4) ?
							<Text style={styles.flatName}>You accepted the request from {rowData.item.receiver.fullName}</Text>
              : null }
              {(rowData.item.isReceived == true && rowData.item.loadType == 4) ?
							<Text style={styles.flatName}>Your request has been approved by {rowData.item.sender.fullName}</Text>
              : null }
              {(rowData.item.loadType == 9) ?
							<Text style={styles.flatName}>Your have requested to withdraw from kalPay</Text>
              : null }
              {(rowData.item.loadType == 10) ?
							<Text style={styles.flatName}>Your topup is success from kalPay</Text>
              : null }
              {(rowData.item.loadType == 7 && rowData.item.isReceived == true) ?
							<Text style={styles.flatName}>Your have added money from your debit/credit card</Text>
              : null }
              {(rowData.item.loadType == 0) ?
							<Text style={styles.flatName}>Your have sucessfully received from prepaid card</Text>
              : null }
              {(rowData.item.loadType == 6) ?
							<Text style={styles.flatName}>Your bill payment is success</Text>
              : null }
              {(rowData.item.loadType == 8) ?
							<Text style={styles.flatName}>your referral code is success</Text>
              : null }
						</View>
					</View>
					<View style={{ justifyContent: 'center', flex: 0.4}}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, }}>CFA {rowData.item.amount}</Text>
					</View>
				</View>
			</View>
		)
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 1}}>
          {this.props.MoneyState.activitiesList.length > 0 ?
            <FlatList
              data={this.props.MoneyState.activitiesList}
              renderItem={this.renderItems.bind(this)}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />  
          :
            <View style={{marginTop: 25, height: 150, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white'}}>
            <Text>No results found</Text> 
            </View> 
          }

          {this.props.MoneyState.activitiesList.length > 0 ?
          <View style={{position: 'absolute', bottom: 20, right: 20}}>
          <TouchableOpacity onPress={this.loadMore}>
            <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.circle1}>
              <Icon name='refresh' family='FontAwesome' color='white' size={17}/>
            </LinearGradient>
          </TouchableOpacity>
          </View>
          : null}
        </View>

      </View>
    );
  }
}

function mapStateToProps(state){
	return{
    AccountState : state.AccountState,
    ProfileState : state.ProfileState,
    MoneyState   : state.MoneyState
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({UserActivities : AC_UserActivities,}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserActivityScreen);

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
    fontSize: 16,
    color: 'black',
	},
	flat3: {
    paddingHorizontal: 5,
    flex: 1,
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
  circle1: {
    height: 50, 
    width: 50, 
    borderRadius: 25, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});