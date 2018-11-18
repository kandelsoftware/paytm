//root directory of application
export const WebAppDomainRoot    = 'http://72.14.181.229';
export const WebImageRoot        = 'http://72.14.181.229/assets/';
export const TimeOutMilliSeconds = 10000;
export function fetchGetObject()
{
    return({
      method: "GET",
      headers: {},
      redirect: 'error',
      follow: 0,
      timeout: TimeOutMilliSeconds,
      compress: false,
      size: 0,
    });
}
export function fetchPostObject(bodyData = null)
{
  return ({
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(bodyData),
    redirect: 'error',
    follow: 0,
    timeout: TimeOutMilliSeconds,
    compress: false,
    size: 0,
  });
}

export default LINKS =
{
  //////////////////////////services///////////////////////////////////
  WebRoot            :  WebAppDomainRoot,
  WebImageRoot       :  WebImageRoot,
  signupServiceUrl   :  WebAppDomainRoot + '/connect/customer/register',
  userVerification   :  WebAppDomainRoot + '/connect/verify',
  userSetPassword    :  WebAppDomainRoot + '/connect/setPassword',
  userLoginUrl       :  WebAppDomainRoot + '/connect/token',
  forgotPasswordUrl  :  WebAppDomainRoot + '/connect/forgetPassword',
  pinResetUrl        :  WebAppDomainRoot + '/connect/resetPassword',
  getProfileUrl      :  WebAppDomainRoot + '/api/Profile',
  getUserBalance     :  WebAppDomainRoot + '/api/Profile/balance',
  userChangePin      :  WebAppDomainRoot + '/api/Profile/changePin',
  userChangeAddress  :  WebAppDomainRoot + '/api/Profile/updateAddress',
  userScanToAdd      :  WebAppDomainRoot + '/api/v1/Prepaid',
  userScanToPay      :  WebAppDomainRoot + '/api/v1/User/',
  userPayingUrl      :  WebAppDomainRoot + '/api/v1/Payment/scanToPay',
  userChangeImage    :  WebAppDomainRoot + '/api/Profile/changeImage',
  userUpdateCnic     :  WebAppDomainRoot + '/api/Profile/updateCnic',
  userSendMoney      :  WebAppDomainRoot + '/api/v1/Payment/sendMoney',
  getBankList        :  WebAppDomainRoot + '/api/v1/Bank',
  withdrawAmount     :  WebAppDomainRoot + '/api/v1/Withdraw',
  RequestAmount      :  WebAppDomainRoot + '/api/v1/Request',
  ReceiveRequest     :  WebAppDomainRoot + '/api/v1/Request/receiver',
  SenderRequest      :  WebAppDomainRoot + '/api/v1/Request/sender',
  AccpetRequest      :  WebAppDomainRoot + '/api/v1/Request/accept',
  RejectRequest      :  WebAppDomainRoot + '/api/v1/Request/reject',
  UserActivity       :  WebAppDomainRoot + '/api/v1/Activity',
  CompanyType        :  WebAppDomainRoot + '/api/v1/Company/',
  TopupProcess       :  WebAppDomainRoot + '/api/v1/AirTimeTopUp',
  FcmTokenProcess    :  WebAppDomainRoot + '/api/v1/Fcm',
  BillPayProcess     :  WebAppDomainRoot + '/api/v1/Bill',
  StripeProcess      :  WebAppDomainRoot + '/api/v1/Stripe',
  CheckMobileNumber  :  WebAppDomainRoot + '/api/v1/User/',
  TopupRecharge      :  WebAppDomainRoot + '/api/v1/AirTimeTopUp/recharge',
  RecentContacts     :  WebAppDomainRoot + '/api/v1/Activity/recent',
};
