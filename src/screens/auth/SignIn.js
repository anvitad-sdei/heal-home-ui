import React from 'react';
import {View, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MasterLayout from '../../components/Layout/MasterLayout';
import {login} from '../../redux/actions';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';
class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  loginHandler = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.login();
  };
  render() {
    return (
      <MasterLayout>
        <View>
          <Button title="Sign in!" onPress={() => this.loginHandler()} />
        </View>
        <Icon name="home" type="font-awesome" color="#517fa4" />
      </MasterLayout>
    );
  }
}

export default connect(
  null,
  {login},
)(SignIn);
