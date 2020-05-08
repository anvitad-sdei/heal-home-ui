import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import CustomTabBar from '../../components/WeekTabbar';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {journalingSave} from '../../redux/actions';
import {connect} from 'react-redux';
class JournalQuestion extends Component {
  constructor(props) {
    super(props);
    const {navigation} = this.props;
    this.state = {
      id: navigation.getParam('id'),
      active: 1,
      gratefulToday: '',
      makeTodayGreat: '',
      accomplishToday: '',
      achieveToday: '',
      ilearnToday: '',
      thankfulNowToday: '',
      feelingRightNow: '',
      amazeHappenToday: '',
      betterToday: '',
      triggerToday: '',
      cravingExperience: '',
      medicationToday: '',
      anyComments: '',
    };
  }
  onGratefulToday = gratefulToday => {
    this.setState({gratefulToday: gratefulToday});
  };
  onTodayGreat = makeTodayGreat => {
    this.setState({makeTodayGreat: makeTodayGreat});
  };
  onAccomplishToday = accomplishToday => {
    this.setState({accomplishToday: accomplishToday});
  };
  onAchieveToday = achieveToday => {
    this.setState({achieveToday: achieveToday});
  };
  onLearnToday = ilearnToday => {
    this.setState({ilearnToday: ilearnToday});
  };
  onThankfulNow = thankfulNowToday => {
    this.setState({thankfulNowToday: thankfulNowToday});
  };
  onFeelingRightNow = feelingRightNow => {
    this.setState({feelingRightNow: feelingRightNow});
  };
  onAmazeHappen = amazeHappenToday => {
    this.setState({amazeHappenToday: amazeHappenToday});
  };
  onBetterToday = betterToday => {
    this.setState({betterToday: betterToday});
  };
  onTriggerToday = triggerToday => {
    this.setState({triggerToday: triggerToday});
  };
  onCraving = cravingExperience => {
    this.setState({cravingExperience: cravingExperience});
  };
  onMedicationToday = medicationToday => {
    this.setState({medicationToday: medicationToday});
  };
  onAnyComments = anyComments => {
    this.setState({anyComments: anyComments});
  };

  submitJournalingData = () => {
    const {
      anyComments,
      accomplishToday,
      achieveToday,
      amazeHappenToday,
      betterToday,
      cravingExperience,
      feelingRightNow,
      gratefulToday,
      ilearnToday,
      makeTodayGreat,
      medicationToday,
      thankfulNowToday,
      triggerToday,
    } = this.state;

    let data = {
      accomplishToday: accomplishToday,
      achieveToday: achieveToday,
      amazeHappenToday: amazeHappenToday,
      anyComments: anyComments,
      betterToday: betterToday,
      cravingExperience: cravingExperience,
      feelingRightNow: feelingRightNow,
      gratefulToday: gratefulToday,
      id: this.state.id,
      ilearnToday: ilearnToday,
      makeTodayGreat: makeTodayGreat,
      medicationToday: medicationToday,
      thankfulNowToday: thankfulNowToday,
      triggerToday: triggerToday,
    };
    console.log('data============>', data);
    this.props.journalingSave(data);
  };
  render() {
    const {
      gratefulToday,
      makeTodayGreat,
      accomplishToday,
      achieveToday,
      ilearnToday,
      thankfulNowToday,
      feelingRightNow,
      amazeHappenToday,
      betterToday,
      triggerToday,
      cravingExperience,
      medicationToday,
      anyComments,
    } = this.state;
    console.log(this.state);
    return (
      <MasterLayout
        leftIcon={require('../../assets/back-arrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Journaling')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar />

        <ScrollView contentContainerStyle={{paddingBottom: normalize(440)}}>
          <View style={styles.questionView}>
            <View
              style={{
                ...styles.morningEveningView,
                borderColor:
                  this.state.active === 1
                    ? colors.BORDER_PINK
                    : colors.SKY_LIGHT_BLUE,
              }}>
              {this.state.active === 1 ? (
                <>
                  <TouchableOpacity onPress={() => this.setState({active: 1})}>
                    <LinearGradient
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 0}}
                      style={styles.morningActiveOne}
                      colors={[colors.YELLOW, colors.DARK_PINK]}>
                      <View>
                        <Text style={styles.morningText}>Morning</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({active: 2})}>
                    <View style={styles.eveningActiveOne}>
                      <Text style={styles.morningText}>Evening</Text>
                    </View>
                  </TouchableOpacity>
                </>
              ) : null}

