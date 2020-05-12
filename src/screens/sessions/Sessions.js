import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ViewWithCircle from '../../components/ViewWithCircle';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {Input, Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import InputField from '../../components/Input';
import CustomModal from '../../components/Modal';
import DateTimePicker from '@react-native-community/datetimepicker';
import {allRequestedSession} from '../../redux/actions';
import {connect} from 'react-redux';
class Sessions extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      id: navigation.getParam('id'),
      active: 1,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      modal: false,
      defaultDate: Date.now(),
    };
  }
  componentDidMount() {
    this.props.allRequestedSession();
  }
  modalHandler = () => {
    this.setState({modal: !this.state.modal});
  };
  dateHandler = (event, selectedDate) => {
    console.log(selectedDate);
    this.setState({date: selectedDate, modal: !this.state.modal});
  };
  render() {
    const {
      active,
      startDate,
      startTime,
      endDate,
      endTime,
      defaultDate,
      modal,
    } = this.state;
    const {data} = this.props;
    console.log(this.state.id, 'if===========');
    console.log(data, '=======================');

    const requestedSessionJSX = data.length
      ? data.map((item, i) => {
          return (
            <View style={styles.sessionViewWrapper} key={i}>
              <View style={styles.requestedSessionView}>
                <View>
                  <Text style={styles.sessionHeading}>
                    {'Session' + ' ' + item.id}
                  </Text>
                  {/**   session numbering */}
                  <Text style={{...styles.dateStyle, color: colors.BLUE}}>
                    {item.createdDate}
                  </Text>
                </View>
                <View style={styles.editImageView}>
                  <Image
                    source={require('../../assets/edit.png')}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
              </View>

              <Text style={{...styles.dateStyle, color: colors.ORANGE_FOUR}}>
                {item.requestStatus}
              </Text>
              <Text style={{fontSize: normalize(12)}}>
                <Text style={{color: colors.BLUE}}>Modified by :</Text>{' '}
                {item.lastModifiedBy}
              </Text>
              <Text style={{fontSize: normalize(12)}}>
                <Text style={{color: colors.BLUE}}>Last Modified :</Text>{' '}
                {item.modifiedDate}
              </Text>
            </View>
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
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Request Session"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('TherapistsList')}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <ViewWithCircle source={require('../../assets/communication.png')} />
        <View style={styles.shadowView}>
          <View style={styles.topButtonView}>
            {active === 1 ? (
              <>
                <TouchableOpacity onPress={() => this.setState({active: 1})}>
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
                      New Session
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
                  width: '90%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  paddingTop: normalize(10),
                  // borderWidth: 1,
                }}>
                <Text style={styles.subHeadingStyle}>Start Date & Time</Text>
                <View style={styles.dateTimeView}>
                  <InputField
                    onPress={() => this.modalHandler()}
                    // onChangeText={this.onChangeEmail}
                    source={require('../../assets/calendar.png')}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    containerInputStyle={{borderBottomColor: colors.BLUE}}
                    value={startDate}
                  />
                  <InputField
                    // onChangeText={this.onChangeEmail}
                    source={require('../../assets/time.png')}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    containerInputStyle={{borderBottomColor: colors.BLUE}}
                    value={startTime}
                  />
                </View>
                <Text style={styles.subHeadingStyle}>End Date & Time</Text>
                <View style={styles.dateTimeView}>
                  <InputField
                    // onChangeText={this.onChangeEmail}
                    source={require('../../assets/calendar.png')}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    containerInputStyle={{borderBottomColor: colors.BLUE}}
                    value={endDate}
                  />
                  <InputField
                    // onChangeText={this.onChangeEmail}
                    source={require('../../assets/time.png')}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    containerInputStyle={{borderBottomColor: colors.BLUE}}
                    value={endTime}
                  />
                </View>
                <Text style={styles.subHeadingStyle}>Session Type</Text>
                <View>
                  <Input
                    inputContainerStyle={styles.sessionInputStyle}
                    placeholder={'Eg. Yoga Session'}
                    placeholderTextColor={colors.GRAY_PLACE_COLOR}
                    containerStyle={{
                      /// borderWidth: 1,
                      marginBottom: 0,
                      paddingBottom: 0,
                    }}
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
                    paddingTop: 0,
                  }}
                />

                <View style={styles.buttonView}>
                  <RoundedButton
                    title="Save"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    onPress={() => alert('hello')}
                  />
                </View>
              </View>
            ) : null}

            <View style={styles.allRequestedSessionView}>
              {active === 2 ? requestedSessionJSX : null}
            </View>

            {modal ? (
              <CustomModal
                visible={modal}
                handler={() => this.modalHandler()}
                content={dateContent}
              />
            ) : null}
          </ScrollView>
        </View>
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
    height: normalize(150),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(100),
    zIndex: -1,
  },
  topButtonView: {
    flexDirection: 'row',
    borderWidth: 1,
    height: normalize(36),
    borderRadius: normalize(20),
    borderColor: colors.BLUE,
    width: normalize(260),
    alignSelf: 'center',
    marginTop: normalize(15),
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
    //marginTop: normalize(25),
    paddingTop: normalize(10),
    borderBottomWidth: 1,
    paddingBottom: normalize(20),
    borderColor: colors.GRAY_LINE,
  },
  requestedSessionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sessionHeading: {
    fontSize: normalize(19),
    fontFamily: 'Poppins-SemiBold',
  },
  dateStyle: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
  },
  editImageView: {width: normalize(20), height: normalize(20)},
  shadowView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.WHITE,
    marginTop: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
  scrollView: {
    paddingBottom: hp(100),
  },
  allRequestedSessionView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerStyle: {
    width: normalize(100),
    height: normalize(36),
    borderBottomColor: colors.WHITE,
    // borderWidth: 1,
  },
  inputContainerStyle: {
    borderBottomColor: colors.WHITE,
    // borderWidth: 1,
  },
  inputStyle: {
    fontSize: normalize(14),
    color: colors.BLACK_SECOND,
    fontFamily: 'Poppins-Regular',
    //borderWidth: 1,
  },
  sessionInputStyle: {
    borderWidth: 1,
    borderRadius: normalize(5),
    borderColor: colors.BLUE,
    paddingLeft: normalize(5),
  },
  dateTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: normalize(10),
  },
});
const mapStateToProps = ({sessions}) => {
  const {sessionsData} = sessions;
  return {data: sessionsData};
};

export default connect(
  mapStateToProps,
  {allRequestedSession},
)(Sessions);
