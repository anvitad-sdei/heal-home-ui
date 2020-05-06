import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';

const ButtonWithIcon = props => {
  const {onPress, date} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textStyle}>{date}</Text>
        </View>
        <View>
          <Icon name="arrow-forward" color={colors.WHITE} type="FontAwesome" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: normalize(300),
    // height: normalize(45),
    width: wp(90),
    height: hp(6.5),
    alignSelf: 'center',
    //borderWidth: 1,
    alignItems: 'center',
    borderRadius: normalize(30),
    paddingHorizontal: normalize(20),
    backgroundColor: colors.LIGHT_BLUE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: normalize(20),
  },
  textStyle: {
    color: colors.WHITE,
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
  },
});
