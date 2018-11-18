import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import LinearGradient from 'react-native-linear-gradient';

import ThemeStyle from "../../styles/ThemeStyle";
import Icon from '../../common/icons';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'PAT YOUR BIILS WITH EASE',
    image : require('../../src/1.png'),
  },
  {
    key: 'somethun1',
    title: 'SENDING MONEY WAS NOT THAT EASY',
    image : require('../../src/2.png'),
  },
  {
    key: 'somethun2',
    title: 'REQUEST MONEY FROM YOUR CONTACTS',
    image : require('../../src/3.png'),
  },
  {
    key: 'somethun3',
    title: 'NO NEED TO KEEP CASH JUST SCAN',
    image : require('../../src/4.png'),
  },
];

export default class App extends React.Component {
  _renderItem = props => (
    <View
      style={[styles.mainContent, {
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
    >
      <Image source={props.image} style={{height: 200, width: 200,}}/>
      <View style={{marginHorizontal: 25}}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );

  _renderNextButton = () => {
    return (
      <View style={{backgroundColor: ThemeStyle.ThemeColor, marginHorizontal: 20, paddingVertical: 10, borderRadius: 50}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Next</Text>
      </View>
    );
  }

  _renderDoneButton = () => {
    return (
      <TouchableOpacity style={{backgroundColor: ThemeStyle.ThemeColor, marginHorizontal: 20, paddingVertical: 10, borderRadius: 50}}
      onPress={() => this.props.navigation.navigate('UserInitialScreen')}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 16}}>Done</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
        showSkipButton
        onSkip={() => this.props.navigation.navigate('UserInitialScreen')}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
      />
    );
  }
}