import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';

class TherapistsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
    };
  }
  render() {
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Request Session"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            onPress={() =>
              this.props.navigation.navigate('Sessions', {
                id: this.state.id,
              })
            }>
            textInComponent
          </Text>
        </View>
      </MasterLayout>
    );
  }
}

export default TherapistsList;
