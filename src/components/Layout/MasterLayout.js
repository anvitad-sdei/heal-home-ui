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
      leftIcon,
      rightIcon,
      leftIconPress,
      rightIconPress,
      centerTitle,
      masterStyle,
      headerStyle,
    } = this.props;
    return (
      <SafeAreaView style={{...styles.container, ...masterStyle}}>
        {/* <StatusBar barStyle="dark-content" /> */}
        <View>
          {leftIcon || rightIcon ? (
            <View style={styles.topView}>
              <HeaderComponent
                leftIcon={leftIcon || null}
                centerTitle={centerTitle || null}
                rightIcon={rightIcon || null}
                leftIconPress={leftIconPress}
                rightIconPress={rightIconPress}
                headerStyle={headerStyle}
              />
            </View>
          ) : null}
        </View>

        <View style={styles.innerContainer}>{this.props.children}</View>
        {isLoading ? <Loader /> : null}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE,
  },
  innerContainer: {backgroundColor: colors.GRAY_SECOND, height: '100%'},
  topView: {
    backgroundColor: colors.GRAY_SECOND,
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
