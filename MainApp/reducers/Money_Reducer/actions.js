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

export function AC_UserScanToAdd(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userScanToAdd,
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
          type        : "SCAN_MONEY_DETAILS",
          scanSuccess : true,
        })
      }
      else if(response.data.errorCode == 1014){
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_UserScanToPay(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.userScanToPay+data.MobileNumber,
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
          type         : "SCAN_TO_PAY_DETAILS",
          newPayee     : true,
          payeeDetails : response.data.response.data
        })
      }
      else if(response.data.errorCode == 1014){
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_UserPaying(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userPayingUrl,
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
          type           : "SCAN_SUCCESS_DETAILS",
          paymentSuccess : true,
          payingAmount   : data.amount,
        })
      }
      else if(response.data.errorCode == 1014){
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_UserSendMoney(data) {
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.userSendMoney,
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
          type          : "USER_SEND_MONEY",
          sendSuccess   : true,
          sendingAmount : data.amount,
        })
      }
      else if(response.data.errorCode == 1014){
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_GetBankList(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.getBankList,
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
          type     : 'GET_BANK_LIST',
          bankList : response.data.response.data,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_WithdrawAmount(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.withdrawAmount,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      console.log('-------response------', response);
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type            : 'WITHDRAW_AMOUNT_PROCESS',
          withdrawSuccess : true,
          withdrawnAmount  : data.amount,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_RequestAmount(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.RequestAmount,
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
          type             : 'REQUEST_AMOUNT_PROCESS',
          requestSuccess   : true,
          requestedAmount  : data.amount,
          requestingSender : data.mobileNumber,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_ReceiveRequest(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.ReceiveRequest+'?Page='+data.Page+'&PageSize='+data.PageSize,
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
          type        : 'REQUEST_LIST_PROCESS',
          requestList : response.data.response.data,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_SenderRequests(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.SenderRequest+'?Page='+data.Page+'&PageSize='+data.PageSize,
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
          type : 'SENDER_REQUEST_LIST',
          senderList : response.data.response.data,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_AcceptRequests(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.AccpetRequest,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      console.log('-------response-------', response);
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type            : 'ACCEPT_REQUESTS',
          requestAccepted : true,
          requestAmount   : data.sendingAmount,
          requestedSender : data.requestedSender,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_RejectRequests(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.RejectRequest,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      console.log('-------response-------', response);
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type            : 'REJECT_REQUESTS',
          cancelSuccess   : true,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_UserActivities(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.UserActivity+'?Page='+data.Page+'&PageSize='+data.PageSize+'&OrderBy='+data.OrderBy,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      console.log('---------response----------', response);
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type           : 'USER_ACTIVITIES',
          activitiesList : response.data.response.data,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_RecentContacts(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.RecentContacts+'?Page='+data.Page+'&PageSize='+data.PageSize+'&OrderBy='+data.OrderBy,
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
          type           : 'RECENT_CONTACTS',
          recentContacts : response.data.response.data,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_BillPayment(data){
  return (dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.CompanyType+data.type,
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
          type            : 'BILL_PAYMENT_COMPANIES',
          billCompanyList : response.data.response.data,
        })
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_BuyAirTime(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.CompanyType+data.buyType,
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
          type            : 'BUY_AIRTIME_PROCESS',
          buyAirtimeList  : response.data.response.data,
        })
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_TopupProcess(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.TopupProcess,
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
          type         : 'TOPUP_PROCESS',
          topupSuccess : true,
          topupAmount  : data.amount,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_TopupRecharge(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.TopupRecharge,
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
          type        : 'TOPUP_RECHARGE_PROCESS',
          topAmount   : data.amount,
          toprecharge : true,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response);}, 100);
    })
  }
}

export function AC_BillPayProcess(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.BillPayProcess,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      console.log('-------response-------', response);
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type           : 'BILL_PAY_PROCESS',
          billPaySuccess : true,
          billAmount     : data.amount,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_StripeProcess(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.post(
      LINKS.StripeProcess,
      data,
      {headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + data.AccessToken,
      },}
    )
    .then((response)=>{
      console.log('------response------', response);
      dispatch(hide_Loader())
      if(response.data.errorCode == 0){
        dispatch({
          type          : 'STRIPE_PAYMENT_PROCESS',
          stripeSuccess : true,
          cardAmount    : data.amount,
        })
      }else {
        dispatch(hide_Loader())
        setTimeout(()=>{alert(response.data.message);}, 200);
      }
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch(hide_Loader())
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_CheckUserNumber(data){
  return(dispatch)=>{
    dispatch(show_Loader())
    axios.get(
      LINKS.CheckMobileNumber+data.mobileNumber,
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
          type        : 'CHECK_MOBILE_NUMBER',
          numberValid : true,
          userDetails : response.data.response.data,
        })
      }else {
        console.log('-------response-------', response);
      }
    })
    .catch((err)=>{
      dispatch(hide_Loader())
      dispatch({
        type        : 'CHECK_MOBILE_NUMBER',
        numberValid : false,
      })
      setTimeout(()=>{alert(err.response.data.message);}, 100);
    })
  }
}

export function AC_ResetNumber(){
  return(dispatch)=>{
    dispatch(hide_Loader())
    dispatch({
      type        : 'RESET_NUMBER',
      numberValid : false,
    })
  }
}

export function AC_ResetPayee(){
  return(dispatch)=>{
    console.log('--------Payess-------');
    dispatch(hide_Loader())
    dispatch({
      type      : 'RESET_PAYEE',
      newPayee  : false,
    })
  }
}

export function AC_ResetMoneyState() {
  return {
    type: 'RESET_MONEY_STATE',
  }
}






