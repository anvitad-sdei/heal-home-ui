import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon, Image} from 'react-native-elements';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import LinearGradient from 'react-native-linear-gradient';

const ButtonWithIcon = props => {
  const {title, source, colors, imageView, titleStyle, onPress} = props;
  return (
    <View
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={colors}
          style={styles.buttonView}>
          <View style={styles.avatarTextView}>
            <View style={{...styles.imageView, ...imageView}}>
              <Image source={source} style={styles.imageStyle} />
            </View>
            <Text style={{...styles.title, ...titleStyle}}>{title}</Text>
          </View>
          <View>
            <Icon name="arrow-forward" size={25} color={colors.WHITE} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithIcon;

const styles = StyleSheet.create({
  buttonView: {
    height: hp(6.5),
    width: wp(85),
    // borderWidth: 1,
    borderRadius: normalize(30),
    alignSelf: 'center',
    backgroundColor: colors.PINK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: hp(1),
  },
  avatarTextView: {flexDirection: 'row', alignItems: 'center'},
  imageView: {height: normalize(24), width: normalize(23)},
  imageStyle: {height: '100%', width: '100%'},
  title: {
    color: colors.WHITE,
    marginHorizontal: 15,
    fontSize: normalize(16),
    fontFamily: 'Poppins-Regular',
  },
});
