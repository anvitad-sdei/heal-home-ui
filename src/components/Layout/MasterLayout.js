import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import colors from '../../constants/colors';

class MasterLayout extends Component {
  render() {
    const {isLoading, masterStyle} = this.props;
    return (
      <SafeAreaView style={{...styles.container, ...masterStyle}}>
        <StatusBar backgroundColor={colors.BLUE} />
        <View>{this.props.children}</View>
        {isLoading ? <Text>Loading.....</Text> : null}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {backgroundColor: colors.WHITE, height: '100%'},
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
