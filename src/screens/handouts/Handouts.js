import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
class Handouts extends Component {
  render() {
    return (
      <MasterLayout
        leftIcon={require('../../assets/menu.png')}
        centerTitle="Request Session"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => {
          this.props.navigation.navigate('TherapistsList');
          this.props.clearSessionById();
        }}
        rightIconPress={() => alert('right')}
        headerStyle={styles.headerStyle}>
        <View>
          <Text> Handouts </Text>
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
    paddingBottom: normalize(100),
    zIndex: -1,
  },
});
export default Handouts;
