import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

const buttons = ['Cancel', 'Choose From Gallery', 'Capture'];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 0;

class CameraScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.onImagePressed     = this.onImagePressed.bind(this);
    this.onSheetPressed     = this.onSheetPressed.bind(this);	
  }

  onSheetPressed(index) {
    //choose from gallery1
    if(index == 1) {
      ImagePicker.openPicker({
        width: 400,
        height: 400,
        cropping: true,
        includeBase64:true,
    compressImageQuality: 0.5,
        mediaType:'photo'
      }).then(image => {
          var formdata         = {};
          formdata.image = image.data;
          console.log('---------upload----------', formdata);
      })
      .catch((err)=>{
        alert('You have cancelled it');
      })
    }
    //capture 2
    if(index == 2) {
      ImagePicker.openCamera({
          width: 400,
          height: 400,
          cropping: true,
          includeBase64:true,
      compressImageQuality: 0.5,
        }).then(image => {
        var formdata         = {};
        formdata.image = image.data;
        console.log('---------upload----------', formdata);
        })
        .catch((err)=>{
          alert('You have cancelled it');
        })
    }
  }

  onImagePressed()
  {
    this.ActionSheet.show();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onImagePressed.bind(this)}>
          <Text>Camera</Text>
        </TouchableOpacity>
        <ActionSheet
					ref={(o) => this.ActionSheet = o}
					title="Choose Your Profile Picture"
					options={buttons}
					cancelButtonIndex={CANCEL_INDEX}
					destructiveButtonIndex={DESTRUCTIVE_INDEX}
					onPress={this.onSheetPressed.bind(this)}
			 />
      </View>
    );
  }
}
export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});