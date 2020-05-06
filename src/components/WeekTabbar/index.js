import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
export default class CustomTabBar extends Component {
  render() {
    return (
      <View style={styles.weekView}>
        <Text style={styles.textStyle} onPress={() => alert('week1')}>
          Week 1
        </Text>
        <Text style={styles.textStyle} onPress={() => alert('week2')}>
          Week 2
        </Text>
        <Text style={styles.textStyle} onPress={() => alert('week3')}>
          Week 3
        </Text>
        <Text style={styles.textStyle} onPress={() => alert('week4')}>
          Week 4
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
    top: -33,
    left: normalize(12),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textStyle: {
    fontSize: normalize(14),
    color: colors.GRAY_EIGHT,
  },
});
