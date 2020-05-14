import React from 'react';

import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
export const CustomDatePicker = ({date, handler}) => {
  return (
    <View
      style={{
        paddingBottom: normalize(10),
      }}>
      <DateTimePicker
        testID="dateTimePicker"
        //  timeZoneOffsetInMinutes={0}
        value={new Date(date)}
        mode={'date'}
        is24Hour={true}
        display="default"
        onChange={handler}
        style={{backgroundColor: '#0000'}}
      />
    </View>
  );
};

export const CustomTimePicker = ({time, handler}) => {
  return (
    <View
      style={{
        paddingBottom: normalize(10),
      }}>
      <DateTimePicker
        testID="dateTimePicker"
        value={new Date(time)}
        mode="time"
        is24Hour={true}
        display="default"
        onChange={handler}
      />
    </View>
  );
};
