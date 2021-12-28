import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      
    
      <NavigationContainer>
      <DrawerNavigator
        />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
