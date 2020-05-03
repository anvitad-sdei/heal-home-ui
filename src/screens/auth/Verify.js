import React from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
export default class Verify extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the Verify!',
  };

  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        {/* <Button title="Actually, sign me out :)" onPress={this._signOutAsync} /> */}
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('App');
  };

  //   _signOutAsync = async () => {
  //     await AsyncStorage.clear();
  //     this.props.navigation.navigate('Auth');
  //   };
}
