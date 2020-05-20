import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OptYesNo from '../../components/OptYesNo';
import {getAssessmentById} from '../../redux/actions';
import {connect} from 'react-redux';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import MultiSelectOptions from '../../components/MultiSelectOptions';
import RoundedButton from '../../components/Buttons/RoundedButton';
class AlcoholTest extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      id: navigation.getParam('id'),
      groupId: navigation.getParam('groupId'),
      qList: [],
      // q2Status: false,
      // q1Status: false,
      // q3Status: false,
      // q4Status: false,
      // q5Status: false,
      // q6Status: false,
      // q7Status: false,
      // q8Status: false,
      // q9Status: false,
      // q10Status: false,
      // q11Status: false,
      // q12Status: false,
      // q13Status: false,
      // q14Status: false,
      // q15Status: false,
      // q16Status: false,
      // q17Status: false,
      // q18Status: false,
      // q19Status: false,
      // q20Status: false,
      // q21Status: false,
      // q22Status: false,
      // q23Status: false,
      assessmentAnswer: '',
      qId: '',
      questionId: '',
      questionType: '',
      qStatus: [],
    };
  }
  q1Handler = data => {
    const {id, questionId, questionType, booleanAnswer} = data;
    const {qList, qStatus} = this.state;
    const setData = {
      id: id,
      questionId: questionId,
      questionType: questionType,
      booleanAnswer: booleanAnswer,
    };
    if (qStatus.length) {
      let checkExistance = qStatus.find(item => {
        return item === data.questionId ? item : false;
      });
      if (checkExistance) {
        this.setState({
          qList: qList.filter(item => item.questionId !== checkExistance),
          qStatus: qStatus.filter(item => item !== checkExistance),
        });
      } else {
        this.setState({
          qList: [...qList, setData],
          qStatus: [...qStatus, questionId],
        });
      }
    } else {
      this.setState({
        qList: [...qList, setData],
        qStatus: [...qStatus, questionId],
      });
    }
  };

  // q2Handler = () => {
  //   const {q2Status} = this.state;
  //   this.setState({q2Status: !q2Status});
  // };
  // q3Handler = () => {
  //   const {q3Status} = this.state;
  //   this.setState({q3Status: !q3Status});
  // };
  // q4Handler = () => {
  //   const {q4Status} = this.state;
  //   this.setState({q4Status: !q4Status});
  // };
  // q5Handler = () => {
  //   const {q5Status} = this.state;
  //   this.setState({q5Status: !q5Status});
  // };
  // q6Handler = () => {
  //   const {q6Status} = this.state;
  //   this.setState({q6Status: !q6Status});
  // };
  // q7Handler = () => {
  //   const {q7Status} = this.state;
  //   this.setState({q7Status: !q7Status});
  // };
  // q8Handler = () => {
  //   const {q8Status} = this.state;
  //   this.setState({q8Status: !q8Status});
  // };
  // q9Handler = () => {
  //   const {q9Status} = this.state;
  //   this.setState({q9Status: !q9Status});
  // };
  // q10Handler = () => {
  //   const {q10Status} = this.state;
  //   this.setState({q10Status: !q10Status});
  // };
  // q11Handler = () => {
  //   const {q11Status} = this.state;
  //   this.setState({q11Status: !q11Status});
  // };
  // q12Handler = () => {
  //   const {q12Status} = this.state;
  //   this.setState({q12Status: !q12Status});
  // };
  // q13Handler = () => {
  //   const {q13Status} = this.state;
  //   this.setState({q13Status: !q13Status});
  // };
  // q14Handler = () => {
  //   const {q14Status} = this.state;
  //   this.setState({q14Status: !q14Status});
  // };
  // q15Handler = () => {
  //   const {q15Status} = this.state;
  //   this.setState({q15Status: !q15Status});
  // };
  // q16Handler = () => {
  //   const {q16Status} = this.state;
  //   this.setState({q16Status: !q16Status});
  // };
  // q17Handler = () => {
  //   const {q17Status} = this.state;
  //   this.setState({q17Status: !q17Status});
  // };
  // q18Handler = () => {
  //   const {q18Status} = this.state;
  //   this.setState({q18Status: !q18Status});
  // };
  // q19Handler = () => {
  //   const {q19Status} = this.state;
  //   this.setState({q19Status: !q19Status});
  // };

  // q20Handler = () => {
  //   const {q20Status} = this.state;
  //   this.setState({q20Status: !q20Status});
  // };
  // q21Handler = () => {
  //   const {q21Status} = this.state;
  //   this.setState({q21Status: !q21Status});
  // };
  // q22Handler = () => {
  //   const {q22Status} = this.state;
  //   this.setState({q22Status: !q22Status});
  // };
  // q23Handler = () => {
  //   const {q23Status} = this.state;
  //   this.setState({q23Status: !q23Status});
  // };

  componentDidMount() {
    this.props.getAssessmentById(this.state.id);
  }

  onHandleAssessment = assessmentAnswer => {
    this.setState({assessmentAnswer: assessmentAnswer});
  };

  onSaveAssessmentData = () => {
    const {id, groupId, qList} = this.state;
    const data = {
      id: id,
      groupId: groupId,
      qlist: qList,
    };
    console.log(data); //data is comming for yes_no only working fine hit api here
  };
  statusHandler = id => {
    const {qStatus} = this.state;
    return qStatus.length
      ? qStatus.find(item => (item === id ? true : false))
      : false;
  };

  render() {
    const {
      q1Status,
      // q2Status,
      // q3Status,
      // q4Status,
      // q5Status,
      // q6Status,
      // q7Status,
      // q8Status,
      // q9Status,
      // q10Status,
      // q11Status,
      // q12Status,
      // q13Status,
      // q14Status,
      // q15Status,
      // q16Status,
      // q17Status,
      // q18Status,
      // q19Status,
      // q20Status,
      // q21Status,
      // q22Status,
      // q23Status,
      assessmentAnswer,
    } = this.state;
    const {getAssessmentDataById} = this.props;
    console.log(this.state.qList);
    const getDataByIdJSX = getAssessmentDataById.qlist.length
      ? getAssessmentDataById.qlist.map((item, i) => {
          return (
            <View key={i}>
              <Text style={styles.textQuestion}>{item.question}</Text>

              <Text>{item.questionId}</Text>
              <Text>{item.questionType}</Text>

              {item.questionType === 'Yes_no' ? (
                <OptYesNo
                  status={this.statusHandler(item.questionId)}
                  handler={() => this.q1Handler(item)}
                />
              ) : null}
              {item.questionType === 'Multi_Select' ? (
                <MultiSelectOptions status={q1Status} />
              ) : null}
              {item.questionType === 'Text' ? (
                <CustomTextArea
                  onChange={() => this.onHandleAssessment()}
                  value={assessmentAnswer}
                  textAreaView={{paddingBottom: normalize(10), paddingTop: 0}}
                  titleStyle={{marginTop: 0}}
                />
              ) : null}

              <View style={styles.borderColorBottom} />
            </View>
          );
        })
      : null;

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
                <Text style={styles.heading}>
                  {getAssessmentDataById.groupName}
                </Text>
                {getDataByIdJSX}
                <RoundedButton
                  title="Submit"
                  buttonStyle={styles.buttonStyle}
                  titleStyle={styles.titleStyle}
                  onPress={() => this.onSaveAssessmentData()}
                />
              </View>
            </ScrollView>
          </View>
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
    paddingBottom: hp(50),
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
  buttonStyle: {
    width: '90%',
    borderRadius: normalize(20),
    backgroundColor: colors.BLUE,
    alignSelf: 'center',
    marginTop: normalize(40),
  },
  titleStyle: {
    fontSize: normalize(15),
    fontFamily: 'Poppins-Bold',
  },
});

const mapStateToProps = ({assessment}) => {
  const {assessmentById} = assessment;
  return {
    getAssessmentDataById: assessmentById,
  };
};

export default connect(
  mapStateToProps,
  {
    getAssessmentById,
  },
)(AlcoholTest);
