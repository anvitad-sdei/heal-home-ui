import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OptYesNo from '../../components/OptYesNo';

class AlcoholTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q2Status: false,
      q1Status: false,
      q3Status: false,
      q4Status: false,
      q5Status: false,
      q6Status: false,
      q7Status: false,
      q8Status: false,
      q9Status: false,
      q10Status: false,
      q11Status: false,
      q12Status: false,
      q13Status: false,
      q14Status: false,
      q15Status: false,
      q16Status: false,
      q17Status: false,
      q18Status: false,
      q19Status: false,
      q20Status: false,
      q21Status: false,
      q22Status: false,
      q23Status: false,
    };
  }
  q1Handler = () => {
    const {q1Status} = this.state;
    this.setState({q1Status: !q1Status});
  };
  q2Handler = () => {
    const {q2Status} = this.state;
    this.setState({q2Status: !q2Status});
  };
  q3Handler = () => {
    const {q3Status} = this.state;
    this.setState({q3Status: !q3Status});
  };
  q4Handler = () => {
    const {q4Status} = this.state;
    this.setState({q4Status: !q4Status});
  };
  q5Handler = () => {
    const {q5Status} = this.state;
    this.setState({q5Status: !q5Status});
  };
  q6Handler = () => {
    const {q6Status} = this.state;
    this.setState({q6Status: !q6Status});
  };
  q7Handler = () => {
    const {q7Status} = this.state;
    this.setState({q7Status: !q7Status});
  };
  q8Handler = () => {
    const {q8Status} = this.state;
    this.setState({q8Status: !q8Status});
  };
  q9Handler = () => {
    const {q9Status} = this.state;
    this.setState({q9Status: !q9Status});
  };
  q10Handler = () => {
    const {q10Status} = this.state;
    this.setState({q10Status: !q10Status});
  };
  q11Handler = () => {
    const {q11Status} = this.state;
    this.setState({q11Status: !q11Status});
  };
  q12Handler = () => {
    const {q12Status} = this.state;
    this.setState({q12Status: !q12Status});
  };
  q13Handler = () => {
    const {q13Status} = this.state;
    this.setState({q13Status: !q13Status});
  };
  q14Handler = () => {
    const {q14Status} = this.state;
    this.setState({q14Status: !q14Status});
  };
  q15Handler = () => {
    const {q15Status} = this.state;
    this.setState({q15Status: !q15Status});
  };
  q16Handler = () => {
    const {q16Status} = this.state;
    this.setState({q16Status: !q16Status});
  };
  q17Handler = () => {
    const {q17Status} = this.state;
    this.setState({q17Status: !q17Status});
  };
  q18Handler = () => {
    const {q18Status} = this.state;
    this.setState({q18Status: !q18Status});
  };
  q19Handler = () => {
    const {q19Status} = this.state;
    this.setState({q19Status: !q19Status});
  };

  q20Handler = () => {
    const {q20Status} = this.state;
    this.setState({q20Status: !q20Status});
  };
  q21Handler = () => {
    const {q21Status} = this.state;
    this.setState({q21Status: !q21Status});
  };
  q22Handler = () => {
    const {q22Status} = this.state;
    this.setState({q22Status: !q22Status});
  };
  q23Handler = () => {
    const {q23Status} = this.state;
    this.setState({q23Status: !q23Status});
  };

  render() {
    const {
      q1Status,
      q2Status,
      q3Status,
      q4Status,
      q5Status,
      q6Status,
      q7Status,
      q8Status,
      q9Status,
      q10Status,
      q11Status,
      q12Status,
      q13Status,
      q14Status,
      q15Status,
      q16Status,
      q17Status,
      q18Status,
      q19Status,
      q20Status,
      q21Status,
      q22Status,
      q23Status,
    } = this.state;
    console.log(this.state);
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
                  <OptYesNo
                    status={q1Status}
                    handler={() => this.q1Handler()}
                  />
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
                  <OptYesNo
                    status={q3Status}
                    handler={() => this.q3Handler()}
                  />
                  <View style={styles.borderColorBottom} />
                </View>

                <Text style={styles.textQuestion}>
                  Can you stop drinking without difficulty after one or two
                  drinks?
                </Text>
                <OptYesNo status={q4Status} handler={() => this.q4Handler()} />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Do you ever feel guilty about your drinking?
                </Text>
                <OptYesNo status={q5Status} handler={() => this.q5Handler()} />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever attended a meeting of Alcoholics Anonymous(AA)?
                </Text>
                <OptYesNo status={q6Status} handler={() => this.q6Handler()} />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gotten into physical fights when drinking?
                </Text>
                <OptYesNo status={q7Status} handler={() => this.q7Handler()} />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Has drinking ever created problems between you and a near
                  relative or close friend?
                </Text>
                <OptYesNo status={q8Status} handler={() => this.q8Handler()} />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Has any family member or close friend gone to anyone for help
                  about your drinking?
                </Text>
                <OptYesNo status={q9Status} handler={() => this.q9Handler()} />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever lost friends because of your drinking?{' '}
                </Text>
                <OptYesNo
                  status={q10Status}
                  handler={() => this.q10Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gotten into trouble at work because of drinking?
                </Text>
                <OptYesNo
                  status={q11Status}
                  handler={() => this.q11Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever lost a job because of drinking?
                </Text>
                <OptYesNo
                  status={q12Status}
                  handler={() => this.q12Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever neglected your obligations, your family, or your
                  work for two or more days in a row because you were drinking?
                </Text>
                <OptYesNo
                  status={q13Status}
                  handler={() => this.q13Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Do you drink before noon fairly often?
                </Text>
                <OptYesNo
                  status={q14Status}
                  handler={() => this.q14Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever been told you have liver trouble such as
                  cirrhosis?
                </Text>
                <OptYesNo
                  status={q15Status}
                  handler={() => this.q15Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  After heavy drinking have you ever had delirium
                  tremens(D.T's), severe shaking, visual or auditory (hearing)
                  hallucinations?
                </Text>
                <OptYesNo
                  status={q16Status}
                  handler={() => this.q16Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gone to anyone for help about your drinking?
                </Text>
                <OptYesNo
                  status={q17Status}
                  handler={() => this.q17Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever been hospitalized because of drinking?
                </Text>
                <OptYesNo
                  status={q18Status}
                  handler={() => this.q18Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Has your drinking ever resulted in your being hospitalized in
                  a psychiatric ward?
                </Text>
                <OptYesNo
                  status={q19Status}
                  handler={() => this.q19Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever gone to doctor,social worker, clergyman or
                  mental health clinic for help with any emotional problem in
                  which drinking was part of the problem?
                </Text>
                <OptYesNo
                  status={q20Status}
                  handler={() => this.q20Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you been arrested more than once for driving under the
                  influence of alcohol?
                </Text>
                <OptYesNo
                  status={q21Status}
                  handler={() => this.q21Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  Have you ever been arrested, even for a few hours because of
                  other behaviour while drinking?
                </Text>
                <OptYesNo
                  status={q22Status}
                  handler={() => this.q22Handler()}
                />
                <View style={styles.borderColorBottom} />
                <Text style={styles.textQuestion}>
                  After heavy drinking have you ever had D.T.'s, severe shaking,
                  visual or auditory (hearing) hallucinations?
                </Text>
                <OptYesNo
                  status={q23Status}
                  handler={() => this.q23Handler()}
                />
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
