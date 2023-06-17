import {
  Divider,
  IconProps,
  TopNavigation as KittenTopNavigation,
  Layout,
  TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { Icon } from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TopNavigationProps {
  title: string;
  subtitle?: string;
  hideBackArrow?: boolean;
  accessoryRight?: () => React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  title,
  subtitle,
  hideBackArrow,
  accessoryRight,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Layout level="1">
        <KittenTopNavigation
          style={{ marginTop: insets.top }}
          alignment="center"
          title={title}
          subtitle={subtitle}
          accessoryLeft={() => (hideBackArrow ? null : <BackIconAction />)}
          accessoryRight={accessoryRight}
        />
      </Layout>
      <Divider />
    </>
  );
};

TopNavigation.defaultProps = {
  hideBackArrow: false,
};

const BackIconAction: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TopNavigationAction
      icon={(props) => <Icon {...props} name="arrow-back" />}
      onPress={() => navigation.goBack()}
    />
  );
};
