import { View, Text,StyleSheet, Image} from 'react-native'
import React from 'react'
import LiveView from './LiveView'
import OfflineView from './OfflineView'
import LinearGradient from 'react-native-linear-gradient';

const Creators = () => {
  return (
    <View style={styles.container}>
      {/* Creators starts */}

                <Text style={styles.txtCreators}>
                  Creators
                </Text>
            {/* creatorsContainer 1 starts */}
            
          <View style={styles.creatorsContainer}>
                <View style={styles.creatorsImages}>
                  <LiveView />
                  <LinearGradient
                   colors={['#160E2B4D','#6233BA4D']}
                   start={{x:2, y:0}}
                   end={{x:1,y:1}}
                   style={styles.gradientButtoncreator}
                  >
                    
                  <Image source={require('../assests/image1.png')} style={styles.creatorsImages1}/>

                  </LinearGradient>
                  <Text style={styles.txtcreatorsImages1}>
                    Coscu
                  </Text>
                </View>
                <View style={styles.creatorsImages}>

                  {/* LiveView starts */}
                    
                  <LiveView/>
                    {/* LiveView end */}

                  <Image source={require('../assests/image2.png')} style={styles.creatorsImages2}/>

                 
                  <Text style={styles.txtcreatorsImages1}>
                    Rubius
                  </Text>
                </View>
                <View style={styles.creatorsImages}>

                  {/* LiveView starts */}
                    
                   <LiveView />
                    {/* LiveView end */}
                 
                  <Image source={require('../assests/image3.png')} style={styles.creatorsImages2}/>

                
                  <Text style={styles.txtcreatorsImages1}>
                    SLAKUN10
                  </Text>
                </View> 
          </View>
          {/* creatorsContainer 1 end */}

           {/* creatorsContainer 2 starts */}
          <View style={styles.creatorsContainer}>
                <View style={styles.creatorsImages}>

                  {/* OfflineView starts */}
                    
                    <OfflineView />
                    {/* OfflineView end */}
                  
                  <Image source={require('../assests/image3.png')} style={styles.creatorsImages2}/>

                 
                  <Text style={styles.txtcreatorsImages1}>
                    SLAKUN10
                  </Text>
                </View>
                <View style={styles.creatorsImages}>

                  {/* OfflineView starts */}
                    
                  <OfflineView />
                    {/* OfflineView end */}
                  
                 <LinearGradient
                   colors={['#160E2B4D','#6233BA4D']}
                   start={{x:2, y:0}}
                   end={{x:1,y:1}}
                   style={styles.gradientButtoncreator}
                  >
                  <Image source={require('../assests/image1.png')} style={styles.creatorsImages1}/>
                   </LinearGradient>

                 
                  <Text style={styles.txtcreatorsImages1}>
                    Rubius
                  </Text>
                </View>
                <View style={styles.creatorsImages}>

                  {/* LiveView starts */}
                    
                    <LiveView />
                    {/* LiveView end */}

                  <Image source={require('../assests/image2.png')} style={styles.creatorsImages2}/>
                
                  <Text style={styles.txtcreatorsImages1}>
                    Coscu
                  </Text>
                </View>
                
                
                  
          </View>
           
            
            {/* creatorsContainer 2 end */}

      {/* Creators end */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    alignItems: 'center',
    justifyContent:'center',
    },
    txtCreators:{
    fontSize: 30,
    color:'#fff',
    fontWeight:'bold',
    fontFamily:'Montserrat'

  },
   creatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '92%',
    height:200,
    //backgroundColor:'red',
    marginTop:20,
    alignItems:'center',

   
  },
  creatorsImages:{
    height:'90%',
    width:105,
    borderRadius:10,
    position:'relative',
  },
  creatorsImages1:{
    resizeMode:'cover',
    width:105,
    height:110,
  },
   gradientButtoncreator: {
    width: '100%', 
    height: '100%',
    borderRadius:10,
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    },
    
  creatorsImages2:{
    resizeMode:'stretch',
    width:105,
    height:180,
    borderRadius:10,
  },
  txtcreatorsImages1:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:16,
  },
})

export default Creators