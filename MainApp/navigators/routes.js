import React, { Component } from 'react';
import {View,Text,StyleSheet,YellowBox} from 'react-native';
console.disableYellowBox = true;

//  ####################### Stack Screens ###################
import SplashScreen from '../screens/Stack_Screens/SplashScreen';
import StartScreen from '../screens/Stack_Screens/StartScreen';
import UserTypeScreen from '../screens/Stack_Screens/UserTypeScreen';
import CameraScreen from '../screens/Stack_Screens/CameraScreen';

//  ####################### User Screens ###################
import UserInitialScreen from '../screens/Stack_Screens/User_Screens/UserInitialScreen';
import UserRegisterScreen from '../screens/Stack_Screens/User_Screens/UserRegisterScreen';
import UserVerificationScreen from '../screens/Stack_Screens/User_Screens/UserVerificationScreen';
import UserLoginScreen from '../screens/Stack_Screens/User_Screens/UserLoginScreen';
import UserSignupScreen from '../screens/Stack_Screens/User_Screens/UserSignupScreen';
import UserMainScreen from '../screens/Stack_Screens/User_Screens/UserMainScreen';
import UserQrScreen from '../screens/Stack_Screens/User_Screens/UserQrScreen';
import UserPayScreen from '../screens/Stack_Screens/User_Screens/UserPayScreen';
import UserAddMoneyScreen from '../screens/Stack_Screens/User_Screens/UserAddMoneyScreen';
import UserMoneyAddScreen from '../screens/Stack_Screens/User_Screens/UserMoneyAddScreen';
import UserPaymentSuccessScreen from '../screens/Stack_Screens/User_Screens/UserPaymentSuccessScreen';
import UserMoneyAddedScreen from '../screens/Stack_Screens/User_Screens/UserMoneyAddedScreen';
import UserSendMoneyScreen from '../screens/Stack_Screens/User_Screens/UserSendMoneyScreen';
import UserReceiveMoneyScreen from '../screens/Stack_Screens/User_Screens/UserReceiveMoneyScreen';
import UserRetrieveMoneyScreen from '../screens/Stack_Screens/User_Screens/UserRetrieveMoneyScreen';
import UserRetrieveQrScreen from '../screens/Stack_Screens/User_Screens/UserRetrieveQrScreen';
import UserAmountRetrieveScreen from '../screens/Stack_Screens/User_Screens/UserAmountRetrieveScreen';
import UserRetrieveSuccessScreen from '../screens/Stack_Screens/User_Screens/UserRetrieveSuccessScreen';
import UserRouterNumberScreen from '../screens/Stack_Screens/User_Screens/UserRouterNumberScreen';
import UserAcNumberScreen from '../screens/Stack_Screens/User_Screens/UserAcNumberScreen';
import UserReAcNumberScreen from '../screens/Stack_Screens/User_Screens/UserReAcNumberScreen';
import UserRetrieveBankScreen from '../screens/Stack_Screens/User_Screens/UserRetrieveBankScreen';
import UserBankRetrieveSuccessScreen from '../screens/Stack_Screens/User_Screens/UserBankRetrieveSuccessScreen';
import UserBillPaymentsScreen from '../screens/Stack_Screens/User_Screens/UserBillPaymentsScreen';
import UserBillAmountScreen from '../screens/Stack_Screens/User_Screens/UserBillAmountScreen';
import UserBillAmountPayScreen from '../screens/Stack_Screens/User_Screens/UserBillAmountPayScreen';
import UserBillPaySuccessScreen from '../screens/Stack_Screens/User_Screens/UserBillPaySuccessScreen';
import UserBuyScreen from '../screens/Stack_Screens/User_Screens/UserBuyScreen';
import UserBuyAmountSuccessScreen from '../screens/Stack_Screens/User_Screens/UserBuyAmountSuccessScreen';
import UserRequestSuccessScreen from '../screens/Stack_Screens/User_Screens/UserRequestSuccessScreen';
import UserForgotPasswordScreen from '../screens/Stack_Screens/User_Screens/UserForgotPasswordScreen';
import UserPasswordVerificationScreen from '../screens/Stack_Screens/User_Screens/UserPasswordVerificationScreen';
import UserProfileScreen from '../screens/Stack_Screens/User_Screens/UserProfileScreen';
import UserCreatePinScreen from '../screens/Stack_Screens/User_Screens/UserCreatePinScreen';
import UserReceiveAmountScreen from '../screens/Stack_Screens/User_Screens/UserReceiveAmountScreen';
import UserAmountReceivedScreen from '../screens/Stack_Screens/User_Screens/UserAmountReceivedScreen';
import UserBuySuccessScreen from '../screens/Stack_Screens/User_Screens/UserBuySuccessScreen';
import UserShareScreen from '../screens/Stack_Screens/User_Screens/UserShareScreen';
import UserTermsScreen from '../screens/Stack_Screens/User_Screens/UserTermsScreen';
import UserHelpScreen from '../screens/Stack_Screens/User_Screens/UserHelpScreen';
import UserAboutScreen from '../screens/Stack_Screens/User_Screens/UserAboutScreen';
import UserAddQrScreen from '../screens/Stack_Screens/User_Screens/UserAddQrScreen';
import UserQuestionScreen from '../screens/Stack_Screens/User_Screens/UserQuestionScreen';
import UserPhoneLogin from '../screens/Stack_Screens/User_Screens/UserPhoneLogin';
import UserResignupScreen from '../screens/Stack_Screens/User_Screens/UserResignupScreen';
import UserResetPinScreen from '../screens/Stack_Screens/User_Screens/UserResetPinScreen';
import TestScreen from '../screens/Stack_Screens/User_Screens/TestScreen';
import MyQrScreen from '../screens/Stack_Screens/User_Screens/MyQrScreen';
import MyAddressScreen from '../screens/Stack_Screens/User_Screens/MyAddressScreen';
import MyIdScreen from '../screens/Stack_Screens/User_Screens/MyIdScreen';
import MyTransactionsScreen from '../screens/Stack_Screens/User_Screens/MyTransactionsScreen';
import MyReferralScreen from '../screens/Stack_Screens/User_Screens/MyReferralScreen';
import ChangePinScreen from '../screens/Stack_Screens/User_Screens/ChangePinScreen';
import UserPayPinScreen from '../screens/Stack_Screens/User_Screens/UserPayPinScreen';
import UserPayAmountScreen from '../screens/Stack_Screens/User_Screens/UserPayAmountScreen';
import RequestMoneyScreen from '../screens/Stack_Screens/User_Screens/RequestMoneyScreen';
import RequestPayNameScreen from '../screens/Stack_Screens/User_Screens/RequestPayNameScreen';
import RequestPinScreen from '../screens/Stack_Screens/User_Screens/RequestPinScreen';
import RequestSuccessScreen from '../screens/Stack_Screens/User_Screens/RequestSuccessScreen';
import RequestContactScreen from '../screens/Stack_Screens/User_Screens/RequestContactScreen';
import RequestAmountScreen from '../screens/Stack_Screens/User_Screens/RequestAmountScreen';
import RequestSuccess1Screen from '../screens/Stack_Screens/User_Screens/RequestSuccess1Screen';
import WithdrawMoneyScreen from '../screens/Stack_Screens/User_Screens/WithdrawMoneyScreen';
import WithdrawAmountScreen from '../screens/Stack_Screens/User_Screens/WithdrawAmountScreen';
import WithdrawPinScreen from '../screens/Stack_Screens/User_Screens/WithdrawPinScreen';
import WithdrawSuccessScreen from '../screens/Stack_Screens/User_Screens/WithdrawSuccessScreen';
import UserSendAmountScreen from '../screens/Stack_Screens/User_Screens/UserSendAmountScreen';
import UserSendPinScreen from '../screens/Stack_Screens/User_Screens/UserSendPinScreen';
import UserSendSuccessScreen from '../screens/Stack_Screens/User_Screens/UserSendSuccessScreen';
import ViewBillPaymentsScreen from '../screens/Stack_Screens/User_Screens/ViewBillPaymentsScreen';
import ViewAirtimeScreen from '../screens/Stack_Screens/User_Screens/ViewAirtimeScreen';
import UserBillScreen from '../screens/Stack_Screens/User_Screens/UserBillScreen';
import UserTopupScreen from '../screens/Stack_Screens/User_Screens/UserTopupScreen';
import TopupAmountScreen from '../screens/Stack_Screens/User_Screens/TopupAmountScreen';
import TopupPinScreen from '../screens/Stack_Screens/User_Screens/TopupPinScreen';
import TopupSuccessScreen from '../screens/Stack_Screens/User_Screens/TopupSuccessScreen';
import BillProcessScreen from '../screens/Stack_Screens/User_Screens/BillProcessScreen';
import BillAmountScreen from '../screens/Stack_Screens/User_Screens/BillAmountScreen';
import BillPinScreen from '../screens/Stack_Screens/User_Screens/BillPinScreen';
import BillSuccessScreen from '../screens/Stack_Screens/User_Screens/BillSuccessScreen';
import UserCardAmountScreen from '../screens/Stack_Screens/User_Screens/UserCardAmountScreen';
import CardSuccessScreen from '../screens/Stack_Screens/User_Screens/CardSuccessScreen';
import MobilePayScreen from '../screens/Stack_Screens/User_Screens/MobilePayScreen';
import MobilePayAmountScreen from '../screens/Stack_Screens/User_Screens/MobilePayAmountScreen';
import MobilePayPinScreen from '../screens/Stack_Screens/User_Screens/MobilePayPinScreen';
import MobilePaySuccessScreen from '../screens/Stack_Screens/User_Screens/MobilePaySuccessScreen';
import RequestCancelScreen from '../screens/Stack_Screens/User_Screens/RequestCancelScreen';


