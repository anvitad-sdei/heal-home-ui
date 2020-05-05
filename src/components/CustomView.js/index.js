import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import RoundedButton from '../../components/Buttons/RoundedButton';
const CustomView = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>09-03.2020</Text>
        <Text style={styles.textStyle}>Monday</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.drinkTitle}>No. of Drinks</Text>
        <View style={styles.countView}>
          <Text style={styles.iconText}>-</Text>
          <Text style={styles.midText}>1</Text>
          <Text style={styles.iconText}>+</Text>
        </View>
      </View>
      <View>
        <RoundedButton title={'Save'} buttonStyle={styles.buttonStyle} />
      </View>
    </View>
  );
};

export default CustomView;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    width: wp(80),
    alignSelf: 'center',
    marginVertical: hp(2),
    borderColor: colors.GRAY_NINE,
    borderRadius: normalize(5),
    paddingHorizontal: wp(5),
    backgroundColor: colors.WHITE,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: normalize(5),
  },
  textStyle: {
    fontSize: normalize(12),
    color: colors.LIGHT_GRAY,
  },
  drinkTitle: {
    color: colors.BLACK_THIRD,
    fontSize: normalize(14),
    alignSelf: 'center',
  },
  buttonStyle: {
    marginVertical: normalize(10),
    borderRadius: normalize(15),
    backgroundColor: colors.BLUE,
  },
  countView: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: normalize(112),
    height: normalize(35),
    borderRadius: normalize(8),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.LIGHT_BLUE,
  },
  midText: {
    fontSize: normalize(12),
    color: colors.WHITE,
  },
  iconText: {
    fontSize: normalize(20),
    color: colors.WHITE,
  },
});
