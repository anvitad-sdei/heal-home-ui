import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import normalize from '../../helpers/ResponsiveFont';
const HeaderComponent = props => {
  const {
    leftIcon,
    rightIcon,
    centerTitle,
    leftIconPress,
    rightIconPress,
  } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftComponent}>
          <TouchableOpacity onPress={leftIconPress}>
            <Icon
              name={leftIcon}
              size={normalize(22)}
              // style={styles.leftIconStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.centerComponent}>
          <Text style={styles.centerText}>{centerTitle}</Text>
        </View>

        <View style={styles.rightComponent}>
          <TouchableOpacity onPress={rightIconPress}>
            <Icon
              name={rightIcon}
              size={normalize(22)}
              //style={styles.rightIconStyle}
            />
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
    // borderWidth: 1,
    width: '20%',
  },
  leftIconStyle: {fontSize: normalize(20)},
  centerComponent: {
    //borderWidth: 1,
    width: '60%',
  },
  rightComponent: {
    //borderWidth: 1,
    width: '20%',
  },
  rightIconStyle: {fontSize: normalize(20)},
  centerText: {textAlign: 'center', fontSize: normalize(20)},
});

export default HeaderComponent;
