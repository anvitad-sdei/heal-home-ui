import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';

export default class Profile extends Component {
  render() {
    return (
      <MasterLayout>
        <View>
          <Text> Profile </Text>
        </View>
      </MasterLayout>
    );
  }
}
