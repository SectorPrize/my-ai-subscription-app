import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  navigation: StackNavigationProp<any>;
};

const Onboarding: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Paywall")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: { backgroundColor: "#007AFF", padding: 15, borderRadius: 10 },
  buttonText: { color: "#white", fontWeight: "bold" },
});

export default Onboarding;
