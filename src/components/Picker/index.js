/* import React from 'react';
import {Picker} from '@react-native-community/picker';
import {View, Text} from 'react-native';

const CustomPicker = props => {
  const {
    selectedValue,
    handler,
    itemStyle,
    containerStyle,
    height,
    data,
  } = props;
  return (
    <View style={containerStyle}>
      {data.length ? (
        <Picker
          selectedValue={selectedValue}
          style={{height: height}}
          itemStyle={itemStyle}
          onValueChange={(itemValue, itemIndex) => {
            handler(itemValue);
          }}>
          {data.map((item, i) => {
            return <Picker.Item label={`Week ${item}`} value={item} key={i} />;
          })}
        </Picker>
      ) : (
        <Text>No Data</Text>
      )}
    </View>
  );
};

export default CustomPicker;
 */