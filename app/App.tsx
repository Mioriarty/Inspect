import React from "react";

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

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);
