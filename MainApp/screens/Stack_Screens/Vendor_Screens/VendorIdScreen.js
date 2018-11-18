import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../../styles/ThemeStyle";
import Icon from '../../../common/icons';

class VendorIdScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={{flex: 0.8, marginHorizontal: 25, marginTop: 40,}}>
          <Text style={{fontSize: 16, color: 'black', fontFamily: ThemeStyle.Poppins}}>Enter ID Number</Text>
          <TextInput 
            placeholder='Eg: xxxxxxxxxxx'
            style={{borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingBottom: Platform.OS === 'ios' ? 5 : null, marginTop: Platform.OS === 'ios' ? 15 : null,}}
          />
          <View style={{marginTop: 40,}}>
            <Text style={{fontSize: 16, color: 'black', fontFamily: ThemeStyle.Poppins}}> Take a picture of ID</Text>
            <TouchableOpacity style={{height: 50, width: 50, borderRadius: 25, marginTop: 20}}>
            <LinearGradient colors={['#7A00D2', '#5217ee']} style={{height: 50, width: 50,alignItems: 'center', justifyContent: 'center', borderRadius: 25}}>
              <Icon name='md-camera' color='white' size={25}/>
            </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 0.2}}>
          <View style={{alignItems: 'flex-end', marginHorizontal: 20,}}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('VendorMainScreen')}
            style={{height: 50, width: 50, backgroundColor: ThemeStyle.ThemeColor, borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name='md-arrow-round-forward' color='white' size={25}/>
          </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}
export default VendorIdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});