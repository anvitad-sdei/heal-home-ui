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
import CustomModal from '../../components/Modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import ViewPager from '@react-native-community/viewpager';
import moment from 'moment';
import CardView from '../../components/ViewPager/CardView';
import {getUpcomingSession} from '../../redux/actions';
import {connect} from 'react-redux';
const currentDate = Date.now();
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      defaultDate: Date.now(),
      date: '',
    };
  }

  componentDidMount() {
    this.props.getUpcomingSession();
  }
  modalHandler = () => {
    this.setState({modal: !this.state.modal});
  };
  dateHandler = (event, selectedDate) => {
    console.log(selectedDate);
    this.setState({date: selectedDate, modal: !this.state.modal});
  };
  render() {
    const {modal, defaultDate} = this.state;
    const {upcomingSessionData} = this.props;
    console.log('upcoming session -------------------', upcomingSessionData);
    const cardViewData = [
      {
        id: 1,
        name: 'Rejina Freak',
        degree: 'MBBS,DOMS,MS',
        specilization: 'Therapists',
        experience: '27 years of experience',
        timing: '9:00AM-8:00PM',
      },
      {
        id: 2,
        name: 'Sejal Freak',
        degree: 'MBBS',
        specilization: 'Therapists',
        experience: '25 years of experience',
        timing: '8:00AM-8:00PM',
      },
    ];
    const viewPagerData = upcomingSessionData.length
      ? upcomingSessionData.map((item, i) => {
          return (
            <CardView
              title={item.title}
              time={
                'Session start' +
                ' ' +
                moment(item.start)
                  .endOf(item.start)
                  .fromNow()
              }
              // time={moment(currentDate).format('l')}

              // name={item.name}
              // degree={item.degree}
              // specilization={item.specilization}
              // experience={item.experience}
              // timing={item.timing}
              // source={require('../../assets/goal.png')}
            />
          );
        })
      : null;
    const dateContent = (
      <View
        style={{
          paddingBottom: normalize(10),
        }}>
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={new Date(defaultDate)}
          mode={'date'}
          is24Hour={true}
          display="default"
          //onChange={this.dateHandler}
        />
      </View>
    );

    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Dashboard"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
        rightIconPress={() => alert('right')}>
        <ScrollView contentContainerStyle={{paddingBottom: hp(35)}}>
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
            onPress={() => this.props.navigation.navigate('TherapistsList')}
          />

          <View style={styles.upcomingSessionView}>
            <Text style={styles.sessionTitle}>Upcoming Sessions</Text>
            <ViewPager
              initialPage={0}
              pageMargin={10}
              style={{
                height: normalize(169),
              }}
              showPageIndicator={true}>
              {viewPagerData}
            </ViewPager>
          </View>

          {modal ? (
            <CustomModal
              visible={modal}
              handler={() => this.modalHandler()}
              content={dateContent}
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
});
const mapStateToProps = ({sessions}) => {
  const {upcomingSession} = sessions;
  return {upcomingSessionData: upcomingSession};
};

export default connect(
  mapStateToProps,
  {getUpcomingSession},
)(Home);
