import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

class MobileMoneyScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

         <View style={styles.billBox}>

            <Text style={styles.billTitle}>Select Operator</Text>
            
            <View style={styles.mainBill}>

              <View style={styles.billsection}>
                <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('VendorMoneyAddScreen')}>
                  <Image source={require('../../../../src/orange.png')} style={styles.billImage}/>
                </TouchableOpacity>
              </View>

              <View style={styles.billsection}>
                <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('VendorMoneyAddScreen')}>
                  <Image source={require('../../../../src/tigocash.jpg')} style={styles.billImage}/>
                </TouchableOpacity>
              </View>

              <View style={[styles.billsection, {borderRightWidth: 0}]}>
                <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('VendorMoneyAddScreen')}>
                    <Image source={require('../../../../src/wt.jpg')} style={styles.billImage}/>
                </TouchableOpacity>
              </View>

            </View>

          </View>

      </View>
    );
  }
}
export default MobileMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  billBox: {
    paddingVertical: 15, 
    marginHorizontal: 15, 
    marginTop: 15,
  },
  billTitle : {
    textAlign: 'center', 
    color: 'black', 
    fontSize: 18, 
    fontFamily: ThemeStyle.PoppinsMedium,
    marginBottom: 15,
  },
  mainBill : {
    flexDirection: 'row',
  },
  billsection: {
    flex: 0.5, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: 'lightgrey',
  },
  billImage : {
    height:70, 
    width: 70, 
    resizeMode: 'contain',
  },
});