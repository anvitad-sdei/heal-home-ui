import React from 'react';
import {Text, View, StyleSheet, TextInput, Platform} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';

const CustomTextArea = props => {
  const {value, onChangeText, title} = props;
  return (
    <View style={styles.textAreaView}>
      <View style={styles.mainContainer}>
        <Text style={{...styles.question, ...styles.titleStyle}}>{title}</Text>
        <TextInput
          style={styles.textInputStyleClass}
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
    // justifyContent: 'center',
  },

  textInputStyleClass: {
    borderWidth: 1,
    borderColor: colors.GRAY_LINE,
    borderRadius: normalize(5),
    height: normalize(69),
    paddingLeft: normalize(10),
  },
});
