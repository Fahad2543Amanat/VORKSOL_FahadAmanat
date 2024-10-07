import { View ,StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Text } from 'react-native-svg';

const SeasonBoard = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#2D183E','#541A5B','#9370C6']}
        start={{x:0,y:0}}
        end={{x:0,y:1}}
        angleCenter={{x:1,y:0}}
        style={styles.gradientSeasonBoard}
         >
            <Svg width={200} height={50}>
              <Text
              fill="transparent"
              stroke="lightgrey"
              strokeWidth="1"
              fontSize="35"
              fontWeight="bold"
              fontFamily='Arial Black'
              x="20"
              y="40"
              >
                SEASON
              </Text>
            </Svg>
            <Svg width={280} height={50}>
              <Text
              fill="transparent"
              stroke="lightgrey"
              strokeWidth="1"
              fontSize="38"
              fontWeight="bold"
              fontFamily='Roboto Black'
              x="10"
              y="40"
              >
                LEADERBOARD
              </Text>
            </Svg>

            <Image source={require('../assests/minimal.png')} style={styles.LeaderBoardMinimal} />
            <Image source={require('../assests/FlairPin.png')} style={styles.LeaderBoardFairPin1} />
            <Image source={require('../assests/FlairPin.png')} style={styles.LeaderBoardFairPin2} />
            <Image source={require('../assests/FlairPin.png')} style={styles.LeaderBoardFairPin3} />
            <Image source={require('../assests/astronauta.png')} style={styles.LeaderBoardAstro} />
            <Image source={require('../assests/milan.png')} style={styles.LeaderBoardMilan} />
            <Image source={require('../assests/RobotShop.png')} style={styles.LeaderBoardRobot} />

          </LinearGradient>

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300,
    },
    gradientSeasonBoard:{
    width: '100%',
    height: '100%',
    //justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
    },
    LeaderBoardMinimal:{
      width:'105%',
      height:160,
      position:'absolute',
      top:190,
    },
    // Leadertxt1:{
    //   position:'absolute',
    //   zIndex:1,
    //   backgroundColor:'yellow',
    //   padding:10,
    // },
    LeaderBoardFairPin1:{
      position:'absolute',
      top:75,
      width:'60%',
      height:160,
    },
    LeaderBoardFairPin2:{
      position:'absolute',
      top:115,
      left:240,
      width:'43%',
      height:160,
      zIndex:1,
      
    },
    LeaderBoardFairPin3:{
      position:'absolute',
      top:135,
      right:245,
      width:'42%',
      height:170,
      opacity:0.6,
    },
    LeaderBoardAstro:{
      position:'absolute',
      top:62,
      width:'60%',
      height:180,
      zIndex:1,
      resizeMode:'contain',
    },
    LeaderBoardMilan:{
      position:'absolute',
      top:100,
      left:165,
      width:'80%',
      height:160,
      zIndex:1,
      resizeMode:'contain',
    },
    LeaderBoardRobot:{
      position:'absolute',
      top:165,
      right:205,
      width:'60%',
      height:130,
      zIndex:1,
      resizeMode:'contain',
    },

});
export default SeasonBoard;
