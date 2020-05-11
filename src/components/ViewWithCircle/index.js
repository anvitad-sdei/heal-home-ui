import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
const ViewWithCircle = props => {
  const {source} = props;
  return (
    <View style={styles.sessionView}>
      <View style={styles.circleViewImage}>
        <Image
          source={require('../../assets/circle.png')}
          style={styles.imageStyle}
        />
        <View style={styles.innerViewImage}>
          <Image source={source} style={styles.imageStyle} />
        </View>
      </View>
      <View style={styles.childrenView}>{props.children}</View>
    </View>
  );
};

export default ViewWithCircle;

const styles = StyleSheet.create({
  sessionView: {
    // zIndex: 999999,
    width: '90%',
    backgroundColor: colors.WHITE,
    position: 'absolute',
    alignSelf: 'center',
    top: normalize(-50),
    // height: hp(50),
    borderRadius: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingBottom: normalize(30),
  },
  circleViewImage: {
    width: normalize(80),
    height: normalize(80),
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
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
  childrenView: {
    borderWidth: 1,
    marginTop: normalize(80),
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginBottom: normalize(200),
  },
});
