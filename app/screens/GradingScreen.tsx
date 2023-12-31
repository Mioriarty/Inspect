import {
  Button,
  Card,
  Divider,
  Input,
  Layout,
  List,
  Text,
} from "@ui-kitten/components";
import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GradingOptionsRow } from "../components/grading/GradingOptionRow";
import { Fragment } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../navigators/RootNavigator";
import {
  GRADING_OPTIONS,
  GradingMethod,
  GradingOption,
  ROOM_TYPES,
} from "../assets/dummy-data";
import { SafeAreaView } from "react-native-safe-area-context";

export const GradingScreen: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, "GradingScreen">>();
  const navigation = useNavigation();

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

  const totalGrade = useMemo<number | undefined>(() => {
    const votedGradingOptions = gradingOptions.filter(
      (o) => o.value != undefined
    );
    if (votedGradingOptions.length == 0) return undefined;
    const totalScore = votedGradingOptions.reduce((a, b) => a + b.value, 0);
    return totalScore / votedGradingOptions.length;
  }, [gradingOptions]);

  return (
    <Layout level="2" style={styles.container}>
      <SafeAreaView edges={["left", "right", "bottom"]} style={{ flex: 1 }}>
        <ScrollView>
          <Card disabled style={styles.nameCard}>
            <Input label="Name des Raums" />
          </Card>
          {gradingOptions.map((item, index) => (
            <Fragment key={index}>
              <GradingOptionsRow
                gradingOption={item.option}
                value={item.value}
                setValue={(value) => setGrading(index, value)}
              />
              {index == gradingOptions.length - 1 ? <></> : <Divider />}
            </Fragment>
          ))}
          <Button style={styles.saveButton} onPress={() => navigation.goBack()}>
            Speichern
          </Button>
        </ScrollView>
        <Divider />
        <View style={styles.footerContainer}>
          <Text>
            Gesamtbewertung:{" "}
            {totalGrade == undefined
              ? "--"
              : (totalGrade * 100).toFixed() + " %"}
          </Text>
        </View>
      </SafeAreaView>
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
  saveButton: {
    margin: 8,
    marginTop: 16,
  },
  footerContainer: {
    marginTop: 8,
    marginBottom: 12,
    alignItems: "center",
  },
});
