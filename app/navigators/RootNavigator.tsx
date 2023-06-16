import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { DashboardScreen } from "../screens/DashboardScreen";

const Stack = createNativeStackNavigator();

interface RootNavigatorProps {
  isLoggedIn: boolean;
}

export const RootNavigator: React.FC<RootNavigatorProps> = ({ isLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
