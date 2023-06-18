import { DrawerActions, useNavigation } from "@react-navigation/native";
import { TopNavigation } from "./TopNavigation";

export interface DrawerTopNavigationProps {
  title: string;
}

export const DrawerTopNavigation = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TopNavigation
      title={title}
      backIcon="menu"
      backAction={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );
};
