import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image , TextInput} from "react-native";

import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

class VendorSendMoneyScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      phoneNumber        : true,
      uniqueScreen       : false,
      AmountScreen       : false,
      number             : '',
    }
  }

  showUniqueScreen = () => {
    this.setState({
      phoneNumber        : false,
      uniqueScreen       : true,
      AmountScreen       : false,
    })
  }

  showAmountScreen = () => {
    this.setState({
      phoneNumber        : false,
      uniqueScreen       : false,
      AmountScreen       : true,
    })
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
      this.props.screenProps.parentNavigation.navigate('VendorRetrieveStartScreen')
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

        {this.state.phoneNumber == true ?

          <View style={{marginHorizontal: 20, marginTop:30, }}>

            <TextInput 
              placeholder='Enter Phone Number'
              style={{paddingVertical: 8, 
                borderWidth: 1, borderColor: 'lightgrey', paddingHorizontal: 10, borderRadius: 5,}}
            />

            <View style={{alignItems: 'flex-end', marginTop: 15,}}>
              <TouchableOpacity onPress={()=>this.showUniqueScreen()}
                style={{height: 50, width: 50, borderRadius: 25, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
                <Icon name='md-arrow-round-forward' color='white' size={25}/>
              </TouchableOpacity>
            </View>

          </View> : null 
          
        }

        {this.state.uniqueScreen == true ?

          <View style={styles.section12}>
            
              <Text style={styles.phoneText}>Enter  Unique Code</Text>
              
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

          </View> : null }

        </ScrollView>

      </View>
    );
  }
}
export default VendorSendMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linearGradient: {
    flex: 1,
 },
 imgStyle: {
  height: 60, 
  width: 60, 
  marginBottom: 25,
  },
  section11: {
    flex: 0.1, 
    justifyContent: 'center',
    marginHorizontal: 10, 
    alignItems: 'flex-start',
  },
  touch11: {
    paddingHorizontal: 20,
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
    marginTop: 18,
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
  forgotStyle: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  forgotText: {
    textAlign: 'center', 
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins
  }
});