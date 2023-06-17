import {
  Button,
  ButtonGroup,
  IndexPath,
  Input,
  Layout,
  ListItem,
  ListItemProps,
  Select,
  SelectItem,
  Text,
} from "@ui-kitten/components";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "../Icon";
import { GradingMethod2Scale, GradingMethod3Scale } from "./GradingMethodScale";
import { GradingMethod, GradingOption } from "../../assets/dummy-data";

export interface GradingOptionRowProps {
  gradingOption: GradingOption;
  value: number;
  setValue: (value: number) => void;
}

export const GradingOptionsRow: React.FC<GradingOptionRowProps> = ({
  gradingOption,
  value,
  setValue,
}) => {
  return (
    <Layout level="1" style={styles.container}>
      <Text>{gradingOption.name}</Text>
      <Text appearance="hint" category="s2">
        {gradingOption.frequency}
      </Text>
      {gradingOption.allowAlternative ? (
        <View style={styles.allowAlternativeContainer}>
          <Input placeholder="Leistung stattdessen" size="small" />
        </View>
      ) : (
        <></>
      )}
      {gradingOption.gradingMethod == GradingMethod.SCALE2 ? (
        <GradingMethod2Scale value={value} setValue={setValue} />
      ) : (
        <GradingMethod3Scale value={value} setValue={setValue} />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  allowAlternativeContainer: {
    paddingTop: 8,
  },
});
