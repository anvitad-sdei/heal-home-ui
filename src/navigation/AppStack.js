import {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../screens/dashboard/Home';

const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    gesturesEnabled: true,
  },
);

export default AppStack;
