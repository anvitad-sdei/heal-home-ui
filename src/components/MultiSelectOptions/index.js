import React from 'react';
import normalize from '../../helpers/ResponsiveFont';
import {View, StyleSheet} from 'react-native';
import CustomRadioButton from '../CustomRadioButton.js';

const MultiSelectOptions = ({status, handler}) => {
  return (
    <View style={styles.container}>
      <CustomRadioButton
        title="Never"
        status={status}
        handler={handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Monthly or Less"
        status={!status}
        handler={handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Monthly"
        status={!status}
        handler={handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Weekly"
        status={!status}
        handler={handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Daily or almost daily"
        status={!status}
        handler={handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(20),
  },
  radioButtonStyle: {paddingVertical: normalize(5)},
});

export default MultiSelectOptions;
