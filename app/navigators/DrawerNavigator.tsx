import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DashboardScreen,
  DashboardTopNavigation,
} from "../screens/DashboardScreen";

const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
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
