import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import {getAllTherapists} from '../../redux/actions';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import {ScrollView} from 'react-native-gesture-handler';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

class TherapistsList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllTherapists();
  }
  render() {
    const {therapistsList} = this.props;
    console.log(therapistsList);
    const therapistsData = therapistsList.length
      ? therapistsList.map((item, i) => {
          return (
            <TouchableOpacity
              style={styles.touchableView}
              key={i}
              onPress={() => this.props.navigation.navigate('Sessions')}>
              <View>
                <Text style={styles.nameStyle}>
                  {item.firstName + ' ' + item.lastName}
                </Text>
                <Text>{item.role}</Text>
              </View>
              <View style={{paddingTop: normalize(3)}}>
                {/* <Text>{item.activeStatus}</Text> */}
                {item.activeStatus === 'ACTIVE' ? (
                  <View style={styles.activeStatusView} />
                ) : null}
              </View>
            </TouchableOpacity>
          );
        })
      : null;
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Therapist Listing"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <View style={styles.outerShadowView}>
          <ScrollView contentContainerStyle={{paddingBottom: hp(80)}}>
            <View
              style={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingTop: normalize(10),
              }}>
              {therapistsData}
            </View>
          </ScrollView>
        </View>
      </MasterLayout>
    );
  }
}

const mapStateToProps = ({therapist}) => {
  const {allTherapists} = therapist;
  return {
    therapistsList: allTherapists,
  };
};

export default connect(
  mapStateToProps,
  {getAllTherapists},
)(TherapistsList);

const styles = StyleSheet.create({
  outerShadowView: {
    backgroundColor: colors.WHITE,
    borderRadius: normalize(10),
    marginTop: normalize(15),
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: normalize(170),
  },
  innerListView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: normalize(15),
    marginBottom: normalize(25),
  },
  touchableView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(15),
    borderBottomWidth: 1,
    borderBottomColor: '#00000029',
  },
  activeStatusView: {
    width: normalize(10),
    height: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: colors.GREEN,
  },
  nameStyle: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Medium',
    color: colors.GRAY_FIVE,
  },
  roleStyle: {
    fontSize: normalize(10),
    color: colors.GRAY_PLACE_COLOR,
    fontFamily: 'Poppins-Regular',
  },
});
