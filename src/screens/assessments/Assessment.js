import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import ViewWithCircle from '../../components/ViewWithCircle';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Assessment extends Component {
  render() {
    const assessmentData = [
      {
        id: 1,
        name: 'Michigan Alcohol Test',
        view: 'VIEW',
        status: 'SUBMITTED',
      },
      {
        id: 1,
        name: 'AUDIT (Alcohol Use Disorder Identification Test)',
        view: 'LOG NOW',
        status: 'PENDING',
      },
    ];

    const assessmentDataJSX = assessmentData.length
      ? assessmentData.map((item, i) => {
          return (
            <View style={styles.listView}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{...styles.headingStyle, color: colors.GRAY_FIVE}}>
                  {item.name}
                </Text>
                <Text style={{...styles.headingStyle, color: colors.BLUE}}>
                  {item.view}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.statusStyle,
                  color:
                    item.status === 'SUBMITTED'
                      ? colors.GREEN
                      : colors.ORANGE_FOUR,
                }}>
                {item.status}
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
        <ViewWithCircle
          sourceCircle={require('../../assets/circle.png')}
          source={require('../../assets/myAssessment.png')}
        />
        <View style={styles.shadowView}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.innerWrapperView}>{assessmentDataJSX}</View>
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
    // marginTop: normalize(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: normalize(410), //310
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
  },
  scrollView: {
    paddingBottom: hp(100),
  },

  innerWrapperView: {
    // paddingTop: normalize(-10),
    // borderWidth: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  listView: {
    paddingBottom: normalize(20),
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
});
