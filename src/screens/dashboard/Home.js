import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GradientButton from '../../components/Buttons/GradientButton';
import {ScrollView} from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';
import moment from 'moment';
import CardView from '../../components/ViewPager/CardView';
import {getUpcomingSession} from '../../redux/actions';
import {connect} from 'react-redux';
import CustomModal from '../../components/Modal';
import {CustomDatePicker} from '../../components/DateTimePicker';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      dateModal: false,
      start: true,
    };
  }

  componentDidMount() {
    this.props.getUpcomingSession();
  }

  dateModalHandler = start => {
    if (start) {
      this.setState({dateModal: !this.state.dateModal, start: start});
    } else {
      this.setState({dateModal: !this.state.dateModal, start: start});
    }
  };
  startDateHandler = (event, date) => {
    this.setState({date: date});
  };
  render() {
    const {dateModal, date} = this.state;
    const {upcomingSessionData} = this.props;

    const viewPagerData = upcomingSessionData.length ? (
      upcomingSessionData.map((item, i) => {
        let sessionStartIn = moment(item.start).format();
        return (
          <CardView
            title={item.title}
            time={
              'Session start' +
              ' ' +
              moment(sessionStartIn)
                .endOf('days')
                .fromNow()
            }
          />
        );
      })
    ) : (
      <Text style={{textAlign: 'center', alignItems: 'center'}}>
        No upcoming Sessions
      </Text>
    );

    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Dashboard"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
        rightIconPress={() => alert('right')}>
        <View style={styles.dateView}>
          <Text style={styles.dateText}>Choose Date for Upcoming Session</Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={styles.datePick}
              onPress={() => this.dateModalHandler(true)}>
              {moment(date).format('L')}
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
          title="Request Sessions"
          source={require('../../assets/people.png')}
          imageView={{width: normalize(24), height: normalize(27)}}
          titleStyle={{color: colors.DARK_TEXT_BLUE}}
          iconColor={colors.BLACK}
          onPress={() => this.props.navigation.navigate('Sessions')}
        />
        <Text style={styles.sessionTitle}>Upcoming Sessions</Text>
        <ScrollView contentContainerStyle={{paddingBottom: hp(35)}}>
          <View style={styles.upcomingSessionView}>{viewPagerData}</View>

          {dateModal ? (
            <CustomModal
              visible={dateModal}
              handler={() => this.dateModalHandler()}
              content={
                <CustomDatePicker date={date} handler={this.startDateHandler} />
              }
            />
          ) : null}
        </ScrollView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  calendarView: {flexDirection: 'row', justifyContent: 'space-around'},
  calendarButton: {
    width: normalize(100),
    height: normalize(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
    borderRadius: normalize(100),
  },
  calendarButtonText: {color: colors.WHITE, fontFamily: 'Poppins-Regular'},
  dateView: {
    marginVertical: hp(2),
    alignSelf: 'center',
  },
  dateText: {
    fontSize: normalize(15),
    color: colors.DARK_TEXT_BLUE,
    fontFamily: 'Poppins-Bold',
  },
  datePick: {
    textAlign: 'center',
    marginTop: normalize(5),
    fontSize: normalize(15),
    fontFamily: 'Poppins-Regular',
    color: colors.BLUE,
  },

  sessionTitle: {
    fontSize: normalize(19),
    fontFamily: 'Poppins-Medium',
    color: colors.DARK_TEXT_BLUE,
    marginTop: normalize(12),
    marginBottom: normalize(8),
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  upcomingSessionView: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: hp(1),
  },
});
const mapStateToProps = ({sessions}) => {
  const {upcomingSession} = sessions;
  return {upcomingSessionData: upcomingSession};
};

export default connect(
  mapStateToProps,
  {getUpcomingSession},
)(Home);
