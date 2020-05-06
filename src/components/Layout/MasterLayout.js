import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../constants/colors';
import Loader from '../Loader';
import HeaderComponent from '../HeaderComponent';
import CustomTabBar from '../WeekTabbar';
import normalize from '../../helpers/ResponsiveFont';

class MasterLayout extends Component {
  render() {
    const {
      isLoading,
      masterStyle,
      leftIcon,
      rightIcon,
      leftIconPress,
      rightIconPress,
      centerTitle,
    } = this.props;
    return (
      <SafeAreaView style={{...styles.container, ...masterStyle}}>
        <StatusBar backgroundColor={colors.BLUE} />
        {leftIcon || rightIcon ? (
          <View style={styles.topView}>
            <HeaderComponent
              leftIcon={leftIcon || null}
              centerTitle={centerTitle || null}
              rightIcon={rightIcon || null}
              leftIconPress={leftIconPress}
              rightIconPress={rightIconPress}
            />
          </View>
        ) : null}
        <View>{this.props.children}</View>
        {/* {isLoading ? <Text>Loading.....</Text> : null} */}
        {isLoading ? <Loader /> : null}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {backgroundColor: colors.WHITE, height: '100%'},
  topView: {
    height: normalize(80),
    backgroundColor: colors.BLUE,
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    marginBottom: 10,
  },
});

const mapStateToProps = ({loading, error}) => {
  const {isLoading} = loading;
  const {err} = error;
  return {isLoading, err};
};
export default connect(
  mapStateToProps,
  null,
)(MasterLayout);
