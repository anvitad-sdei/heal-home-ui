import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Avatar} from 'react-native-elements';
const CardView = props => {
  const {name, degree, experience, specilization, timing, source} = props;
  return (
    <View>
      <View style={styles.sliderView}>
        <View style={styles.sessionView}>
          <View style={styles.userImageView}>
            <Avatar size="large" source={source} />
          </View>
          <View style={{padding: normalize(10)}}>
            <Text style={styles.userName}>{name}</Text>
            <View style={styles.introView}>
              <Text style={styles.textColor}>{degree}</Text>
              <Text style={styles.textColor}>{specilization}</Text>
              <Text style={styles.textColor}>{experience}</Text>
            </View>
          </View>
        </View>
        <View style={styles.socialView}>
          <View style={styles.leftView}>
            <Text style={styles.timing}>{timing}</Text>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity onPress={() => alert('message')}>
              <Image
                source={require('../../assets/message3x.png')}
                style={styles.socialImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('video')}>
              <Image
                source={require('../../assets/video3x.png')}
                style={styles.socialImageVideo}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  sliderView: {
    // height: hp(25),
    // margin: 5,
    height: normalize(140),
    borderRadius: normalize(5),
    backgroundColor: colors.WHITE,
    //backgroundColor: colors.LIGHT_GRAY,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sessionView: {flexDirection: 'row'},
  userName: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: colors.GRAY_FIVE,
  },
  leftView: {
    alignSelf: 'center',
  },
  timing: {
    fontSize: normalize(10),
    color: colors.GREEN,
    fontFamily: 'Poppins-Regular',
  },
  rightView: {
    flexDirection: 'row',
    paddingBottom: normalize(10),
  },
  userImageView: {alignSelf: 'center', paddingHorizontal: wp(3)},
  socialImage: {width: normalize(36), height: normalize(36)},
  socialImageVideo: {
    width: normalize(36),
    height: normalize(36),
    marginLeft: normalize(10),
  },
  introView: {
    borderWidth: 1,
    width: normalize(155),
    borderRadius: normalize(4),
    paddingVertical: normalize(3),
    paddingHorizontal: normalize(8),
    borderColor: colors.GRAY_LIGHT,
  },
  textColor: {
    color: colors.GRAY_PLACE,
    fontSize: normalize(10),
    fontFamily: 'Poppins-Regular',
  },
});
