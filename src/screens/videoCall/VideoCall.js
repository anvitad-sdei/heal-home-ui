import 'react-native-gesture-handler';
import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    TouchableOpacity,
    Platform, Alert
} from "react-native";

import {
    TwilioVideoLocalView,
    TwilioVideoParticipantView,
    TwilioVideo
} from "react-native-twilio-video-webrtc";
import ImagesName from '../../constants/ImagesName';
import {
    checkMultiple,
    request,
    requestMultiple,
    PERMISSIONS,
    RESULTS,
} from 'react-native-permissions';
import { postVideoCreateRoom } from '../../redux/actions';
import { connect } from 'react-redux';

class VideoCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAudioEnabled: true,
            isVideoEnabled: true,
            status: 'disconnected',
            participants: new Map(),
            videoTracks: new Map(),
            roomName: '',
            token: ''
        };
    }


    componentDidMount() {
        this._checkPermissions();
    }
    componentWillUnmount() {

    }


    _checkPermissions = (callback) => {
        const iosPermissions = [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE];
        const androidPermissions = [
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.RECORD_AUDIO,
        ];
        checkMultiple(
            Platform.OS === 'ios' ? iosPermissions : androidPermissions,
        ).then((statuses) => {
            const [CAMERA, AUDIO] =
                Platform.OS === 'ios' ? iosPermissions : androidPermissions;
            if (
                statuses[CAMERA] === RESULTS.UNAVAILABLE ||
                statuses[AUDIO] === RESULTS.UNAVAILABLE
            ) {
                Alert.alert(
                    'Error',
                    'Hardware to support video calls is not available',
                );
            } else if (
                statuses[CAMERA] === RESULTS.BLOCKED ||
                statuses[AUDIO] === RESULTS.BLOCKED
            ) {
                Alert.alert(
                    'Error',
                    'Permission to access hardware was blocked, please grant manually',
                    [

                        { text: 'OK', onPress: () => this._goBack() },
                    ]
                );

            } else {
                if (
                    statuses[CAMERA] === RESULTS.DENIED &&
                    statuses[AUDIO] === RESULTS.DENIED
                ) {
                    requestMultiple(
                        Platform.OS === 'ios' ? iosPermissions : androidPermissions,
                    ).then((newStatuses) => {
                        if (
                            newStatuses[CAMERA] === RESULTS.GRANTED &&
                            newStatuses[AUDIO] === RESULTS.GRANTED
                        ) {
                            console.log("Permission granted 0")
                            callback && callback();
                            this._onConnectButtonPress()
                        } else {
                            Alert.alert(
                                'Error',
                                'One of the permissions was not granted',
                                [

                                    { text: 'OK', onPress: () => this._goBack() },
                                ]
                            );
                        }
                    });
                } else if (
                    statuses[CAMERA] === RESULTS.DENIED ||
                    statuses[AUDIO] === RESULTS.DENIED
                ) {
                    request(statuses[CAMERA] === RESULTS.DENIED ? CAMERA : AUDIO).then(
                        (result) => {
                            if (result === RESULTS.GRANTED) {
                                console.log("Permission granted 1")
                                callback && callback();
                                this._onConnectButtonPress()
                            } else {
                                Alert.alert(
                                    'Error',
                                    'Permission not granted',
                                    [

                                        { text: 'OK', onPress: () => this._goBack() },
                                    ]
                                );
                            }
                        },
                    );
                } else if (
                    statuses[CAMERA] === RESULTS.GRANTED ||
                    statuses[AUDIO] === RESULTS.GRANTED
                ) {
                    console.log("Permission granted 2")
                    callback && callback();
                    this._onConnectButtonPress()
                }
            }
        });
    };

    _goBack = () => {
        this.props.navigation.goBack();
    }

    _onConnectButtonPress = () => {
        const { createRoomData } = this.props;

        this.setState(
            {
                roomName: createRoomData.room_name,
                token: createRoomData.access_token,

                // roomName: '5_2_1595241273616',
                // token: 'eyJjdHkiOiJ0d2lsaW8tZnBhO3Y9MSIsInR5cCI6IkpXVCIsImFsZyI6IkhTMjU2In0.eyJpc3MiOiJTSzcwMmFlNDQ2OWM5YzIwNGNiZGQ2MDllZWNiY2U1NmE5IiwiZXhwIjoxNTk1MjQ0OTYwLCJncmFudHMiOnsiaWRlbnRpdHkiOiIyNSIsInZpZGVvIjp7InJvb20iOiI1XzJfMTU5NTI0MTI3MzYxNiJ9fSwianRpIjoiU0s3MDJhZTQ0NjljOWMyMDRjYmRkNjA5ZWVjYmNlNTZhOS0xNTk1MjQxMzQ0Iiwic3ViIjoiQUMxODA1YTNlYzQ0ZGNiZmQyZGEyYjRhYzkzMWEzNjdiMyJ9.SQgFcY6tiEeosojkPUVWRAYvk_Scvvf4drMdWRvitKE',
            },
            () => {
                console.log("TWILLIO  roomName : ",
                    this.state.roomName
                    + "  ,token = " + this.state.token)

                this.refs.twilioVideo.connect(
                    {
                        roomName: this.state.roomName,
                        accessToken: this.state.token
                    })
                this.setState({ status: 'connecting' })
            },
        );


        /* socket.emit('getAccessToken', {
          userId: idx(tourDetails, (_) => _.userId._id),
          roomName: idx(response, (_) => _.data.roomName),
          token: idx(response, (_) => _.data.accessToken),
        }); 
    });*/


    }

    _onEndButtonPress = () => {
        this.refs.twilioVideo.disconnect();
        this._goBack();
    }

    _onMuteButtonPress = () => {
        this.refs.twilioVideo.setLocalAudioEnabled(!this.state.isAudioEnabled)
            .then(isEnabled => this.setState({ isAudioEnabled: isEnabled }))
    }

    _onFlipButtonPress = () => {
        this.refs.twilioVideo.flipCamera()
    }

    _onRoomDidConnect = ({ roomName, error }) => {
        console.log('TWILLIO onRoomDidConnect: ', roomName);

        this.setState({ status: 'connected' });
    };

    _onRoomDidDisconnect = ({ roomName, error }) => {
        console.log("TWILLIO _onRoomDidDisconnect roomName : ",
            roomName
            + " , error : " + JSON.stringify(error))

        this.setState({ status: 'disconnected' })
        this._goBack()
        /* Alert.alert(
            'Error',
            error + '   Room Name =' + this.state.roomName 
            + '    Token = ' + this.state.token,
            [

                { text: 'OK', onPress: () => this._goBack() },
            ]
        ); */
    }

    _onRoomDidFailToConnect = (error) => {
        console.log("TWILLIO _onRoomDidFailToConnect ERROR: ",
            JSON.stringify(error) +
            '   Room Name =' + this.state.roomName +
            '      Token = ' + this.state.token)
        this.setState({ status: 'disconnected' })
        Alert.alert(
            'Error',
            error.error + '   Room Name =' + this.state.roomName + '      Token = ' + this.state.token,
            [

                { text: 'OK', onPress: () => this._goBack() },
            ]
        );

    }

    _onParticipantAddedVideoTrack = ({ participant, track }) => {
        console.log("TWILLIO onParticipantAddedVideoTrack: ", participant, track)

        this.setState({
            videoTracks: new Map([
                ...this.state.videoTracks,
                [track.trackSid, { participantSid: participant.sid, videoTrackSid: track.trackSid }]
            ]),
        });
    }

    _onParticipantRemovedVideoTrack = ({ participant, track }) => {
        console.log("TWILLIO onParticipantRemovedVideoTrack: ", participant, track)

        let videoTracks = this.state.videoTracks
        videoTracks.delete(track.trackSid)

        this.setState({ videoTracks: { ...videoTracks } })
    }


    render() {
        const { createRoomData } = this.props;
        // console.log('render postVideoCreateRoom createRoomData : ', createRoomData.token);

        return (
            <View style={styles.container}>
                {
                    this.state.status === 'disconnected' &&
                    <View>
                        {/* <TextInput
                            style={styles.input}
                            autoCapitalize='none'
                            value={this.state.token}
                            onChangeText={(text) => this.setState({ token: text })}>
                        </TextInput>
                        <Button
                            title="Connect"
                            style={styles.button}
                            onPress={this._onConnectButtonPress}>
                        </Button> */}
                    </View>
                }

                {
                    (this.state.status === 'connected' || this.state.status === 'connecting') &&
                    <View style={styles.callContainer}>
                        {
                            this.state.status === 'connected' &&
                            <View style={styles.remoteGrid}>
                                {
                                    Array.from(this.state.videoTracks, ([trackSid, trackIdentifier]) => {
                                        return (
                                            <TwilioVideoParticipantView
                                                style={styles.remoteVideo}
                                                key={trackSid}
                                                trackIdentifier={trackIdentifier}
                                            />
                                        )
                                    })
                                }
                            </View>
                        }
                        <View
                            style={styles.optionsContainer}>
                            <TouchableOpacity
                                style={styles.optionButton}
                                onPress={this._onEndButtonPress}>
                                <Image
                                    source={ImagesName.ic_endCall}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.optionButton}
                                onPress={this._onMuteButtonPress}>
                                <Image
                                    source={this.state.isAudioEnabled ? ImagesName.ic_muteCall : ImagesName.ic_endCall}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.optionButton}
                                onPress={this._onFlipButtonPress}>
                                <Image
                                    source={ImagesName.ic_videoCall}
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                </Image>
                            </TouchableOpacity>
                            <TwilioVideoLocalView
                                enabled={true}
                                style={styles.localVideo}
                            />
                        </View>
                    </View>
                }

                <TwilioVideo
                    ref="twilioVideo"
                    onRoomDidConnect={this._onRoomDidConnect}
                    onRoomDidDisconnect={this._onRoomDidDisconnect}
                    onRoomDidFailToConnect={this._onRoomDidFailToConnect}
                    onParticipantAddedVideoTrack={this._onParticipantAddedVideoTrack}
                    onParticipantRemovedVideoTrack={this._onParticipantRemovedVideoTrack}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey"
    },
    callContainer: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        top: 0,
        left: 0,
        right: 0
    },
    welcome: {
        fontSize: 30,
        textAlign: "center",
        paddingTop: 40
    },
    input: {
        height: 50,
        borderWidth: 1,
        marginRight: 70,
        marginLeft: 70,
        marginTop: 50,
        textAlign: "center",
        backgroundColor: "white"
    },
    button: {
        marginTop: 100
    },
    localVideo: {
        flex: 1,
        width: 125,
        height: 200,
        position: "absolute",
        right: 10,
        bottom: 400,
        borderRadius: 2,
        borderColor: '#4e4e4e'
    },
    remoteGrid: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    remoteVideo: {
        width: '100%',
        height: '100%'
    },
    optionsContainer: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        height: 100,
        // backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    },
    optionButton: {
        width: 60,
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100 / 2
    }
});

const mapStateToProps = ({ videocall }) => {
    const { createRoomData } = videocall;
    return { createRoomData: createRoomData };
};

export default connect(
    mapStateToProps,
    { postVideoCreateRoom },
)(VideoCall);
