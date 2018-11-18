import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, LinearGradient} from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

const {width, height} = Dimensions.get('window');

class ViewBillPaymentsScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      BillList: 
      [
				{
					image: require('../../../src/se.jpg'),
        },
        {
					image: require('../../../src/sd.jpg'),
        },
        {
					image: require('../../../src/wt.jpg'),
        },
        {
					image: require('../../../src/orange.png'),
        },
        {
					image: require('../../../src/tigo.png'),
        },
        {
					image: require('../../../src/exp.png'),
				},
      ],
    }
  }

  renderItems(rowData) {
		return (
      <View style={{flexDirection: 'row', paddingHorizontal: 25, width: width/3,
        justifyContent: 'center', borderRightWidth: 1, marginTop: 25, borderRightColor: 'lightgrey'}}>
				<TouchableOpacity 
        // onPress={()=>this.props.screenProps.parentNavigation.navigate('UserBillPaymentsScreen')}
        >
          <Image source={rowData.item.image} style={{height: 60, width: 60, resizeMode: 'contain'}}/>
        </TouchableOpacity>
      </View>
		)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
         <FlatList
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          data={this.state.BillList}
          renderItem={this.renderItems.bind(this)}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </View>
    );
  }
}
export default ViewBillPaymentsScreen;

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
});