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

export function AC_GetUserProfile(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.getProfileUrl,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0) {
        dispatch({
          type        : "GET_USER_DETAILS",
          userDetails : response.data.response.data,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
        console.log('------error1-------', err.response); 
    })
  }
}

export function AC_GetUserBalance(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.getUserBalance,{},
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0) {
        dispatch({
          type           : "GET_USER_BALANCE",
          userBalance    : response.data.response.data,
          balanceUpdated : true,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
        console.log('------error5-------', err.response); 
    })
  }
}

export function AC_UserChangePin(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userChangePin,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0) {
        dispatch({
          type      : "USER_CHANGE_PIN",
          pinChange : true,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
        console.log('------error5-------', err.response); 
    })
  }
}

export function AC_UserChangeAddress(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userChangeAddress,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0) {
        dispatch({
          type          : "USER_CHANGE_ADDRESS",
          adressChanged : true,
          userAddress   : data.address,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
        console.log('------error5-------', err.response); 
    })
  }
}

export function AC_UserChangeImage(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userChangeImage,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      dispatch(hide_Loader())
      if(response.data.errorCode == 0) {
        dispatch({
          type          : "USER_UPDATE_IMAGE",
          imageUpdated  : true,
          resetImage    : data.resetImage,
        })
      }
      else{
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
        console.log('------error5-------', err.response); 
    })
  }
}

export function AC_UpdateUserCnic(data){
  return(dispatch)=>{
    dispatch(show_Loader());
    axios.post(
      LINKS.userUpdateCnic,
      data,
      {
        headers : {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + data.AccessToken,
        },
      }
    )
    .then((response)=>{
      dispatch(hide_Loader());
      if(response.data.errorCode == 0){
        dispatch({
          type : 'USER_UPDATE_CNIC',

        })
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader());
      console.log('------error5-------', err.response); 
    })
  }
}

export function AC_ResetProfileState() {
  return {
    type: 'RESET_PROFILE_STATE',
  }
}