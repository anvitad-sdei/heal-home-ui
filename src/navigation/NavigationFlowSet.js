import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppStack from './AppStack';
import SignIn from '../screens/auth/SignIn';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import TabNavigator from './TabNavigator';
import Welcome from '../screens/Welcome.js/Welcome';
import DrawerNavigator from './DrawerNavigator';

const AuthStack = createStackNavigator(
  {SignIn: SignIn, Welcome: Welcome},

  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
