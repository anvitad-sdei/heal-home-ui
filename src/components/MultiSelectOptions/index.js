import React from 'react';
import normalize from '../../helpers/ResponsiveFont';
import {View, StyleSheet} from 'react-native';
import CustomRadioButton from '../CustomRadioButton.js';

const MultiSelectOptions = ({handler, title, status}) => {
  return (
    <View style={styles.container}>
      <CustomRadioButton
        title={title}
        status={status || false}
        handler={handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(8),
  },
  //radioButtonStyle: {paddingVertical: normalize(5)},
});

export default MultiSelectOptions;
