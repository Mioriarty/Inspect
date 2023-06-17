import { RouteProp, useRoute } from "@react-navigation/native";
import { Text } from "@ui-kitten/components";
import { RootStackParamList } from "../navigators/RootNavigator";

export const TourScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "TourScreen">>();

  return <Text>Tour Screen</Text>;
};
