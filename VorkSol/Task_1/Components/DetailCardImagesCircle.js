// DetailCardImagesCircle.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const DetailCardImagesCircle = ({ backgroundColor = '#B99E92', children}) => {
  return (
    <View style={[styles.circle, { backgroundColor}]}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
     width:50,
    height:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    marginRight:20,
    marginLeft:15,
  },
});

export default DetailCardImagesCircle;
