import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import ViewWithCircle from '../../components/ViewWithCircle';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {getAllHandouts} from '../../redux/actions';
import moment from 'moment';
import {connect} from 'react-redux';
class Handouts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllHandouts();
  }

  onDownload = () => {
    alert('hello');
  };

  render() {
    const {data} = this.props;
    console.log(data, '-----------------------');
    const handoutsList = [
      {
        fileName: '10_19 - Heal at Home Social Posts.docx',
        createdBy: 'Sophie Solmini',
        createdDate: '2020-04-24 15:59:26',
      },
      {
        fileName: '10_19 - Heal at Home Social Posts.docx',
        createdBy: 'Deepan',
        createdDate: '2020-04-24 15:59:26',
      },
    ];

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
                onPress={() => this.onDownload()}
              />
            </View>
          );
        })
      : null;

    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Handouts"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.openDrawer()}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <ViewWithCircle sourceCircle={require('../../assets/handouts.png')} />
        <View style={styles.shadowView}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.innerWrapperView}>{handoutDataJSX}</View>
          </ScrollView>
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
    height: normalize(150),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(73),
  },
  shadowView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.WHITE,
    marginTop: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: normalize(310),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
  },
  listView: {
    paddingVertical: normalize(20),
    borderBottomWidth: 1,
    borderBottomColor: colors.COLOR_29,
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
