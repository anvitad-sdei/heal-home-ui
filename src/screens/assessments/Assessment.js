import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {getAllAssessment} from '../../redux/actions';
import {connect} from 'react-redux';
class Assessment extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllAssessment();
  }

  render() {
    const {data} = this.props;
    //console.log(data, '------------------');

    const assessmentDataJSX = data.length
      ? data.map((item, i) => {
          return (
            <View style={styles.listView} key={i}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('AlcoholTest', {
                    id: item.id,
                    groupId: item.groupId,
                    filledStatus: item.filled,
                  })
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{width: '70%'}}>
                    <Text
                      style={{...styles.headingStyle, color: colors.GRAY_FIVE}}>
                      {item.groupName}
                    </Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <Text
                      style={{
                        ...styles.headingStyle,
                        color: colors.BLUE,
                        textAlign: 'right',
                      }}>
                      {item.filled == true ? 'VIEW' : 'LOG NOW'}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.statusStyle,
                  color:
                    item.filled === true ? colors.GREEN : colors.ORANGE_FOUR,
                }}>
                {item.filled == true ? 'SUBMITTED' : 'PENDING'}
              </Text>
            </View>
          );
        })
      : null;
    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="My Assessment"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
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
              <View style={styles.innerWrapperView}>{assessmentDataJSX}</View>
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
    paddingBottom: hp(40),
  },

  innerWrapperView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listView: {
    marginBottom: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.COLOR_29,
  },
  headingStyle: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-SemiBold',
  },
  statusStyle: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
    paddingVertical: normalize(10),
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
});

//export default Assessment;

const mapStateToProps = ({assessment}) => {
  const {assessmentData} = assessment;
  return {
    data: assessmentData,
  };
};

export default connect(
  mapStateToProps,
  {
    getAllAssessment,
  },
)(Assessment);
