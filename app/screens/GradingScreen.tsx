import {
  Card,
  Divider,
  Input,
  Layout,
  List,
  Text,
} from "@ui-kitten/components";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { GradingOptionsRow } from "../components/grading/GradingOptionRow";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigators/RootNavigator";
import {
  GRADING_OPTIONS,
  GradingOption,
  ROOM_TYPES,
} from "../assets/dummy-data";

export const GradingScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "GradingScreen">>();

  const [gradingOptions, setGradingOptions] = useState<
    { option: GradingOption; value: number }[]
  >([]);

  useEffect(() => {
    setGradingOptions(
      ROOM_TYPES.filter(
        (r) => r.name == route.params.roomType
      )[0].gradingOptionNames.map((n) => ({
        option: GRADING_OPTIONS.filter((n2) => n == n2.name)[0],
        value: undefined,
      }))
    );
  }, [route]);

  const setGrading = (index: number, value: number): void => {
    setGradingOptions([
      ...gradingOptions.slice(0, index),
      { ...gradingOptions[index], value: value },
      ...gradingOptions.slice(index + 1),
    ]);
  };

  return (
    <Layout level="2" style={styles.container}>
      <Card disabled style={styles.nameCard}>
        <Input label="Name des Raums" />
      </Card>
      <List
        data={gradingOptions}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item, index }) => (
          <GradingOptionsRow
            gradingOption={item.option}
            value={item.value}
            setValue={(value) => setGrading(index, value)}
          />
        )}
      />
      <Text>Footer</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nameCard: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
