import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  Divider,
  Drawer,
  DrawerItem,
  IndexPath,
  Layout,
  Text,
  useTheme,
} from "@ui-kitten/components";
import { StyleSheet, View, Alert, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { name as appName, version as appVersion } from "../package.json";
import { Icon } from "./Icon";
import { useUser } from "../contexts/UserContext";
import { useThemeMode } from "../contexts/ThemeModeContext";

export const MainDrawer: React.FC<DrawerContentComponentProps> = ({
  navigation,
  state,
}) => {
  const insets = useSafeAreaInsets();
  const { setUser } = useUser();
  const { themeMode } = useThemeMode();

  const onSelect = (index: IndexPath): void => {
    if (index.row == 3) {
      // Logout
      Alert.alert("Abmelden", "Wollen sie sich wirklich abmelden?", [
        {
          text: "Abbrechen",
          style: "cancel",
        },
        {
          text: "Ja, abmelden",
          onPress: () => {
            setUser(null);
          },
        },
      ]);
    } else {
      if (index.row == 4) {
        // About
        return;
      }
      navigation.navigate(state.routeNames[index.row]);
    }
  };

  return (
    <Layout
      level="2"
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.titleContiner}>
        <Image
          source={
            themeMode == "light"
              ? require("../assets/logo_name_row.png")
              : require("../assets/logo_name_row_white.png")
          }
          style={styles.logo}
        />
      </View>
      <Divider />
      <Drawer selectedIndex={new IndexPath(state.index)} onSelect={onSelect}>
        <DrawerItem
          title="Rundgänge"
          accessoryLeft={(props) => <Icon {...props} name="home-outline" />}
        />
        <DrawerItem
          title="Gespeicherte Rundgänge"
          accessoryLeft={(props) => <Icon {...props} name="calendar-outline" />}
        />
        <DrawerItem
          title="Einstellungen"
          accessoryLeft={(props) => <Icon {...props} name="settings-outline" />}
        />
        <DrawerItem
          title="Abmelden"
          accessoryLeft={(props) => <Icon {...props} name="log-out-outline" />}
        />
        <DrawerItem
          title="Über"
          accessoryLeft={(props) => <Icon {...props} name="info" />}
        />
      </Drawer>
      <Divider />
      <View style={styles.versionContainer}>
        <Text appearance="hint">
          {appName} {appVersion}
        </Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContiner: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  versionContainer: {
    alignItems: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  logo: {
    height: 50,
    resizeMode: "contain",
  },
});
