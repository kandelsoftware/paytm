import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput} from "react-native";

import { Dropdown } from 'react-native-material-dropdown';

import ThemeStyle from '../../../../styles/ThemeStyle';
import Icon from '../../../../common/icons';

class UserCardScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      addScreen  : true,
      cardScreen : false,
      cardNumber : '',
      cvv        : '',
      name       : '',
      number     : '',
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
   if(this.state.number.length < 1){
     alert('Add Number');
   }else {
     this.setState({
       addScreen : false,
      cardScreen : true,
     })
   }
  }

  showCardScreen = () => {
    this.setState({
      addScreen  : !this.state.addScreen,
      cardScreen : !this.state.cardNumber
    })
  }

  render() {
    let data = [];

        var numberArray = [];

        for(var i = 1; i <= 31; i++){
            numberArray.push(i);
        }
        numberArray.map((numberArray, index) => {
            var arrayObj   = {};
            arrayObj.id    = numberArray;
            arrayObj.value = numberArray;
            data.push(arrayObj);
        })

        let yearData = [];

        var yearArray = [];

        for(var i = 2018; i <= 2050; i++){
            yearArray.push(i);
        }
        yearArray.map((yearArray, index) => {
            var arrayObj   = {};
            arrayObj.id    = yearArray;
            arrayObj.value = yearArray;
            yearData.push(arrayObj);
        })
    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

        {this.state.addScreen == true ?
        <View style={styles.section12}>
          

            <Text style={styles.phoneText}>ENTER AMOUNT TO ADD</Text>
  
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

            <View style={{paddingBottom: 15, marginHorizontal: 50, paddingTop: 15,}}>

              <View>

              <TouchableOpacity onPress={()=>this.nextScreen()}
                style={styles.box1}>
                <Text style={styles.box1Font}>Add</Text>
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

          </View> : null}

          {this.state.cardScreen == true ?
            <View style={{flex: 1}}>
          <View style={{flex:1,backgroundColor:'#f8f8f8'}}>
            <ScrollView>
              <View style={{alignItems: 'flex-end', marginHorizontal: 20, marginTop: -20}}>
                  <Image source={require('../../../../src/cards.png')} style={{width:120,height:120,borderRadius:10,resizeMode:'contain'}} />
              </View>
              <View style={{marginHorizontal:18,marginTop: -50,}}>
                  <View>
                      <Text style={styles.titleText}>Card Number</Text>
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',
                          borderWidth:0.5,paddingHorizontal: 5, paddingVertical: 3,borderRadius:5,marginVertical:10, backgroundColor: 'white'}}>
                          <TextInput
                              placeholder='Enter your card number'
                              placeholderTextColor='grey'
                              underlineColorAndroid='transparent'
                              style={{paddingVertical:0, flex: 1, }}
                              onChangeText={(cardNumber) => this.setState({cardNumber})}
                              value={this.state.cardNumber}
                          />
                          <Image source={require('../../../../src/visaa.png')} style={{width:40,height:40,resizeMode:'contain'}} />
                      </View>
                  </View>
                  <View style={{marginVertical:5}}>
                 
                      <Text style={styles.titleText}>Card Holder Name</Text>
                      <View style={{borderWidth:0.5,paddingHorizontal:5,borderRadius:5,marginVertical:10}}>
                          <TextInput
                              placeholder='Enter card holder name'
                              placeholderTextColor='grey'
                              underlineColorAndroid='transparent'
                              style={{backgroundColor: 'white', paddingVertical: 8}}
                              onChangeText={(name) => this.setState({name})}
                              value={this.state.name}
                          />
                      </View>
                  
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                          <Text style={styles.titleText}>Expiration Date</Text>
                          <Text style={styles.titleText}>CVV / CVC</Text>
                      </View>
                      <View style={{flexDirection:'row',paddingVertical:10}}>
                          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                              <Dropdown
                                  label='MM'
                                  data={data}
                                  dropdownOffset={{top:12, left: 0}}
                                  containerStyle={{
                                      borderWidth: 1,
                                      borderColor: 'grey',
                                      paddingLeft: 15, height: 45,borderRadius:5,width:80,
                                      backgroundColor: 'white',
                                  }}
                              />
                              <Dropdown
                                  label='YYYY'
                                  data={yearData}
                                  dropdownOffset={{top:12, left: 0}}
                                  containerStyle={{
                                      borderWidth: 1,
                                      borderColor: 'grey',
                                      marginHorizontal: 15,
                                      paddingLeft: 15, height: 45,borderRadius:5,width:80,
                                      backgroundColor: 'white',
                                  }}
                              />
                          </View>
                          <View style={{flex:0.8,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                              <TextInput
                                  placeholder='000'
                                  placeholderTextColor='grey'
                                  style={{paddingVertical:12,borderWidth: 1,
                                  borderColor: 'grey', height: 45,borderRadius:5,width:80,textAlign:'center', backgroundColor: 'white'}}
                                  onChangeText={(cvv) => this.setState({cvv})}
                                  value={this.state.cvv}
                              />
                          </View>
                      </View>
                      <View style={{marginTop:15,alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('VendorMoneyAddedScreen')}
                          style={{backgroundColor: ThemeStyle.ThemeColor, paddingHorizontal: 30, paddingVertical: 12, borderRadius: 50,}}>
                            <Text style={styles.buttonText}>Ok</Text>
                        </TouchableOpacity>
                      </View>
                  </View>
              </View>
            </ScrollView>
          </View>
        </View>

          : null}

        </ScrollView>

      </View>
    );
  }
}
export default UserCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main1: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginHorizontal: 10, 
    marginTop: 10,
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
  section12: {
    flex: 1, 
    marginTop: 15,
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 18, 
    textAlign: 'center',
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'black', 
    marginBottom:10,
  },
  confirmText: {
    fontSize: 28, 
    marginVertical: 5,
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'black',
    fontWeight: 'bold',
  },
  box1: {
    backgroundColor: ThemeStyle.ThemeColor, 
    marginHorizontal:40, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginTop: 10,
    marginBottom: 20,
    elevation: 3,
  },
  box1Font:{
    color: 'white', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
titleText: {
    fontSize:14,
    color:'grey',
    paddingVertical:8
},
addressText: {
    fontSize:14,
    color:'black',
    paddingVertical:5
},
buttonStyle: {
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor:ThemeStyle.themeColor,
    paddingVertical:15,
    borderRadius:10,
    // shadowOffset:{width:0,height:0.5},
    // shadowOpacity:0.5,
    // shadowColor:'grey',
},
buttonText: {
    fontSize:14,
    color:'white'
}
});