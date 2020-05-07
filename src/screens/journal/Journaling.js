import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import HeaderComponent from '../../components/HeaderComponent';
import CustomTabBar from '../../components/WeekTabbar';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import ButtonWithIcon from '../../components/Buttons/ButtonWithIcon';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {journaling} from '../../redux/actions';
import {ScrollView} from 'react-native-gesture-handler';
class Journaling extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.journaling();
  }
  render() {
    const {data} = this.props;
    console.log(Object.keys(data).length);
    const week = Object.keys(data).length
      ? Object.keys(data).map((item, i) => (
          <View>
            <ButtonWithIcon
              date={`week ${item}`}
              onPress={() => this.props.navigation.navigate('JournalQuestion')}
            />
          </View>
        ))
      : null;
    return (
      <MasterLayout
        leftIcon={require('../../assets/back-arrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar />
        <ScrollView contentContainerStyle={{paddingBottom: hp(40)}}>
          <View style={styles.buttonView}>
            {week}
            {/* <ButtonWithIcon
            date="12-05-2020"
            onPress={() => this.props.navigation.navigate('JournalQuestion')}
          /> */}
          </View>
        </ScrollView>
      </MasterLayout>
    );
  }
}
const mapStateToProps = ({user}) => {
  // console.log(user);
  const {journaling} = user;
  // const {isLoading} = loading;
  // const {err} = error;
  return {data: journaling};
};

export default connect(
  mapStateToProps,
  {journaling},
)(Journaling);

const styles = StyleSheet.create({
  masterStyle: {
    backgroundColor: '#F5F5F5',
  },
  topView: {
    height: normalize(80),
    // backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    marginBottom: 10,
  },
  buttonView: {
    marginTop: normalize(40),
  },
});
