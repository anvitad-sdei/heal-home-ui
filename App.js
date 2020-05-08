import React from 'react';
import {StatusBar} from 'react-native';
import NavigationFlowSet from './src/navigation/NavigationFlowSet';
import {Provider} from 'react-redux';
import store from './src/redux/store/setup';
import AppNavigation from './src/redux/services/navigation';
import SplashScreen from 'react-native-splash-screen';

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationFlowSet
            ref={navigatorRef => {
              AppNavigation.setTopLevelNavigator(navigatorRef);
            }}
          />
        </Provider>
      </>
    );
  }
}

export default App;
