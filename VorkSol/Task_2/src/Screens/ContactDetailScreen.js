import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ContactDetailScreen = ({ route, navigation }) => {
  const { contact } = route.params; // Extract contact from route params

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Image source={contact.image} style={styles.UserImage} />
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007BFF',
  },
  UserImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 10,
    color:'#3aafa9',
  },
  phone: {
    fontSize: 22,
    color: '#555',
  },
});

export default ContactDetailScreen;
