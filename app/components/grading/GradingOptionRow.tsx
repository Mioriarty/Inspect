import {
  Button,
  ButtonGroup,
  IndexPath,
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
import { GradingMethod3Scale } from "./GradingMethodScale";
import { GradingOption } from "../../assets/dummy-data";

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
      <GradingMethod3Scale value={value} setValue={setValue} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
