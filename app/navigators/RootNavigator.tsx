import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen } from "../screens/LoginScreen";
import { DashboardScreen } from "../screens/DashboardScreen";
import { TopNavigation } from "../components/TopNavigation";
import { TourScreen } from "../screens/TourScreen";
import { GradingScreen } from "../screens/GradingScreen";
import { DrawerNavigator } from "./DrawerNavigator";

export type RootStackParamList = {
  LoginScreen: undefined;
  DrawerNagiator: undefined;
  TourScreen: { name: string };
  GradingScreen: { roomType: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface RootNavigatorProps {
  isLoggedIn: boolean;
}

export const RootNavigator: React.FC<RootNavigatorProps> = ({ isLoggedIn }) => {
  return (
    <Stack.Navigator screenOptions={{ animation: "slide_from_right" }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="DrawerNagiator"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TourScreen"
            component={TourScreen}
            options={{
              header: ({ route }) => (
                <TopNavigation title={route.params["name"]} />
              ),
            }}
          />
          <Stack.Screen
            name="GradingScreen"
            component={GradingScreen}
            options={{
              header: ({ route }) => (
                <TopNavigation title={route.params["roomType"]} />
              ),
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
