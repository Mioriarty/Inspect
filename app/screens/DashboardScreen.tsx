import {
  Card,
  Divider,
  IconElement,
  IconProps,
  Layout,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigationAction,
} from "@ui-kitten/components";
import { TopNavigation } from "../components/TopNavigation";
import { useState } from "react";
import { Icon } from "../components/Icon";
import { TourCard, TourCardProps } from "../components/TourCard";
import { ScrollView } from "react-native";
import { TOURS } from "../assets/dummy-data";

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

const DUMMY_PR = [
  { progress: 0.6, rating: 0.95 },
  { progress: 1, rating: 0.3 },
];

export const DashboardScreen: React.FC = () => {
  return (
    <Layout level="2" style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {TOURS.map((tour, i) => (
          <TourCard
            key={i}
            name={tour.name}
            rooms={tour.rooms.map((r) => ({
              name: r.typeName,
              count: r.count,
            }))}
            progress={DUMMY_PR[i].progress}
            rating={DUMMY_PR[i].rating}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};
