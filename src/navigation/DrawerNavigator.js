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
} from 'react-native';
import Handouts from '../screens/handouts/Handouts';
import Assessment from '../screens/assessments/Assessment';
import TabNavigator from '../navigation/TabNavigator';
const DashBoardItems = ({handler, title}) => {
  return (
    <TouchableOpacity onPress={handler}>
      <View style={styles.menuItem}>
        <Text style={styles.menu} t>
          {title}
        </Text>
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
        <DashBoardItems
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
        />
        <DashBoardItems
          handler={() => {
            props.navigation.toggleDrawer();
            props.navigation.navigate('Profile');
          }}
          title={'Profile'}
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
    // Logout: Logout,
  },
  {contentComponent: CustomDrawerComponent},
);

const styles = StyleSheet.create({
  container: {flex: 1},
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginTop: hp(2),
  },
  avatar: {width: 100, height: 100, borderRadius: 100},
  name: {fontWeight: '700', marginVertical: 5},
  menuItem: {
    borderBottomWidth: 0.5,
    padding: '3%',
    borderBottomColor: 'black',
    borderTopColor: 'red',
  },
  menu: {
    fontWeight: '400',
    color: 'black',
    fontSize: 20,
    // fontFamily: 'FuturaPT-Heavy',
  },
  scrollView: {height: '100%', marginTop: hp(2)},
});

export default DrawerNavigator;