              {this.state.active === 2 ? (
                <>
                  <TouchableOpacity onPress={() => this.setState({active: 1})}>
                    <View style={styles.morningActiveTwo}>
                      <Text style={styles.morningText}>Morning</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.setState({active: 2})}>
                    <LinearGradient
                      style={styles.eveningActiveTwo}
                      start={{x: 0, y: 1}}
                      end={{x: 1, y: 0}}
                      colors={[colors.BLUE, colors.SKY_BLUE]}>
                      <View>
                        <Text style={styles.morningText}>Evening</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </>
              ) : null}
            </View>

            {this.state.active === 1 ? (
              <View>
                <CustomTextArea
                  title="What am I grateful for today?"
                  onChangeText={text => this.onGratefulToday(text)}
                  value={gratefulToday}
                />
                <CustomTextArea
                  title="What would make today great?"
                  onChangeText={text => this.onTodayGreat(text)}
                  value={makeTodayGreat}
                />
                <CustomTextArea
                  title="What's ONE Thing I must accomplish today?"
                  onChangeText={text => this.onAccomplishToday(text)}
                  value={accomplishToday}
                />
              </View>
            ) : null}

            {this.state.active === 2 ? (
              <View>
                <CustomTextArea
                  title="What did I achieve today?"
                  onChangeText={text => this.onAchieveToday(text)}
                  value={achieveToday}
                />
                <CustomTextArea
                  title="What lessons did I learn?"
                  onChangeText={text => this.onLearnToday(text)}
                  value={ilearnToday}
                />
                <CustomTextArea
                  title="What am I thankful for right now?"
                  onChangeText={text => this.onThankfulNow(text)}
                  value={thankfulNowToday}
                />
                <CustomTextArea
                  title="How am I feeling right now?"
                  onChangeText={text => this.onFeelingRightNow(text)}
                  value={feelingRightNow}
                />

                <CustomTextArea
                  title="What are 3 amazing things that happened today?"
                  onChangeText={text => this.onAmazeHappen(text)}
                  value={amazeHappenToday}
                />
                <CustomTextArea
                  title="How could I have made today better"
                  onChangeText={text => this.onBetterToday(text)}
                  value={betterToday}
                />
                <CustomTextArea
                  title="Have you identified �triggers� to use today? Please explain. How did you manage? What coping skills you used?"
                  onChangeText={text => this.onTriggerToday(text)}
                  value={triggerToday}
                />
                <CustomTextArea
                  title=" Did you experience cravings? Physical? Psychological? Please describe."
                  onChangeText={text => this.onCraving(text)}
                  value={cravingExperience}
                />
                <CustomTextArea
                  title=" Did you take medication today? If not why?"
                  onChangeText={text => this.onMedicationToday(text)}
                  value={medicationToday}
                />
                <CustomTextArea
                  title="Anything you would like to add?"
                  onChangeText={text => this.onAnyComments(text)}
                  value={anyComments}
                />
              </View>
            ) : null}
          </View>
          <View style={styles.buttonView}>
            <RoundedButton
              title="Save"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => this.submitJournalingData()}
            />
          </View>
        </ScrollView>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  masterStyle: {
    backgroundColor: colors.GRAY_SECOND,
  },
  morningEveningView: {
    flexDirection: 'row',
    borderWidth: 1,
    height: normalize(36),
    borderRadius: normalize(20),
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  morningActiveOne: {
    height: normalize(35),
    width: normalize(140),
    alignItems: 'center',
    borderRadius: normalize(20),
    paddingTop: normalize(8),
    backgroundColor: colors.PINK,
    //alignSelf: 'center',
  },
  eveningActiveOne: {
    // borderWidth: 1,
    height: normalize(35),
    width: normalize(110),
    alignItems: 'center',
    paddingTop: normalize(8),
    // borderRadius: normalize(20),
  },
  morningActiveTwo: {
    height: normalize(35),
    width: normalize(110),
    alignItems: 'center',
    paddingTop: normalize(8),
  },
  eveningActiveTwo: {
    // borderWidth: 1,
    height: normalize(35),
    width: normalize(140),
    alignItems: 'center',
    borderRadius: normalize(20),
    paddingTop: normalize(8),
    backgroundColor: colors.BLUE,
  },
  morningText: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Regular',
    color: colors.DARK_TEXT_BLUE,
  },
  questionView: {
    //  borderWidth: 1,
    backgroundColor: colors.WHITE,
    borderRadius: normalize(10),
    width: normalize(300),
    marginTop: normalize(40),
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingVertical: hp(5),
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
});

const mapStateToProps = ({user}) => {
  const {journaling} = user;
  return {data: journaling};
};

export default connect(
  mapStateToProps,
  {journalingSave},
)(JournalQuestion);
