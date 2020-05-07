import React, {Component} from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
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
export default class JournalQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  render() {
    return (
      <MasterLayout
        leftIcon={require('../../assets/back-arrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Journaling')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar />

        <ScrollView contentContainerStyle={{paddingBottom: hp(40)}}>
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
                  onChangeText={() => this.changeText()}
                  value=""
                />
                <CustomTextArea
                  title="What would make today great?"
                  onChangeText={() => this.changeText()}
                  value=""
                />
                <CustomTextArea
                  title="What's ONE Thing I must accomplish today?"
                  onChangeText={() => this.changeText()}
                  value=""
                />
              </View>
            ) : null}

            {this.state.active === 2 ? (
              <View>
                <CustomTextArea
                  title="What did I achieve today?"
                  onChangeText={() => this.changeText()}
                  value=""
                />
                <CustomTextArea
                  title="What lessons did I learn?"
                  onChangeText={() => this.changeText()}
                  value=""
                />
                <CustomTextArea
                  title="What am I thankful for right now?"
                  onChangeText={() => this.changeText()}
                  value=""
                />
                <CustomTextArea
                  title="How am I feeling right now?"
                  onChangeText={() => this.changeText()}
                  value=""
                />
              </View>
            ) : null}
          </View>
          <View style={styles.buttonView}>
            <RoundedButton
              title="Save"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => alert('submit')}
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
