import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';

const CustomRadioButton = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
      <TouchableOpacity>
        <View
          style={{
            width: normalize(12),
            height: normalize(12),
            borderRadius: normalize(12),
            borderWidth: 1,
            borderColor: colors.BLUE,
          }}>
          <View
            style={{
              width: normalize(7),
              height: normalize(7),
              borderRadius: normalize(7),
              borderWidth: 1,
              borderColor: colors.BLUE,
              backgroundColor: colors.BLUE,
              alignSelf: 'center',
              marginTop: normalize(1),
            }}
          />
        </View>
      </TouchableOpacity>
      {/* <Text>Yes</Text> */}
    </View>
  );
};

export default CustomRadioButton;
