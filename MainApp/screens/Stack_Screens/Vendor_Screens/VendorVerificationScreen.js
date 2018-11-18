import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Platform } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorVerificationScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      number1 : '',
      number2 : '',
      number3 : '',
      number4 : '',
    }
  }

  getNumber = (num) => {
   if(this.state.number1 == ''){
      this.setState({
        number1: num,
      })
    }
   if(this.state.number1 != '' && this.state.number2 == ''){
      this.setState({
        number2: num,
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 == ''){
      this.setState({
        number3: num,
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 != '' && this.state.number4 == ''){
      this.setState({
        number4: num,
      })
    }
  }

  clearNumber = () => {
    if(this.state.number1 != '' && this.state.number2 == ''){
      this.setState({
        number1: '',
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 == ''){
      this.setState({
        number2: ''
      })
    } 
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 != '' && this.state.number4 == ''){
      this.setState({
        number3: ''
      })
    }
    if(this.state.number1 != '' && this.state.number2 != '' && this.state.number3 != '' && this.state.number4 != ''){
      this.setState({
        number4: ''
      })
    }
  }

  nextScreen = () => {
    const {number1 , number2, number3, number4 } = this.state;
    if((number1 && number2 && number3 && number4) != ''){
      this.props.navigation.navigate('VendorSignupScreen');
    } else {
      alert('Enter verification code');
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <LinearGradient colors={['#7A00D2', '#5217ee']} style={styles.linearGradient}>

        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{marginTop: 40,}}>
            <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
              style={styles.touch11}>
              <Icon name='md-arrow-round-back' color='white' size={25}/>
            </TouchableOpacity>
          </View>

          <View style={styles.section12}>
            

              <View style={{alignItems: 'center'}}>
                <Image source={require('../../../src/smartphone.png')} 
                  style={styles.imgStyle}/>
              </View>

              <Text style={styles.phoneText}>Verification Code</Text>
              <Text style={styles.confirmText}>Please enter the verification code sent to  +1 000 0000 000</Text>

              <View>

                <View style={styles.box}>

                  <View style={styles.boxStyle}>
                    <Text style={styles.numberFont}>{this.state.number1}</Text>
                  </View>
                  <View style={styles.boxStyle}>
                    <Text style={styles.numberFont}>{this.state.number2}</Text> 
                  </View>
                  <View style={styles.boxStyle}>
                    <Text style={styles.numberFont}>{this.state.number3}</Text>
                  </View>
                  <View style={styles.boxStyle}>
                    <Text style={styles.numberFont}>{this.state.number4}</Text>
                  </View>
                  
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
                    <Text style={styles.numText}> 0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.clearNumber()} style={{alignItems: 'center', justifyContent: 'center'}} style={{padding: 8,}}>
                    <Icon name='md-arrow-round-back' color='white' size={22}/>
                  </TouchableOpacity>
                </View>

                <View style={styles.section22}>
                  <TouchableOpacity onPress={()=>this.nextScreen()}
                    style={styles.circle1}>
                    <Icon name='md-arrow-round-forward' color={ThemeStyle.ThemeColor} size={25}/>
                  </TouchableOpacity>
                </View>

              </View>
            
            </View>

          </ScrollView>

        </LinearGradient>

      </View>
    );
  }
}
export default VendorVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 15,
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 20, 
    textAlign: 'center',
    fontFamily: ThemeStyle.PoppinsMedium, 
    color: 'white', 
    marginBottom:8,
  },
  confirmText: {
    fontSize: 14, 
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'white'
  },
  main1: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginHorizontal: 60, 
    marginTop: 10,
  },
  numText: {
    fontSize: 22,
    padding: 5, 
    color: 'white',
    fontWeight: 'bold'
  },
  boxStyle:{
    backgroundColor: 'white', 
    height: 35, 
    width: 35, 
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    flexDirection: 'row', 
    marginHorizontal: 60, 
    justifyContent: 'space-around', 
    marginTop: 25,
    marginBottom: 5,
  },
  section22: {
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    marginTop: 15, 
    alignItems: 'center'
  },
  circle1: {
    height: 40, 
    width: 40, 
    borderRadius: 40/2, 
    backgroundColor: 'white', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  numberFont: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
});