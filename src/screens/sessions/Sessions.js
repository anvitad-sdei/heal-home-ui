import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  ScrollView,
  TextInput,
  Keyboard
} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import colors from '../../constants/colors';
import normalize from '../../helpers/ResponsiveFont';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
import ImagesName from '../../constants/ImagesName';
import RoundedButton from '../../components/Buttons/RoundedButton';
const isIOS = Platform.OS === 'ios' ? true : false;

const sessionsData =
  [{
    id: 1,
    therapist_name: "Jordane T ",
    number_of_clients: 1,
    time: "17:00 - 17:50, 06/03/2020"
  }, {
    id: 2,
    therapist_name: "Jane Rayfield",
    number_of_clients: 1,
    time: "17:00 - 17:50, 06/03/2020"

  }]

class Sessions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ''
    };
  }

  render() {
    const sessionListJSX = sessionsData.length ? (
      sessionsData.map((item, i) => {
        return (<View
          style={styles.itemContainer}>

          <Text style={styles.textHeading}>Session {item.id}</Text>
          <Text style={styles.textBlue}>Therapist :  
            <Text style={styles.textGray}> {item.therapist_name}</Text>
          </Text>
          <Text
            style={styles.textBlue}>No. of Clients : 
            <Text style={styles.textGray}> {item.number_of_clients}</Text>
          </Text>

          <View style={{ flexDirection: 'row',marginTop:normalize(5) ,}}>
            <Image
              source={ImagesName.ic_clock}
              style={{ height: normalize(15), width: normalize(15),
                alignSelf:'center',
                marginEnd:normalize(5) }}
              resizeMode="contain"
            />
            <Text
              style={styles.textGray}>{item.time}</Text>
          </View>

        </View>)

      })
    ) : (
        <Text style={styles.noDataText}>No Chats yet.</Text>
      );

    return (
      <MasterLayout
        leftIcon={require('../../assets/backArrow.png')}
        centerTitle="Session"
        leftIconPress={() => {
          this.props.navigation.navigate('Home');
        }}
        headerStyle={styles.headerStyle}
      >
        <View style={styles.shadowView}>
          <View style={styles.circleViewImage}>
            <Image
              source={ImagesName.ic_circle}
              style={styles.imageStyle}
            />
            <View style={styles.innerViewImage}>
              <Image
                source={ImagesName.ic_addNotes}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View style={{
          height: normalize(420),
          borderRadius: 10,
          width: '100%',
        }}>
          {sessionListJSX}
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
    // backgroundColor: colors.DARK_PINK,
    height: normalize(120),
    borderBottomLeftRadius: normalize(20),
    borderBottomRightRadius: normalize(20),
    paddingBottom: normalize(50),
  },
  shadowView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
   top: normalize(-20),
    height: normalize(50),
    borderRadius: normalize(20),
  },
  circleViewImage: {
    width: normalize(80),
    height: normalize(80),
    position: 'absolute',
    alignSelf: 'center',
    top: -30,
  },
  innerViewImage: {
    alignItems: 'center',
    width: normalize(45),
    height: normalize(45),
    position: 'absolute',
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 5.0,
    elevation: 1,
    height: isIOS ? normalize(110): normalize(120),
    borderRadius: 10,
    width: '90%',
    marginTop: normalize(20),
    padding: normalize(10),
  },
  textBlue: {
    fontSize: normalize(13),
    color: colors.BLUE_TEXT,
    fontFamily: 'Poppins-Regular',
   
    
  },
  textGray: {
    fontSize: normalize(13),
    color: colors.GRAY_ELEVEN,
    fontFamily: 'Poppins-Light',
  },
  textHeading: {
    fontSize: normalize(15),
    color: colors.BLUE_TEXT,
    fontFamily: 'Poppins-Medium',
    marginBottom:normalize(5)
  },
});

export default Sessions; 