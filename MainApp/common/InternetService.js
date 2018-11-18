'use strict';
import React, {Component} from 'react';
import { NetInfo, Text, View, TouchableHighlight, Image, Dimensions, Platform, Alert, Animated,  Easing,DeviceEventEmitter, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable'

const { height, width } = Dimensions.get('window');

const transitionProps = {
  bottomContainer: ['top'],
}

class InternetService extends Component {
  constructor(props) {
    super(props)
    this.state         = { isConnected: null, };
    this.getAnimatableStyles = this.getAnimatableStyles.bind(this);
  }

  getAnimatableStyles = () => {
      const {isConnected} = this.state;

      return {
        container: {
          top: (isConnected != false) ? height+10 : height-80,
        },
      }
  }

  componentDidMount() {
    // Getting internet enabled info
    NetInfo.isConnected.addEventListener(
        'connectionChange',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().then(
        (isConnected) => {
          console.log('First, is ' + (isConnected ? 'online' : 'offline'));
          // this.props.SetInternetStatus (isConnected);
          this.setState({isConnected});
        }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
        'connectionChange',
        this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = (isConnected) => {
    //  this.props.SetInternetStatus (isConnected);
     this.setState({
       isConnected,
     });
   };

   render() {
     var windowHeight = height;
     var windowWidth  = width;
     const animatableStyles = this.getAnimatableStyles();

     return (
       <Animatable.View style={[styles.container, animatableStyles.container]}
                         transition={transitionProps.bottomContainer}>
            <Text style={{color:'#fff', textAlign:'justify', fontSize:25, fontWeight:'bold'}}>Error connecting network !!</Text>
        </Animatable.View>
    );
  }

}

export default InternetService;

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    left:0,
    right:0,
    bottom:0,
    height:60,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  }
})
