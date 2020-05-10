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
        <View style={styles.innerView}>
          <Text style={styles.textStyle} onPress={handler}>
            {`Week ${defaultWeek || 1}`}
          </Text>

          <TouchableOpacity onPress={handler}>
            <View style={styles.imageView}>
              <Image
                source={require('../../assets/calendar.png')}
                style={{maxWidth: 20, height: '100%'}}
              />
            </View>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'flex-end',
    paddingRight: normalize(20),
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
  imageView: {width: 20, height: 20},
  textStyle: {
    fontSize: normalize(14),
    color: colors.GRAY_EIGHT,
  },
});
