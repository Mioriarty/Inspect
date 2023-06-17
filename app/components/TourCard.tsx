import { Card, Divider, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "./Icon";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigators/RootNavigator";

export interface TourCardProps {
  name: string;
  rooms: { name: string; count: number }[];
  progress: number;
  rating: number;
}

export const TourCard: React.FC<TourCardProps> = ({
  name,
  rooms,
  progress,
  rating,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderHeader = (): React.ReactElement => (
    <View style={styles.headerContainer}>
      <Text category="h6">{name}</Text>
      {progress == 1 ? (
        <Icon name="checkmark-outline" fill="#00B383" width={22} height={22} />
      ) : (
        <></>
      )}
    </View>
  );

  const renderFooter = (): React.ReactElement => (
    <View style={styles.footerContainer}>
      <View style={styles.footerInfoContainer}>
        <Text category="c1" appearance="hint">
          FORTSCHRITT
        </Text>
        <Text>{(progress * 100).toFixed()} %</Text>
      </View>
      <View style={styles.footerInfoContainer}>
        <Text category="c1" appearance="hint">
          BEWERTUNG
        </Text>
        <Text>{(rating * 100).toFixed()} %</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Card
        header={renderHeader}
        footer={renderFooter}
        onPress={() => navigation.navigate("TourScreen", { name })}
      >
        {rooms.map((room, i) => (
          <View style={styles.infoRowContainer} key={i}>
            <Text>{room.name}</Text>
            <Text>{room.count}</Text>
          </View>
        ))}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  headerContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerContainer: {
    marginHorizontal: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerInfoContainer: {
    alignItems: "center",
  },
});
