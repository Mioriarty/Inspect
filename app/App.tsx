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
import { StatusBar } from "react-native";
import { UserContext, UserDetails } from "./contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./navigators/RootNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  ThemeModeContext,
  ThemeModeContextType,
} from "./contexts/ThemeModeContext";

const data = new Array(30).fill({
  title: "Item",
  description: "Description for Item",
});

const BackIcon: React.FC = () => {
  return (
    <Icon name="arrow-back" style={{ height: 24, width: 24 }} fill="#222b45" />
  );
};
const BackAction = () => <TopNavigationAction icon={BackIcon} />;

const HomeScreen = () => {
  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <TopNavigation title="Bla" accessoryLeft={BackAction} />
        <List
          data={data}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 200,
  },
});

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
                <RootNavigator isLoggedIn={user != null} />
              </NavigationContainer>
            </SafeAreaProvider>
          </ApplicationProvider>
        </ThemeModeContext.Provider>
      </UserContext.Provider>
    </>
  );
};
