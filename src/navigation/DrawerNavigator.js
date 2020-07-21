import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
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
import PostAuthStack from '../navigation/PostAuthStack';
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
        <DashBoardItems
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
    Dashboard: PostAuthStack,
    // Logout: Logout,
  },
  {contentComponent: CustomDrawerComponent},
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
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
