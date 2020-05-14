import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
const ViewWithCircle = props => {
  const {source, sourceCircle} = props;
  return (
    <View style={styles.sessionView}>
      <View style={styles.circleViewImage}>
        <Image source={sourceCircle} style={styles.imageStyle} />
        <View style={styles.innerViewImage}>
          <Image source={source} style={styles.imageStyle} />
        </View>
      </View>
    </View>
  );
};

export default ViewWithCircle;

const styles = StyleSheet.create({
  sessionView: {
    width: '90%',
    backgroundColor: colors.WHITE,
    position: 'absolute',
    alignSelf: 'center',
    top: normalize(-50),
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
    height: normalize(100),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
    // borderWidth: 1,
  },
  circleViewImage: {
    width: normalize(80),
    height: normalize(80),
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
    //  borderWidth: 1,
  },
  innerViewImage: {
    alignItems: 'center',
    width: normalize(50),
    height: normalize(50),
    position: 'absolute',
    alignSelf: 'center',
    marginTop: normalize(15),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
