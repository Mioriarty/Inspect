import {
  IconElement,
  IconProps,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigationAction,
} from "@ui-kitten/components";
import { TopNavigation } from "../components/TopNavigation";
import { useState } from "react";
import { Icon } from "../components/Icon";

const MenuIcon = (props): IconElement => (
  <Icon {...props} name="more-vertical" />
);

export const DashboardTopNavigation = () => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderRightActions = (): React.ReactElement => (
    <>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={(props) => <Icon {...props} name="info" />}
          title="About"
        />
        <MenuItem
          accessoryLeft={(props) => <Icon {...props} name="log-out" />}
          title="Logout"
        />
      </OverflowMenu>
    </>
  );

  return (
    <TopNavigation
      title="Inspect"
      hideBackArrow
      accessoryRight={renderRightActions}
    />
  );
};

export const DashboardScreen: React.FC = () => {
  return <Text>Dashboard</Text>;
};
