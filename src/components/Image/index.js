import React from 'react';
import {Image} from 'react-native-elements';

const CustomImage = props => {
  const {source} = props;
  return <Image source={source} style={{width: '100%', height: '100%'}} />;
};

export default CustomImage;
