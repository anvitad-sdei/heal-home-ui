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
import CustomModal from '../../components/Modal';
import CustomPicker from '../../components/Picker';

class Journaling extends Component {
  constructor(props) {
    super(props);
    this.state = {defaultWeek: 1, modal: false};
  }

  componentDidMount() {
    this.props.journaling();
  }

  modalHandler = () => {
    this.setState({modal: !this.state.modal});
  };
  weekHandler = value => {
    this.setState({defaultWeek: value});
  };
  render() {
    const {data} = this.props;
    const {defaultWeek, modal} = this.state;
    const week = Object.keys(data).length
      ? Object.values(data).filter((item, i) => {
          return i === defaultWeek - 1;
        })
      : [];
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Journaling"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar
          handler={() => this.modalHandler()}
          defaultWeek={defaultWeek}
        />
        <ScrollView contentContainerStyle={{paddingBottom: hp(40)}}>
          <View style={styles.weekView}>
            {week.length
              ? week.map((value, index) => {
                  return value.map((item, i) => {
                    return (
                      <ButtonWithIcon
                        key={i}
                        date={item.loggedDate.split(' ')[0]}
                        onPress={() =>
                          this.props.navigation.navigate('JournalQuestion', {
                            id: item.id,
                            week: defaultWeek,
                          })
                        }
                      />
                    );
                  });
                })
              : null}
          </View>
        </ScrollView>
        {modal ? (
          <CustomModal
            visible={modal}
            handler={() => this.modalHandler()}
            content={
              <View>
                <CustomPicker
                  height={normalize(120)}
                  itemStyle={styles.pickerItem}
                  containerStyle={styles.pickerContainer}
                  handler={this.weekHandler}
                  selectedValue={defaultWeek}
                  data={Object.keys(data).length ? Object.keys(data) : []}
                />
              </View>
            }
          />
        ) : null}
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
  pickerContainer: {
    width: '100%',
    height: normalize(20),
    justifyContent: 'center',
    marginTop: normalize(20),
    marginBottom: normalize(20),
  },
  pickerItem: {
    // fontSize: normalize(20),
    // fontFamily: 'FuturaPT-Heavy',
    // color: colors.black,
    height: normalize(120),
    marginTop: normalize(-40),
  },
});
