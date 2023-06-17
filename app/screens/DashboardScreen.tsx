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

const DUMMY_TOURS: TourCardProps[] = [
  {
    title: "Rundgang Schiller",
    rooms: [
      { name: "Klassenzimmer", count: 10 },
      { name: "Sporthallen", count: 2 },
      { name: "Außenflächen", count: 1 },
    ],
    progress: 0.35,
    rating: 0.9,
  },
  {
    title: "Rundgang Gerda Taro Schule",
    rooms: [
      { name: "Klassenzimmer", count: 42 },
      { name: "Sporthallen", count: 1 },
    ],
    progress: 1,
    rating: 0.2,
  },
];

export const DashboardScreen: React.FC = () => {
  return (
    <Layout level="2" style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {DUMMY_TOURS.map((tour, i) => (
          <TourCard {...tour} key={i} />
        ))}
      </ScrollView>
    </Layout>
  );
};
