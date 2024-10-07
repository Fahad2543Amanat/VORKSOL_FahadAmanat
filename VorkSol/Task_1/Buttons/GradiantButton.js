import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradiantButton = ({text, onpress,colors}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onpress}>
        <LinearGradient
        color={colors}
            start={{x:0, y:0}}
            end={{x:1,y:1}}
            style={styles.gradiantButton}
        >
         <Text style={styles.buttonText}>{text}</Text>   
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default GradiantButton

const styles = StyleSheet.create({
    buttonContainer: {
    width: '80%',
    height:'80',
    marginVertical: 10,
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})