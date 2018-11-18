import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform } from "react-native";

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserReAcNumberScreen extends Component {
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
       this.props.navigation.navigate('UserRetrieveSuccessScreen');
     } else {
       alert('Enter your 4 digit pin');
     }
   }
 

  render() {
    return (
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{marginTop: Platform.OS === 'ios' ? 35 : 15,}}>
          <TouchableOpacity  onPress={()=>this.props.navigation.goBack()}
            style={styles.touch11}>
            <Icon name='md-arrow-round-back' color='black' size={25}/>
          </TouchableOpacity>
        </View>

        <View style={styles.section12}>
          
            <Text style={styles.confirmText}>RE-ENTER AC NUMBER</Text>

            <View style={{paddingBottom: 30, marginHorizontal: 50,}}>

              <View style={styles.box}>

                {this.state.number1 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.number1}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                    
                  </View>
                }

                {this.state.number2 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.number2}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                    
                  </View>
                }

                {this.state.number3 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.number3}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                   
                  </View>
                }

                {this.state.number4 != '' ?
                  <View style={{height: 20, width: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.boxText}>{this.state.number4}</Text>
                  </View> 
                  :  
                  <View style={styles.boxStyle}>
                    
                  </View>
                }
                
              </View>

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

          </View>

        </ScrollView>

      </View>
    );
  }
}
export default UserReAcNumberScreen;

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
  confirmText: {
    fontSize: 20, 
    fontFamily: ThemeStyle.Poppins, 
    marginHorizontal: 40, 
    textAlign: 'center', 
    color: 'black',
    marginTop: 15,
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
    marginHorizontal: 30, 
    justifyContent: 'space-around', 
    marginVertical: 40,
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
    marginHorizontal:30, 
    paddingVertical: 10, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginTop: 10,
    marginBottom: 25,
    elevation: 3,
  },
  box1Font:{
    color: 'white', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  boxStyle:{
    backgroundColor: 'lightgrey', 
    height: 20, 
    width: 20, 
    borderRadius: 20/2,
  },
boxText: {
    fontWeight: 'bold', 
    fontSize: 18,
    color: 'black'
  },
});