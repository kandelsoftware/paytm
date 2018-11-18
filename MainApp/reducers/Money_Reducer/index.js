const initialState = {
  showloader      : false,
  scanSuccess     : false,
  newPayee        : false,
  payeeDetails    : {},
  paymentSuccess  : false,
  sendSuccess     : false,
  bankList        : [],
  withdrawSuccess : false,
  requestSuccess  : false,
  requestList     : [],
  senderList      : [],
  requestAccepted : false,
  requestAmount   : '',
  requestedSender : '',
  sendingAmount   : '',
  payingAmount    : '',
  withdrawError   : false,
  withdrawnAmount : '',
  activitiesList  : [],
  billCompanyList : [],
  buyAirtimeList  : [],
  topupSuccess    : false,
  topupAmount     : '',
  billPaySuccess  : false,
  billAmount      : '',
  stripeSuccess   : false,
  cardAmount      : '',
  numberValid     : false,
  userDetails     : {},
  cancelSuccess   : false,
  toprecharge     : false,
  topAmount       : '',
  recentContacts  : '',
}

export default function Money_Reducer(state=initialState, action){
  switch(action.type){
    case "SCAN_MONEY_DETAILS":
      return{
        ...state,
        scanSuccess: action.scanSuccess,
      }
    break;
    case "SCAN_TO_PAY_DETAILS":
      return{
        ...state,
        newPayee      : action.newPayee,
        payeeDetails  : action.payeeDetails,
      }
    break;
    case "SCAN_SUCCESS_DETAILS":
    return{
      ...state,
      paymentSuccess : action.paymentSuccess,
      payingAmount   : action.payingAmount,
    }
    break;
    case "USER_SEND_MONEY":
    return{
      ...state,
      sendSuccess   : action.sendSuccess,
      sendingAmount : action.sendingAmount,
    }
    break;
    case "GET_BANK_LIST":
    return{
      ...state,
      bankList : action.bankList,
    }
    break;
    case "WITHDRAW_AMOUNT_PROCESS":
    return{
      ...state,
      withdrawSuccess : action.withdrawSuccess,
      withdrawnAmount : action.withdrawnAmount,
    }
    break;
    case "REQUEST_AMOUNT_PROCESS":
    return{
      ...state,
      requestSuccess   : action.requestSuccess,
      requestedAmount  : action.requestedAmount,
      requestingSender : action.requestingSender,
    }
    break;
    case "REQUEST_LIST_PROCESS":
    return{
      ...state,
      requestList : action.requestList,
    }
    break;
    case "SENDER_REQUEST_LIST":
    return{
      ...state,
      senderList : action.senderList,
    }
    break;
    case "ACCEPT_REQUESTS":
    return{
      ...state,
      requestAccepted : action.requestAccepted,
      requestAmount   : action.requestAmount,
      requestedSender : action.requestedSender,
    }
    break;
    case "REJECT_REQUESTS":
    return{
      ...state,
      cancelSuccess : action.cancelSuccess,
    }
    break;
    case "USER_ACTIVITIES":
    return{
      ...state,
      activitiesList : action.activitiesList,
    }
    break;
    case "RECENT_CONTACTS":
    return{
      ...state,
      recentContacts : action.recentContacts,
    }
    break;
    case "BILL_PAYMENT_COMPANIES":
    return{
      ...state,
      billCompanyList : action.billCompanyList,
    }
    break;
    case "BUY_AIRTIME_PROCESS":
    return{
      ...state,
      buyAirtimeList : action.buyAirtimeList,
    }
    break;
    case "TOPUP_PROCESS":
    return{
      ...state,
      topupSuccess : action.topupSuccess,
      topupAmount  : action.topupAmount,
    }
    break;
    case "TOPUP_RECHARGE_PROCESS":
    return{
      ...state,
      toprecharge  : action.toprecharge,
      topAmount    : action.topAmount,
    }
    break;
    case "BILL_PAY_PROCESS":
    return{
      ...state,
      billPaySuccess : action.billPaySuccess,
      billAmount     : action.billAmount,
    }
    break;
    case "STRIPE_PAYMENT_PROCESS":
    return{
      ...state,
      stripeSuccess : action.stripeSuccess,
      cardAmount    : action.cardAmount,
    }
    break;
    case "CHECK_MOBILE_NUMBER":
    return{
      ...state,
      numberValid : action.numberValid,
      userDetails : action.userDetails,
    }
    break;
    case "RESET_NUMBER":
    return{
      ...state,
      numberValid : action.numberValid,
    }
    break;
    case "RESET_PAYEE":
    return{
      ...state,
      newPayee : action.newPayee,
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
    case "RESET_MONEY_STATE":
    return{
      ...state,
      showloader      : false,
      scanSuccess     : false,
      newPayee        : false,
      payeeDetails    : {},
      paymentSuccess  : false,
      sendSuccess     : false,
      bankList        : [],
      withdrawSuccess : false,
      requestSuccess  : false,
      requestList     : [],
      senderList      : [],
      requestAccepted : false,
      requestAmount   : '',
      requestedSender : '',
      sendingAmount   : '',
      payingAmount    : '',
      withdrawError   : false,
      withdrawnAmount : '',
      activitiesList  : [],
      billCompanyList : [],
      buyAirtimeList  : [],
      topupSuccess    : false,
      topupAmount     : '',
      billPaySuccess  : false,
      billAmount      : '',
      stripeSuccess   : false,
      cardAmount      : '',
      numberValid     : false,
      cancelSuccess   : false,
      recentContacts  : '',
    }
    break;
    default:
      return state;
  }
}