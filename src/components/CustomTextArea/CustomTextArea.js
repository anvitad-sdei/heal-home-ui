import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {Input} from 'react-native-elements';

const CustomTextArea = props => {
  const {value, onChangeText} = {props};
  return (
    <View style={styles.textAreaView}>
      <Text style={styles.question}>What am I grateful for today?</Text>
      <View style={styles.textAreaContainer}>
        <Text
          value={value}
          onChangeText={onChangeText}
          style={{borderWidth: 1}}
          // multiline={true}
          numberOfLines={10}
          placeholder="Type your answer here"
          placeholderTextColor={colors.GRAY_PLACE}
        />
      </View>
    </View>
  );
};
export default CustomTextArea;

const styles = StyleSheet.create({
  textAreaView: {
    width: normalize(272),
    alignSelf: 'center',
  },
  question: {
    color: colors.DARK_TEXT_BLUE,
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
    marginBottom: normalize(10),
    marginTop: normalize(20),
  },
  textAreaContainer: {
    borderColor: colors.pink,
    borderWidth: 1,
    borderRadius: 4,
    //marginTop: normalize('-1%'),
  },
});
