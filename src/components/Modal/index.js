import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
const CustomModal = props => {
  const {handler, visible, content} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalView}>
          <View style={{width: '100%'}}>{content}</View>

          <View style={styles.calendarView}>
            <TouchableOpacity onPress={handler}>
              <View
                style={{
                  ...styles.calendarButton,
                  backgroundColor: '#95B4FD',
                }}>
                <Text style={styles.calendarButtonText}>CANCEL</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handler}>
              <View
                style={{
                  ...styles.calendarButton,
                  backgroundColor: '#6E78F7',
                }}>
                <Text style={styles.calendarButtonText}>SET</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    //  padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: '50%', //modal height
    marginTop: normalize(150),
  },
  // openButton: {
  //   backgroundColor: '#F194FF',
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  datePick: {
    textAlign: 'center',
    marginTop: normalize(5),
    fontSize: normalize(15),
    fontFamily: 'Poppins-Regular',
    color: colors.BLUE,
  },
  calendarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    // marginTop: normalize(10),
  },
  calendarButton: {
    // width: '45%',
    width: normalize(100),
    height: normalize(35),
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(30),
    //  marginBottom: normalize(20),
    borderRadius: normalize(100),
  },
  calendarButtonText: {color: colors.WHITE, fontFamily: 'Poppins-Regular'},
});

export default CustomModal;
