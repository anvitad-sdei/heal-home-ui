import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';

const RoundedButton = props => {
  const {title, onPress, buttonStyle, titleStyle} = props;
  return (
    <View>
      <Button
        title={title}
        onPress={onPress}
        buttonStyle={buttonStyle}
        titleStyle={titleStyle}
      />
    </View>
  );
};

export default RoundedButton;
