import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import CustomView from '../../components/CustomView.js';
import CustomTabBar from '../../components/WeekTabbar';
class DrinkingLogs extends Component {
  render() {
    return (
      <MasterLayout
        masterStyle={{backgroundColor: colors.GRAY_SECOND}}
        leftIcon={require('../../assets/back-arrow.png')}
        centerTitle="Drinking Logs"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar />
        <View style={styles.drinkViewBox}>
          <CustomView />
        </View>
      </MasterLayout>
    );
  }
}

export default DrinkingLogs;

const styles = StyleSheet.create({
  topView: {
    height: normalize(80),
    backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    marginBottom: 10,
  },

  drinkViewBox: {
    // borderWidth: 1,
    marginTop: hp(4),
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: normalize(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
