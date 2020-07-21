import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagesName from '../../constants/ImagesName';

const CardView = props => {
  const { title, time, onPressCall,onPressChat } = props;
  return (
    <View>
      <View style={styles.sliderView}>
        <View style={{ width: '60%' }}>
          <Text style={{ fontFamily: 'Poppins-Medium', fontSize: normalize(14) }}>
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
        <View style={{ width: '30%' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => onPressChat()}>
              <Image
                source={ImagesName.ic_message}
                style={styles.socialImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPressCall()}>
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
  socialImage: { width: normalize(36), height: normalize(36) },
  socialImageVideo: {
    width: normalize(36),
    height: normalize(36),
    marginLeft: normalize(10),
  },
});
