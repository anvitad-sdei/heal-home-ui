import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/auth/SignIn';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import Welcome from '../screens/Welcome.js/Welcome';
import DrawerNavigator from './DrawerNavigator';
import Home from '../screens/dashboard/Home';
const AuthStack = createStackNavigator(
  {
    SignIn: SignIn,
    Welcome: Welcome,
    Home: Home,
  },

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
