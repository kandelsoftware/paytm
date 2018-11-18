import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class VendorPaymentsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>VendorPaymentsScreen</Text>
      </View>
    );
  }
}
export default VendorPaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});