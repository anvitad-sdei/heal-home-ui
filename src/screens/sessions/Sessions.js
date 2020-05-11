import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import ViewWithCircle from '../../components/ViewWithCircle';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {Input, Image} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    const {active} = this.state;
    const requestedSessionData = [
      {
        id: 1,
        session: 'Session 1',
        sessionOn: '04/23/2020,12:49-01:49',
        status: 'PENDING',
        modifiedBy: 'Alcohol Management',
        lastModified: '04/22/2020, 12:49 PM',
      },
      {
        id: 2,
        session: 'Session 2',
        sessionOn: '04/24/2020,01:49-02:49',
        status: 'PENDING',
        modifiedBy: 'Alcohol Management',
        lastModified: '04/23/2020, 12:49 PM',
      },
    ];

    const requestedSessionJSX = requestedSessionData.length
      ? requestedSessionData.map((item, i) => {
          console.log(item);
          return (
            <View style={styles.sessionViewWrapper}>
              <View style={styles.requestedSessionView}>
                <View>
                  <Text style={styles.sessionHeading}>{item.session}</Text>
                  <Text style={{...styles.dateStyle, color: colors.BLUE}}>
                    {item.sessionOn}
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
                {item.status}
              </Text>
              <Text style={{fontSize: normalize(12)}}>
                <Text style={{color: colors.BLUE}}>Modified by :</Text>{' '}
                {item.modifiedBy}
              </Text>
              <Text style={{fontSize: normalize(12)}}>
                <Text style={{color: colors.BLUE}}>Last Modified :</Text>{' '}
                {item.lastModified}
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
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <ViewWithCircle source={require('../../assets/communication.png')}>
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
          <ScrollView
            contentContainerStyle={{
              //  flex: 1,
              paddingBottom: hp(100),
            }}>
            {active === 1 ? (
              <>
                <Text style={styles.subHeadingStyle}>Session Type</Text>
                <Input
                  inputContainerStyle={{
                    borderWidth: 1,
                    borderRadius: normalize(5),
                    borderColor: colors.BLUE,
                  }}
                  placeholder={'Eg. Yoga Session'}
                  placeholderTextColor={colors.GRAY_PLACE_COLOR}
                />

                <CustomTextArea
                  title="Notes"
                  titleStyle={{
                    color: colors.GRAY_FIVE,
                    fontSize: normalize(14),
                    fontFamily: 'Poppins-SemiBold',
                    marginTop: 0,
                    padding: 0,
                    // borderWidth: 1,
                  }}
                  placeholder=" "
                  textInputClass={{borderColor: colors.BLUE}}
                />

                <CustomTextArea
                  title="Notes"
                  titleStyle={{
                    color: colors.GRAY_FIVE,
                    fontSize: normalize(14),
                    fontFamily: 'Poppins-SemiBold',
                    marginTop: 0,
                    padding: 0,
                    // borderWidth: 1,
                  }}
                  placeholder=" "
                  textInputClass={{borderColor: colors.BLUE}}
                />
                <CustomTextArea
                  title="Notes"
                  titleStyle={{
                    color: colors.GRAY_FIVE,
                    fontSize: normalize(14),
                    fontFamily: 'Poppins-SemiBold',
                    marginTop: 0,
                    padding: 0,
                    // borderWidth: 1,
                  }}
                  placeholder=" "
                  textInputClass={{borderColor: colors.BLUE}}
                />

                <View style={styles.buttonView}>
                  <RoundedButton
                    title="Save"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    onPress={() => alert('hello')}
                  />
                </View>
              </>
            ) : null}

            {active === 2 ? requestedSessionJSX : null}
          </ScrollView>
        </ViewWithCircle>
      </MasterLayout>
    );
  }
}
export default Sessions;

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
    marginTop: normalize(30),
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
});
