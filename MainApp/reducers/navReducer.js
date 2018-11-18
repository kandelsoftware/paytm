import { NavigationActions, StackActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top
const firstAction = AppNavigator.router.getActionForPathAndParams('SplashScreen');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
);

export default function nav(state,action) {
  let nextState;
  switch (action.type) {
    case 'SplashScreen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SplashScreen' }),
        state
      );
      break;
    case 'StartScreen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'StartScreen' }),
        state
      );
      break;
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'LoginScreen' }),
        state
      );
      break;
    case 'Registration':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'RegistrationScreen' }),
        state
      );
      break;
    case 'goBackScreen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'resetAndGoToScreen':
      nextState = AppNavigator.router.getStateForAction(
        StackActions.reset({
          index: 0,
          key: null,
          actions: [
            NavigationActions.navigate({ routeName: action.routeName })
          ]
        }),
        state
      );
      break;
    case 'goToScreenWithProps':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: action.routeName, params: action.screenProps }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
