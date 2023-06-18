import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DashboardScreen } from "../screens/DashboardScreen";
import { MainDrawer } from "../components/MainDrawer";
import { DrawerTopNavigation } from "../components/DrawerTopNavigation";
import { SavedToursScreen } from "../screens/SavedToursScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MainDrawer {...props} />}>
      <Drawer.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          header: () => <DrawerTopNavigation title="Rundgänge" />,
        }}
      />
      <Drawer.Screen
        name="SavedToursScreen"
        component={SavedToursScreen}
        options={{
          header: () => <DrawerTopNavigation title="Gespeicherte Rundgänge" />,
        }}
      />
    </Drawer.Navigator>
  );
};
