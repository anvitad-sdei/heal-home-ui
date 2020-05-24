import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Platform} from 'react-native';
import MasterLayout from '../../components/Layout/MasterLayout';
import {ScrollView} from 'react-native-gesture-handler';
import normalize from '../../helpers/ResponsiveFont';
import colors from '../../constants/colors';
import RoundedButton from '../../components/Buttons/RoundedButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
import Images from '../../components/IntroImages';
import GeneralStatusBarColor from '../../components/StatusBarColor/GeneralStatusBarColor';
const isIOS = Platform.OS === 'ios' ? true : false;
const DEVICE_WIDTH = Dimensions.get('window').width;
class Welcome extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {active: 1, selectedIndex: 0, images: ''};
  }
  nextHandler = () => {
    const {active} = this.state;
    if (active < 3) {
      this.setState({active: active + 1});
    }
  };
  prevHandler = () => {
    const {active} = this.state;
    if (active > 1) {
      this.setState({active: active - 1});
    }
  };
  // componentDidMount = () => {
  //   this._isMounted = true;
  //   setInterval(() => {
  //     this.setState(
  //       prev => ({
  //         selectedIndex:
  //           prev.selectedIndex === this.state.images.length - 1
  //             ? 0
  //             : prev.selectedIndex + 1,
  //       }),
  //       () => {
  //         this.scrollRef.current.scrollTo({
  //           animated: true,
  //           y: 0,
  //           x: DEVICE_WIDTH * this.state.selectedIndex,
  //         });
  //       },
  //     );
  //   }, 3000);
  // };
  setSelectedIndex = event => {
    const viewSize = DEVICE_WIDTH;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({selectedIndex});
  };
  render() {
    // const Carousel = () => {
    //   const {active} = this.state;
    //   const buttonTitle = active === 3 ? 'DONE' : 'NEXT';
    //   return (
    //     <View style={{backgroundColor: colors.WHITE, height: '100%'}}>
    //       {/* Goal Screen*/}

    //       {active === 1 ? (
    //         <View>
    //           <View>
    //             <View style={styles.backLightImage}>
    //               <CustomImage
    //                 source={require('../../assets/backgroundBlue.png')}
    //               />
    //             </View>
    //             <View style={styles.goalImageStyle}>
    //               <CustomImage source={require('../../assets/goal.png')} />
    //             </View>
    //           </View>
    //           <View style={styles.headingView}>
    //             <Text style={[styles.heading, styles.textAlign]}>
    //               Choose your goal
    //             </Text>
    //             <Text style={[styles.subHeading, styles.textAlign]}>
    //               Drinking log to track your daily
    //             </Text>
    //             <Text style={[styles.subHeading, styles.textAlign]}>
    //               drinking record.
    //             </Text>
    //           </View>
    //           <View style={styles.dotView}>
    //             <View
    //               style={{
    //                 ...styles.dotOne,
    //                 backgroundColor: `${
    //                   active === 1 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //             <View
    //               style={{
    //                 ...styles.dotSecond,
    //                 backgroundColor: `${
    //                   active === 2 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //             <View
    //               style={{
    //                 ...styles.dotOne,
    //                 backgroundColor: `${
    //                   active === 3 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //           </View>
    //           <RoundedButton
    //             title={buttonTitle}
    //             buttonStyle={styles.buttonStyle}
    //             titleStyle={styles.titleStyle}
    //             onPress={() => {
    //               active === 3
    //                 ? this.props.navigation.navigate('SignIn')
    //                 : this.nextHandler();
    //             }}
    //           />
    //         </View>
    //       ) : null}

    //       {/* Video Session Screen*/}

    //       {active === 2 ? (
    //         <View>
    //           <View>
    //             <View style={styles.backLightImage}>
    //               <CustomImage
    //                 source={require('../../assets/backgroundBlue.png')}
    //               />
    //             </View>
    //             <View style={styles.videoImageStyle}>
    //               <CustomImage source={require('../../assets/video.png')} />
    //             </View>
    //           </View>
    //           <View style={styles.headingView}>
    //             <Text style={[styles.heading, styles.textAlign]}>
    //               Video Session
    //             </Text>
    //             <Text style={[styles.subHeading, styles.textAlign]}>
    //               Join your therapist directly
    //             </Text>
    //             <Text style={[styles.subHeading, styles.textAlign]}>
    //               from your phone
    //             </Text>
    //           </View>

    //           <View style={styles.dotView}>
    //             <View
    //               style={{
    //                 ...styles.dotOne,
    //                 backgroundColor: `${
    //                   active === 1 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //             <View
    //               style={{
    //                 ...styles.dotSecond,
    //                 backgroundColor: `${
    //                   active === 2 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //             <View
    //               style={{
    //                 ...styles.dotOne,
    //                 backgroundColor: `${
    //                   active === 3 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //           </View>
    //           <View style={styles.buttonView}>
    //             {active === 1 ? null : (
    //               <TouchableWithoutFeedback onPress={() => this.prevHandler()}>
    //                 <View style={styles.backArrowButton}>
    //                   <Icon
    //                     name="chevron-left"
    //                     color={colors.WHITE}
    //                     size={normalize(25)}
    //                   />
    //                 </View>
    //               </TouchableWithoutFeedback>
    //             )}

    //             <RoundedButton
    //               title={buttonTitle}
    //               buttonStyle={styles.buttonStyleSecond}
    //               titleStyle={styles.titleStyle}
    //               onPress={() => {
    //                 active === 3
    //                   ? this.props.navigation.navigate('SignIn')
    //                   : this.nextHandler();
    //               }}
    //             />
    //           </View>
    //         </View>
    //       ) : null}

    //       {/* Daily Journaling Screen*/}

    //       {active === 3 ? (
    //         <View>
    //           <View>
    //             <View style={styles.backLightImage}>
    //               <CustomImage
    //                 source={require('../../assets/backgroundBlue.png')}
    //               />
    //             </View>
    //             <View style={styles.journalImageStyle}>
    //               <CustomImage
    //                 source={require('../../assets/journaling.png')}
    //               />
    //             </View>
    //           </View>
    //           <View style={styles.headingView}>
    //             <Text style={[styles.heading, styles.textAlign]}>
    //               Daily Journaling
    //             </Text>
    //             <Text style={[styles.subHeading, styles.textAlign]}>
    //               To help your team have a better
    //             </Text>
    //             <Text style={[styles.subHeading, styles.textAlign]}>
    //               picture
    //             </Text>
    //           </View>

    //           <View style={styles.dotView}>
    //             <View
    //               style={{
    //                 ...styles.dotOne,
    //                 backgroundColor: `${
    //                   active === 1 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //             <View
    //               style={{
    //                 ...styles.dotSecond,
    //                 backgroundColor: `${
    //                   active === 2 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //             <View
    //               style={{
    //                 ...styles.dotOne,
    //                 backgroundColor: `${
    //                   active === 3 ? colors.BLUE : colors.GRAY_THIRD
    //                 }`,
    //               }}
    //             />
    //           </View>
    //           <View style={styles.buttonView}>
    //             {active === 1 ? null : (
    //               <TouchableWithoutFeedback onPress={() => this.prevHandler()}>
    //                 <View style={styles.backArrowButton}>
    //                   <Icon
    //                     name="chevron-left"
    //                     color={colors.WHITE}
    //                     size={normalize(25)}
    //                   />
    //                 </View>
    //               </TouchableWithoutFeedback>
    //             )}

    //             <RoundedButton
    //               title={buttonTitle}
    //               buttonStyle={styles.buttonStyleSecond}
    //               titleStyle={styles.titleStyle}
    //               onPress={() => {
    //                 active === 3
    //                   ? this.props.navigation.navigate('SignIn')
    //                   : this.nextHandler();
    //               }}
    //             />
    //           </View>
    //         </View>
    //       ) : null}
    //     </View>
    //   );
    // };
    const images = [
      require('../../assets/backgroundBlue.png'),
      require('../../assets/backgroundBlue.png'),
      require('../../assets/backgroundBlue.png'),
    ];
    const {selectedIndex} = this.state;
    return (
      <MasterLayout masterStyle={{backgroundColor: colors.WHITE}}>
        <View style={{backgroundColor: colors.WHITE, height: '100%'}}>
          <View style={{height: normalize(400)}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              ref={this.scrollRef}
              onMomentumScrollEnd={this.setSelectedIndex}
              indicatorStyle={'black'}
              pagingEnabled>
              <Images
                sourceBackImage={require('../../assets/backgroundBlue.png')}
                source={require('../../assets/goal.png')}
                mainTitle="Choose your goal"
                subTitle="Drinking log to track your daily"
                title="drinking record."
              />
              <Images
                sourceBackImage={require('../../assets/backgroundBlue.png')}
                source={require('../../assets/video.png')}
                mainTitle="Video Session"
                subTitle="Join your therapist directly"
                title=" from your phone."
                videoImageStyle={styles.videoImageStyle}
              />
              <Images
                sourceBackImage={require('../../assets/backgroundBlue.png')}
                source={require('../../assets/journaling.png')}
                mainTitle=" Daily Journaling"
                subTitle=" To help your team have a better"
                title="picture."
                journalImageStyle={styles.journalImageStyle}
              />
            </ScrollView>
          </View>
          <View style={styles.circleDiv}>
            {images.map((image, i) => (
              <View
                key={image}
                style={[
                  styles.whiteCircle,
                  {opacity: i === selectedIndex ? 1 : 0.5},
                ]}
              />
            ))}
          </View>
          <RoundedButton
            title={'Skip'}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            onPress={() => this.props.navigation.navigate('SignIn')}
          />
        </View>
      </MasterLayout>
    );
  }
}

