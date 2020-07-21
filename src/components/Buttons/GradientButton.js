import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import LinearGradient from 'react-native-linear-gradient';
import ImagesName from '../../constants/ImagesName';

const GradientButton = props => {
  const {
    title,
    source,
    colors,
    imageView,
    titleStyle,
    onPress,
    iconColor,
  } = props;
  return (
    <View style={styles.shadowButton}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={colors}
          style={styles.buttonView}>
          <View style={styles.avatarTextView}>
            <View style={{ ...styles.imageView, ...imageView }}>
              <Image source={source} style={styles.imageStyle} />
            </View>
            <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
          </View>
          <View>
            <Image
              source={ImagesName.ic_forwardArrow}
              style={{
                height: normalize(10), width: normalize(20),
                
                //color: iconColor
              }} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  shadowButton: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonView: {
    height: hp(6.5),
    width: wp(90),
    // borderWidth: 1,
    // height: normalize(40),
    // width: normalize(290),
    borderRadius: normalize(30),
    alignSelf: 'center',
    backgroundColor: colors.PINK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: normalize(7),
    // marginBottom: normalize(15),
  },
  avatarTextView: { flexDirection: 'row', alignItems: 'center' },
  imageStyle: { height: '100%', width: '100%' },
  title: {
    tintColor:'white',
    color: colors.WHITE,
    marginHorizontal: 15,
    fontSize: normalize(16),
    fontFamily: 'Poppins-Regular',
  },
});
