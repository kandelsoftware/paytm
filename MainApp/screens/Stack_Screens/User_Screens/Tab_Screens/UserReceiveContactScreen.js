import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from "react-native";

import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

class UserReceiveContactScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberList   : true,
      moneyRequest : false,
      number       : '',
      followList: [
				{
					name: '1234567890',
          icon: 'arrow-up-right'
				},
				{
          name: '1234567890',
          icon: 'arrow-down-left'
				},
      ],
      contactList: [
				{
					name: 'Albert',
          image: require('../../../../src/man1.jpg')
				},
				{
          name: 'Beckam',
          image: require('../../../../src/man.jpg')
        },
        {
          name: 'Catlin',
          image: require('../../../../src/women.jpg')
				},
      ],
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
      this.props.screenProps.parentNavigation.navigate('UserAmountReceivedScreen')
    }
  }

  showMoneyRequest = () => {
    this.setState({
      numberList   : false,
      moneyRequest : true,
    })
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

  renderContacts(rowData) {
		return (
      <View style={styles.flat1}>
				<TouchableOpacity onPress={()=>this.showMoneyRequest()}
          style={styles.flat2}>
					<View style={{ flexDirection: 'row', }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={rowData.item.image} style={{height: 50, width:50, borderRadius: 25,}}/>
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

          {this.state.numberList ==true ? 

          <View>

            <View style={{marginHorizontal: 20, marginTop:20, flexDirection: 'row', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5,}}>
              <TextInput 
                placeholder='Enter Phone Number'
                style={{paddingVertical: 8, 
                  paddingHorizontal: 10, borderRadius: 5, flex: 0.9}}
              />
              <TouchableOpacity style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
                <Icon 
                  name='md-search'
                  size={25}
                  color='lightgrey'
                />
              </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 20, marginTop: 20,}}>
              <Text style={{fontFamily:ThemeStyle.Poppins, color:'black', fontSize: 16,}}>Recent</Text>
              <FlatList
                data={this.state.followList}
                renderItem={this.renderItems.bind(this)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>

            <View style={{marginHorizontal: 20, marginTop: 20,}}>
              <Text style={{fontFamily:ThemeStyle.Poppins, color:'black', fontSize: 16,}}>Contacts</Text>
              <FlatList
                data={this.state.contactList}
                renderItem={this.renderContacts.bind(this)}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>

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
      </View>
    );
  }
}
export default UserReceiveContactScreen;

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
});