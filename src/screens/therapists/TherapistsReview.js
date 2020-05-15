import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RoundedButton from '../../components/Buttons/RoundedButton';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
class TherapistsReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      reply: '',
    };
  }

  onChangeReply = reply => {
    this.setState({reply: reply});
  };
  onReply = () => {
    this.setState({active: 2});
  };

  render() {
    const {active, reply} = this.state;
    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Therapist Review"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <View style={styles.shadowView}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.innerWrapperView}>
              <Text style={styles.dateHeading}>Tuesday, May 12th 2020</Text>
              <Text style={styles.subTitle}>
                Please fill this log regularly.
              </Text>
              <View style={styles.borderBottomStyle} />
              <Text style={styles.heading}>Alcohol Management commented</Text>
              <Text style={styles.replyText}>Lorem ipsum dolor sit amet</Text>
              {active === 1 ? (
                <RoundedButton
                  title="Reply"
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.titleStyle}
                  value={reply}
                  onChangeText={() => this.onChangeReply()}
                  onPress={() => this.onReply()}
                />
              ) : null}

              {active === 2 ? (
                <View>
                  <CustomTextArea
                    placeholder=" "
                    textAreaView={{padding: 0}}
                    titleStyle={{marginTop: 0}}
                  />
                  <RoundedButton
                    title="Submit"
                    buttonStyle={styles.submitButtonStyle}
                    titleStyle={styles.submitTitleStyle}
                  />
                </View>
              ) : null}
            </View>
          </ScrollView>
        </View>
      </MasterLayout>
    );
  }
}
export default TherapistsReview;
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.BLUE,
    height: normalize(200),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(120), //73
  },
  shadowView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: normalize(310),
    // position: 'absolute',
    alignSelf: 'center',
    borderRadius: normalize(20),
    // borderWidth: 1,
    top: normalize(-100),
    //marginBottom: hp(300),
  },
  scrollView: {
    paddingBottom: hp(100),
  },
  innerWrapperView: {
    marginTop: normalize(10),
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonStyle: {
    marginTop: normalize(20),
    borderRadius: normalize(20),
    backgroundColor: colors.BLUE,
    width: normalize(100),
    marginLeft: normalize(2),
  },
  titleStyle: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
  },
  submitButtonStyle: {
    marginTop: normalize(10),
    borderRadius: normalize(20),
    backgroundColor: colors.BLUE,
    width: normalize(100),
    alignSelf: 'flex-end',
    marginRight: normalize(2),
  },
  submitTitleStyle: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
  },
  replyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    paddingTop: normalize(20),
    color: colors.GRAY_FIVE,
  },
  dateHeading: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(16),
    color: colors.GRAY_FIVE,
    paddingTop: normalize(20),
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.GRAY_FIVE,
    paddingTop: normalize(10),
  },
  borderBottomStyle: {
    borderBottomWidth: 1,
    marginVertical: normalize(20),
    borderBottomColor: colors.COLOR_29,
  },
  heading: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.BLUE,
  },
});
