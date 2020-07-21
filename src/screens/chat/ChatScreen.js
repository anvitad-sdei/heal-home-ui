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
const isIOS = Platform.OS === 'ios' ? true : false;

class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatMessage: ""
        };

    }

    render() {
        return (
            <MasterLayout
                leftIcon={require('../../assets/backArrow.png')}
                centerTitle="Chat"
                leftIconPress={() => {
                    this.props.navigation.navigate('Home');
                }}
                rightIconPress={() => alert('right')}
                headerStyle={styles.headerStyle}>
                <View style={styles.shadowView}>
                    <View style={styles.circleViewImage}>
                        <Image
                            source={require('../../assets/circle.png')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.innerViewImage}>
                            <Image
                                source={ImagesName.ic_chat}
                                style={styles.imageStyle}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        height: normalize(350),
                        width: '100%',
                        top: normalize(-100),
                    }}></View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        top: normalize(-100),
                        backgroundColor: 'white',
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 5.0,
                        elevation: 1,
                        height: isIOS ? normalize(30) : normalize(40),
                        borderBottomEndRadius: 30,
                        borderBottomStartRadius: 30,
                        width: '90%',
                    }}>
                    <TextInput
                        style={{
                            height: '90%',
                            color: 'black',
                            marginStart: '5%',
                            marginEnd: '2%',
                            width: '80%',
                        }}
                        autoCorrect={false}
                        placeholder="Type message"
                        placeholderTextColor={colors.GRAY_EIGHT}
                        value={this.state.chatMessage}
                        onChangeText={chatMessage => {
                            this.setState({ chatMessage });
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            height: '90%',
                            width: '10%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Image
                            source={ImagesName.ic_sendMessage}
                            style={{ height: '50%', }}
                            resizeMode="contain"></Image>
                    </TouchableOpacity>
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
        height: normalize(200),
        borderBottomLeftRadius: normalize(20),
        borderBottomRightRadius: normalize(20),
        paddingBottom: normalize(125),
    },
    shadowView: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'transparent',
        top: normalize(-100),
        height: normalize(100),
        borderRadius: normalize(20),
    },
    scrollView: {
        height: '50%',
        paddingBottom: hp(130),
        //backgroundColor:'red'
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
        width: normalize(40),
        height: normalize(40),
        position: 'absolute',
        alignSelf: 'center',
        marginTop: normalize(20),
    },
    imageStyle: {
        width: '100%',
        height: '100%',
    },
    noDataText: {
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontSize: normalize(14),
        color: colors.GRAY_FIVE,
        paddingTop: normalize(30),
    },
});




export default ChatScreen; 