import  LINKS, {fetchGetObject , fetchPostObject} from '../../constants/LINKS';
import { Alert } from 'react-native';
import axios from 'axios';

export function show_Loader(){
  return {
    type:"LOADER_PROCESS"
  }
}

export function hide_Loader(){
  return {
    type:"HIDE_LOADER_PROCESS"
  }
}

export function AC_UserSigningUp(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.signupServiceUrl,
      data
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type            : "USER_SIGNUP_PROCESS",
          mobileNumber    : data.mobileNumber,
          registerSuccess : true,
        })
      } 
      else if(response.data.errorCode == 1004){
        dispatch({
          type            : "USER_SIGNUP_PROCESS",
          mobileNumber    : data.mobileNumber,
          registerSuccess : true,
        })
      } 
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message)}, 200);
      }

    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error------', err.response);
      // alert(err.response.data.message);
    })
  }
}

export function AC_UserVerification(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userVerification,
      data
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type                : "USER_VERIFICATION_PROCESS",
          mobileNumber        : data.mobileNumber,
          verificationSuccess : true,
          token               : response.data.response.data,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message)}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error------', err.response);
      // setTimeout(()=>{alert(response.data.message)}, 200);
    })
  }
}

export function AC_UserSetPassword(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userSetPassword,
      data
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type            : "USER_SET_PASSWORD_PROCESS",          
          passwordSuccess : true,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error------', err.response);
      // alert(err.response.data.message);
    })
  }
}

export function AC_UserLogin(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userLoginUrl,
      data
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type         : "USER_LOGIN_PROCESS",
          mobileNumber : data.mobileNumber,
          pin          : data.pin,
          loginSuccess : true,
          token        : response.data.response.data.token,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message)}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error------', err);
      alert('Network Error !!. Try again later !!')
      // setTimeout(()=>{alert(err.response.data.message);}, 200);
    })
  }
}

export function AC_ForgotPassword(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.forgotPasswordUrl,
      data
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type         : "USER_FORGOT_PROCESS",
          resetSuccess : true,
          mobileNumber : data.mobileNumber,
          token        : response.data.response.data,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error------', err.response);
      // alert(err.response.data.message);
    })
  }
}

export function AC_PinReset(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.pinResetUrl,
      data
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type         : "USER_PIN_RESET",
          pinReset     : true,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error1------', err.response);
      // alert(err.response.data.message);
    })
  }
}

export function AC_FcmToken(data){
  return(dispatch)=>{
    dispatch({
      type     : "FCM_TOKEN",
      fcmToken : data,
    })
  }
}

export function AC_FcmTokenProcess(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.FcmTokenProcess,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type : 'FCM_TOKEN_PROCESS',

        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      console.log('------Error1------', err.response);
      // alert(err.response.data.message);
    })
  }
}

export function AC_ResetAccountState() {
  return {
    type: 'RESET_ACCOUNT_STATE',
  }
}