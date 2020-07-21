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

const chatData =[{
    id: 1,
    name: "Jane Rayfield",
    last_message: "You: That's fine, Ill got the...",
    image_url: "",
    time: "2:55 PM"
}, {
    id: 2,
    name: "Jina Fernandez",
    last_message: "You: I got your problem",
    image_url: "",
    time: "2:55 PM"
}]

class Chatlisting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ''
        };
    }

    render() {
        const chatListJSX = chatData.length ? (
            chatData.map((item, i) => {
                return (<View
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
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
                        height: isIOS ? normalize(80):normalize(100),
                        borderRadius: 10,
                        width: '90%',
                        marginTop: normalize(20),
                    }}>
                    <View style={{
                        height: '70%', width: '15%',
                        alignItems: 'center',
                        marginStart: '1.5%',
                    }}>
                        <Image
                            style={{
                                height: 40, width: 40,
                                backgroundColor: 'black', borderRadius: 20
                            }}></Image>

                    </View>
                    <View
                        style={{
                            marginStart: '1%',
                            marginEnd: '1%',
                            height: '70%', width: '60%',

                        }}>
                        <Text style={{
                            fontSize: normalize(16),
                            color: colors.BLUE,
                            fontFamily: 'Poppins-Bold',
                        }}>{item.name}</Text>
                        <Text style={{
                            fontSize: normalize(14),
                            color: colors.GRAY_ELEVEN,
                            fontFamily: 'Poppins-Light',
                        }}>{item.last_message}</Text>
                    </View>
                    <Text
                        style={{
                            marginEnd: '1.5%',
                            height: '70%', width: '20%',
                            fontSize: normalize(14),
                            color: colors.GRAY_ELEVEN,
                            fontFamily: 'Poppins-Light',

                        }}>{item.time}</Text>
                </View>)

            })
                
              
        ) : (
                <Text style={styles.noDataText}>No Chats yet.</Text>
            );

        return (
            <MasterLayout
                leftIcon={require('../../assets/backArrow.png')}
                centerTitle="Chat Listing"
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
                                source={ImagesName.ic_chat}
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
                    {chatListJSX}
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
        width: normalize(30),
        height: normalize(30),
        position: 'absolute',
        alignSelf: 'center',
        marginTop: normalize(25),
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
});

export default Chatlisting; 