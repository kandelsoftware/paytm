import { combineReducers } from 'redux';

import nav from './navReducer';
import Account_Reducer from './Account_Reducer';
import Profile_Reducer from './Profile_Reducer';
import Money_Reducer from './Money_Reducer';

const AppReducer = combineReducers({
  nav          : nav,
  AccountState : Account_Reducer,
  ProfileState : Profile_Reducer,
  MoneyState   : Money_Reducer,
});

export default AppReducer;
