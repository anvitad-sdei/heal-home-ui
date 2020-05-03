import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
import {openTok} from '../../redux/services/keys';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import RoundedButton from '../../components/Buttons/RoundedButton';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {Image} from 'react-native-elements';
import CustomImage from '../../components/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default class Home extends React.Component {
  render() {
    return (
      <MasterLayout>
        {/* <HeaderComponent
          leftIcon="menu"
          centerTitle="Dashboard"
          rightIcon="notifications"
          leftIconPress={() => alert('left')}
          rightIconPress={() => alert('right')}
        /> */}

        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        <View>
          <View style={styles.backLightImage}>
            <CustomImage source={require('../../assets/goalBackground.png')} />
          </View>
          <View style={styles.goalImageStyle}>
            <CustomImage source={require('../../assets/goal.png')} />
          </View>

          <Text style={[styles.heading, styles.textAlign]}>
            Choose your goal
          </Text>
          <Text style={[styles.subHeading, styles.textAlign]}>
            Drinking log to track your daily
          </Text>
          <Text style={[styles.subHeading, styles.textAlign]}>
            drinking record.
          </Text>
          <RoundedButton
            title="Next"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
        </View>
        {/* video conferencing function*/}
        {/* 
          <OTSession
            apiKey={openTok.key}
            sessionId={openTok.session_id}
            token={openTok.token}>
            <OTPublisher
              style={{width: 200, height: 200}}
              properties={{publishAudio: false}}
            />
            <OTSubscriber style={{width: 200, height: 200}} />
          </OTSession> */}
      </MasterLayout>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  backLightImage: {
    // width: 218,
    // height: 200,
    width: normalize(218),
    height: normalize(200),
    alignSelf: 'center',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: colors.BLUE_TEXT,
  },
  goalImageStyle: {
    // height: 150,
    // width: 150,
    height: normalize(150),
    width: normalize(150),
    alignSelf: 'center',
    position: 'absolute',
    top: '12%',
    // borderWidth: 1,
  },
  buttonStyle: {
    width: normalize(160),
    borderRadius: 30,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLUE_TEXT,
    alignSelf: 'center',
  },
  titleStyle: {
    color: colors.BLUE_TEXT,
    fontSize: normalize(14),
  },
  heading: {fontSize: normalize(20)},
  subHeading: {fontSize: normalize(14)},
  textAlign: {textAlign: 'center', fontFamily: 'Poppins-SemiBold'},
});
