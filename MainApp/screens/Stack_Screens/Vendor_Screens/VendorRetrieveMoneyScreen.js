import React, { Component } from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput, KeyboardAvoidingView,PanResponder, Alert } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserRetrieveMoneyScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { ballTop: 120};
    this._panResponder = PanResponder.create({
      // Ask to be the responder:      
      onStartShouldSetPanResponder: (evt, gestureState) => false,
 
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
 
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
 
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        // console.log('gesture',gestureState)        
        // The most recent move distance is gestureState.move{X,Y}
        if( gestureState.dy > 0 ) {
          if(this.state.ballTop < 220 && gestureState.dy < 220){           
            this.setState({ 
              ballTop: this.state.ballTop + Math.abs(gestureState.dy)
            });
          } else {
            this.setState({ 
              ballTop: 230
            });
          }
        }
        else if( gestureState.dy < 0 ) {
          if(this.state.ballTop > 20 && gestureState.dy > -220 ){           
            this.setState({ 
              ballTop: this.state.ballTop - Math.abs(gestureState.dy)            
            }); 
          } else {
            this.setState({ 
              ballTop: 10
            });
          }
        }   
        
        //this.setState({ballTop: this.state.ballTop + gestureState.dy});
        
      },      
      onPanResponderRelease: (evt, gestureState) => {    
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        if(this.state.ballTop < 30) {
          this.props.navigation.navigate('VendorRetrieveQrScreen');
          this.setState({ballTop: 120});
        } else if(this.state.ballTop > 210) {
          this.props.navigation.navigate('VendorRouterNumberScreen');
          this.setState({ballTop: 120});
        }
        
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    console.log('blgestureState', this.state.ballTop);        

    return (
      <View style={styles.container}>

        <LinearGradient colors={['#7A00D2', '#5217ee']} style={{flex: 1}}>
          
          <View style={styles.section11}>
            <TouchableOpacity  onPress={()=>this.props.navigation.goBack()} 
              style={styles.touch11}>
              <Icon name='md-arrow-round-back' color='white' size={25}/>
            </TouchableOpacity>
          </View>

          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{height: 300, width: 100, backgroundColor: '#4815d6', borderRadius: 100, overflow:'hidden'}}>
              <TouchableOpacity
                style={{flex: 0.5, alignItems: 'center', marginTop: 20, justifyContent: 'flex-start'}}>
                <Text style={{color: 'white'}}>RETRIEVE</Text>
                <Text style={{color: 'white'}}>CASH</Text>
              </TouchableOpacity>              
              <TouchableOpacity
                style={{flex: 0.5, alignItems: 'center', justifyContent: 'flex-end',marginBottom: 20}}>
                <Text style={{color: 'white'}}>TRANSFER</Text>
                <Text style={{color: 'white'}}>TO BANK</Text>
              </TouchableOpacity>
              <View style={{position:'absolute', bottom:0, top:0, left:0, right:0, backgroundColor:'transparent'}}>
                <View {...this._panResponder.panHandlers} style={{position:'absolute', bottom:0, top:this.state.ballTop,left:25, right:25,height: 50,width: 50,borderRadius: 50, backgroundColor: 'white'}}>

                </View>
              </View>
            </View>
          </View>

        </LinearGradient>
        
      </View>
    );
  }
}
export default UserRetrieveMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section11: {
    flex: 0.2, 
    justifyContent: 'center',
    marginHorizontal: 10, 
    alignItems: 'flex-start',
  },
  touch11: {
    paddingHorizontal: 10,
  },
});