import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import CustomImage from '../../components/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonWithIcon from '../../components/Buttons/ButtonWithIcon';
import Carousel from '../../components/Carousel.js';
export default class Home extends React.Component {
  render() {
    return (
      <MasterLayout>
        <View style={{backgroundColor: colors.GRAY_SECOND, height: '100%'}}>
          <View style={styles.topView}>
            <HeaderComponent
              leftIcon={require('../../assets/menu.png')}
              centerTitle="Dashboard"
              rightIcon={require('../../assets/bell.png')}
              leftIconPress={() => alert('left')}
              rightIconPress={() => alert('right')}
            />
          </View>

          <Button
            title="Actually, sign me out :)"
            onPress={this._signOutAsync}
          />
          <ButtonWithIcon
            colors={[colors.LIGHT_PINK, colors.PINK]}
            title="Drinking Log"
            source={require('../../assets/drinks.png')}
            imageView={{height: normalize(22), width: normalize(22)}}
            onPress={() => alert('Drinking')}
          />
          <ButtonWithIcon
            colors={[colors.LIGHT_BLUE, colors.LIGHT_BLUE_THIRD]}
            title="Journaling"
            source={require('../../assets/interface.png')}
            imageView={{height: normalize(21), width: normalize(24)}}
            onPress={() => this.props.navigation.navigate('Journaling')}
          />
          <ButtonWithIcon
            colors={[colors.LIGHT_BLUE_ONE, colors.LIGHT_BLUE_SECOND]}
            title="My Therapists"
            source={require('../../assets/people.png')}
            imageView={{height: normalize(27), width: normalize(24)}}
            titleStyle={{color: colors.DARK_TEXT_BLUE}}
          />
          <View
            style={{
              width: '85%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: hp(1),
            }}>
            <Text style={styles.sessionTitle}>Upcoming Sessions</Text>
            {/* <Carousel /> */}
          </View>
        </View>
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
    marginBottom: 10,
  },
  sessionTitle: {
    fontSize: normalize(19),
    fontFamily: 'Poppins-Medium',
  },
});
