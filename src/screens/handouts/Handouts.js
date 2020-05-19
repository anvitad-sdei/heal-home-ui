import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Linking, Image} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {getAllHandouts} from '../../redux/actions';
import moment from 'moment';
import {connect} from 'react-redux';

class Handouts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllHandouts();
  }

  render() {
    const {data} = this.props;
    // console.log(data, '-----------------------');

    const handoutDataJSX = data.length
      ? data.map((item, i) => {
          return (
            <View style={styles.listView}>
              <Text style={styles.fileNameStyle}>{item.fileName}</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.subHeadingText}>
                  {'By' + ' ' + item.createdBy + ','}
                </Text>
                <Text
                  style={{...styles.subHeadingText, paddingLeft: normalize(5)}}>
                  {moment(item.modifiedDate).format('lll')}
                </Text>
              </View>
              <RoundedButton
                title="Download"
                buttonStyle={styles.buttonStyle}
                titleStyle={styles.titleStyle}
                onPress={() => Linking.openURL(item.serverPath)}
              />
            </View>
          );
        })
      : null;

    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Library"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <View style={styles.shadowView}>
          <View style={styles.circleViewImage}>
            <Image
              source={require('../../assets/handouts.png')}
              style={styles.imageStyle}
            />
          </View>
          <View style={{marginTop: normalize(90)}}>
            <ScrollView contentContainerStyle={styles.scrollView}>
              <View style={styles.innerWrapperView}>{handoutDataJSX}</View>
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
    height: normalize(200),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(120),
  },
  shadowView: {
    // position: 'absolute',
    top: normalize(-100),
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.WHITE,
    //marginTop: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: normalize(310),
    borderRadius: normalize(20),
    // borderBottomLeftRadius: normalize(20),
    // borderBottomRightRadius: normalize(20),
  },
  listView: {
    paddingBottom: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.COLOR_29,
    // borderWidth: 1,
    // width: '100%',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  scrollView: {
    paddingBottom: hp(100),
    // marginTop: normalize(80),
  },
  innerWrapperView: {
    marginTop: normalize(10),
    // width: '90%',
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  buttonStyle: {
    marginTop: normalize(20),
    borderRadius: normalize(20),
    backgroundColor: colors.BLUE,
  },
  titleStyle: {
    fontSize: normalize(15),
    fontFamily: 'Poppins-Bold',
  },
  fileNameStyle: {
    fontSize: normalize(13),
    fontFamily: 'Poppins-SemiBold',
    color: colors.GRAY_FIVE,
  },
  subHeadingText: {
    paddingTop: normalize(10),
    fontSize: normalize(12),
    color: colors.BLUE,
    fontFamily: 'Poppins-Regular',
  },
  circleViewImage: {
    width: normalize(80),
    height: normalize(80),
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
    //  borderWidth: 1,
  },

  imageStyle: {
    width: '100%',
    height: '100%',
  },
});

const mapStateToProps = ({handouts}) => {
  const {handoutData} = handouts;
  return {
    data: handoutData,
  };
};

export default connect(
  mapStateToProps,
  {
    getAllHandouts,
  },
)(Handouts);
