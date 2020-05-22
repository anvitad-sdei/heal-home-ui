import React from 'react';
import normalize from '../../helpers/ResponsiveFont';
import {View, StyleSheet} from 'react-native';
import CustomRadioButton from '../CustomRadioButton.js';

const MultiSelectOptions = ({
  handler,
  mq1,
  mq2,
  mq3,
  mq4,
  mq5,
  mqHandler,
  mq2Handler,
  mq3Handler,
  mq4Handler,
  mq5Handler,
  title,
}) => {
  return (
    <View style={styles.container}>
      <CustomRadioButton
        title={title}
        status={mq1 || false}
        handler={mqHandler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      {/* <CustomRadioButton
        title="Monthly or Less"
        status={mq2 || false}
        handler={mq2Handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Monthly"
        status={mq3 || false}
        handler={mq3Handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Weekly"
        status={mq4 || false}
        handler={mq4Handler}
        radioButtonStyle={styles.radioButtonStyle}
      />
      <CustomRadioButton
        title="Daily or almost daily"
        status={mq5 || false}
        handler={mq5Handler}
        radioButtonStyle={styles.radioButtonStyle}
      /> */}
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
