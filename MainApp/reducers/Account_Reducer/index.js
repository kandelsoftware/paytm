const initialState = {
  mobileNumber        : '',
  pin                 : '',
  registerSuccess     : false,
  showloader          : false,
  verificationSuccess : false,
  token               : '',
  passwordSuccess     : false,
  loginSuccess        : false,
  resetSuccess        : false,
  pinReset            : false,
  fcmToken            : '',
}

export default function Account_Reducer(state=initialState, action){
  switch(action.type){
    case "USER_SIGNUP_PROCESS": 
    return {
      ...state,
      mobileNumber    : action.mobileNumber,
      registerSuccess : action.registerSuccess,
    }
    case "USER_VERIFICATION_PROCESS": 
    return {
      ...state,
      mobileNumber        : action.mobileNumber,
      verificationSuccess : action.verificationSuccess,
      token               : action.token,
    }
    break;
    case "USER_SET_PASSWORD_PROCESS": 
    return {
      ...state,
      passwordSuccess : action.passwordSuccess,
    }
    break;
    case "USER_LOGIN_PROCESS": 
    return {
      ...state,
      mobileNumber : action.mobileNumber,
      pin          : action.pin,
      loginSuccess : action.loginSuccess,
      token        : action.token,
    }
    break;
    case "USER_FORGOT_PROCESS": 
    return {
      ...state,
      resetSuccess : action.resetSuccess,
      mobileNumber : action.mobileNumber,
      token        : action.token,
    }
    break;
    case "USER_PIN_RESET": 
    return {
      ...state,
      pinReset : action.pinReset,
    }
    break;
    case "FCM_TOKEN": 
    return {
      ...state,
      fcmToken : action.fcmToken,
    }
    break;
    case "LOADER_PROCESS":
      return{
        ...state,
        showloader: true,
      }
    break;
    case "HIDE_LOADER_PROCESS":
      return{
        ...state,
        showloader: false,
      }
    break;
    case "RESET_ACCOUNT_STATE":
    return{
      ...state,
      mobileNumber        : '',
      registerSuccess     : false,
      showloader          : false,
      verificationSuccess : false,
      token               : '',
      passwordSuccess     : false,
      loginSuccess        : false,
      resetSuccess        : false,
      pinReset            : false,
    }
    default:
      return state;
  }
}