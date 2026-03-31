import React from 'react';
import { View, Text, StyleSheet, Button, Alert, Platform } from 'react-native'; // Добавили Alert и Platform
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = ({ navigation }: any) => {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@user_subscribed');
      
      const message = "Subscription cleared. Restart the app to see Onboarding.";
      
      if (Platform.OS === 'web') {
        alert(message);
        // В вебе можно просто перезагрузить страницу, чтобы сработал check в App.tsx
        window.location.reload();
      } else {
        Alert.alert("Reset", message);
        navigation.replace('Onboarding');
      }
    } catch (e) {
      console.error("Logout error", e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome, Premium User!</Text>
      <Text style={styles.subtitle}>All features are now unlocked.</Text>
      <View style={styles.contentBox}>
        <Text>Your exclusive content goes here...</Text>
      </View>
      <Button title="Reset for testing" onPress={logout} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginVertical: 10 },
  contentBox: { 
    width: '80%', 
    height: 200, 
    backgroundColor: '#f0f0f0', 
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 30 
  }
});

export default Main;