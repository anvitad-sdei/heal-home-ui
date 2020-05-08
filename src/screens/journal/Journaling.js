import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
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
    const week = Object.keys(data).length
      ? Object.keys(data).map((item, i) => {
          let weekData = Object.values(data)[item - 1];
          return (
            <View>
              <ButtonWithIcon date={`week ${item}`} />
              {weekData.map(item => (
                <ButtonWithIcon
                  date={item.loggedDate}
                  onPress={() =>
                    this.props.navigation.navigate('JournalQuestion', {
                      id: item.id,
                    })
                  }
                />
              ))}
            </View>
          );
        })
      : null;
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar />
        <ScrollView contentContainerStyle={{paddingBottom: hp(40)}}>
          <View style={styles.weekView}>{week}</View>
        </ScrollView>
      </MasterLayout>
    );
  }
}
const mapStateToProps = ({user}) => {
  const {journaling} = user;
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
  weekView: {
    marginTop: normalize(40),
  },
});
