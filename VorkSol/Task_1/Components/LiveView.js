import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const LiveView = () => {
  return (
    <View>
        <View style={styles.LiveView}>
                          <View style={styles.LiveViewDot}>

                          </View>
                          <Text style={styles.txtLiveView}>
                            Live
                          </Text>
                    </View>
    </View>
  )
}

const styles = StyleSheet.create({

    LiveView:{
          flexDirection:'row',
          position:'absolute',
          width:60,
          height:23,
          backgroundColor:'#8E101C',
          zIndex:1,
          justifyContent:'space-evenly',
          alignItems:'center',
          borderRadius:7,
          top:5,
          left:5,
          paddingBottom:4
        },
        
        LiveViewDot:{
          width: 7,
          height:7,
          backgroundColor:'#fff',
          borderRadius:50,
        },
        txtLiveView:{
            color:'#fff',
            fontSize:12,
            fontWeight:"bold"
        },
})

export default LiveView