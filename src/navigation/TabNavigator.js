import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Home from '../screens/dashboard/Home';
import Profile from '../screens/profile/Profile';
import Assessment from '../screens/assessments/Assessment';
import Handouts from '../screens/handouts/Handouts';
import normalize from '../helpers/ResponsiveFont';
import colors from '../constants/colors';
import {Avatar} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation-stack';
import Journaling from '../screens/journal/Journaling';
import JournalQuestion from '../screens/journal/JournalQuestion';
import DrinkingLogs from '../screens/drinkingLogs/DrinkingLogs';
import Sessions from '../screens/sessions/Sessions';
import TherapistsList from '../screens/therapists/TherapistsList';
const TabBarComponent = props => {
  return <BottomTabBar {...props} />;
};

const RootStackHome = createStackNavigator(
  {
    Home: Home,
    DrinkingLogs: DrinkingLogs,
    Journaling: Journaling,
    JournalQuestion: JournalQuestion,
    Sessions: Sessions,
    TherapistsList: TherapistsList,
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
        tabBarIcon: ({focused}) => {
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
        // tabBarIcon: ({tintColor}) => (
        //   <Icon name="book" color={tintColor} size={normalize(20)} />
        // ),
        tabBarIcon: ({focused}) => {
          let url = focused
            ? require('../assets/files.png')
            : require('../assets/files.png');
          return (
            <Avatar
              source={url}
              containerStyle={{width: normalize(10), height: normalize(13)}}
            />
          );
        },
      },
    },
    Assessments: {
      screen: Assessment,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let url = focused
            ? require('../assets/assessment-focused.png')
            : require('../assets/assessment.png');
          return (
            <Avatar
              source={url}
              containerStyle={{width: normalize(14), height: normalize(14)}}
            />
          );
        },
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let url = focused
            ? require('../assets/setting.png')
            : require('../assets/setting.png');
          return (
            <Avatar
              source={url}
              containerStyle={{width: normalize(13), height: normalize(13)}}
            />
          );
        },
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
