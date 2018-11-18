import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';
import { NavigationActions,StackActions} from 'react-navigation';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_RequestAmount} from '../../../reducers/Money_Reducer/actions';

class RequestSuccess1Screen extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSuccess: true,
      showStatus : false,
    }
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({showSuccess: false, showStatus: true})}, 2000);
  }

  mainScreen = () => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'UserMainScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>

        {this.state.showStatus == true ?
        <View style={{flex: 1}}>
        <View style={{flex: 0.8, marginHorizontal: 30, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../src/cash.png')} style={{height: 100, width: 100, marginVertical: 30,}}/>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: 'black'}}>CFA {this.props.MoneyState.requestedAmount}</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin, marginTop: 20, }}>You Requested CFA {this.props.MoneyState.requestedAmount} to</Text>
          <Text style={{fontSize: 18, color: 'grey', textAlign: 'center', fontFamily: ThemeStyle.Poppin}}>{this.props.MoneyState.requestingSender}</Text>
        </View>

        <View style={{flex: 0.2, alignItems: 'center'}}>
          <TouchableOpacity onPress={this.mainScreen}
            style={{height: 60, width: 60, borderRadius: 30, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-home' color='white' size={30}/>
          </TouchableOpacity>
        </View>
        </View> : 
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('../../../src/checked.png')} style={{height: 80, width: 80}}/>
          <Text style={{fontSize: 25, color: 'black', marginTop: 20}}>CFA {this.props.MoneyState.requestedAmount}</Text>
        </View> }

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
    RequestAmount : AC_RequestAmount
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestSuccess1Screen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});