import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/auth/SignIn';
import Verify from '../screens/auth/Verify';
import Goal from '../screens/welcome/Goal';
const AuthStack = createStackNavigator({
  Goal: Goal,
  SignIn: SignIn,
  Verify: Verify,
});

export default AuthStack;
