import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GradientButton from '../../components/Buttons/GradientButton';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';
import CardView from '../../components/ViewPager/CardView';
import { getUpcomingSession } from '../../redux/actions';
import { connect } from 'react-redux';
import CustomModal from '../../components/Modal';
import { CustomDatePicker } from '../../components/DateTimePicker';
import ImagesName from '../../constants/ImagesName';
import { postVideoCreateRoom } from '../../redux/actions';

const dummyUpcomingSessionDats=[ { id: 235,
  start: '2020-08-03 22:30:00',
  end: '2020-08-03 23:30:00',
  localDateTime: 
   { year: 2020,
     month: 'JUNE',
     monthValue: 6,
     dayOfMonth: 8,
     hour: 17,
     minute: 17,
     second: 45,
     nano: 0,
     dayOfWeek: 'MONDAY',
     dayOfYear: 160,
     chronology: { calendarType: 'iso8601', id: 'ISO' } },
  zoom: true,
  zoomCreated: false,
  meetingId: null,
  meetingUrl: null,
  title: 'Addiction counselling with : Jordane T',
  hostMeetingUrl: null,
  sessionType: 'Addiction counselling',
  showJoinButton: false,
  notes: null,
  sessionWith: 'Jordane T' } ]

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
      this.setState({ dateModal: !this.state.dateModal, start: start });
    } else {
      this.setState({ dateModal: !this.state.dateModal, start: start });
    }
  };
  startDateHandler = (event, date) => {
    this.setState({ date: date });
  };

  startVideoCall = () => {
    let data = {
      "user1": "5",
      "user2": "2"
    }
    this.props.postVideoCreateRoom(data);
    //this.props.navigation.navigate('VideoSession')
  }

  startVideoChat = () => {
    this.props.navigation.navigate('ChatScreen')
  }

  render() {
    const { dateModal, date } = this.state;
    const { upcomingSessionData } = this.props;

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
            onPressCall={this.startVideoCall}
            onPressChat={this.startVideoChat}
          />
        );
      })
    ) : (
      dummyUpcomingSessionDats.map((item, i) => {
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
            onPressCall={this.startVideoCall}
            onPressChat={this.startVideoChat}
          />
        );
      })
        /* <Text style={{ textAlign: 'center', alignItems: 'center' }}>
          No upcoming Sessions
        </Text> */
      );

    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Dashboard"
        // rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
        rightIconPress={() => alert('right')}>
        <View style={styles.dateView}>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={styles.datePick}
              onPress={() => this.dateModalHandler(true)}>
              {moment(date).format('L')}
            </Text>
          </View>
        </View>
        <GradientButton
          colors={['#543396', '#3D1E7E']}
          title="Sessions"
          source={ImagesName.ic_vc}
          imageView={{ height: normalize(20), width: normalize(15) }}
          onPress={() => this.props.navigation.navigate('Sessions')}
          iconColor={colors.BLACK}
        />
        <GradientButton
          colors={['#18376C', '#214A90']}
          title="Chat"
          source={ImagesName.ic_people}
          imageView={{ width: normalize(24), height: normalize(27) }}
          onPress={() => this.props.navigation.navigate('ChatListing')}
          iconColor={colors.WHITE}
        />
        <GradientButton
          colors={['#494EEA', '#7579F1']}
          title="Add Notes"
          source={ImagesName.ic_document}
          imageView={{ width: normalize(15), height: normalize(18) }}
          iconColor={colors.BLACK}
          onPress={() => this.props.navigation.navigate('AddNotes')}
        />
        <Text style={styles.sessionTitle}>Upcoming Sessions</Text>
        <ScrollView contentContainerStyle={{ paddingBottom: hp(35) }}>
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
  calendarView: { flexDirection: 'row', justifyContent: 'space-around' },
  calendarButton: {
    width: normalize(100),
    height: normalize(35),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10),
    borderRadius: normalize(100),
  },
  calendarButtonText: { color: colors.WHITE, fontFamily: 'Poppins-Regular' },
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
const mapStateToProps = ({ sessions }) => {
  const { upcomingSession } = sessions;
  return { upcomingSessionData: upcomingSession };
};

export default connect(
  mapStateToProps,
  { getUpcomingSession,postVideoCreateRoom },

)(Home);
