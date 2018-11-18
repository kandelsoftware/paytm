import React, { Component } from 'react';
import { Alert } from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AC_FcmToken} from '../reducers/Account_Reducer/actions';

class PushNotificationManager extends Component {
    constructor(props) {
      super(props);
      this.showLocalNotification  = this.showLocalNotification.bind(this);
      this.handleRemote           = this.handleRemote.bind(this);
      this.handleRemoteForeground = this.handleRemoteForeground.bind(this);
    }

    componentDidMount() {
      // this method generate fcm token.
      FCM.requestPermissions();
      FCM.getFCMToken().then(token => {
        this.props.FcmToken(token);
        // this.props.SetDeviceToken(token);
      });
      
      //this.showLocalNotification();
      FCM.getInitialNotification().then(notif => {
        
      });

      this.notificationListener = FCM.on(FCMEvent.Notification, notif => {
          console.log("Notification", notif);
          let existing = FCM.getBadgeNumber();
          console.log("getBadgeNumber", existing);
          //FCM.setBadgeNumber(existing+1);

          if(notif && notif.local_notification){
            return;
          }
          if(notif.opened_from_tray == 1) {
            this.handleRemote(notif);
          } else {
            this.handleRemoteForeground(notif);
          }
          // if(notif.opened_from_tray){
          //   return;
          // }
      });

      // this method call when FCM token is update(FCM token update any time so will get updated token from this method)

    }

    // This method display the notification on mobile screen.
    handleRemote(notif) {
      console.log('send',notif);
      // for task related notifications
      if(notif.type === 'kUserAcceptedTask') {
        let type = "accepted";
        // this.props.GetUserOpenTask(this.props.AuthenticationState.userid, type);
        if(notif.info) {
          notificationData = JSON.parse(notif.info);
          if(notificationData.taskid && notificationData.taskid != undefined && notificationData.taskid != '') {
            // this.props.navigation.navigate("TaskDetailPage",{taskId:notificationData.taskid,userid:this.props.AuthenticationState.userid});
           
          }
        }

      } else if(notif.type === 'kUserCancelledTask') {
        let type = "cancelled";
        // this.props.GetUserOpenTask(this.props.AuthenticationState.userid, type);
        // if(notif.info) {
        //   notificationData = JSON.parse(notif.info);
        //   if(notificationData.taskid && notificationData.taskid != undefined && notificationData.taskid != '') {
        //     this.props.navigation.navigate("TaskDetailPage",{taskId:notificationData.taskid,userid:this.props.AuthenticationState.userid});
        //   }
        // }

      }
      // for new message notifications
      if(notif.type === 'kNewMessage') {
        if(notif.info) {
            notificationData = JSON.parse(notif.info);
            // if(notificationData.senderid && notificationData.senderid != undefined && notificationData.senderid != '') {
            //   if(notificationData.taskid && notificationData.taskid != undefined && notificationData.taskid != '') {
            //       this.props.navigation.navigate("Chat",{taskerid:notificationData.senderid,taskid:notificationData.taskid});
            //   } else {
            //     Alert.alert("Invalid Chat of a task!!");
            //   }
            // }
        }
      }

      // FCM.presentLocalNotification({
      //   title: notif.title,
      //   body: notif.body,
      //   priority: "high",
      //   click_action: notif.click_action,
      //   show_in_foreground: true,
      //   local: true
      // });
    }

    // handle remote notifications if app in foreground
    handleRemoteForeground(notif) {
      // for new message notifications
      if(notif.type === 'kNewMessage') {
        this.props.IncrementUnreadMsgCount();
      }
    }

    showLocalNotification() {
      FCM.presentLocalNotification({
        vibrate: 500,
        title: 'Hello',
        body: 'Test Notification',
        big_text: 'i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large, i am large',
        priority: "high",
        sound: "bell.mp3",
        large_icon: "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg",
        show_in_foreground: true,
        number: 10
      });
    }

    render() {
      return null;
    }
}

function mapStateToProps(state){
  return{
    AccountState : state.AccountState,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    FcmToken : AC_FcmToken
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PushNotificationManager);

