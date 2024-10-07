import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, StatusBar, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Creators from './Components/Creators';
import Catagory from './Components/Catagory';
import SeasonBoard from './Components/SeasonBoard';
import { DetailCardData } from './Data/DetailCardData';
import DetailCardImagesCircle from './Components/DetailCardImagesCircle';

export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

      <StatusBar barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.header}>
          <View style={styles.headerTopbar}>
        <Text style={styles.headerText}>FIFA22 / PS4
        </Text>
        <Image source={require('./assests/game.png')}  style={styles.topbarIcon}/>

          </View>

      </View>

      {/* Notifications Section */}
      <View style={styles.notifications}>
        <Image source={require('./assests/bells.png')} />
        <Text style={styles.notificationText}>Notifiche attive</Text>
      </View>

        {/* Main Banner Section */}
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require('./assests/task1.png')}
        />

        <Image
          style={styles.bannerImage2}
          source={require('./assests/lavorizone.png')}
        />

        <TouchableOpacity style={styles.playButton}>
          <LinearGradient
            colors={['#3E0DA9', '#B29DFF','#CC8AD9']}
            start={{x:0, y:0}}
            end={{x:1,y:0}}
            style={styles.gradientButtonBanner}
            >
              <Text style={styles.txtbtn30}>Gioca ora</Text>
            </LinearGradient>

          {/* <Text style={styles.playButtonText}>Gioca ora</Text> */}
        </TouchableOpacity>
      </View>


        {/* Catagories starts */}
              <Catagory />
        {/* Catagories end */}

      {/* Bottom Options starts */}
      <View style={styles.bottomOptions}>

        <View style={styles.lockedOption}>
            <View style={styles.lockedOptionContainer}>
            <LinearGradient
            colors={['#8e44ad', '#1f1f1f']}
            start={{x:0, y:1}}
            end={{x:0,y:0}}
            style={styles.gradientButton}
            >
                 <Image style={styles.imgQuestion} source={require('./assests/question.png')} />
            </LinearGradient>

            </View>
            <Text style={styles.lockedText}>LOCKED</Text>
        </View>


        {/* Golden Point */}
        <View style={styles.lockedOption}>
            <View style={styles.lockedOptionContainer}>
            <LinearGradient
            colors={['#D6B610', '#1f1f1f']}
            start={{x:0, y:1}}
            end={{x:0,y:0}}
            style={styles.gradientButton}
            >
              {/* button +30 start */}

              <TouchableOpacity style={styles.btn30}>
            <LinearGradient
            colors={['#7A0164', '#DB0775','#FF0A71','#7A0164']}
            start={{x:0, y:0}}
            end={{x:1,y:0}}
            style={styles.gradientButton30}
            >
              <Text style={styles.txtbtn30}>+30</Text>
            </LinearGradient>
              </TouchableOpacity>

              {/* button +30 end */}

              <Image style={styles.imgQuestion} source={require('./assests/gp.png')} />
            </LinearGradient>

            </View>
            <Text style={styles.lockedText}>Golden{'\n'}Points</Text>

        </View>
      </View>

      {/* Bottom Options end */}

      {/* Vans season card starts */}
      <View style={styles.seasoncardContainer} >
        <LinearGradient
            colors={['#592BCD','#AF50D0']}
            start={{x:0, y:0}}
            end={{x:1,y:0}}
            style={styles.gradientButtonSeasonCard}
            >
              {/* Vans season card Left side starts */}
             <View style={styles.gradientButtonSeasonCardLeftside}>

                        <View style={styles.txtExclusiveDropContainer}>
                      <Text style={styles.txtExclusiveDrop}>EXCLUSIVE DROPS</Text>
                        </View>

                      <Text style={styles.txtExclusiveDropVansSeason} numberOfLines={1}>Vans Season</Text>
                      <View style={styles.line} />
                      <Text style={styles.txtseasonPara}>Lorem ipsum dolor sit amet</Text>

                      <TouchableOpacity style={styles.btnshop}>
                        <Text style={styles.txtbtnShop}>Vai allo shop</Text>
                      </TouchableOpacity>
             </View>
        {/* Vans season card lefside end */}

        {/* Vans season card right side starts */}

             <View style={styles.gradientButtonSeasonCardRightside}>
                  <Image source={require('./assests/vanzBag.png')} style={styles.imgBag} />
                  <Image source={require('./assests/vanzObstecle.png')} style={styles.imgObstecle} />
                  <Image source={require('./assests/vanzCap.png')} style={styles.imgCap} />
             </View>

             {/* Vans season card right side end */}
            </LinearGradient>

      </View>
      {/* Vans season card end */}

          {/* creator starts */}
            <Creators />
          {/* creator end */}


      {/* Discover more starts */}
        <TouchableOpacity >
         <Text style={styles.txtDiscover}>
            Discover More
          </Text>
        </TouchableOpacity>
      {/* Discover more end */}

          {/* SeasonBoard starts */}
          <View style={styles.NotifyContainers}>
                <View style={styles.LeftSideNotify}>
                      <Image source={require('./assests/list.png')} style={styles.ImgLeftSideNotify}/>
                      <Text style={styles.txtLeftSideNotify}>Consulta{'\n'}regolamento</Text>
                </View>
                <View style={styles.RightSideNotify}>
                      <Text style={styles.txtRightSideNotify}>Disattiva{'\n'}notifiche</Text>
                      <Image source={require('./assests/bells.png')} style={styles.ImgRightSideNotify}/>
                </View>
          </View>

          <SeasonBoard />

          {/* SeasonBoard end */}

              {/* users detail section list start */}

                <View style={styles.DetailCard}>
                  <View style={styles.DetailCardHeader}>
                        <Text style={styles.DetailCardHeaderTxt}>POS</Text>
                        <Text style={styles.DetailCardHeaderTxt}>UTENTE</Text>

                        <Image source={require('./assests/sci-fiBox.png')} style={styles.DetailCardHeaderImg} />
                  </View>
              {/* FlatList for DetailCardData starts */}
              <FlatList
              data={DetailCardData}
              keyExtractor={item => item._id.toString()}
              renderItem={({item}) => (
                <View style={styles.DetailCardList}>

                  <View style={styles.DetailCardListView}>
                  <View style={styles.DetailCardListLeftSide}>

                        <Text style={styles.txtLastCard}>{item.srNo}</Text>
                        <DetailCardImagesCircle backgroundColor={item.backgroundColors}>
                        <Image source={item.image} style={styles.DetailCardImages} />

                        </DetailCardImagesCircle>

                        <Text style={styles.txtLastCard}> {item.name} </Text>
                        </View>

                  <View>

                  <Text style={styles.txtLastCard}> {item.pointsValue} </Text>
                  </View>
                </View>
                  </View>
              )}
              />
              {/* FlatList for DetailCardData ends */}

                </View>
              {/* users detail section list end */}

              <View style={styles.LastCard}>

            <View style={styles.LastCardView}>

              <View style={styles.LeftSide}>
                      <Text style={styles.txtLastCard}>24</Text>
                      <View style={styles.LastCardCircle}>
                      <Image source={require('./assests/image1.png')} style={styles.circleImage}/>
                      </View>

                      <Text style={styles.txtLastCardName}>
                        FraGamer93
                      </Text>
              </View>

              {/* right side */}
                <View>

                <Text style={styles.txtLastCardPoint}>
                    1
                </Text>
                </View>
            </View>
              </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent:'center',
  },
  header: {
    padding: 15,
    backgroundColor: '#2c2c2c',
    width: '100%',
    alignItems: 'center',
    height:70,
    justifyContent:'center',
    flexDirection:'row',
  },
  topbarIcon:{
    width:20,
    height:20,
    marginLeft:10,
  },
  headerTopbar:{
     backgroundColor:'#353535',
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
      padding:8,
    borderRadius:8,
    width:'60%',
  },
  headerText: {
    color: 'lightgrey',
    fontSize: 12,
  },
  notifications: {
    backgroundColor: '#8e44ad',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection:'row',
    justifyContent:'center',
    // eslint-disable-next-line no-dupe-keys
    alignItems:'center',
    zIndex:1,
  },
  notificationText: {
    color: '#fff',
    fontSize: 14,
    marginLeft:20,
  },
  banner: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    position:'relative',
  },
  bannerImage: {
    width: '100%',
    height: 310,
    borderRadius: 20,
    resizeMode:'cover',
  },
  bannerImage2:{
    position:'absolute',
    top:'-22%',
    left:'24%',
    width:200,
    height:200,
    resizeMode:'contain',
    transform: [{rotate:'-8deg'}],
    opacity:0.6,

  },
  playButton: {
    position: 'absolute',
    bottom: 20,
   // backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 10,
  },
  gradientButtonBanner:{
    width: 200,
    height: 50,
    borderRadius:10,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  targetText: {
    color: '#fff',
    marginLeft: 10,
  },

  bottomOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginBottom: 40,
    marginTop:20,
  },
  lockedOption: {
    width: 110,
    height: 110,
    position:'relative',

  },
  lockedOptionContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
   gradientButton: {
    width: '100%',
    height: '100%',
    borderRadius:20,

  },
   gradientButton30: {
    width: '100',
    height: '100%',
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
  },
  txtbtn30:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:20,
  },
  btn30:{

      width:61,
      height:34,
      position:'absolute',
      left:'55%',
      top:-10,
      borderRadius:8,

  },
  imgQuestion:{
    position: 'absolute',
    top: '0%',
    left: '5%',
    width:98,
    height:115,
    zIndex:1,
    resizeMode:'stretch',
  },
  lockedText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    fontSize:14,
    fontFamily:'Montserrat',
    fontWeight:'700',

  },
  seasoncardContainer:{
    width:'94%',
    height:180,
    marginTop:60,
    marginBottom:20,
    borderRadius:16,
  },
    gradientButtonSeasonCard: {
    width: '100%',
    height: '100%',
    borderRadius:20,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    },
    gradientButtonSeasonCardLeftside:{
      width:'50%',
      height:'100%',
      paddingLeft:10,
      paddingTop:20,

    },
    txtExclusiveDropContainer:{
      width:'80%',
      height: 30,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#000',
        borderRadius:7,
    },
    txtExclusiveDrop:{
      color:'#fff',
      padding:5,
      fontSize:10,
    },
    txtExclusiveDropVansSeason:{
      marginTop:10,
      color:'#fff',
      fontSize:26,
      fontWeight:'700',
      flexShrink:1,
    },
    line:{
        backgroundColor:'#B94FC6',
        height:6,
        width:35,
        borderRadius:10,
        marginTop:10,
    },
    txtseasonPara:{
      fontFamily:'Montserrat',
      marginTop:5,
    },
    btnshop:{
      fontFamily:'Montserrat',
      backgroundColor:'#B94FC6',
      justifyContent:'center',
      alignItems:'center',
      padding:5,
      borderRadius:8,
      marginTop:5,
      marginBottom:10,
      width:140,

    },
    txtbtnShop:{
      color:'#fff',
      fontFamily:'Montserrat',
      paddingLeft:10,
      fontWeight:'bold',
      fontSize:16,

    },
    gradientButtonSeasonCardRightside:{
      width:'50%',
      height:'100%',
      position:'relative',
      //backgroundColor:'red'
    },
    imgBag:{
      width: 130,
      height: 130,
      position:'absolute',
      left:68,
      top:45,
      opacity:0.7,

    },
    imgObstecle:{
      width: 160,
      height: 160,
      position:'absolute',
      transform: [{rotate:'-15deg'}],
      left:4,
      top:30,
      opacity:0.9,
      resizeMode:'contain',
      zIndex:1,

    },
    imgCap:{
      width: 100,
      height: 90,
      position:'absolute',
      left:55,
      top:-16,
      zIndex:1,
      resizeMode:'contain',
      transform:[{rotate:'30deg'}],

    },
  goldenPoints: {
    alignItems: 'center',
    backgroundColor: '#f39c12',
    padding: 20,
    borderRadius: 10,
  },
  goldenText: {
    color: '#fff',
    fontSize: 18,
  },
  goldenSubtitle: {
    color: '#fff',
    fontSize: 12,
  },

  txtDiscover:{
    color:'#B29DFF',
    marginVertical:50,
  },
  NotifyContainers:{
    width: '97%',
    height:100,
    //backgroundColor:'red',
    flexDirection:'row',
   // justifyContent:'space-between',
    alignItems:'center',

  },
  LeftSideNotify:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'45%',
    backgroundColor:'#7F56FF',
    padding:10,
    marginHorizontal:8,
    borderBottomRightRadius:30,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    alignItems:'center',
    height:'70%',
  },
  ImgLeftSideNotify:{
    width:30,
    height:30,
  },
  txtLeftSideNotify:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
    marginLeft:4,
  },
  RightSideNotify:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:'45%',
    backgroundColor:'#B94FC6',
    padding:10,
    marginHorizontal:8,
    alignItems:'center',
    height:'70%',
    borderTopLeftRadius:30,
    borderBottomRightRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,

  },
  txtRightSideNotify:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold',
  },
  ImgRightSideNotify:{
    width:20,
    height:20,

  },
  DetailCard:{
    backgroundColor:'#21222A',
    width:'90%',
    height:860,
    borderRadius:15,
    marginBottom:10,
    marginTop:50,
  },
  DetailCardHeader:{
    width:'100%',
    height:50,
    backgroundColor:'#2F2E3B',
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:15,
  },
  DetailCardHeaderTxt:{
    color:'#fff',
    fontSize:16,

  },
  DetailCardHeaderImg:{
    width:30,
    height:30,
  },
  DetailCardList:{
    width:'100%',
    //height:150,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:10,
    paddingVertical:3,
    borderBottomWidth:1.5,
    borderBottomColor:'#282832',
  },
  DetailCardListView:{
     width:'100%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:5,
    paddingVertical:5,
  },
  DetailCardListLeftSide:{
    flexDirection:'row',
    paddingHorizontal:10,
    alignItems:'center',

  },
  LastCard:{
    width:'90%',
    height:90,
    backgroundColor:'#6429FA',
    marginTop:10,
    marginBottom:10,
    borderRadius:15,
    //justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:15,
  },
  LastCardView:{
    width:'100%',
    height:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  LeftSide:{
    flexDirection:'row',
  },
  txtLastCard:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
  },
  DetailCardImages:{
    width:40,
    height:40,
    resizeMode:'contain',
  },
  LastCardCircle:{
    width: 40,
    height:40,
    backgroundColor:'#865C98',
    borderRadius:50,
    marginLeft:20,
    marginRight:20,
    justifyContent:'center',
    alignItems:'center',
  },
  circleImage:{
    width:30,
    height:30,
    resizeMode:'contain',

  },
   txtLastCardName:{
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
    marginRight:10,
  },
   txtLastCardPoint:{
    fontSize:20,
    color:'#fff',
    fontWeight:'bold',
  },
});
