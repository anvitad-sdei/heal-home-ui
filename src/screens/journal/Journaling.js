import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import CustomTabBar from '../../components/WeekTabbar';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import ButtonWithIcon from '../../components/Buttons/ButtonWithIcon';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Journaling extends Component {
  render() {
    return (
      <MasterLayout
        leftIcon={require('../../assets/back-arrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <View style={styles.topView}>
          <CustomTabBar />
        </View>

        <View style={styles.buttonView}>
          <ButtonWithIcon
            onPress={() => this.props.navigation.navigate('JournalingQuestion')}
          />
        </View>
      </MasterLayout>
    );
  }
}
const styles = StyleSheet.create({
  masterStyle: {
    backgroundColor: '#F5F5F5',
  },
  topView: {
    height: normalize(80),
    // backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    marginBottom: 10,
  },
  buttonView: {
    marginTop: normalize(40),
  },
});
