import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity, Platform, Image } from "react-native";
import { NavigationActions,StackActions} from 'react-navigation';
import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class UserInitialScreen extends Component {

  phoneLogin = () => {
    // const resetAction = StackActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: 'UserPhoneLogin' })],
    // });
    // this.props.navigation.dispatch(resetAction);
    this.props.navigation.navigate('UserPhoneLogin');
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.subContainer}>

          <View style={{alignItems: 'center'}}>
            <Text style={styles.fontStyle}>KalPay</Text>
          </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UserRegisterScreen')}
            style={styles.box1}>
            <Text style={styles.box1Font}>New User</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.phoneLogin}
            style={styles.box2}>
            <Text style={styles.box2Font}>Returning User</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}
export default UserInitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  fontStyle:{
    color: ThemeStyle.ThemeColor, 
    letterSpacing:0.5,
    fontSize: 40, 
    fontFamily: ThemeStyle.PoppinsMedium,
    marginBottom: 30,
  },
  comStyle:{
    color: 'black', 
    fontSize: 25, 
    fontFamily: ThemeStyle.PoppinsMedium
  },
  box1: {
    backgroundColor: ThemeStyle.ThemeColor, 
    marginHorizontal:60, 
    paddingVertical: 12, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginBottom: 30,
  },
  box1Font:{
    color: 'white', 
    fontSize: 16, 
    fontFamily: ThemeStyle.PoppinsMedium,
  },
  box2: {
    marginHorizontal:60, 
    paddingVertical: 12, 
    alignItems: 'center', 
    borderRadius: 50, 
    marginBottom: 25,
    borderWidth: 1,
    borderColor: ThemeStyle.ThemeColor,
  },
  box2Font:{
    color: 'black', 
    fontSize: 16, 
    fontFamily: ThemeStyle.Poppins
  },
  arrowStyle: {
    height: Platform.OS == 'ios' ? 90 : 60, 
    alignItems: 'flex-start', 
    justifyContent: 'center', 
    marginHorizontal: 10, 
  }
});