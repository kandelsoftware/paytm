import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, FlatList, Dimensions } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

const {width, height} = Dimensions.get('window');

import {connect} from 'react-redux';

class MobileMoney extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  renderItems(rowData) {
		return (
      <View style={{width: width/3-14, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'lightgrey', marginRight: 10, marginBottom: 10, paddingVertical: 15}}>
				<TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={()=>this.props.screenProps.parentNavigation.navigate('MobilePayScreen', {topupId : rowData.item.id, topupName : rowData.item.name})} 
        >
          <Image source={{uri : rowData.item.imageUrl}} style={{height: 60, width: 60, resizeMode: 'contain'}}/>
          <Text style={{textAlign: 'center', marginTop: 5}}>{rowData.item.name}</Text>
        </TouchableOpacity>
      </View>
		)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={{marginHorizontal: 20, marginTop: 15}}>
            <Text style={{color: ThemeStyle.ThemeColor, fontSize: 18}}>Topup companies</Text>
          </View>
          <View style={{marginHorizontal: 10, marginTop: 15}}>
          <FlatList
            numColumns={3}
            data={this.props.MoneyState.buyAirtimeList}
            renderItem={this.renderItems.bind(this)}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    MoneyState : state.MoneyState,
  }
}

export default connect(mapStateToProps)(MobileMoney);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  menu1: {
    flexDirection: 'row', 
    marginTop: 30, 
    paddingHorizontal: 25, 
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgrey', 
    paddingBottom: 10
  },
  menu2: {
    flex: 0.12
  },
  menu3: {
    flex: 0.88
  },
  menuColor: {
    color: 'black', 
    fontSize: 14,
  }
});