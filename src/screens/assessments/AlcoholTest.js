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
import Axios from 'axios';
import {apiUrls} from '../../redux/api/constants';
import Loader from '../../components/Loader';
class AlcoholTest extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      aId: navigation.getParam('id'),
      groupId: navigation.getParam('groupId'),
      filledStatus: navigation.getParam('filledStatus'),
      qList: [],
      qId: '',
      isLoading: false,
    };
  }
  componentDidMount() {
    this.getAssessmentDataByIdLocal();
  }
  getAssessmentDataByIdLocal = async () => {
    const {aId} = this.state;
    try {
      this.setState({isLoading: true});
      let res = await Axios(`${apiUrls.BASE_URL}/forms/${aId}`);
      if (res) {
        const {id, groupId, groupName, qlist} = res.data.response;
        this.setState({
          qList: qlist,
          id: id,
          groupId: groupId,
          groupName: groupName,
        });
        this.setState({isLoading: false});
      }
    } catch (err) {
      this.setState({isLoading: false});
      Alert.alert('Process Failed');
    }
  };

  onHandleAssessment = assessmentAnswer => {
    this.setState({assessmentAnswer: assessmentAnswer});
  };

  onSaveAssessmentData = () => {
    const {id, groupId, qList, filledStatus} = this.state;
    const data = {
      id: id,
      groupId: groupId,
      qlist: qList,
      filled: filledStatus,
    };
    this.props.saveAssessment(data);
  };

  yesnohandler = (i, item) => {
    const {qList, filledStatus} = this.state;
    if (filledStatus) {
      return;
    } else {
      let data = qList;
      data[i].booleanAnswer = !item.booleanAnswer;
      this.setState({qList: data});
    }
  };
  multiqaHandler = (i, qi, value) => {
    const {qList, filledStatus} = this.state;
    if (filledStatus) {
      return;
    } else {
      const data = qList;
      if (data[i].multiselectAnswerList.length) {
        let x = data[i].multiselectAnswerList.find(item =>
          item === value ? true : false,
        );
        if (x) {
          let checkIndex = data[i].multiselectAnswerList.findIndex(
            item => item === value,
          );
          data[i].multiselectAnswerList.splice(checkIndex, 1);
          this.setState({list: data});
        } else {
          data[i].multiselectAnswerList.push(value);
          this.setState({list: data});
        }
      } else {
        data[i].multiselectAnswerList.push(value);
        this.setState({qList: data});
      }
    }
  };
  inputTypeHandler = (value, i) => {
    const {qList, filledStatus} = this.state;
    if (filledStatus) {
      return;
    } else {
      let data = qList;
      data[i].textAnswer = value;
      console.log(data[i].textAnswer);
      this.setState({qList: data});
    }
  };
  render() {
    const {qList, groupName, filledStatus} = this.state;
    const getDataByIdJSX = qList.length
      ? qList.map((item, i) => {
          return (
            <View key={i}>
              <Text style={styles.textQuestion}>{item.question}</Text>

              {item.questionType === 'Yes_no' ? (
                <OptYesNo
                  status={item.booleanAnswer}
                  handler={() => this.yesnohandler(i, item)}
                />
              ) : null}
              {item.questionType === 'Multi_Select'
                ? item.originalMultiselectAnswerList.map((qa, qi) => {
                    let status = item.multiselectAnswerList.length
                      ? item.multiselectAnswerList.find(item => {
                          return item === qa ? true : false;
                        })
                      : false;
                    return (
                      <MultiSelectOptions
                        title={qa}
                        status={status}
                        handler={() => {
                          this.multiqaHandler(
                            i,
                            qi,
                            item.originalMultiselectAnswerList[qi],
                          );
                        }}
                      />
                    );
                  })
                : null}
              {item.questionType === 'Text' ? (
                <CustomTextArea
                  onChangeText={value => this.inputTypeHandler(value, i)}
                  value={item.textAnswer}
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
                <Text style={styles.heading}>{groupName}</Text>
                {getDataByIdJSX}
                {filledStatus ? null : (
                  <RoundedButton
                    title="Submit"
                    buttonStyle={styles.buttonStyle}
                    titleStyle={styles.titleStyle}
                    onPress={() => this.onSaveAssessmentData()}
                  />
                )}
              </View>
            </ScrollView>
            <Loader isLoading={this.state.isLoading} />
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
