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
import TherapistsReview from '../screens/therapists/TherapistsReview';
import AlcoholTest from '../screens/assessments/AlcoholTest';
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

const AssessmentStackNavigator = createStackNavigator(
  {
    Assessment: Assessment,
    AlcoholTest: AlcoholTest,
  },
  {
    initialRouteName: 'Assessment',
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
    Library: {
      screen: Handouts,
      navigationOptions: {
        // tabBarIcon: ({tintColor}) => (
        //   <Icon name="book" color={tintColor} size={normalize(20)} />
        // ),
        tabBarIcon: ({focused}) => {
          let url = focused
            ? require('../assets/files-focused.png')
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
      screen: AssessmentStackNavigator,
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
    'My Therapists': {
      screen: TherapistsReview,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let url = focused
            ? require('../assets/listing.png')
            : require('../assets/listing.png');
          return (
            <Avatar
              source={url}
              containerStyle={{width: normalize(19), height: normalize(13)}}
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
