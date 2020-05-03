import React from 'react';
import {StatusBar} from 'react-native';
import NavigationFlowSet from './src/navigation/NavigationFlowSet';
import {Provider} from 'react-redux';
import store from './src/redux/store/setup';
import AppNavigation from './src/redux/services/navigation';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <NavigationFlowSet
          ref={navigatorRef => {
            AppNavigation.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    </>
  );
};

export default App;
