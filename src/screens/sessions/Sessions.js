import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ViewWithCircle from '../../components/ViewWithCircle';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import CustomModal from '../../components/Modal';
import {
  allRequestedSession,
  requestSession,
  getRequestedSessionById,
  clearSessionById,
  updateRequestSession,
} from '../../redux/actions';
import moment from 'moment';
import {connect} from 'react-redux';
import InputFieldDateTime from '../../components/DateTimeField';
import {
  CustomTimePicker,
  CustomDatePicker,
} from '../../components/DateTimePicker';
import Axios from 'axios';
import {apiUrls} from '../../redux/api/constants';
import Loader from '../../components/Loader';
class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      active: 1,
      startDate: Date.now(),
      startTime: Date.now(),
      endDate: Date.now(),
      endTime: Date.now(),
      dateModal: false,
      timeModal: false,
      defaultDate: Date.now(),
      notes: '',
      sessionType: '',
      start: true,
      update: false,
      isLoading: false,
    };
    this.backHandler();
  }
  editSession = (id, update, startDate) => {
    this.setState({
      active: 1,
      update: update,
      id: id,
      startDate: startDate,
    });
    this.getRequestedSessionById(id);
  };

  /************************get session by id*************************** */

  getRequestedSessionById = async id => {
    try {
      this.setState({isLoading: true});
      let res = await Axios(`${apiUrls.BASE_URL}/requestsession/${id}`);
      if (res) {
        const {startDate, endDate, sessionType, notes} = res.data.response;
        this.setState({
          isLoading: false,
          startDate: Date.now(startDate),
          startTime: Date.now(startDate),
          endDate: Date.now(endDate),
          endTime: Date.now(endDate),
          sessionType: sessionType,
          notes: notes,
        });
      }
    } catch (err) {
      this.setState({isLoading: false});
      Alert.alert('Fetch Failed');
    }
  };

  componentDidMount() {
    this.props.allRequestedSession();
  }

  dateModalHandler = start => {
    if (start) {
      this.setState({dateModal: !this.state.dateModal, start: start});
    } else {
      this.setState({dateModal: !this.state.dateModal, start: start});
    }
  };

  timeModalHandler = start => {
    if (start) {
      this.setState({timeModal: !this.state.timeModal, start: start});
    } else {
      this.setState({timeModal: !this.state.timeModal, start: start});
    }
  };

  endTimeHandler = (event, time) => {
    this.setState({endTime: time});
  };
  startTimeHandler = (event, time) => {
    this.setState({startTime: time});
  };

  startDateHandler = (event, date) => {
    this.setState({startDate: date});
  };
  endDateHandler = (event, date) => {
    this.setState({endDate: date});
  };
  onSessionType = sessionType => {
    this.setState({sessionType: sessionType}, () => {
      this.props.clearSessionById();
    });
  };

  onChangeNotes = notes => {
    this.setState({notes: notes});
  };

  onRequestSession = () => {
    const {
      startDate,
      endDate,
      startTime,
      endTime,
      notes,
      sessionType,
    } = this.state;
    const data = {
      startDate:
        moment(startDate).format('YYYY-MM-DD') +
        ' ' +
        moment(startTime).format('HH:mm:ss'),
      endDate:
        moment(endDate).format('YYYY-MM-DD') +
        ' ' +
        moment(endTime).format('HH:mm:ss'),
      sessionType: sessionType,
      notes: notes,
    };
    this.props.requestSession(data);
  };

  onUpdateRequestSession = () => {
    const {
      id,
      startDate,
      endDate,
      startTime,
      endTime,
      notes,
      sessionType,
    } = this.state;
    const {getBySessionId} = this.props;
    const updateData = {
      id: id,
      startDate:
        moment(startDate).format('YYYY-MM-DD') +
        ' ' +
        moment(startTime).format('HH:mm:ss'),
      endDate:
        moment(endDate).format('YYYY-MM-DD') +
        ' ' +
        moment(endTime).format('HH:mm:ss'),
      sessionType: sessionType || getBySessionId.sessionType,
      notes: notes || getBySessionId.notes,
    };
    this.props.updateRequestSession(updateData);
  };
  backHandler = () => {
    this.setState({
      active: 2,
      startDate: Date.now(),
      startTime: Date.now(),
      endDate: Date.now(),
      endTime: Date.now(),
      dateModal: false,
      timeModal: false,
      defaultDate: Date.now(),
      notes: '',
      sessionType: '',
      start: true,
      update: false,
    });
    this.props.clearSessionById();
  };
  render() {
    const {
      active,
      startDate,
      startTime,
      endDate,
      endTime,
      defaultDate,
      dateModal,
      timeModal,
      sessionType,
      notes,
      start,
      update,
    } = this.state;
    const {mySession, getBySessionId} = this.props;

    const buttonView =
      update === false ? (
        <RoundedButton
          title={'SAVE'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={() => this.onRequestSession()}
        />
      ) : (
        <RoundedButton
          title={'UPDATE'}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={() => this.onUpdateRequestSession()}
        />
      );
    const requestedSessionJSX = mySession.length
      ? mySession.map((item, i) => {
          return (
            <View style={styles.sessionViewWrapper} key={i}>
              <TouchableOpacity
                onPress={() =>
                  this.editSession(item.id, true, item.startDate, item.endDate)
                }>
                <View style={styles.requestedSessionView}>
                  <View style={{width: '90%'}}>
                    <Text style={styles.sessionHeading}>
                      {item.sessionType}
                    </Text>

                    <Text style={{...styles.dateStyle, color: colors.BLUE}}>
                      {moment(item.startDate).format('lll') +
                        '-' +
                        moment(item.endDate).format('LT')}
                    </Text>
                  </View>

                  <View style={styles.editImageView}>
                    <Image
                      source={require('../../assets/edit.png')}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.orangeCircleView} />
                <Text style={{...styles.dateStyle, color: colors.ORANGE_FOUR}}>
                  {item.requestStatus}
                </Text>
              </View>
              <Text style={{fontSize: normalize(12)}}>
                <Text style={{color: colors.BLUE}}>Modified by :</Text>{' '}
                {item.lastModifiedBy}
              </Text>
              <Text style={{fontSize: normalize(12)}}>
                <Text style={{color: colors.BLUE}}>Last Modified :</Text>{' '}
                {moment(item.modifiedDate).format('lll')}
              </Text>
            </View>
          );
        })
      : null;

    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Request Session"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => {
          this.props.navigation.navigate('TherapistsList');
          this.props.clearSessionById();
        }}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        {/* <ViewWithCircle
          sourceCircle={require('../../assets/circle.png')}
          source={require('../../assets/communication.png')}
        /> */}
        <View style={styles.shadowView}>
          <View style={styles.circleViewImage}>
            <Image
              source={require('../../assets/circle.png')}
              style={styles.imageStyle}
            />
            <View style={styles.innerViewImage}>
              <Image
                source={require('../../assets/communication.png')}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.topButtonView}>
            {active === 1 ? (
              <>
                <TouchableOpacity
                  onPress={() => {
                    update ? this.backHandler() : this.setState({active: 1});
                  }}>
                  <View
                    style={{
                      ...styles.newSession,
                      backgroundColor: active === 1 ? colors.BLUE : null,
                    }}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        color: active === 1 ? colors.WHITE : colors.BLUE,
                      }}>
                      {update ? 'Back' : 'New Session'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({active: 2})}>
                  <View style={styles.requestedSession}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        color: active === 1 ? colors.BLUE : colors.WHITE,
                      }}>
                      Requested Session
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ) : null}
            {active === 2 ? (
              <>
                <TouchableOpacity onPress={() => this.setState({active: 1})}>
                  <View style={styles.newSession}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        color: active === 2 ? colors.BLUE : colors.WHITE,
                      }}>
                      New Session
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({active: 2})}>
                  <View
                    style={{
                      ...styles.requestedSession,
                      backgroundColor: active === 2 ? colors.BLUE : null,
                    }}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        color: active === 2 ? colors.WHITE : BLUE,
                      }}>
                      Requested Session
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            ) : null}
          </View>

          <ScrollView contentContainerStyle={styles.scrollView}>
            {active === 1 ? (
              <View
                style={{
                  width: '95%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                {/*****************Start Date Time Field********************* */}

                <Text style={styles.subHeadingStyle}>Start Date & Time</Text>
                <View style={styles.dateTimeView}>
                  <InputFieldDateTime
                    source={require('../../assets/calendar.png')}
                    onPress={() => this.dateModalHandler(true)}
                    dateTimeValue={
                      moment(startDate).format('L') ||
                      getBySessionId.moment(startDate).format('L')
                    }
                  />
                  <InputFieldDateTime
                    source={require('../../assets/time.png')}
                    onPress={() => this.timeModalHandler(true)}
                    dateTimeValue={moment(startTime).format('LT')}
                  />
                </View>

                {/*****************End Date Time Field********************* */}

                <Text style={styles.subHeadingStyle}>End Date & Time</Text>
                <View style={styles.dateTimeView}>
                  <InputFieldDateTime
                    source={require('../../assets/calendar.png')}
                    onPress={() => this.dateModalHandler(false)}
                    dateTimeValue={
                      moment(endDate).format('L') ||
                      getBySessionId.moment(endDate).format('L')
                    }
                  />
                  <InputFieldDateTime
                    source={require('../../assets/time.png')}
                    onPress={() => this.timeModalHandler(false)}
                    dateTimeValue={
                      moment(endTime).format('LT') ||
                      getBySessionId.moment(endTime).format('LT')
                    }
                  />
                </View>

                {/*****************Session Field********************* */}

                <Text style={styles.subHeadingStyle}>Session Type</Text>
                <View>
                  <Input
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    placeholder={'Eg. Yoga Session'}
                    placeholderTextColor={colors.GRAY_PLACE_COLOR}
                    onChangeText={text => this.onSessionType(text)}
                    value={sessionType || getBySessionId.sessionType}
                  />
                </View>

                <CustomTextArea
                  title="Notes"
                  titleStyle={{
                    color: colors.GRAY_FIVE,
                    fontSize: normalize(14),
                    fontFamily: 'Poppins-SemiBold',
                  }}
                  placeholder=" "
                  textInputClass={{
                    borderColor: colors.BLUE,
                    fontSize: normalize(14),
                    fontFamily: 'Poppins-Regular',
                  }}
                  onChangeText={text => this.onChangeNotes(text)}
                  value={notes || getBySessionId.notes}
                  textAreaView={{
                    width: '100%',
                    marginTop: -17,
                  }}
                />

                <View style={styles.buttonView}>
                  {/* <RoundedButton
                    title={update ? 'UPDATE' : 'SAVE'}
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    onPress={() => this.onRequestSession()}
                  /> */}
                  {buttonView}
                </View>
              </View>
            ) : null}

            <View style={styles.allRequestedSessionView}>
              {active === 2 ? requestedSessionJSX : null}
            </View>

            {dateModal ? (
              <CustomModal
                visible={dateModal}
                handler={() => this.dateModalHandler()}
                content={
                  start ? (
                    <CustomDatePicker
                      date={startDate}
                      handler={this.startDateHandler}
                    />
                  ) : (
                    <CustomDatePicker
                      date={endDate}
                      handler={this.endDateHandler}
                    />
                  )
                }
              />
            ) : null}

            {timeModal ? (
              <CustomModal
                visible={timeModal}
                handler={() => this.timeModalHandler()}
                content={
                  start ? (
                    <CustomTimePicker
                      time={startTime}
                      handler={this.startTimeHandler}
                    />
                  ) : (
                    <CustomTimePicker
                      time={endTime}
                      handler={this.endTimeHandler}
                    />
                  )
                }
              />
            ) : null}
          </ScrollView>
        </View>
        <Loader isLoading={this.state.isLoading} />
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.BLUE,
    height: normalize(200),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(125),
  },
  topButtonView: {
    flexDirection: 'row',
    borderWidth: 1,
    height: normalize(36),
    borderRadius: normalize(20),
    borderColor: colors.BLUE,
    width: normalize(260),
    alignSelf: 'center',
    marginTop: normalize(90),
    marginBottom: normalize(30),
  },
  newSession: {
    height: normalize(35),
    width: normalize(115),
    borderRadius: normalize(20),
    paddingTop: normalize(8),
  },
  requestedSession: {
    height: normalize(35),
    width: normalize(145),
    borderRadius: normalize(20),
    paddingTop: normalize(8),
  },
  textStyle: {
    fontSize: normalize(12),
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  subHeadingStyle: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-SemiBold',
    color: colors.GRAY_FIVE,
    paddingLeft: normalize(8),
    paddingBottom: normalize(5),
    paddingTop: normalize(12),
  },
  orangeCircleView: {
    height: normalize(9),
    width: normalize(9),
    borderRadius: normalize(5),
    backgroundColor: colors.ORANGE_FOUR,
    alignSelf: 'center',
    marginRight: normalize(5),
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
  sessionViewWrapper: {
    // borderWidth: 1,
    //marginTop: normalize(25),
    paddingTop: normalize(10),
    borderBottomWidth: 1,
    paddingBottom: normalize(20),
    borderColor: colors.COLOR_29,
  },
  requestedSessionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // width:"100%"
  },
  sessionHeading: {
    fontSize: normalize(19),
    fontFamily: 'Poppins-SemiBold',
  },
  dateStyle: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
  },
  editImageView: {
    width: normalize(20),
    height: normalize(20),
    //paddingTop: normalize(5),
  },
  shadowView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.WHITE,
    // marginTop: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    top: normalize(-100),
    borderRadius: normalize(20),
    // marginBottom: normalize(390),
    // borderBottomLeftRadius: normalize(20),
    // borderBottomRightRadius: normalize(20),
  },
  scrollView: {
    paddingBottom: hp(100),
  },
  allRequestedSessionView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // borderWidth: 1,
  },

  inputContainerStyle: {
    borderWidth: 1,
    borderRadius: normalize(5),
    borderColor: colors.BLUE,
    paddingLeft: normalize(5),
  },
  inputStyle: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
  },

  dateTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: normalize(10),
  },
  circleViewImage: {
    width: normalize(80),
    height: normalize(80),
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
    //  borderWidth: 1,
  },
  innerViewImage: {
    alignItems: 'center',
    width: normalize(50),
    height: normalize(50),
    position: 'absolute',
    alignSelf: 'center',
    marginTop: normalize(15),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
const mapStateToProps = ({sessions}) => {
  const {
    sessionsData,
    requestSession,
    sessionById,
    updateRequestSession,
  } = sessions;
  return {
    mySession: sessionsData,
    data: requestSession,
    getBySessionId: sessionById,
    updateData: updateRequestSession,
  };
};

export default connect(
  mapStateToProps,
  {
    allRequestedSession,
    requestSession,
    getRequestedSessionById,
    clearSessionById,
    updateRequestSession,
  },
)(Sessions);
