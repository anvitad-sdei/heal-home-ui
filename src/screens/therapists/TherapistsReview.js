import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RoundedButton from '../../components/Buttons/RoundedButton';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import {getAllTherapistsReview} from '../../redux/actions';
import {connect} from 'react-redux';
import moment from 'moment';
class TherapistsReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
      reply: '',
      activeIndex: 0,
      comment: '',
    };
  }
  componentDidMount() {
    this.props.getAllTherapistsReview();
  }

  onChangeReply = reply => {
    this.setState({reply: reply});
  };
  onReply = id => {
    this.setState({active: 2, activeIndex: id});
  };
  comment = (pid, did) => {
    const {reply} = this.state;
    let data = {
      parentId: pid,
      comment: reply,
      drinkingLogId: did,
    };
    this.setState({active: 1, activeIndex: 0});
    console.log('final data====?', data); //hit api here
  };

  render() {
    const {active, reply, activeIndex} = this.state;
    const {data} = this.props;
    console.log('data===============review', data);

    const reviewListData = data.drinkingLogReviewList.length ? (
      data.drinkingLogReviewList.map((item, i) => {
        return (
          <View style={styles.innerWrapperView}>
            <Text style={styles.dateHeading}>
              {moment(item.createdDate).format('dddd') +
                ', ' +
                moment(item.createdDate).format('MMMM Do YYYY')}
            </Text>

            <View style={styles.borderBottomStyle} />
            <Text style={styles.heading}>
              {item.createdBy + ' ' + 'commented'}
            </Text>
            <Text style={styles.subTitle}>{item.comment}</Text>

            <Text
              style={{
                color: colors.GRAY_PLACE,
                fontSize: normalize(10),
                paddingTop: normalize(5),
              }}>
              {moment(item.createdDate)
                .startOf('day')
                .fromNow()}
            </Text>
            {active === 1 ? (
              <RoundedButton
                title="Reply"
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleStyle}
                value={reply}
                onChangeText={() => this.onChangeReply()}
                onPress={() => this.onReply(item.id)}
              />
            ) : null}
            {active === 2 && activeIndex === item.id ? (
              <View>
                <CustomTextArea
                  placeholder=" "
                  onChangeText={this.onChangeReply}
                  // textAreaView={{padding: 0}}
                  titleStyle={{marginTop: 0}}
                />
                <RoundedButton
                  title="Submit"
                  buttonStyle={styles.submitButtonStyle}
                  titleStyle={styles.submitTitleStyle}
                  onPress={() => this.comment(item.id, item.drinkingLogId)}
                />
              </View>
            ) : null}
            {item.childList.length
              ? item.childList.map((item, i) => {
                  return (
                    <>
                      <Text
                        style={{
                          ...styles.heading,
                          paddingTop: normalize(20),
                        }}>
                        {item.createdBy}
                      </Text>
                      <Text style={styles.replyText}>{item.comment}</Text>
                    </>
                  );
                })
              : null}
          </View>
        );
      })
    ) : (
      <Text style={styles.noDataText}>No Review Data found</Text>
    );
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Therapist Review"
        rightIcon={require('../../assets/bell.png')}
        //leftIconPress={() => this.props.navigation.openDrawer()}
        leftIconPress={() => this.props.navigation.navigate('TherapistsList')}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <View style={styles.shadowView}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.innerWrapperView}>{reviewListData}</View>
          </ScrollView>
        </View>
      </MasterLayout>
    );
  }
}

const mapStateToProps = ({therapist}) => {
  const {therapistsReview} = therapist;
  return {
    data: therapistsReview,
  };
};

export default connect(
  mapStateToProps,
  {
    getAllTherapistsReview,
  },
)(TherapistsReview);

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
    marginTop: normalize(10),
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
    paddingTop: normalize(10),
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
  noDataText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: normalize(14),
    color: colors.GRAY_FIVE,
    paddingTop: normalize(30),
  },
});
