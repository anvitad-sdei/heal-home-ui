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
import {Avatar} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import Journaling from '../screens/journal/Journaling';
import JournalQuestion from '../screens/journal/JournalQuestion';

const TabBarComponent = props => {
  return <BottomTabBar {...props} />;
};

const RootStackHome = createStackNavigator(
  {
    Home: Home,
    Journaling: Journaling,
    JournalQuestion: JournalQuestion,
    // Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: false,
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: RootStackHome,
      navigationOptions: {
        tabBarIcon: ({tintColor, focused}) => {
          let url = focused
            ? require('../assets/dashboard-focused.png')
            : require('../assets/dashboard.png');
          return (
            <Avatar
              source={url}
              containerStyle={{width: normalize(12), height: normalize(12)}}
            />
          );
        },
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
      labelStyle: {fontSize: normalize(8)},
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
