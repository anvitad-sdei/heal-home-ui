import React from 'react';
import {Text, View, StyleSheet, Dimensions, Platform} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
import normalize from '../../helpers/ResponsiveFont';
import CustomImage from '../Image';
import colors from '../../constants/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const isIOS = Platform.OS === 'ios' ? true : false;
const Images = props => {
  const {
    sourceBackImage,
    source,
    mainTitle,
    subTitle,
    title,
    videoImageStyle,
    journalImageStyle,
  } = props;
  return (
    <View
      style={{
        //borderWidth: 1,
        alignItems: 'center',
        width: DEVICE_WIDTH,
      }}>
      <View>
        <View style={styles.backLightImage}>
          <CustomImage source={sourceBackImage} />
        </View>
        <View
          style={{
            ...styles.goalImageStyle,
            ...videoImageStyle,
            ...journalImageStyle,
          }}>
          <CustomImage source={source} />
        </View>
      </View>
      <View style={styles.headingView}>
        <Text style={[styles.heading, styles.textAlign]}>{mainTitle}</Text>
        <Text style={[styles.subHeading, styles.textAlign]}>{subTitle}</Text>
        <Text style={[styles.subHeading, styles.textAlign]}>{title}</Text>
      </View>
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  backLightImage: {
    width: normalize(218),
    // width: DEVICE_WIDTH,
    height: normalize(200),
    alignSelf: 'center',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: colors.BLUE,
    marginTop: hp(8),
    marginBottom: hp(6),
  },
  goalImageStyle: {
    height: normalize(150),
    width: normalize(150),
    alignSelf: 'center',
    position: 'absolute',
    top: '29%',
    //borderWidth: 1,
  },
  videoImageStyle: {
    height: normalize(178),
    width: normalize(140),
    alignSelf: 'center',
    position: 'absolute',
    top: '24%',
    // borderWidth: 1,
  },
  journalImageStyle: {
    height: normalize(140),
    width: normalize(150),
    alignSelf: 'center',
    position: 'absolute',
    top: '29%',
    // borderWidth: 1,
  },
  headingView: {marginVertical: 2},
  // dotView: {
  //   //marginTop: hp(3),
  //   marginTop: hp(isIOS ? 3 : 1),
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  // dotOne: {
  //   height: normalize(8),
  //   width: normalize(8),
  //   borderRadius: 10,
  // },
  // dotSecond: {
  //   height: normalize(8),
  //   width: normalize(8),
  //   borderRadius: 10,
  //   marginHorizontal: 10,
  // },
  // buttonView: {
  //   flexDirection: 'row',
  //   // marginTop: hp(16),
  //   marginTop: hp(isIOS ? 16 : 12),
  //   justifyContent: 'space-around',
  //   width: '80%',
  //   //  borderWidth: 1,
  // },
  // backArrowButton: {
  //   marginTop: 7,
  //   // borderWidth: 1,
  //   borderRadius: 20,
  //   backgroundColor: colors.BLUE,
  //   color: colors.WHITE,
  // },
  // buttonStyle: {
  //   width: normalize(150),
  //   borderRadius: 30,
  //   backgroundColor: colors.WHITE,
  //   borderWidth: 1,
  //   borderColor: colors.BLUE,
  //   //  marginTop: hp(16),
  //   marginTop: hp(isIOS ? 16 : 12),
  //   alignSelf: 'center',
  // },
  // buttonStyleSecond: {
  //   width: normalize(150),
  //   borderRadius: 30,
  //   backgroundColor: colors.WHITE,
  //   borderWidth: 1,
  //   borderColor: colors.BLUE,
  //   alignSelf: 'center',
  // },

  // titleStyle: {
  //   color: colors.BLUE,
  //   fontSize: normalize(14),
  //   fontFamily: 'Poppins-SemiBold',
  // },
  heading: {
    fontSize: normalize(20),
    marginBottom: hp(2),
    color: colors.GRAY_FIVE,
    fontFamily: 'Poppins-SemiBold',
  },
  subHeading: {
    fontSize: normalize(14),
    color: colors.GRAY_FIVE,
    fontFamily: 'Poppins-Light',
  },
  textAlign: {textAlign: 'center'},
});
