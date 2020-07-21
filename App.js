/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {

  View,

} from 'react-native';
import NavigationFlowSet from './src/navigation/NavigationFlowSet';
import { Provider } from 'react-redux';
import store from './src/redux/store/setup';
import AppNavigation from './src/redux/services/navigation';
import SplashScreen from 'react-native-splash-screen';
console.disableYellowBox = true;


class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
     SplashScreen.hide();

  }
  render() {
    return (
      <Provider store={store}>
        <NavigationFlowSet
          ref={navigatorRef => {
            AppNavigation.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
      /*   <View style={{
          backgroundColor: 'red',
          height: 500,
          width: '100%'
        }}>
        </View> */
    )
  }
}


export default App;







