import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Profile from '../screens/profile/Profile';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import Handouts from '../screens/handouts/Handouts';
import Assessment from '../screens/assessments/Assessment';
import TabNavigator from '../navigation/TabNavigator';
import TherapistsReview from '../screens/therapists/TherapistsReview';
import colors from '../constants/colors';
import normalize from '../helpers/ResponsiveFont';
import AsyncStorage from '@react-native-community/async-storage';
const DashBoardItems = ({handler, title, source, imageStyle}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.menuItem}>
        <View style={{...styles.imageView, ...imageStyle}}>
          <Image source={source} style={{width: '100%', height: '100%'}} />
        </View>
        <Text style={styles.menu}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CustomDrawerComponent = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: hp('20%'),
        }}>
        {/* <DashBoardItems
          handler={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Dashboard');
          }}
          title={'Dashboard'}
        />
        <DashBoardItems
          handler={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Handouts');
          }}
          title={'Handouts'}
        />
        <DashBoardItems
          handler={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Assessments');
          }}
          title={'Assessments'}
        /> */}

        <DashBoardItems
          handler={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('TherapistsReview');
          }}
          title={'Therapists Reviews'}
          source={require('../assets/review.png')}
        />
        <DashBoardItems
          // handler={() => {
          //   props.navigation.toggleDrawer();
          //   props.navigation.navigate('Profile');
          // }}
          handler={() => {
            AsyncStorage.clear();
            props.navigation.navigate('Auth');
          }}
          title={'Logout'}
          source={require('../assets/logout.png')}
          imageStyle={{width: normalize(20), height: normalize(19)}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const DrawerNavigator = createDrawerNavigator(
  {
    Dashboard: TabNavigator,
    Handouts: Handouts,
    Assessments: Assessment,
    Profile: Profile,
    TherapistsReview: TabNavigator,
    // Logout: Logout,
  },
  {contentComponent: CustomDrawerComponent},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK_BLUE,
  },

  menuItem: {
    flexDirection: 'row',
    padding: '3%',
    paddingTop: normalize(20),
  },
  menu: {
    //  fontWeight: '400',
    marginLeft: normalize(10),
    color: colors.WHITE,
    fontSize: normalize(13),
    fontFamily: 'Poppins-Regular',
  },
  scrollView: {
    height: '100%',
    marginTop: normalize(100),
    borderTopWidth: 1,
    borderTopColor: colors.WHITE,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imageView: {
    width: normalize(21.3),
    height: normalize(15),
    alignSelf: 'center',
  },
});

export default DrawerNavigator;
