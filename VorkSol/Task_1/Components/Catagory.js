import { View, Text, Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

const Catagory = () => {
  return (
    <View>
      {/* Catagories starts */}
    

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollViewitems}>
        <View style={styles.catagoryOptions}>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Image source={require('../assests/energyBox.png')} style={styles.ImgcatagoryOptions}/>

        <View style={styles.progressBar}>
          <View style={styles.progress1} />
        </View>
        <View  style={styles.prizeBx}>

        <Image source={require('../assests/sci-fiBox.png')} style={styles.ImgcatagoryOptions1} />

          <View style={styles.prizeContainer}>
              <Image source={require('../assests/gpCoin.png')} style={styles.prizeGP} />
              <Text style={styles.prizetxt} >1650/2000</Text>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progress2} />
        </View>
        <View>
        <Image source={require('../assests/energyBox.png')} style={styles.ImgcatagoryOptions} />
          <View style={styles.prizeContainer}>
              <Image source={require('../assests/gpCoin.png')} style={styles.prizeGP} />
              <Text style={styles.prizetxt} >3000</Text>
          </View>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progress2} />
        </View>

        </View>
      </ScrollView>

        {/* Catagories end */}
    </View>
  )
}

const styles = StyleSheet.create({
    scrollViewitems:{
    maxHeight:130,
  },
  catagoryOptions:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    padding:10,

   
  },
  ImgcatagoryOptions:{
    width:70,
    height:70,
  },
  prizeBx:{
    alignItems:'center',
    
  },
  ImgcatagoryOptions1:{
    width:120,
    height:80,
    resizeMode:'contain'
  
  },
  prizeContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  prizeGP:{
    width:25,
    height:25,
    
  },
  prizetxt:{
    fontSize:14,
    color:'#fff',
    fontWeight:'700',
    
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor:'#fff',
  },
  progressText: {
    color: '#fff',
    marginRight: 10,
  },
  progressBar: {
    width: 70,
    height: 10,
    backgroundColor: '#555',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2FE98C',
  },
  progress1:{
    width: '88%',
    height: '100%',
    backgroundColor: '#2FE98C',
  },
  progress2:{
    width: '90%',
    height: '100%',
  },
})
export default Catagory