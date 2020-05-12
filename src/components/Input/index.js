import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Avatar} from 'react-native-elements';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';

const InputField = props => {
  const {
    placeholder,
    onChangeText,
    secureTextEntry,
    source,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    value,
    autoCapitalize,
    containerInputStyle,
    onPress,
  } = props;
  return (
    <View style={{...styles.container, ...containerInputStyle}}>
      <TouchableOpacity onPress={onPress}>
        <Avatar
          source={source}
          containerStyle={styles.containerStyle}
          overlayContainerStyle={styles.overlayContainerStyle}
        />
      </TouchableOpacity>

      <Input
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        inputStyle={inputStyle}
        value={value}
        autoCapitalize={autoCapitalize || 'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.BLACK_SECOND,
    marginBottom: hp(2),
    // borderWidth: 1,
  },

  containerStyle: {
    width: normalize(16),
    height: normalize(17),
    marginTop: 9,
  },
  overlayContainerStyle: {
    backgroundColor: colors.WHITE,
  },
});
export default InputField;
