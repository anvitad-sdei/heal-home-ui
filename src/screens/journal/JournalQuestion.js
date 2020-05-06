import React, {Component} from 'react';
import {Text, View} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';

export default class JournalQuestion extends Component {
  render() {
    return (
      <MasterLayout>
        <View style={styles.topView}>
          <HeaderComponent
            leftIcon={require('../../assets/menu.png')}
            centerTitle="Dashboard"
            rightIcon={require('../../assets/bell.png')}
            leftIconPress={() => alert('left')}
            rightIconPress={() => alert('right')}
          />
        </View>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  topView: {
    height: normalize(60),
    //  borderWidth: 1,
    backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    marginBottom: 10,
  },
});
