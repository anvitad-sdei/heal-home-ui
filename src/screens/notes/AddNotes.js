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

class AddNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: ''
        };
    }

    onSubmitNotes = () => {
        alert("Submit Note here")
    }

    render() {
        return (
            <MasterLayout
                leftIcon={require('../../assets/backArrow.png')}
                centerTitle="Add Notes"
                leftIconPress={() => {
                    this.props.navigation.navigate('Home');
                }}
                rightIconPress={() => alert('right')}
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

                <Text style={{
                    textAlign:'center',
                    fontSize: normalize(19),
                    fontFamily: 'Poppins-Medium',
                    color: colors.BLUE
                }}>Michale Kim</Text>

                <View
                    style={{
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
                        height: normalize(220),
                        borderRadius: 10,
                        width: '90%',
                        marginTop: normalize(20),
                    }}>
                    <TextInput
                        style={{
                            height: '90%',
                            color: 'black',
                            marginStart: '5%',
                            marginEnd: '2%',
                            width: '90%',
                            alignSelf: 'center'
                        }}
                        autoCorrect={false}
                        placeholder="Write Notes"
                        placeholderTextColor={colors.GRAY_EIGHT}
                        value={this.state.notes}
                        multiline={true}
                        onChangeText={notes => {
                            this.setState({ notes });
                        }}
                    />
                </View>

                <RoundedButton
                    title="Submit"
                    buttonStyle={{
                        marginTop: normalize(20),
                        borderRadius: normalize(20),
                        backgroundColor: colors.BLUE,
                        width: '90%',
                        height: normalize(40),
                        alignSelf: 'center'
                    }}
                    titleStyle={{
                        fontSize: normalize(12),
                        fontFamily: 'Poppins-Bold',
                    }}
                    onPress={() => this.onSubmitNotes()}
                />
            </MasterLayout>
        );
    }
}
const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
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
});

export default AddNotes; 