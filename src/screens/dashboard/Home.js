import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import RoundedButton from '../../components/Buttons/RoundedButton';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {Image} from 'react-native-elements';
import CustomImage from '../../components/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Home extends React.Component {
  render() {
    return (
      <MasterLayout>
        <View style={styles.topView}>
          <HeaderComponent
            //leftIcon={require('../../assets/menu.png')}
            centerTitle="Dashboard"
            rightIcon="bell"
            leftIconPress={() => alert('left')}
            rightIconPress={() => alert('right')}
          />
        </View>

        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </MasterLayout>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  topView: {
    height: hp(30),
    //  borderWidth: 1,
    backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
  },
});
