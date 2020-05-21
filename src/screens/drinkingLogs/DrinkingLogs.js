import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import CustomDrinkingView from '../../components/CustomDrinkingView.js';
import CustomTabBar from '../../components/WeekTabbar';
import {ScrollView} from 'react-native-gesture-handler';
import {getAllDrinkingLog, saveDrinkingLog} from '../../redux/actions';
import {connect} from 'react-redux';
import CustomModal from '../../components/Modal';
import CustomPicker from '../../components/Picker';
import moment from 'moment';
import Axios from 'axios';
import {apiUrls} from '../../redux/api/constants';
import Loader from '../../components/Loader';
import {LineChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width * 0.9;
const todayDate = Date.now();
class DrinkingLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      defaultWeek: 1,
      isLoading: false,
      mapList: [],
      latestDrinks: [],
      drinkDay: '',
      drinkLoggedDate: '',
      initialDrinks: 0,
      weekNo: '',
      drinkId: '',
    };
  }

  componentDidMount() {
    // this.props.getAllDrinkingLog();
    this.getAllDrinkingLog();
  }
  modalHandler = () => {
    this.setState({modal: !this.state.modal});
  };
  weekHandler = value => {
    this.setState({defaultWeek: value});
  };
  onPressDecrement = () => {
    const {initialDrinks} = this.state;
    this.setState({initialDrinks: initialDrinks - 1});
  };
  onPressIncrement = id => {
    const {initialDrinks} = this.state;
    this.setState({drinkId: id, initialDrinks: initialDrinks + 1});
  };
  onSaveDrinkingLog = (id, drinks) => {
    alert(id);

    // const data = {
    //   // id: id,
    //   // drinks: drinks,
    // };
    // console.log(data, '--------data----------');
    //this.props.saveDrinkingLog(data);
  };

  getAllDrinkingLog = async () => {
    try {
      this.setState({isLoading: true});
      let res = await Axios(`${apiUrls.BASE_URL}/drinkinglog/${todayDate}`);
      if (res) {
        // console.log('response===========', res.data.response);
        const {latest14, mapList, todayLog} = res.data.response;

        this.setState({
          latestDrinks: latest14.length
            ? latest14.map((item, i) => {
                return {
                  id: item.id,
                  // day_no: 70,
                  loggedDate: moment(item.loggedDate).format('l'),
                  drinks: item.drinks || 0,
                };
              })
            : [],
          mapList: mapList,
          mapListDrinks: mapList.length
            ? mapList.map((item, i) => {
                return {
                  // drinkId: item.id,
                  // drinkDay: item.day,
                  // drinkLoggedDate: item.loggedDate,
                  initialDrinks: item.drinks,
                  //weekNo: item.week,
                };
              })
            : [],
          isLoading: false,
        });
      }
    } catch (err) {
      this.setState({isLoading: false});
      Alert.alert('Failed to fetch');
    }
  };

  render() {
    const {getAllDrinking} = this.props;
    const {
      defaultWeek,
      modal,
      initialDrinks,
      mapList,
      latestDrinks,
      drinkDay,
      drinkLoggedDate,
      weekNo,
      drinkId,
    } = this.state;
    console.log(this.state);
    const week =
      mapList && Object.keys(mapList).length
        ? Object.values(mapList).filter((item, i) => {
            return i === defaultWeek - 1;
          })
        : [];

    const chartConfig = {
      backgroundGradientFrom: colors.WHITE,
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: colors.WHITE,
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(128, 128, 128, ${opacity})`,
      strokeWidth: 3, // optional, default 3
      propsForBackgroundLines: {
        strokeDasharray: '', // solid background lines with no dashes
      },
      propsForLabels: {
        fontSize: normalize(8),
      },
      fillShadowGradient: colors.WHITE,
      fillShadowGradientOpacity: 0.1,
      barPercentage: 0.5,
      decimalPlaces: 0,
      // propsForDots: {
      //   // r: '6',
      //   // strokeWidth: '2',
      //   stroke: colors.BLUE,
      // },
    };

    const data = {
      labels: latestDrinks.length
        ? latestDrinks.map(item => item.loggedDate)
        : [],
      datasets: [
        {
          data: latestDrinks.length
            ? latestDrinks.map(item => item.drinks)
            : [0],
          color: (opacity = 1) => `rgba(110,120,247, ${opacity})`, // optional
          strokeWidth: 2, // optional
        },
      ],
    };

    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Drinking Logs"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <CustomTabBar
          handler={() => this.modalHandler()}
          defaultWeek={'Week' + ' ' + defaultWeek}
        />

        <ScrollView contentContainerStyle={{paddingBottom: normalize(180)}}>
          <View style={{...styles.drinkViewBox, marginTop: normalize(40)}}>
            <LineChart
              data={data}
              width={screenWidth}
              height={normalize(350)}
              chartConfig={chartConfig}
              verticalLabelRotation={110}
              segments={5}
              bezier
              style={{
                marginTop: 20,
                marginRight: 10,
              }}
            />
          </View>
          <View style={styles.drinkViewBox}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: normalize(18),
                color: colors.BLUE,
                padding: normalize(15),
              }}>
              Total Drinks:<Text style={{color: colors.BLACK}}> 7</Text>
            </Text>
          </View>
          <View style={styles.drinkViewBox}>
            <View style={styles.weekView}>
              {week.length
                ? week.map((value, index) => {
                    return value.map((item, i) => {
                      return (
                        <CustomDrinkingView
                          day={item.day_no}
                          date={moment(item.loggedDate).format('L')}
                          drinks={item.drinks || initialDrinks}
                          decrement={() => this.onPressDecrement(item.id)}
                          increment={() => this.onPressIncrement(item.id)}
                          onPress={() =>
                            this.onSaveDrinkingLog(item.id, item.drinks)
                          }
                        />
                      );
                    });
                  })
                : null}
            </View>
          </View>
        </ScrollView>
        {modal ? (
          <CustomModal
            visible={modal}
            handler={() => this.modalHandler()}
            content={
              <>
                <View>
                  <Text style={styles.textWeek}>Pick the Week</Text>
                  <CustomPicker
                    height={normalize(120)}
                    itemStyle={styles.pickerItem}
                    containerStyle={styles.pickerContainer}
                    handler={this.weekHandler}
                    selectedValue={defaultWeek}
                    data={
                      Object.keys(mapList).length ? Object.keys(mapList) : []
                    }
                  />
                </View>
              </>
            }
          />
        ) : null}
        <Loader isLoading={this.state.isLoading} />
      </MasterLayout>
    );
  }
}

const mapStateToProps = ({drinking}) => {
  const {getDrinkingData, saveDrinkingData} = drinking;
  return {
    getAllDrinking: getDrinkingData,
    data: saveDrinkingData,
  };
};

export default connect(
  mapStateToProps,
  {
    getAllDrinkingLog,
    saveDrinkingLog,
  },
)(DrinkingLogs);

const styles = StyleSheet.create({
  drinkViewBox: {
    // borderWidth: 1,
    marginTop: normalize(20),
    // width: wp(90),
    // alignSelf: 'center',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: colors.WHITE,
    borderRadius: normalize(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  pickerContainer: {
    justifyContent: 'center',
    paddingTop: normalize(20),
    marginBottom: normalize(20),
  },
  pickerItem: {
    fontSize: normalize(15),
    fontFamily: 'Poppins-Regular',
    color: colors.DARK_TEXT_BLUE,
    height: normalize(200),
    marginTop: normalize(-60),
  },
  textWeek: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: normalize(30),
    fontSize: normalize(24),
    fontFamily: 'Poppins-Regular',
    color: colors.DARK_TEXT_BLUE,
  },
});
