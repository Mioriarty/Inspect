import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DashboardScreen,
  DashboardTopNavigation,
} from "../screens/DashboardScreen";
import { MainDrawer } from "../components/MainDrawer";

const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MainDrawer {...props} />}>
      <Drawer.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          header: () => <DashboardTopNavigation />,
        }}
      />
    </Drawer.Navigator>
  );
};
