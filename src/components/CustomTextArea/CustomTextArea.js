import React from 'react';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';

const CustomTextArea = props => {
  const {
    value,
    onChangeText,
    title,
    placeholder,
    titleStyle,
    textInputClass,
    textAreaView,
  } = props;
  return (
    <View style={{...styles.textAreaView, ...textAreaView}}>
      <View style={styles.mainContainer}>
        <Text style={{...styles.question, ...titleStyle}}>{title}</Text>
        <TextInput
          style={{...styles.textInputStyleClass, ...textInputClass}}
          underlineColorAndroid="transparent"
          placeholder={placeholder || 'Type your answer here'}
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
    width: normalize(270),
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
  mainContainer: {
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
  },

  textInputStyleClass: {
    borderWidth: 1,
    fontSize: normalize(14),
    borderColor: colors.GRAY_LINE,
    borderRadius: normalize(5),
    height: normalize(69),
    paddingLeft: normalize(10),
  },
});
