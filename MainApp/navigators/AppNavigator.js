import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { AppRegistry, View, BackHandler, StatusBar, Platform, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, createStackNavigator,createDrawerNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';
import Routes from './routes';
import PushNotificationManager from '../common/PushNotificationManager';
import InternetService from '../common/InternetService';

import ThemeStyle from '../styles/ThemeStyle';
import UserVerificationScreen from '../screens/Stack_Screens/User_Screens/UserVerificationScreen';


export const AppNavigator = createStackNavigator(Routes);

class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      if (this.props.AccountState.loginSuccess) {
        Alert.alert(
          'Information',
          'Are you sure to exit?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => this.logout()},
          ],
          { cancelable: false }
        )       
      } else {
        
        return false;
      }
    }
    dispatch({type:'Navigation/BACK'});
    return true;
  };

  logout = () => {
    BackHandler.exitApp();
  }

  hideAlert = () => {
    this.setState({ showAlert: false });
  };

  

  getBarColor = () => {
    const route = this.props.nav.routes[this.props.nav.index].routeName;
    if (['SplashScreen','UserRegisterScreen', "UserVerificationScreen", 'UserForgotPasswordScreen', 'VendorForgotPasswordScreen', 'VendorRegisterScreen', "VendorVerificationScreen", 'UserRetrieveMoneyScreen', 'UserPhoneLogin', 'TestScreen','UserProfileScreen','MyQrScreen', 'MyAddressScreen', 'MyIdScreen', 'MyTransactionsScreen', 'MyReferralScreen', 'ChangePinScreen', 'RequestMoneyScreen', 'RequestContactScreen', 'WithdrawMoneyScreen', 'UserSendMoneyScreen', 'ViewBillPaymentsScreen', 'ViewAirtimeScreen', 'UserBillScreen', 'UserTopupScreen', 'BillProcessScreen', 'MobilePayScreen', 'StartScreen'].indexOf(route) >= 0) {
      return 'transparent';
    }
    return ThemeStyle.statusBarColor;
  }

  isBarTranslucent = () => {
    const route = this.props.nav.routes[this.props.nav.index].routeName;
    if (['SplashScreen','UserRegisterScreen', "UserVerificationScreen", 'UserForgotPasswordScreen','VendorForgotPasswordScreen', 'VendorRegisterScreen', "VendorVerificationScreen", 'UserRetrieveMoneyScreen', 'UserPhoneLogin', 'TestScreen', 'UserProfileScreen', 'MyQrScreen', 'MyAddressScreen', 'MyIdScreen', 'MyTransactionsScreen', 'MyReferralScreen', 'ChangePinScreen', 'RequestMoneyScreen', 'RequestContactScreen', 'WithdrawMoneyScreen', 'UserSendMoneyScreen', 'ViewBillPaymentsScreen', 'ViewAirtimeScreen', 'UserBillScreen', 'UserTopupScreen', 'BillProcessScreen', 'MobilePayScreen', 'StartScreen'].indexOf(route) >= 0) {
      return true;
    }
    return false;
  }

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={{flex:1}}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor={this.getBarColor()}
          translucent={this.isBarTranslucent()}
        />
        <AppNavigator
          navigation={{
            dispatch,
            state: nav,
            addListener,
            goBack: () => dispatch({type:'goBackScreen'})
          }}
        />
        {/* <PushNotificationManager /> */}
        {/* <InternetService /> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav          : state.nav,
  AccountState : state.AccountState 
});

export default connect(mapStateToProps)(AppWithNavigationState);

