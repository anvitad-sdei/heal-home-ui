import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import AsyncStorage from '@react-native-community/async-storage';
export default class Handouts extends Component {
  render() {
    return (
      <MasterLayout>
        <View>
          <Text> Handouts </Text>
          <Button
            title="Actually, sign me out :)"
            onPress={this._signOutAsync}
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
