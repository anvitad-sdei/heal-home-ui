import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import RoundedButton from '../Buttons/RoundedButton';
const CustomDrinkingView = props => {
  const {date, day, drinks, decrement, increment, onPress} = props;
  console.log('drinks', drinks);
  return (
    <View style={styles.wrapper}>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>{date}</Text>
        <Text style={styles.textStyle}>{day}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.drinkTitle}>No. of Drinks</Text>
        <View style={styles.countView}>
          <TouchableOpacity onPress={decrement}>
            <Text style={styles.iconText} onPress={decrement}>
              -
            </Text>
          </TouchableOpacity>
          <Text style={styles.midText}>{drinks}</Text>
          <TouchableOpacity onPress={increment}>
            <Text style={styles.iconText} onPress={increment}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <RoundedButton
          title={'Save'}
          buttonStyle={styles.buttonStyle}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default CustomDrinkingView;

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
