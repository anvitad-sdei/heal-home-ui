import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import CustomImage from '../../components/Image';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {active: 1};
  }
  nextHandler = () => {
    const {active} = this.state;
    if (active < 3) {
      this.setState({active: active + 1});
    }
  };
  prevHandler = () => {
    const {active} = this.state;
    if (active > 1) {
      this.setState({active: active - 1});
    }
  };
  render() {
    const Carousel = () => {
      const {active} = this.state;
      const buttonTitle = active === 3 ? 'DONE' : 'NEXT';
      return (
        <View style={{backgroundColor: colors.WHITE, height: '100%'}}>
          {/* Goal Screen*/}

          {active === 1 ? (
            <View>
              <View>
                <View style={styles.backLightImage}>
                  <CustomImage
                    source={require('../../assets/goalBackground.png')}
                  />
                </View>
                <View style={styles.goalImageStyle}>
                  <CustomImage source={require('../../assets/goal.png')} />
                </View>
              </View>
              <View style={styles.headingView}>
                <Text style={[styles.heading, styles.textAlign]}>
                  Choose your goal
                </Text>
                <Text style={[styles.subHeading, styles.textAlign]}>
                  Drinking log to track your daily
                </Text>
                <Text style={[styles.subHeading, styles.textAlign]}>
                  drinking record.
                </Text>
              </View>
              <View style={styles.dotView}>
                <View
                  style={{
                    ...styles.dotOne,
                    backgroundColor: `${
                      active === 1 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
                <View
                  style={{
                    ...styles.dotSecond,
                    backgroundColor: `${
                      active === 2 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
                <View
                  style={{
                    ...styles.dotOne,
                    backgroundColor: `${
                      active === 3 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
              </View>
              <RoundedButton
                title={buttonTitle}
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleStyle}
                onPress={() => {
                  active === 3
                    ? this.props.navigation.navigate('SignIn')
                    : this.nextHandler();
                }}
              />
            </View>
          ) : null}

          {/* Video Session Screen*/}

          {active === 2 ? (
            <View>
              <View>
                <View style={styles.backLightImage}>
                  <CustomImage
                    source={require('../../assets/goalBackground.png')}
                  />
                </View>
                <View style={styles.videoImageStyle}>
                  <CustomImage source={require('../../assets/video.png')} />
                </View>
              </View>
              <View style={styles.headingView}>
                <Text style={[styles.heading, styles.textAlign]}>
                  Video Session
                </Text>
                <Text style={[styles.subHeading, styles.textAlign]}>
                  Join your therapist directly
                </Text>
                <Text style={[styles.subHeading, styles.textAlign]}>
                  from your phone
                </Text>
              </View>

              <View style={styles.dotView}>
                <View
                  style={{
                    ...styles.dotOne,
                    backgroundColor: `${
                      active === 1 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
                <View
                  style={{
                    ...styles.dotSecond,
                    backgroundColor: `${
                      active === 2 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
                <View
                  style={{
                    ...styles.dotOne,
                    backgroundColor: `${
                      active === 3 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
              </View>
              <View style={styles.buttonView}>
                {active === 1 ? null : (
                  <TouchableWithoutFeedback onPress={() => this.prevHandler()}>
                    <View style={styles.backArrowButton}>
                      <Icon
                        name="chevron-left"
                        color={colors.WHITE}
                        size={normalize(25)}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                )}

                <RoundedButton
                  title={buttonTitle}
                  buttonStyle={styles.buttonStyleSecond}
                  titleStyle={styles.titleStyle}
                  onPress={() => {
                    active === 3
                      ? this.props.navigation.navigate('SignIn')
                      : this.nextHandler();
                  }}
                />
              </View>
            </View>
          ) : null}

          {/* Daily Journaling Screen*/}

          {active === 3 ? (
            <View>
              <View>
                <View style={styles.backLightImage}>
                  <CustomImage
                    source={require('../../assets/goalBackground.png')}
                  />
                </View>
                <View style={styles.journalImageStyle}>
                  <CustomImage
                    source={require('../../assets/journaling.png')}
                  />
                </View>
              </View>
              <View style={styles.headingView}>
                <Text style={[styles.heading, styles.textAlign]}>
                  Daily Journaling
                </Text>
                <Text style={[styles.subHeading, styles.textAlign]}>
                  To help your team have a better
                </Text>
                <Text style={[styles.subHeading, styles.textAlign]}>
                  picture
                </Text>
              </View>

              <View style={styles.dotView}>
                <View
                  style={{
                    ...styles.dotOne,
                    backgroundColor: `${
                      active === 1 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
                <View
                  style={{
                    ...styles.dotSecond,
                    backgroundColor: `${
                      active === 2 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
                <View
                  style={{
                    ...styles.dotOne,
                    backgroundColor: `${
                      active === 3 ? colors.BLUE_TEXT : colors.DARK_DOT_COLOR
                    }`,
                  }}
                />
              </View>
              <View style={styles.buttonView}>
                {active === 1 ? null : (
                  <TouchableWithoutFeedback onPress={() => this.prevHandler()}>
                    <View style={styles.backArrowButton}>
                      <Icon
                        name="chevron-left"
                        color={colors.WHITE}
                        size={normalize(25)}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                )}

                <RoundedButton
                  title={buttonTitle}
                  buttonStyle={styles.buttonStyleSecond}
                  titleStyle={styles.titleStyle}
                  onPress={() => {
                    active === 3
                      ? this.props.navigation.navigate('SignIn')
                      : this.nextHandler();
                  }}
                />
              </View>
            </View>
          ) : null}
        </View>
      );
    };
    return (
      <MasterLayout>
        <Carousel />
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  backLightImage: {
    width: normalize(218),
    height: normalize(200),
    alignSelf: 'center',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: colors.BLUE_TEXT,
    marginTop: hp(8),
    marginBottom: hp(6),
  },
  goalImageStyle: {
    height: normalize(150),
    width: normalize(150),
    alignSelf: 'center',
    position: 'absolute',
    top: '29%',
    //borderWidth: 1,
  },
  videoImageStyle: {
    height: normalize(178),
    width: normalize(140),
    alignSelf: 'center',
    position: 'absolute',
    top: '24%',
    // borderWidth: 1,
  },
  journalImageStyle: {
    height: normalize(140),
    width: normalize(150),
    alignSelf: 'center',
    position: 'absolute',
    top: '29%',
    // borderWidth: 1,
  },
  headingView: {marginVertical: 2},
  dotView: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotOne: {
    height: normalize(8),
    width: normalize(8),
    borderRadius: 10,
  },
  dotSecond: {
    height: normalize(8),
    width: normalize(8),
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: hp(16),
    justifyContent: 'space-around',
    width: '80%',
  },
  backArrowButton: {
    marginVertical: hp(0.6),
    borderRadius: 20,
    backgroundColor: colors.BLUE_TEXT,
    color: colors.WHITE,
  },
  buttonStyle: {
    width: normalize(150),
    borderRadius: 30,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLUE_TEXT,
    marginTop: hp(16),
    alignSelf: 'center',
  },
  buttonStyleSecond: {
    width: normalize(150),
    borderRadius: 30,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLUE_TEXT,
  },

  titleStyle: {
    color: colors.BLUE_TEXT,
    fontSize: normalize(14),
    fontFamily: 'Poppins-SemiBold',
  },
  heading: {
    fontSize: normalize(20),
    marginBottom: hp(2),
    color: colors.TEXT_COLOR,
    fontFamily: 'Poppins-SemiBold',
  },
  subHeading: {
    fontSize: normalize(14),
    color: colors.TEXT_COLOR,
    fontFamily: 'Poppins-Light',
  },
  textAlign: {textAlign: 'center'},
});

export default Welcome;
