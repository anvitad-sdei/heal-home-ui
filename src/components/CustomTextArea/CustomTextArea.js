import React from 'react';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {Input} from 'react-native-elements';

const CustomTextArea = props => {
  const {value, onChangeText, title} = {props};
  return (
    <View style={styles.textAreaView}>
      <Text style={styles.question}>{title}</Text>

      <View style={styles.MainContainer}>
        <TextInput
          style={styles.TextInputStyleClass}
          underlineColorAndroid="transparent"
          placeholder={'Type your answer here'}
          placeholderTextColor={colors.GRAY_PLACE}
          numberOfLines={10}
          multiline={true}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
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
    marginBottom: normalize(5),
    marginTop: normalize(10),
  },
  MainContainer: {
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    justifyContent: 'center',
  },

  TextInputStyleClass: {
    borderWidth: 1,
    borderColor: colors.GRAY_LINE,
    borderRadius: normalize(5),
    height: normalize(69),
  },
});
