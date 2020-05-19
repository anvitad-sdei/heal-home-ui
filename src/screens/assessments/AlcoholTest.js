import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CustomRadioButton from '../../components/CustomRadioButton.js';
import OptYesNo from '../../components/OptYesNo';

class AlcoholTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q2Status: false,
    };
  }
  q2Handler = () => {
    const {q2Status} = this.state;
    this.setState({q2Status: !q2Status});
  };
  render() {
    const {q2Status} = this.state;
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="My Assessment"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Assessment')}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <View style={styles.shadowView}>
          <View style={styles.circleViewImage}>
            <Image
              source={require('../../assets/circle.png')}
              style={styles.imageStyle}
            />
            <View style={styles.innerViewImage}>
              <Image
                source={require('../../assets/myAssessment.png')}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={{marginTop: normalize(90)}}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.innerWrapperView}>
                <View>
                  <Text style={styles.heading}>Michigan Alcohol Test</Text>
                  <Text style={styles.textQuestion}>
                    Do you feel you are a normal drinker?
                  </Text>
                  <Text style={styles.selected}>Yes</Text>
                  <View style={styles.borderColorBottom} />
                  <Text style={styles.textQuestion}>
                    Have you ever awakened the morning after some drinking the
                    night before and found that you could not remember a part of
                    the evening?
                  </Text>
                  <OptYesNo
                    status={q2Status}
                    handler={() => this.q2Handler()}
                  />
                  <View style={styles.borderColorBottom} />
                  <Text style={styles.textQuestion}>
                    Does any near relative or close friend every worry or
                    complain about your drinking?
                  </Text>
                  <Text style={styles.selected}>Yes</Text>
                  <View style={styles.borderColorBottom} />
                </View>

                <Text style={styles.textQuestion}>
                  Can you stop drinking without difficulty after one or two
                  drinks?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Do you ever feel guilty about your drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever attended a meeting of Alcoholics Anonymous(AA)?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gotten into physical fights when drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Has drinking ever created problems between you and a near
                  relative or close friend?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Has any family member or close friend gone to anyone for help
                  about your drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever lost friends because of your drinking?{' '}
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gotten into trouble at work because of drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever lost a job because of drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever neglected your obligations, your family, or your
                  work for two or more days in a row because you were drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Do you drink before noon fairly often?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever been told you have liver trouble such as
                  cirrhosis?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  After heavy drinking have you ever had delirium
                  tremens(D.T's), severe shaking, visual or auditory (hearing)
                  hallucinations?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gone to anyone for help about your drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever been hospitalized because of drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Has your drinking ever resulted in your being hospitalized in
                  a psychiatric ward?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gone to doctor,social worker, clergyman or
                  mental health clinic for help with any emotional problem in
                  which drinking was part of the problem?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you been arrested more than once for driving under the
                  influence of alcohol?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever been arrested, even for a few hours because of
                  other behaviour while drinking?
                </Text>
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  After heavy drinking have you ever had D.T.'s, severe shaking,
                  visual or auditory (hearing) hallucinations?
                </Text>
                <View style={styles.borderColorBottom} />
              </View>
            </ScrollView>
          </View>
        </View>
      </MasterLayout>
    );
  }
}

export default AlcoholTest;
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: colors.BLUE,
    height: normalize(200), //150
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(120),
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
    marginBottom: normalize(310), //310
    borderRadius: normalize(20),
    top: normalize(-100),
  },
  scrollView: {
    paddingBottom: hp(100),
  },

  innerWrapperView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  heading: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.GRAY_FIVE,
    fontSize: normalize(14),
  },
  textQuestion: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
    color: colors.DARK_TEXT_BLUE,
    paddingTop: normalize(20),
  },
  selected: {paddingVertical: normalize(20)},
  borderColorBottom: {
    borderBottomWidth: 1,
    borderColor: colors.COLOR_29,
  },
});
