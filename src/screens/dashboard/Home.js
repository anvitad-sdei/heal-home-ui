import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import CustomImage from '../../components/Image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GradientButton from '../../components/Buttons/GradientButton';
import Carousel from '../../components/Carousel.js';
import {Avatar, Icon} from 'react-native-elements';
import CustomModal from '../../components/Modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity} from 'react-native-gesture-handler';
import moment from 'moment';
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      defaultDate: Date.now(),
    };
  }
  modalHandler = () => {
    this.setState({modal: !this.state.modal});
  };
  dateHandler = (event, selectedDate) => {
    console.log(selectedDate);
    this.setState({date: selectedDate});
  };
  render() {
    const {modal, defaultDate} = this.state;

    const dateContent = (
      <>
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={new Date(defaultDate)}
          mode={'date'}
          is24Hour={true}
          display="default"
          // onChange={this.dateHandler}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View
            style={{
              width: '45%',
              height: normalize(35),
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: normalize(100),
              backgroundColor: '#95B4FD',
            }}>
            <Text style={{color: colors.WHITE, fontFamily: 'Poppins-Regular'}}>
              CANCEL
            </Text>
          </View>
          <View
            style={{
              width: '45%',
              height: normalize(35),
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: normalize(100),
              backgroundColor: '#6E78F7',
            }}>
            <Text style={{color: colors.WHITE, fontFamily: 'Poppins-Regular'}}>
              SET
            </Text>
          </View>
        </View>
      </>
    );

    return (
      <MasterLayout
        masterStyle={{backgroundColor: colors.GRAY_SECOND}}
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Dashboard"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => alert('left')}
        rightIconPress={() => alert('right')}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>Pick the Date</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.datePick} onPress={() => this.modalHandler()}>
              05/05/2020
            </Text>
          </View>
        </View>
        <GradientButton
          colors={[colors.LIGHT_PINK, colors.PINK]}
          title="Drinking Log"
          source={require('../../assets/drinks.png')}
          imageView={{height: normalize(22), width: normalize(22)}}
          onPress={() => this.props.navigation.navigate('DrinkingLogs')}
          iconColor={colors.WHITE}
        />
        <GradientButton
          colors={[colors.LIGHT_BLUE, colors.LIGHT_BLUE_THIRD]}
          title="Journaling"
          source={require('../../assets/interface.png')}
          imageView={{width: normalize(24), height: normalize(21)}}
          onPress={() => this.props.navigation.navigate('Journaling')}
          iconColor={colors.WHITE}
        />
        <GradientButton
          colors={[colors.LIGHT_BLUE_ONE, colors.LIGHT_BLUE_SECOND]}
          title="My Therapists"
          source={require('../../assets/people.png')}
          imageView={{width: normalize(24), height: normalize(27)}}
          titleStyle={{color: colors.DARK_TEXT_BLUE}}
          iconColor={colors.BLACK}
        />

        <View style={styles.upcomingSessionView}>
          <Text style={styles.sessionTitle}>Upcoming Sessions</Text>
          <View style={styles.sliderView}>
            <View style={styles.sessionView}>
              <View style={styles.userImageView}>
                <Avatar
                  size="large"
                  source={require('../../assets/goal.png')}
                />
              </View>
              <View style={{padding: normalize(10)}}>
                <Text style={styles.userName}>Rejina Freak</Text>
                <View style={styles.introView}>
                  <Text style={styles.textColor}>MBBS,DOMS,MS</Text>
                  <Text style={styles.textColor}>Therapists</Text>
                  <Text style={styles.textColor}>26 years of experience</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={styles.leftView}>
                <Text style={styles.timing}>9:30AM - 8:00PM</Text>
              </View>
              <View style={styles.rightView}>
                <TouchableOpacity onPress={() => alert('message')}>
                  <Image
                    source={require('../../assets/message3x.png')}
                    style={styles.socialImage}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert('video')}>
                  <Image
                    source={require('../../assets/video3x.png')}
                    style={styles.socialImageVideo}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {modal ? (
          <CustomModal
            visible={modal}
            handler={() => this.modalHandler()}
            content={dateContent}
          />
        ) : null}
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
  dateView: {
    marginVertical: hp(1),
    alignSelf: 'center',
  },
  dateText: {
    fontSize: normalize(19),
    color: colors.DARK_TEXT_BLUE,
    fontFamily: 'Poppins-Medium',
  },
  datePick: {
    textAlign: 'center',
    marginTop: normalize(5),
    fontSize: normalize(15),
    fontFamily: 'Poppins-Regular',
    color: colors.BLUE,
  },
  userImageView: {alignSelf: 'center', paddingHorizontal: wp(3)},
  sessionTitle: {
    fontSize: normalize(19),
    fontFamily: 'Poppins-Medium',
    color: colors.DARK_TEXT_BLUE,
    marginTop: normalize(12),
    marginBottom: normalize(8),
  },
  upcomingSessionView: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp(1),
  },
  sliderView: {
    borderRadius: normalize(5),
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  sessionView: {flexDirection: 'row'},
  userName: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: colors.GRAY_FIVE,
  },
  leftView: {
    alignSelf: 'center',
  },
  timing: {
    fontSize: normalize(10),
    color: colors.GREEN,
    fontFamily: 'Poppins-Regular',
  },
  rightView: {
    flexDirection: 'row',
    paddingBottom: normalize(10),
  },
  socialImage: {width: normalize(36), height: normalize(36)},
  socialImageVideo: {
    width: normalize(36),
    height: normalize(36),
    marginLeft: normalize(10),
  },
  introView: {
    borderWidth: 1,
    width: normalize(155),
    borderRadius: normalize(4),
    paddingVertical: normalize(3),
    paddingHorizontal: normalize(8),
    borderColor: colors.GRAY_LIGHT,
  },
  textColor: {
    color: colors.GRAY_PLACE,
    fontSize: normalize(10),
    fontFamily: 'Poppins-Regular',
  },
});
