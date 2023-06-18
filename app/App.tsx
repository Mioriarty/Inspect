import "react-native-gesture-handler";
import React, { useState } from "react";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SafeAreaView, StyleSheet } from "react-native";

import {
  ApplicationProvider,
  Button,
  Divider,
  IconRegistry,
  Layout,
  List,
  ListItem,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { UserContext, UserDetails } from "./contexts/UserContext";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { RootNavigator } from "./navigators/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "./contexts/ThemeModeContext";
import { StatusBar } from "./components/StatusBar";

export default () => {
  const [user, setUser] = useState<UserDetails | null>();
  const [themeMode, setThemeMode] = useState<string>("light");

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
          <ApplicationProvider {...eva} theme={eva[themeMode]}>
            <SafeAreaProvider>
              <NavigationContainer>
                <StatusBar />
                <RootNavigator isLoggedIn={user != null} />
              </NavigationContainer>
            </SafeAreaProvider>
          </ApplicationProvider>
        </ThemeModeContext.Provider>
      </UserContext.Provider>
    </>
  );
};
