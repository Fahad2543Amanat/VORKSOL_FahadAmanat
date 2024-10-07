import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from '../Screens/ContactListScreen';
import ContactDetailScreen from '../Screens/ContactDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen
          name="ContactList"
          component={ContactListScreen}
          options={{ title: 'Contacts' }}
        />
        <Stack.Screen
          name="ContactDetail"
          component={ContactDetailScreen}
          options={{ title: 'Contact Details', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
