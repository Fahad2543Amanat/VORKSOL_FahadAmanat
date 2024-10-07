import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OfflineView = () => {
  return (
    <View>
      <View style={styles.OffView}>
                          <View style={styles.LiveViewDot}>

                          </View>
                          <Text style={styles.txtLiveView}>
                            Offline
                          </Text>
                    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    
        OffView:{
          flexDirection:'row',
          position:'absolute',
          width:70,
          height:23,
          backgroundColor:'#312F37',
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
export default OfflineView