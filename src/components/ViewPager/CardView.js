import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardView = props => {
  const {title, time} = props;
  return (
    <View>
      <View style={styles.sliderView}>
        {/* <View style={{padding: normalize(20)}}>
          <Text style={{fontSize: normalize(14)}}>{title}</Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              marginTop: normalize(20),
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: normalize(12)}}>{time}</Text>
            <View style={{flexDirection: 'row'}}>
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
        </View> */}
        <View style={{width: '60%'}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: normalize(14)}}>
            {title}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: normalize(10),
              color: colors.GRAY_PLACE_COLOR,
            }}>
            {time}
          </Text>
        </View>
        <View style={{width: '30%'}}>
          <View style={{flexDirection: 'row'}}>
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
    borderRadius: normalize(10),
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    // borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(10),
    padding: normalize(10),
  },
  socialImage: {width: normalize(36), height: normalize(36)},
  socialImageVideo: {
    width: normalize(36),
    height: normalize(36),
    marginLeft: normalize(10),
  },
});