//  ####################### Vendor Screens ###################
import VendorInitialScreen from '../screens/Stack_Screens/Vendor_Screens/VendorInitialScreen';
import VendorRegisterScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRegisterScreen';
import VendorVerificationScreen from '../screens/Stack_Screens/Vendor_Screens/VendorVerificationScreen';
import VendorLoginScreen from '../screens/Stack_Screens/Vendor_Screens/VendorLoginScreen';
import VendorSignupScreen from '../screens/Stack_Screens/Vendor_Screens/VendorSignupScreen';
import VendorMainScreen from '../screens/Stack_Screens/Vendor_Screens/VendorMainScreen';
import VendorRemittanceScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRemittanceScreen';
import VendorRetrieveStartScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRetrieveStartScreen';
import VendorRetrieveSuccessScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRetrieveSuccessScreen';
import VendorForgotPasswordScreen from '../screens/Stack_Screens/Vendor_Screens/VendorForgotPasswordScreen';
import VendorPasswordVerificationScreen from '../screens/Stack_Screens/Vendor_Screens/VendorPasswordVerificationScreen';
import VendorPayScreen from '../screens/Stack_Screens/Vendor_Screens/VendorPayScreen';
import VendorPaymentSuccessScreen from '../screens/Stack_Screens/Vendor_Screens/VendorPaymentSuccessScreen';
import VendorIdScreen from '../screens/Stack_Screens/Vendor_Screens/VendorIdScreen';
import VendorAddMoneyScreen from '../screens/Stack_Screens/Vendor_Screens/VendorAddMoneyScreen';
import VendorBuyScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBuyScreen';
import VendorSendMoneyScreen from '../screens/Stack_Screens/Vendor_Screens/VendorSendMoneyScreen';
import VendorReceiveMoneyScreen from '../screens/Stack_Screens/Vendor_Screens/VendorReceiveMoneyScreen';
import VendorBillScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBillScreen';
import VendorBillPaymentsScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBillPaymentsScreen';
import VendorRetrieveMoneyScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRetrieveMoneyScreen';
import VendorPaymentsScreen from '../screens/Stack_Screens/Vendor_Screens/VendorPaymentsScreen';
import VendorCreatePinScreen from '../screens/Stack_Screens/Vendor_Screens/VendorCreatePinScreen';
import VendorMoneyAddScreen from '../screens/Stack_Screens/Vendor_Screens/VendorMoneyAddScreen';
import VendorMoneyAddedScreen from '../screens/Stack_Screens/Vendor_Screens/VendorMoneyAddedScreen';
import VendorSendAmountScreen from '../screens/Stack_Screens/Vendor_Screens/VendorSendAmountScreen';
import VendorMoneySentScreen from '../screens/Stack_Screens/Vendor_Screens/VendorMoneySentScreen';
import VendorReceiveSuccessScreen from '../screens/Stack_Screens/Vendor_Screens/VendorReceiveSuccessScreen';
import VendorRetrieveQrScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRetrieveQrScreen';
import VendorRetrieveAmountScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRetrieveAmountScreen';
import VendorRouterNumberScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRouterNumberScreen';
import VendorRetrieveBankAmountScreen from '../screens/Stack_Screens/Vendor_Screens/VendorRetrieveBankAmountScreen';
import VendorBankAcScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBankAcScreen';
import VendorReBankAcScreen from '../screens/Stack_Screens/Vendor_Screens/VendorReBankAcScreen';
import VendorBillAmountScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBillAmountScreen';
import VendorBillAmountPayScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBillAmountPayScreen';
import VendorBillPaySuccessScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBillPaySuccessScreen';
import VendorBuySuccessScreen from '../screens/Stack_Screens/Vendor_Screens/VendorBuySuccessScreen';


