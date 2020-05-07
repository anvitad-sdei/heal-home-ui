import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
const CustomModal = props => {
  const {handler, visible, content} = props;
  // const [modalVisible, setModalVisible] = useState(false);
  // const {date} = props;
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

          {/* <View style={styles.buttonView}>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={handler}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={handler}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View> */}
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
    padding: 35,
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
    height: '50%',
    marginTop: normalize(180),
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
});

export default CustomModal;
