import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import AsyncStorage from '@react-native-community/async-storage';
import RoundedButton from '../../components/Buttons/RoundedButton';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
export default class Profile extends Component {
  render() {
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Log out"
        //rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        //rightIconPress={() => alert('right')}
      >
        <View
          style={{
            marginLeft: 'auto',
            width: '80%',
            marginRight: 'auto',
            marginTop: normalize(50),
          }}>
          {/* <Button
            title="Are you sure you want to logout"
            onPress={this._signOutAsync}
          /> */}
          <RoundedButton
            title="Logout"
            onPress={this._signOutAsyn}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
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
  buttonStyle: {
    borderRadius: normalize(20),
    backgroundColor: colors.BLUE,
  },
  titleStyle: {
    fontSize: normalize(15),
    fontFamily: 'Poppins-Bold',
  },
});
