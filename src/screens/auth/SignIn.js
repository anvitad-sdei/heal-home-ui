import React from 'react';
import {View, StyleSheet, Text, Platform, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MasterLayout from '../../components/Layout/MasterLayout';
import {login} from '../../redux/actions';
import {connect} from 'react-redux';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import RoundedButton from '../../components/Buttons/RoundedButton';
import normalize from '../../helpers/ResponsiveFont';
import InputField from '../../components/Input';
import CustomImage from '../../components/Image';
import {regex} from '../../helpers/regex';
import {apiConstants} from '../../redux/api/Constants';
const isIOS = Platform.OS === 'ios' ? true : false;
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };
  }
  loginHandler = () => {
    const {email, password, validEmail, validPassword} = this.state;

    if (validEmail) {
      if (password.length > 4) {
        let data = {
          emailId: email,
          password: password,
          userType: apiConstants.USER_TYPE,
        };
        this.props.login(data);
      } else {
        Alert.alert(
          'Password must contain upper case,special characters and alphanumeric',
        );
      }
    } else {
      Alert.alert('Enter email is not valid');
    }
  };

  // loginHandler = () => {
  //   const data = {
  //     emailId: this.state.email,
  //     password: this.state.password,
  //     userType: 'Customer',
  //   };
  //   console.log(data);
  //   this.props.login(data);
  // };
  onChangeEmail = email => {
    this.setState({
      email: email,
      validEmail: regex.validateEmail(email) || false,
    });
  };

  onChangePassword = password => {
    this.setState({
      password: password,
      validPassword: regex.validatePassword(password) || false,
    });
  };
  render() {
    const {email, password} = this.state;

    return (
      <MasterLayout>
        <View style={styles.wrapperView}>
          <View style={styles.topView}>
            <View style={styles.healHomeImageView}>
              <CustomImage source={require('../../assets/healhome.png')} />
            </View>
            <View style={styles.headingView}>
              <Text style={[styles.subHeading, styles.headingStyle]}>
                Welcome back!
              </Text>
              <Text style={[styles.subHeading, styles.subHeadingStyle]}>
                Log in to your existing account{' '}
              </Text>
            </View>
          </View>
          <View style={styles.inputView}>
            <InputField
              placeholder="johndoe@mail.com"
              onChangeText={this.onChangeEmail}
              source={require('../../assets/name3X.png')}
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              value={email}
            />
            <InputField
              placeholder="anvi"
              onChangeText={this.onChangePassword}
              source={require('../../assets/lock3X.png')}
              containerStyle={styles.containerStyle}
              secureTextEntry={true}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              value={password}
              autoCapitalize="characters"
            />
          </View>
          <View style={styles.buttonView}>
            <RoundedButton
              title="Login"
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.titleStyle}
              onPress={() => this.loginHandler()}
            />
          </View>
          <View style={styles.bottomTextView}>
            <Text style={[styles.textStyle, styles.textFontFamily]}>
              Do you have an account?
            </Text>

            <Text
              style={[styles.textStyle, styles.boldFamily]}
              onPress={() => alert('hello')}>
              {' '}
              Sign Up
            </Text>
          </View>
        </View>
      </MasterLayout>
    );
  }
}

export default connect(
  null,
  {login},
)(SignIn);

const styles = StyleSheet.create({
  wrapperView: {position: 'relative', height: '100%'},
  topView: {
    height: hp(40),
    //  borderWidth: 1,
    backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
  },
  healHomeImageView: {
    height: normalize(40),
    //borderWidth: 1,
    width: normalize(190),
    // width: normalize(isIOS ? 190 : 200),
    position: 'absolute',
    top: hp(10),
    left: wp(5),
  },
  headingView: {
    height: normalize(40),
    //  borderWidth: 1,
    // width: normalize(190),
    width: normalize(isIOS ? 190 : 200),
    position: 'absolute',
    top: hp(20),
    left: wp(8),
  },
  heading: {color: colors.WHITE, fontSize: normalize(31)},
  subHeading: {color: colors.WHITE},
  headingStyle: {fontFamily: 'Poppins-Bold', fontSize: normalize(24)},
  subHeadingStyle: {fontSize: normalize(12), fontFamily: 'Poppins-Light'},
  buttonView: {position: 'absolute', bottom: hp(12), alignSelf: 'center'},
  buttonStyle: {
    width: normalize(276),
    borderRadius: 30,
    height: normalize(45),
    backgroundColor: colors.BLUE,
  },
  titleStyle: {
    color: colors.WHITE_SECOND,
    fontSize: normalize(15),
    fontFamily: 'Poppins-Bold',
  },
  inputView: {
    position: 'absolute',
    bottom: hp(25),
    alignSelf: 'center',
    //borderWidth: 1,
  },
  containerStyle: {
    width: normalize(245),
    height: normalize(36),
    borderBottomColor: colors.WHITE,
    // borderWidth: 1,
  },
  inputContainerStyle: {
    borderBottomColor: colors.WHITE,
    // borderWidth: 1,
  },
  inputStyle: {
    fontSize: normalize(14),
    color: colors.BLACK_SECOND,
    fontFamily: 'Poppins-Regular',
    //borderWidth: 1,
  },
  bottomTextView: {
    position: 'absolute',
    bottom: hp(2),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: normalize(15),
  },
  textFontFamily: {
    fontFamily: 'Poppins-Regular',
  },
  boldFamily: {
    fontFamily: 'Poppins-Bold',
    color: colors.BLUE,
  },
});