const styles = StyleSheet.create({
  circleDiv: {
    // position: 'absolute',
    // bottom: 8,
    //height: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    // width: 6,
    // height: 6,
    // borderRadius: 3,
    height: normalize(8),
    width: normalize(8),
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.BLUE,
  },
  // backLightImage: {
  //   width: normalize(218),
  //   // width: DEVICE_WIDTH,
  //   height: normalize(200),
  //   alignSelf: 'center',
  //   position: 'relative',
  //   borderBottomWidth: 1,
  //   borderColor: colors.BLUE,
  //   marginTop: hp(8),
  //   marginBottom: hp(6),
  // },
  // goalImageStyle: {
  //   height: normalize(150),
  //   width: normalize(150),
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   top: '29%',
  //   //borderWidth: 1,
  // },
  videoImageStyle: {
    height: normalize(178),
    width: normalize(140),
    alignSelf: 'center',
    position: 'absolute',
    top: '24%',
    // borderWidth: 1,
  },
  journalImageStyle: {
    height: normalize(140),
    width: normalize(150),
    alignSelf: 'center',
    position: 'absolute',
    top: '29%',
    // borderWidth: 1,
  },
  // headingView: {marginVertical: 2},
  // dotView: {
  //   //marginTop: hp(3),
  //   marginTop: hp(isIOS ? 3 : 1),
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  // dotOne: {
  //   height: normalize(8),
  //   width: normalize(8),
  //   borderRadius: 10,
  // },
  // dotSecond: {
  //   height: normalize(8),
  //   width: normalize(8),
  //   borderRadius: 10,
  //   marginHorizontal: 10,
  // },
  // buttonView: {
  //   flexDirection: 'row',
  //   // marginTop: hp(16),
  //   marginTop: hp(isIOS ? 16 : 12),
  //   justifyContent: 'space-around',
  //   width: '80%',
  //   //  borderWidth: 1,
  // },
  // backArrowButton: {
  //   marginTop: 7,
  //   // borderWidth: 1,
  //   borderRadius: 20,
  //   backgroundColor: colors.BLUE,
  //   color: colors.WHITE,
  // },
  buttonStyle: {
    width: normalize(150),
    borderRadius: 30,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.BLUE,
    //  marginTop: hp(16),
    marginTop: hp(isIOS ? 15 : 12),
    alignSelf: 'center',
  },
  // buttonStyleSecond: {
  //   width: normalize(150),
  //   borderRadius: 30,
  //   backgroundColor: colors.WHITE,
  //   borderWidth: 1,
  //   borderColor: colors.BLUE,
  //   alignSelf: 'center',
  // },

  titleStyle: {
    color: colors.BLUE,
    fontSize: normalize(14),
    fontFamily: 'Poppins-SemiBold',
  },
  // heading: {
  //   fontSize: normalize(20),
  //   marginBottom: hp(2),
  //   color: colors.GRAY_FIVE,
  //   fontFamily: 'Poppins-SemiBold',
  // },
  // subHeading: {
  //   fontSize: normalize(14),
  //   color: colors.GRAY_FIVE,
  //   fontFamily: 'Poppins-Light',
  // },
  // textAlign: {textAlign: 'center'},
});

export default Welcome;
