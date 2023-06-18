import { useTheme } from "@ui-kitten/components";
import { useThemeMode } from "../contexts/ThemeModeContext";
import { StatusBar as RNStatusBar } from "react-native";

export const StatusBar: React.FC = () => {
  const theme = useTheme();
  const { themeMode } = useThemeMode();

  return (
    <RNStatusBar
      backgroundColor={theme["background-basic-color-1"]}
      barStyle={themeMode == "light" ? "dark-content" : "light-content"}
    />
  );
};
