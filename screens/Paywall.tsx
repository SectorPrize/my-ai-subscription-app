import React from 'react';
// Добавляем Platform в список ниже:
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Paywall = ({ navigation }: any) => {
  const handlePurchase = async () => {
  console.log("Кнопка нажата! Начинаю покупку..."); // Увидишь это в терминале/консоли браузера
  try {
    await AsyncStorage.setItem('@user_subscribed', 'true');
    console.log("Статус сохранен в сторедж");

    // В вебе Alert.alert может не работать штатно, заменим на обычный alert для теста
    if (Platform.OS === 'web') {
      alert("Success! Subscription activated!");
      navigation.navigate('Main'); // Используем navigate вместо replace для теста
    } else {
      Alert.alert("Success", "Subscription activated!", [
        { text: "OK", onPress: () => navigation.replace('Main') }
      ]);
    }
  } catch (e) {
    console.error("Ошибка при сохранении:", e);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Plan</Text>

      <View style={styles.card}>
        <Text style={styles.planName}>Yearly Access</Text>
        <Text style={styles.price}>2990₽ / year</Text>
        <Text style={styles.save}>Save 50%</Text>
      </View>

      <TouchableOpacity style={styles.buyButton} onPress={handlePurchase}>
        <Text style={styles.buyText}>SUBSCRIBE NOW</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Maybe later</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  card: {
    padding: 25,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
  },
  planName: { fontSize: 20, fontWeight: "600" },
  price: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  save: { color: "green", fontWeight: "bold" },
  buyButton: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
  },
  buyText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  back: { textAlign: "center", marginTop: 20, color: "#999" },
});

export default Paywall;
