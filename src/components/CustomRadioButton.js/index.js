import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';

const CustomRadioButton = props => {
  const {handler, title, status} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'baseline',
      }}>
      <TouchableOpacity onPress={handler}>
        <View
          style={{
            width: normalize(12),
            height: normalize(12),
            borderRadius: normalize(12),
            borderWidth: 1,
            borderColor: status ? colors.BLUE : colors.GRAY_LINE,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: normalize(4),
          }}>
          <View
            style={{
              width: normalize(6.5),
              height: normalize(6.5),
              borderRadius: normalize(7),
              backgroundColor: status ? colors.BLUE : colors.WHITE,
            }}
          />
        </View>
      </TouchableOpacity>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CustomRadioButton;
