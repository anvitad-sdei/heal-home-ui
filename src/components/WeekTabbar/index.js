import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon, Avatar, Image} from 'react-native-elements';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class CustomTabBar extends Component {
  render() {
    const {handler, defaultWeek} = this.props;
    return (
      <View style={styles.weekView}>
        <TouchableOpacity onPress={handler}>
          <View style={styles.imageView}>
            <Image
              source={require('../../assets/calendar.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.textStyle} onPress={handler}>
          {` ${defaultWeek || 1}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weekView: {
    height: normalize(40),
    width: normalize(300),
    backgroundColor: colors.WHITE,
    borderRadius: normalize(20),
    //borderWidth: 1,
    position: 'absolute',
    top: normalize(-15),
    //left: normalize(12),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    //paddingRight: normalize(20),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    zIndex: 1,
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(150),
  },
  imageView: {width: normalize(20), height: normalize(20)},
  textStyle: {
    fontSize: normalize(14),
    color: colors.BLUE,
    marginLeft: normalize(5),
  },
});
