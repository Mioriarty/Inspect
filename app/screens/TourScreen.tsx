import { RouteProp, useRoute } from "@react-navigation/native";
import { Divider, Layout, List, ListItem, Text } from "@ui-kitten/components";
import { RootStackParamList } from "../navigators/RootNavigator";
import { FlatList, StyleSheet, View } from "react-native";
import { Icon } from "../components/Icon";
import { RoomType, TOURS } from "../assets/dummy-data";
import { useMemo } from "react";

const DONE_ROOMS = [
  { name: "Raum 193", type: "Klassenzimmer" },
  { name: "Raum 314", type: "Klassenzimmer" },
  { name: "SH 1", type: "Sporthalle" },
];

export const TourScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "TourScreen">>();
  const roomTypes = useMemo<{ typeName: string; count: number }[]>(
    () => TOURS.filter((t) => t.name == route.params.name)[0].rooms,
    [route]
  );

  return (
    <Layout level="2" style={styles.container}>
      <View style={styles.sectionTitleContainer}>
        <Text category="c1" appearance="hint">
          NEUER RAUM
        </Text>
      </View>
      {roomTypes?.map((room, i) => (
        <>
          <ListItem
            key={i}
            title={room.typeName}
            description="2/10"
            accessoryRight={(props) => (
              <Icon {...props} name="arrow-ios-forward" />
            )}
          />
          {i == roomTypes.length - 1 ? <></> : <Divider />}
        </>
      ))}
      {DONE_ROOMS.length == 0 ? (
        <></>
      ) : (
        <>
          <View style={styles.sectionTitleContainer}>
            <Text category="c1" appearance="hint">
              BEGUTACHTETE RÄUME
            </Text>
          </View>
          <List
            data={DONE_ROOMS}
            renderItem={({ item }) => (
              <ListItem
                title={item.name}
                description={item.type}
                accessoryRight={(props) => (
                  <Icon {...props} name="arrow-ios-forward" />
                )}
              />
            )}
          />
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitleContainer: {
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
