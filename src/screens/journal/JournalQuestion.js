import React, {Component} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import CustomTabBar from '../../components/WeekTabbar';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {ScrollView} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class JournalQuestion extends Component {
  render() {
    return (
      <MasterLayout
        masterStyle={styles.masterStyle}
        leftIcon={require('../../assets/back-arrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Journaling')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar />

        <ScrollView contentContainerStyle={{paddingBottom: hp(40)}}>
          <View style={styles.questionView}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                width: normalize(252),
                height: normalize(36),
                borderRadius: normalize(20),
                justifyContent: 'space-around',
                //   alignItems: 'center',
              }}>
              <View
                style={{
                  borderRightWidth: 1,
                  width: normalize(115),
                  height: normalize(36),
                  borderRadius: normalize(20),
                  alignItems: 'center',
                  //  alignSelf: 'center',
                  backgroundColor: colors.PINK,
                }}>
                <Text style={{textAlign: 'center'}}>Morning</Text>
              </View>
              <View>
                <Text>Evening</Text>
              </View>
            </View>
            <CustomTextArea title="What am I grateful for today?" />
            <CustomTextArea title="What would make today great?" />
            <CustomTextArea title="What's ONE Thing I must accomplish today?" />
          </View>
          <View style={styles.buttonView}>
            <RoundedButton
              title="Save"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
            />
          </View>
        </ScrollView>
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
    paddingVertical: hp(5),
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
