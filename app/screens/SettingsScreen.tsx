import { StyleSheet, View } from "react-native";
import {
  CheckBox,
  Divider,
  Layout,
  ListItem,
  Text,
  Toggle,
} from "@ui-kitten/components";
import { useThemeMode } from "../contexts/ThemeModeContext";
import { Icon } from "../components/Icon";

export const SettingsScreen: React.FC = () => {
  const { themeMode, setThemeMode } = useThemeMode();

  const toggleThemeMode = () => {
    if (themeMode == "light") setThemeMode("dark");
    else setThemeMode("light");
  };

  return (
    <Layout level="2" style={styles.container}>
      <ListItem
        title="Profil"
        accessoryRight={(props) => <Icon {...props} name="arrow-ios-forward" />}
        accessoryLeft={(props) => <Icon {...props} name="person-outline" />}
      />
      <Divider />
      <ListItem
        title="Dark Mode"
        accessoryRight={(props) => (
          <View {...props}>
            <CheckBox
              checked={themeMode == "dark"}
              onChange={() => toggleThemeMode()}
            />
          </View>
        )}
        accessoryLeft={(props) => <Icon {...props} name="moon-outline" />}
        disabled
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
