const initialState = {
  userDetails    : {},
  userBalance    : {},
  pinChange      : false,
  showloader     : false,
  adressChanged  : false,
  balanceUpdated : false,
  userAddress    : '',
  imageUpdated   : false,
  resetImage     : false,
}

export default function Profile_Reducer(state=initialState, action){
  switch(action.type){
    case "GET_USER_DETAILS":
      return{
        ...state,
        userDetails    : action.userDetails,
      }
    break;
    case "GET_USER_BALANCE":
    return{
      ...state,
      userBalance : action.userBalance,
      balanceUpdated : action.balanceUpdated,
    }
    break;
    case "USER_CHANGE_PIN":
    return{
      ...state,
      pinChange : action.pinChange,
    }
    break;
    case "USER_CHANGE_ADDRESS":
    return{
      ...state,
      adressChanged : action.adressChanged,
      userAddress   : action.userAddress,
    }
    break;
    case "USER_UPDATE_IMAGE":
    return{
      ...state,
      imageUpdated : action.imageUpdated,
      resetImage   : action.resetImage,
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
    case "RESET_PROFILE_STATE":
    return{
      ...state,
      userDetails    : {},
      userBalance    : {},
      pinChange      : false,
      showloader     : false,
      adressChanged  : false,
      balanceUpdated : false,
      userAddress    : '',
      imageUpdated   : false,
      resetImage     : false,
    }
    default:
      return state;
  }
}