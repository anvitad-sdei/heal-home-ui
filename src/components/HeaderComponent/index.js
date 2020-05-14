import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';

const HeaderComponent = props => {
  const {
    leftIcon,
    rightIcon,
    centerTitle,
    leftIconPress,
    rightIconPress,
    leftStyle,
    headerStyle,
    centerTitleStyle,
  } = props;
  return (
    <View style={{...styles.container, ...headerStyle}}>
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
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.BLUE,
    height: normalize(80),
    alignItems: 'center',
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
  },
  leftComponent: {
    width: '13%',
    // borderWidth: 1,
    alignSelf: 'center',
  },
  leftIconStyle: {
    width: normalize(24), //38
    height: normalize(15), //19
    marginLeft: normalize(15),
  },
  rightIconStyle: {
    width: normalize(20), //38
    height: normalize(25), //19
  },
  centerComponent: {
    width: '60%',
    //borderWidth: 1,
    alignSelf: 'center',
  },
  rightComponent: {
    // borderWidth: 1,
    width: '12%',
    alignSelf: 'center',
  },

  centerText: {
    textAlign: 'center',
    fontSize: normalize(20),
    color: colors.WHITE,
    fontFamily: 'Poppins-Bold',
  },
});

export default HeaderComponent;
