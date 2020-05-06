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
        rightIconPress={() => alert('right')}
        masterStyle={{backgroundColor: colors.GRAY_SECOND}}>
        <CustomTabBar />

        <View style={styles.buttonView}>
          <ButtonWithIcon
            date="06-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          />
          <ButtonWithIcon
            date="07-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          />
          <ButtonWithIcon
            date="08-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          />
          <ButtonWithIcon
            date="09-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          />
          <ButtonWithIcon
            date="10-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          />
          <ButtonWithIcon
            date="11-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          />
          <ButtonWithIcon
            date="12-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
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
