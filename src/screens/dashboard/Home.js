import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
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
export default class Home extends React.Component {
  render() {
    return (
      <MasterLayout>
        <View style={{backgroundColor: colors.GRAY_SECOND, height: '100%'}}>
          <View style={styles.topView}>
            <HeaderComponent
              leftIcon={require('../../assets/menu.png')}
              centerTitle="Dashboard"
              rightIcon={require('../../assets/bell.png')}
              leftIconPress={() => alert('left')}
              rightIconPress={() => alert('right')}
            />
          </View>

          <View style={styles.dateView}>
            <Text style={styles.dateText}>Pick the Date</Text>
            <Text style={styles.datePick} onPress={() => alert('date pick')}>
              05/05/2020
            </Text>
          </View>
          <GradientButton
            colors={[colors.LIGHT_PINK, colors.PINK]}
            title="Drinking Log"
            source={require('../../assets/drinks.png')}
            imageView={styles.imageView}
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
            {/* <Carousel /> */}
            <View style={styles.sliderView}>
              <View styles={styles.leftView} />
              <View styles={styles.rightView} />
            </View>
          </View>
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
  dateView: {marginVertical: normalize(10), alignSelf: 'center'},
  dateText: {
    fontSize: normalize(19),
    color: colors.DARK_TEXT_BLUE,
    fontFamily: 'Poppins-Medium',
    // alignSelf: 'center',
  },
  datePick: {
    textAlign: 'center',
    marginTop: normalize(5),
    fontSize: normalize(15),
    fontFamily: 'Poppins-Regular',
    color: colors.BLUE,
  },
  imageView: {height: normalize(22), width: normalize(22)},
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
    borderWidth: 1,
    borderRadius: normalize(5),
  },
  leftView: {
    width: normalize(20),
  },
  rightView: {
    width: normalize(80),
  },
});
