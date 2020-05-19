import React from 'react';

import {View, StyleSheet} from 'react-native';
import CustomRadioButton from '../CustomRadioButton.js';

const OptYesNo = ({status, handler}) => {
  return (
    <View style={styles.container}>
      <CustomRadioButton title="Yes" status={status} handler={handler} />
      <CustomRadioButton title="No" status={!status} handler={handler} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});

export default OptYesNo;
