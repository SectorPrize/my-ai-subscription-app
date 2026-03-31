import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import Main from "./screens/Main";
import Onboarding from "./screens/Onboarding";
import Paywall from "./screens/Paywall";

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const checkSub = async () => {
      const status = await AsyncStorage.getItem("@user_subscribed");
      setIsSubscribed(status === "true");
      setLoading(false);
    };
    checkSub();
  }, []);

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isSubscribed ? (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Paywall" component={Paywall} />
          </>
        ) : null}
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
