import {createStackNavigator} from 'react-navigation-stack';
import SignIn from '../screens/auth/SignIn';

const AuthStack = createStackNavigator({
  SignIn: SignIn,
});

export default AuthStack;
