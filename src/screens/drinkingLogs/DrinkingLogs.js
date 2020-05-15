import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import CustomDrinkingView from '../../components/CustomDrinkingView.js';
import CustomTabBar from '../../components/WeekTabbar';
import {ScrollView} from 'react-native-gesture-handler';
class DrinkingLogs extends Component {
  render() {
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Drinking Logs"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar defaultWeek={'Week 1'} />
        <ScrollView>
          <View style={styles.drinkViewBox}>
            <CustomDrinkingView />
          </View>
        </ScrollView>
      </MasterLayout>
    );
  }
}

export default DrinkingLogs;

const styles = StyleSheet.create({
  drinkViewBox: {
    // borderWidth: 1,
    marginTop: normalize(40),
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
