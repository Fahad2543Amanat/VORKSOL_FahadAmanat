import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';


const contacts = [
  {
    id: '1',
    name: 'Fahad',
    phone: '0342-4567890',
    image: require('../../assests/RobotShop.png'), 
  },
  {
    id: '2',
    name: 'Amir',
    phone: '0333-6543210',
    image: require('../../assests/RobotShop.png'),
  },
  {
    id: '3',
    name: 'Ali',
    phone: '0332-1234567',
    image: require('../../assests/RobotShop.png'),
  },

];

const ContactListScreen = ({ navigation }) => {
  const UserData = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ContactDetail', { contact: item })}
    >
      <Image source={item.image} style={styles.UserImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={UserData}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  UserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#3aafa9',
  },
  phone: {
    fontSize: 16,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
  },
});

export default ContactListScreen;
