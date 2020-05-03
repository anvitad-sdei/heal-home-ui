import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {connect} from 'react-redux';

class MasterLayout extends Component {
  render() {
    const {isLoading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'red'} />
        <View>{this.props.children}</View>
        {isLoading ? <Text>Loading.....</Text> : null}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({});

const mapStateToProps = ({loading, error}) => {
  const {isLoading} = loading;
  const {err} = error;

  return {isLoading, err};
};
export default connect(
  mapStateToProps,
  null,
)(MasterLayout);
