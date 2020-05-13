import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
const InputFieldDateTime = props => {
  const {onPress, source, dateTimeValue} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.dateTimeView}>
        <View style={styles.imageView}>
          <Image source={source} style={{width: '100%', height: '100%'}} />
        </View>
        <Text style={styles.dateTimeText}>{dateTimeValue}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dateTimeView: {
    borderBottomWidth: 1,
    borderBottomColor: colors.BLUE,
    width: normalize(115),
    flexDirection: 'row',
    paddingBottom: normalize(10),
    marginTop: normalize(10),
  },
  imageView: {width: normalize(16), height: normalize(17)},
  dateTimeText: {
    paddingLeft: normalize(10),
    fontSize: normalize(14),
    color: colors.BLACK_SECOND,
    fontFamily: 'Poppins-Regular',
  },
});

export default InputFieldDateTime;
