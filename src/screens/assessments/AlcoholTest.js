import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, Alert} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OptYesNo from '../../components/OptYesNo';
import {getAssessmentById, saveAssessment} from '../../redux/actions';
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
      filledStatus: navigation.getParam('filledStatus'),
      qList: [],
      assessmentAnswer: '',
      qId: '',
      questionId: '',
      questionType: '',
      qStatus: [],
      mq: [],
      mq1: [],
      mq2: [],
      mq3: [],
      mq4: [],
      mq5: [],
    };
  }
  q1Handler = data => {
    const {id, questionId, questionType, booleanAnswer} = data;
    const {qList, qStatus} = this.state;
    const setData = {
      id: id,
      questionId: questionId,
      questionType: questionType,
      booleanAnswer: !booleanAnswer,
      // booleanAnswer: qStatus.length
      //   ? qStatus.find(item => {
      //       console.log(item === questionId ? true : false, item, questionId);
      //       return item === questionId ? true : false;
      //     })
      //   : false,
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
    console.log('data==============', data); //data is comming for yes_no only working fine hit api here
    this.props.saveAssessment(data);
  };
  statusHandler = id => {
    const {qStatus} = this.state;
    return qStatus.length
      ? qStatus.find(item => (item === id ? true : false))
      : false;
  };
  // mqHandler = data => {};
  mq1StatusHandler = id => {
    const {mq1} = this.state;
    return mq1.length
      ? mq1.find(item => (item.qId === id ? true : false))
      : false;
  };
  // mq2StatusHandler = id => {
  //   const {mq2} = this.state;
  //   return mq2.length
  //     ? mq2.find(item => (item.qId === id ? true : false))
  //     : false;
  // };
  // mq3StatusHandler = id => {
  //   const {mq3} = this.state;
  //   return mq3.length
  //     ? mq3.find(item => (item.qId === id ? true : false))
  //     : false;
  // };
  // mq4StatusHandler = id => {
  //   const {mq4} = this.state;
  //   return mq4.length
  //     ? mq4.find(item => (item.qId === id ? true : false))
  //     : false;
  // };
  // mq5StatusHandler = id => {
  //   const {mq5} = this.state;
  //   return mq5.length
  //     ? mq5.find(item => (item.qId === id ? true : false))
  //     : false;
  // };
  mq1Handler = (data, ans) => {
    const {questionId} = data;
    const {mq1} = this.state;
    if (mq1.length) {
      let qExists = mq1.find(item => {
        return item.qId === questionId ? true : false;
      });
      if (qExists) {
        this.setState({
          mq1: mq1.filter(item => item.qId !== questionId),
        });
      } else {
        this.setState({mq1: [...mq1, {qId: questionId, ans: ans}]});
      }
    } else {
      this.setState({mq1: [...mq1, {qId: questionId, ans: ans}]});
    }

    const sendData = {
      id: null,
      questionId: questionId,
      multiselectAnswerList: mq1.length
        ? mq1.filter(item => item.qId === questionId)
        : [],
      questionType: 'Multi_Select',
    };
    // this.saveMq(sendData);
  };
  mq2Handler = (data, ans) => {
    const {questionId} = data;
    const {mq2} = this.state;
    if (mq2.length) {
      let qExists = mq2.find(item => {
        return item.qId === questionId ? true : false;
      });
      if (qExists) {
        this.setState({
          mq2: mq2.filter(item => item.qId !== questionId),
        });
      } else {
        this.setState({mq2: [...mq2, {qId: questionId, ans: ans}]});
      }
    } else {
      this.setState({mq2: [...mq2, {qId: questionId, ans: ans}]});
    }
    const sendData = {
      id: null,
      questionId: questionId,
      multiselectAnswerList: mq2.length
        ? mq2.filter(item => item.qId === questionId)
        : [],
      questionType: 'Multi_Select',
    };
    // this.saveMq(sendData);
  };
  mq3Handler = (data, ans) => {
    const {questionId} = data;
    const {mq3} = this.state;
    if (mq3.length) {
      let qExists = mq3.find(item => {
        return item.qId === questionId ? true : false;
      });
      if (qExists) {
        this.setState({
          mq3: mq3.filter(item => item.qId !== questionId),
        });
      } else {
        this.setState({mq3: [...mq3, {qId: questionId, ans: ans}]});
      }
    } else {
      this.setState({mq3: [...mq3, {qId: questionId, ans: ans}]});
    }
  };
  mq4Handler = (data, ans) => {
    const {questionId} = data;
    const {mq4} = this.state;
    if (mq4.length) {
      let qExists = mq4.find(item => {
        return item.qId === questionId ? true : false;
      });
      if (qExists) {
        this.setState({
          mq4: mq4.filter(item => item.qId !== questionId),
        });
      } else {
        this.setState({mq4: [...mq4, {qId: questionId, ans: ans}]});
      }
    } else {
      this.setState({mq4: [...mq4, {qId: questionId, ans: ans}]});
    }
  };
  mq5Handler = (data, ans) => {
    const {questionId} = data;
    const {mq5} = this.state;
    if (mq5.length) {
      let qExists = mq5.find(item => {
        return item.qId === questionId ? true : false;
      });
      if (qExists) {
        this.setState({
          mq5: mq5.filter(item => item.qId !== questionId),
        });
      } else {
        this.setState({mq5: [...mq5, {qId: questionId, ans: ans}]});
      }
    } else {
      this.setState({mq5: [...mq5, {qId: questionId, ans: ans}]});
    }
  };
  saveMq = data => {
    const {qList} = this.state;
    const {questionId} = data;
    if (qList.length) {
      let checkex = qList.findIndex(item => {
        return item.questionId === questionId;
      });
      console.log('hey===>', checkex);
      if (checkex || checkex === 0) {
        this.setState({
          qList: qList.find(item =>
            item.questionId === data.questionId ? true : false,
          )
            ? [
                ...qList,
                {
                  multiselectAnswerList:
                    qList.multiselectAnswerList &&
                    qList.multiselectAnswerList.find(item => {
                      return data.multiselectAnswerList.find(check =>
                        check === item ? true : false,
                      );
                    })
                      ? qList.multiselectAnswerList.filter(
                          (item, i) => item !== data.multiselectAnswerList[i],
                        )
                      : [],
                },
              ]
            : [],
        });
      } else {
        this.setState({qList: [...qList, data]});
      }
    } else {
      this.setState({qList: [...qList, data]});
    }
  };

  render() {
    const {q1Status, assessmentAnswer, qList} = this.state;
    const {getAssessmentDataById} = this.props;
    const getDataByIdJSX = getAssessmentDataById.qlist.length
      ? getAssessmentDataById.qlist.map((item, i) => {
          return (
            <View key={i}>
              <Text style={styles.textQuestion}>{item.question}</Text>

              {item.questionType === 'Yes_no' ? (
                <OptYesNo
                  // status={
                  //   getAssessmentDataById.qlist.length
                  //     ? getAssessmentDataById.qlist.find(check => {
                  //         return check.questionId === item.questionId
                  //           ? true
                  //           : false;
                  //       })
                  //     : this.statusHandler(item.questionId)
                  // }
                  status={
                    item.booleanAnswer || this.statusHandler(item.questionId)
                  }
                  handler={() => this.q1Handler(item)}
                />
              ) : null}

              {item.questionType === 'Multi_Select' &&
              this.state.filledStatus === true
                ? item.multiselectAnswerList.map(item => (
                    <MultiSelectOptions title={item} />
                  ))
                : item.originalMultiselectAnswerList.map(item => (
                    <MultiSelectOptions title={item} />
                  ))}

              {/* {item.questionType === 'Multi_Select' ? (
                <MultiSelectOptions
                  // status={q1Status}
                  mq1={
                    item.multiselectAnswerList[0] ||
                    this.mq1StatusHandler(item.questionId)
                  }
                  mq2={
                    item.multiselectAnswerList[1] ||
                    this.mq2StatusHandler(item.questionId)
                  }
                  mq3={
                    item.multiselectAnswerList[2] ||
                    this.mq3StatusHandler(item.questionId)
                  }
                  mq4={
                    item.multiselectAnswerList[3] ||
                    this.mq4StatusHandler(item.questionId)
                  }
                  mq5={
                    item.multiselectAnswerList[4] ||
                    this.mq5StatusHandler(item.questionId)
                  }
                  mq1Handler={() =>
                    item.multiselectAnswerList[0]
                      ? null
                      : this.mq1Handler(item, 1)
                  }
                  mq2Handler={() => this.mq2Handler(item, 2)}
                  mq3Handler={() => this.mq3Handler(item, 3)}
                  mq4Handler={() => this.mq4Handler(item, 4)}
                  mq5Handler={() => this.mq5Handler(item, 5)}
                  // mqHandler={() => this.mqHandler()}
                />
              ) : null} */}
              {item.questionType === 'Text' ? (
                <CustomTextArea
                  onChangeText={text => this.onHandleAssessment(text)}
                  value={assessmentAnswer}
                  textAreaView={{
                    paddingBottom: normalize(10),
                    paddingTop: 0,
                  }}
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
                {/* {getAssessmentDataById.qlist.length ? null : (
                  <RoundedButton
                    title="Submit"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    onPress={() => this.onSaveAssessmentData()}
                  />
                )} */}
                {this.state.filledStatus === true ? null : (
                  <RoundedButton
                    title="Submit"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    onPress={() => this.onSaveAssessmentData()}
                  />
                )}
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
    paddingTop: normalize(10),
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
  const {assessmentById, saveAssessmentData} = assessment;
  return {
    getAssessmentDataById: assessmentById,
    data: saveAssessmentData,
  };
};

export default connect(
  mapStateToProps,
  {
    getAssessmentById,
    saveAssessment,
  },
)(AlcoholTest);
