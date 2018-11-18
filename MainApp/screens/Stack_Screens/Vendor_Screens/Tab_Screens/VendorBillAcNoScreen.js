import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from "react-native";

import ThemeStyle from "../../../../styles/ThemeStyle";
import Icon from '../../../../common/icons';

class VendorBillAcNoScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginHorizontal: 20, marginTop:20, }}>
            <TextInput 
              placeholder='Enter Ac Number'
              style={{paddingVertical: 8, 
                borderWidth: 1, borderColor: 'lightgrey', paddingHorizontal: 10, borderRadius: 5,}}
            />
            <View style={{alignItems: 'flex-end', marginTop: 15,}}>
              <TouchableOpacity onPress={() => this.props.screenProps.parentNavigation.navigate('VendorBillAmountScreen')}
                style={{height: 50, width: 50, borderRadius: 25, backgroundColor: ThemeStyle.ThemeColor, alignItems: 'center', justifyContent: 'center'}}>
                <Icon name='md-arrow-round-forward' color='white' size={25}/>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default VendorBillAcNoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});