const Routes = {

  SplashScreen: {
    screen: SplashScreen,
    navigationOptions:{
      header: null,
    }
  },

  StartScreen: {
    screen: StartScreen,
    navigationOptions:{
      header: null,
    }
  },

  RequestCancelScreen: {
    screen: RequestCancelScreen,
    navigationOptions:{
      header: null,
    }
  },

  TestScreen: {
    screen: TestScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

 

  MobilePaySuccessScreen: {
    screen: MobilePaySuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  MobilePayPinScreen: {
    screen: MobilePayPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  MobilePayAmountScreen: {
    screen: MobilePayAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  MobilePayScreen: {
    screen: MobilePayScreen,
    navigationOptions:{
      header: null,
    }
  },

  CardSuccessScreen: {
    screen: CardSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserCardAmountScreen: {
    screen: UserCardAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  

  

  BillSuccessScreen: {
    screen: BillSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  BillProcessScreen: {
    screen: BillProcessScreen,
    navigationOptions:{
      header: null,
    }
  },

  BillAmountScreen: {
    screen: BillAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  BillPinScreen: {
    screen: BillPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  TopupSuccessScreen: {
    screen: TopupSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  TopupPinScreen: {
    screen: TopupPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  TopupAmountScreen: {
    screen: TopupAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  UserTopupScreen: {
    screen: UserTopupScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBillScreen: {
    screen: UserBillScreen,
    navigationOptions:{
      header: null,
    }
  },

  
  

  

  ViewBillPaymentsScreen: {
    screen: ViewBillPaymentsScreen,
    navigationOptions:{
      header: null,
    }
  },

  ViewAirtimeScreen: {
    screen: ViewAirtimeScreen,
    navigationOptions:{
      header: null,
    }
  },

  

 

  

  

  

  

  

  

  

  

  
  
  

  

  

  

  UserSendSuccessScreen: {
    screen: UserSendSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserSendPinScreen: {
    screen: UserSendPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserSendAmountScreen: {
    screen: UserSendAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  WithdrawSuccessScreen: {
    screen: WithdrawSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  WithdrawPinScreen: {
    screen: WithdrawPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  WithdrawAmountScreen: {
    screen: WithdrawAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  WithdrawMoneyScreen: {
    screen: WithdrawMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  RequestSuccess1Screen: {
    screen: RequestSuccess1Screen,
    navigationOptions:{
      header: null,
    }
  },

  RequestAmountScreen: {
    screen: RequestAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  RequestContactScreen: {
    screen: RequestContactScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  RequestSuccessScreen: {
    screen: RequestSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  RequestPinScreen: {
    screen: RequestPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  RequestPayNameScreen: {
    screen: RequestPayNameScreen,
    navigationOptions:{
      header: null,
    }
  },

  RequestMoneyScreen: {
    screen: RequestMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  

 

 

  
  
  


  

  UserPayPinScreen: {
    screen: UserPayPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserPayAmountScreen: {
    screen: UserPayAmountScreen,
    navigationOptions:{
      header: null,
    }
  },
  

  CameraScreen: {
    screen: CameraScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  ChangePinScreen: {
    screen: ChangePinScreen,
    navigationOptions:{
      header: null,
    }
  },

  MyReferralScreen: {
    screen: MyReferralScreen,
    navigationOptions:{
      header: null,
    }
  },

  MyTransactionsScreen: {
    screen: MyTransactionsScreen,
    navigationOptions:{
      header: null,
    }
  },

  MyIdScreen: {
    screen: MyIdScreen,
    navigationOptions:{
      header: null,
    }
  },

  MyAddressScreen: {
    screen: MyAddressScreen,
    navigationOptions:{
      header: null,
    }
  },

  MyQrScreen: {
    screen: MyQrScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

 


  

  

  UserResetPinScreen: {
    screen: UserResetPinScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserPhoneLogin: {
    screen: UserPhoneLogin,
    navigationOptions:{
      header: null,
    }
  },

  UserSignupScreen: {
    screen: UserSignupScreen,
    navigationOptions:{
      header: null,
    }
  },
  
  UserResignupScreen: {
    screen: UserResignupScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserQuestionScreen: {
    screen: UserQuestionScreen,
    navigationOptions:{
      header: null,
    }
  },


  
  

  UserVerificationScreen: {
    screen: UserVerificationScreen,
    navigationOptions:{
      header: null,
    }
  },





 

  UserRetrieveMoneyScreen: {
    screen: UserRetrieveMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserAddQrScreen: {
    screen: UserAddQrScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserRetrieveBankScreen: {
    screen: UserRetrieveBankScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  
  

  

  

  

  VendorMainScreen: {
    screen: VendorMainScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserAboutScreen: {
    screen: UserAboutScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  UserMainScreen: {
    screen: UserMainScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  

  UserHelpScreen: {
    screen: UserHelpScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  

  UserTermsScreen: {
    screen: UserTermsScreen,
    navigationOptions:{
      header: null,
    }
  },

 

  UserShareScreen: {
    screen: UserShareScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  UserLoginScreen: {
    screen: UserLoginScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  VendorMoneySentScreen: {
    screen: VendorMoneySentScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserReceiveAmountScreen: {
    screen: UserReceiveAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserAmountReceivedScreen: {
    screen: UserAmountReceivedScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBuySuccessScreen: {
    screen: UserBuySuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBuySuccessScreen: {
    screen: VendorBuySuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBillPaySuccessScreen: {
    screen: VendorBillPaySuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBillAmountPayScreen: {
    screen: VendorBillAmountPayScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBillAmountScreen: {
    screen: VendorBillAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorReBankAcScreen: {
    screen: VendorReBankAcScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBankAcScreen: {
    screen: VendorBankAcScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRetrieveBankAmountScreen: {
    screen: VendorRetrieveBankAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRouterNumberScreen: {
    screen: VendorRouterNumberScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRetrieveAmountScreen: {
    screen: VendorRetrieveAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRetrieveQrScreen: {
    screen: VendorRetrieveQrScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorReceiveSuccessScreen: {
    screen: VendorReceiveSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorPaymentSuccessScreen: {
    screen: VendorPaymentSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorPaymentsScreen: {
    screen: VendorPaymentsScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorSendAmountScreen: {
    screen: VendorSendAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorMoneyAddScreen: {
    screen: VendorMoneyAddScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorMoneyAddedScreen: {
    screen: VendorMoneyAddedScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorPayScreen: {
    screen: VendorPayScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBillScreen: {
    screen: VendorBillScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBillPaymentsScreen: {
    screen: VendorBillPaymentsScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorBuyScreen: {
    screen: VendorBuyScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorReceiveMoneyScreen: {
    screen: VendorReceiveMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRetrieveMoneyScreen: {
    screen: VendorRetrieveMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorAddMoneyScreen: {
    screen: VendorAddMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorSendMoneyScreen: {
    screen: VendorSendMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  



  VendorIdScreen: {
    screen: VendorIdScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  UserProfileScreen: {
    screen: UserProfileScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  UserCreatePinScreen: {
    screen: UserCreatePinScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorCreatePinScreen: {
    screen: VendorCreatePinScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  



  

 

  



  

  VendorForgotPasswordScreen: {
    screen: VendorForgotPasswordScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorPasswordVerificationScreen: {
    screen: VendorPasswordVerificationScreen,
    navigationOptions:{
      header: null,
    }
  },

 

  

  UserPasswordVerificationScreen: {
    screen: UserPasswordVerificationScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserForgotPasswordScreen: {
    screen: UserForgotPasswordScreen,
    navigationOptions:{
      header: null,
    }
  },
  

  

  
  
  

  
  
  VendorVerificationScreen: {
    screen: VendorVerificationScreen,
    navigationOptions:{
      header: null,
    }
  },


  UserReceiveMoneyScreen: {
    screen: UserReceiveMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserRequestSuccessScreen: {
    screen: UserRequestSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  

 

  

  VendorRetrieveSuccessScreen: {
    screen: VendorRetrieveSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRetrieveStartScreen: {
    screen: VendorRetrieveStartScreen,
    navigationOptions:{
      header: null,
    }
  },

  VendorRemittanceScreen: {
    screen: VendorRemittanceScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  



  UserBuyScreen: {
    screen: UserBuyScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBuyAmountSuccessScreen: {
    screen: UserBuyAmountSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  UserBillPaySuccessScreen: {
    screen: UserBillPaySuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBillAmountPayScreen: {
    screen: UserBillAmountPayScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBillAmountScreen: {
    screen: UserBillAmountScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBillPaymentsScreen: {
    screen: UserBillPaymentsScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserBankRetrieveSuccessScreen: {
    screen: UserBankRetrieveSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserRetrieveBankScreen: {
    screen: UserRetrieveBankScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserReAcNumberScreen: {
    screen: UserReAcNumberScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserAcNumberScreen: {
    screen: UserAcNumberScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserRouterNumberScreen: {
    screen: UserRouterNumberScreen,
    navigationOptions:{
      header: null,
    }
  },

  



  UserRetrieveQrScreen: {
    screen: UserRetrieveQrScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserRetrieveSuccessScreen: {
    screen: UserRetrieveSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserAmountRetrieveScreen: {
    screen: UserAmountRetrieveScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

 

  UserSendMoneyScreen: {
    screen: UserSendMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  UserAddMoneyScreen: {
    screen: UserAddMoneyScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  

  

  

  

  

  

  UserMoneyAddedScreen: {
    screen: UserMoneyAddedScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserPaymentSuccessScreen: {
    screen: UserPaymentSuccessScreen,
    navigationOptions:{
      header: null,
    }
  },

 

 

  UserMoneyAddScreen: {
    screen: UserMoneyAddScreen,
    navigationOptions:{
      header: null,
    }
  },
  

  UserPayScreen: {
    screen: UserPayScreen,
    navigationOptions:{
      header: null,
    }
  },

 
  UserQrScreen: {
    screen: UserQrScreen,
    navigationOptions:{
      header: null,
    }
  },
  

  

  UserInitialScreen: {
    screen: UserInitialScreen,
    navigationOptions:{
      header: null,
    }
  },

  UserRegisterScreen: {
    screen: UserRegisterScreen,
    navigationOptions:{
      header: null,
    }
  },



 



 

  

  

  

  

  VendorSignupScreen: {
    screen: VendorSignupScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  VendorLoginScreen: {
    screen: VendorLoginScreen,
    navigationOptions:{
      header: null,
    }
  },

  

  VendorRegisterScreen: {
    screen: VendorRegisterScreen,
    navigationOptions:{
      header: null,
    }
  },

 

  

  VendorInitialScreen: {
    screen: VendorInitialScreen,
    navigationOptions:{
      header: null,
    }
  },

 

  UserTypeScreen: {
    screen: UserTypeScreen,
    navigationOptions:{
      header: null,
    }
  },

  
}

export default Routes;