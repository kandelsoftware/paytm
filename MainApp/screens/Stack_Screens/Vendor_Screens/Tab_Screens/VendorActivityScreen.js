import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";

import ThemeStyle from '../../../../styles/ThemeStyle';
import Icon from '../../../../common/icons';

class UserActivityScreen extends Component {
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
      ],
    }
  }

  renderItems(rowData) {
		return (
			<View style={styles.flat1}>
				<View style={styles.flat2}>
					<View style={{ flexDirection: 'row', }}>
            <View style={{height: 40, width: 40, borderRadius: 20, 
              backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
              <Icon name={rowData.item.icon} family='Feather' color='white' size={25}/>
            </View>
						<View style={styles.flat3}>
							<Text style={styles.flatName}>Paid to {rowData.item.name}</Text>
							<Text style={styles.flatName2}>{rowData.item.date}</Text>
						</View>
					</View>
					<View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, }}>$ {rowData.item.cost}</Text>
					</View>
				</View>
			</View>
		)
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 1}}>
          <FlatList
            data={this.state.followList}
            renderItem={this.renderItems.bind(this)}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    );
  }
}
export default UserActivityScreen;

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