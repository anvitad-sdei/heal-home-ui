import React, {Component} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import CustomTabBar from '../../components/WeekTabbar';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import RoundedButton from '../../components/Buttons/RoundedButton';
export default class JournalQuestion extends Component {
  render() {
    return (
      <MasterLayout masterStyle={styles.masterStyle}>
        <KeyboardAvoidingView>
          <View style={styles.topView}>
            <HeaderComponent
              leftIcon={require('../../assets/menu.png')}
              centerTitle="Journaling"
              rightIcon={require('../../assets/bell.png')}
              leftIconPress={() => this.props.navigation.navigate('Journaling')}
              rightIconPress={() => alert('right')}
            />
            <CustomTabBar />
          </View>
          <View style={styles.questionView}>
            <CustomTextArea />
          </View>
          <View style={styles.buttonView}>
            <RoundedButton
              title="Save"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
            />
          </View>
        </KeyboardAvoidingView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  masterStyle: {
    backgroundColor: colors.GRAY_SECOND,
  },
  topView: {
    height: normalize(80),
    backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    marginBottom: 10,
  },
  questionView: {
    //  borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderRadius: normalize(10),
    width: normalize(300),
    marginTop: normalize(40),
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonView: {
    width: normalize(250),
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  buttonStyle: {
    borderRadius: normalize(20),
    backgroundColor: colors.BLUE,
  },
  titleStyle: {
    fontSize: normalize(15),
    fontFamily: 'Poppins-Bold',
  },
});
