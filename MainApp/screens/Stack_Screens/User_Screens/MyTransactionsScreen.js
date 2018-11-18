import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_SenderRequests} from '../../../reducers/Money_Reducer/actions';

class MyTransactionsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    let formData         = {};
    formData.AccessToken = this.props.AccountState.token;
    formData.Page        = 1;
    formData.PageSize    = 10;
    this.props.SenderRequests(formData);
  }

  renderItems(rowData) {
    let date = moment(rowData.item.createdDate).calendar();
		return (
			<View style={styles.flat1}>
				<View style={styles.flat2}>
					<View style={{ flexDirection: 'row', flex: 1}}>
            {rowData.item.status == 0 ?
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center'}}>
              <Icon name='arrow-up-right' family='Feather' color='white' size={25}/>
            </View> : null
            }
            {rowData.item.status == 1 ?
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: 'forestgreen', alignItems: 'center', justifyContent: 'center'}}>
              <Icon name='arrow-up-right' family='Feather' color='white' size={25}/>
            </View> : null
            }
            {rowData.item.status == 2 ?
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
              <Icon name='arrow-up-right' family='Feather' color='white' size={25}/>
            </View> : null
            }
						<View style={{paddingHorizontal: 5, flex: 1}}>
							<Text style={styles.flatName}>Requested to {rowData.item.receiver}</Text>
							<Text style={styles.flatName2}>{date}</Text>
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
        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flexDirection: 'row', height: 80, alignItems: 'flex-end', paddingBottom: 10}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='white' size={23}/>
          </TouchableOpacity>
          <View 
            style={styles.touch12}>
            <Text style={{fontSize: 18, fontFamily: ThemeStyle.PoppinsMedium, color: 'white'}}>My payment request</Text>
          </View>
        </LinearGradient>
        <View style={{flex: 1}}>
          {this.props.MoneyState.senderList.length > 0 ?
            <FlatList
              data={this.props.MoneyState.senderList}
              renderItem={this.renderItems.bind(this)}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
            :
            <View style={{marginTop: 25, height: 150, alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, borderRadius: 15, backgroundColor: 'white'}}>
              <Text>No results found</Text> 
            </View> 
          }
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
    SenderRequests : AC_SenderRequests
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTransactionsScreen);

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
    flex: 1,
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
  touch11: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
  },
  touch12: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});