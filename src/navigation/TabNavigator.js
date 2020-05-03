import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Home from '../screens/dashboard/Home';
import Profile from '../screens/profile/Profile';
import Assessment from '../screens/assessments/Assessment';
import Handouts from '../screens/handouts/Handouts';
import {Icon} from 'react-native-elements';
import normalize from '../helpers/ResponsiveFont';
import colors from '../constants/colors';

const TabBarComponent = props => {
  return <BottomTabBar {...props} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={normalize(20)} />
        ),
      },
    },
    Handouts: {
      screen: Handouts,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="book" color={tintColor} size={normalize(20)} />
        ),
      },
    },
    Assessments: {
      screen: Assessment,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="book" color={tintColor} size={normalize(20)} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="settings" color={tintColor} size={normalize(20)} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Dashboard',
    tabBarOptions: {
      activeTintColor: colors.BLUE,
      inactiveTintColor: colors.GRAY,
      labelStyle: {fontSize: normalize(12)},
    },
    tabBarComponent: props => (
      <TabBarComponent
        {...props}
        style={{
          backgroundColor: colors.WHITE,
        }}
      />
    ),
  },
);

export default TabNavigator;
