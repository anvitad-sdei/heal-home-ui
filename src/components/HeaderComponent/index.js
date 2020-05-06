import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const HeaderComponent = props => {
  const {
    leftIcon,
    rightIcon,
    centerTitle,
    leftIconPress,
    rightIconPress,
    leftStyle,
  } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftComponent}>
          <TouchableOpacity onPress={leftIconPress}>
            <Image source={leftIcon} style={styles.leftIconStyle} />
          </TouchableOpacity>
        </View>

        <View style={styles.centerComponent}>
          <Text style={styles.centerText}>{centerTitle}</Text>
        </View>

        <View style={styles.rightComponent}>
          <TouchableOpacity onPress={rightIconPress}>
            {/* <Avatar
              source={rightIcon}
              overlayContainerStyle={{backgroundColor: colors.BLUE}}
              containerStyle={{
                height: normalize(24),
                width: normalize(20),
              }}
            /> */}
            <Image source={rightIcon} style={styles.rightIconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  leftComponent: {
    width: '13%',
    //borderWidth: 1,
  },
  leftIconStyle: {
    width: normalize(24), //38
    height: normalize(15), //19
    marginLeft: normalize(15),
  },
  rightIconStyle: {
    width: normalize(20), //38
    height: normalize(25), //19
    marginLeft: normalize(15),
  },
  centerComponent: {
    paddingTop: normalize(12),
    width: '60%',
    // borderWidth: 1,
  },
  rightComponent: {
    //borderWidth: 1,
    width: '12%',
  },

  centerText: {
    textAlign: 'center',
    fontSize: normalize(20),
    color: colors.WHITE,
  },
});

export default HeaderComponent;
