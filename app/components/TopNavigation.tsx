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
  hideBackIcon?: boolean;
  backIcon?: string;
  backAction?: () => void;
  accessoryRight?: () => React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  title,
  subtitle,
  hideBackIcon,
  backIcon,
  accessoryRight,
  backAction,
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
          accessoryLeft={() =>
            hideBackIcon ? null : (
              <BackIconAction icon={backIcon} backAction={backAction} />
            )
          }
          accessoryRight={accessoryRight}
        />
      </Layout>
      <Divider />
    </>
  );
};

TopNavigation.defaultProps = {
  hideBackIcon: false,
  backIcon: "arrow-back",
};

export const BackIconAction: React.FC<{
  icon: string;
  backAction?: () => void;
}> = ({ icon, backAction }) => {
  const navigation = useNavigation();
  return (
    <TopNavigationAction
      icon={(props) => <Icon {...props} name={icon} />}
      onPress={backAction ? backAction : () => navigation.goBack()}
    />
  );
};
