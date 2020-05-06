import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {Input} from 'react-native-elements';

const CustomTextArea = props => {
  const {value, onChangeText} = {props};
  return (
    <View style={styles.textAreaView}>
      <Text style={styles.question}>What am I grateful for today?</Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{borderWidth: 1, borderRadius: normalize(3)}}
        multiline={true}
        numberOfLines={4}
        placeholder="Type your answer here"
        placeholderTextColor={colors.GRAY_PLACE}
      />
    </View>
  );
};
export default CustomTextArea;

const styles = StyleSheet.create({
  textAreaView: {
    width: normalize(262),
    alignSelf: 'center',
    padding: normalize(10),
  },
  question: {
    color: colors.DARK_TEXT_BLUE,
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
    marginBottom: normalize(10),
    marginTop: normalize(20),
  },
});
