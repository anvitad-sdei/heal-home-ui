import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import {getAllTherapists} from '../../redux/actions';
import {connect} from 'react-redux';

class TherapistsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    };
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
              key={i}
              onPress={() =>
                this.props.navigation.navigate('Sessions', {
                  id: item.id,
                })
              }>
              <Text>{item.firstName}</Text>
            </TouchableOpacity>
          );
        })
      : null;
    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Therapists"
        rightIcon={require('../../assets/bell.png')}
        leftIconPress={() => this.props.navigation.navigate('Home')}
        rightIconPress={() => alert('right')}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {therapistsData}
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
