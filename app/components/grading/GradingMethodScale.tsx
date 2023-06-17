import { Icon, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export interface GradingMethodProps {
  value: number | undefined;
  setValue: (value: number | undefined) => void;
}

export interface GradingMethodScaleProps extends GradingMethodProps {
  options: { icon: string; text: string; color: string; value: number }[];
}
export const GradingMethodScale: React.FC<GradingMethodScaleProps> = ({
  value,
  setValue,
  options,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {options.map((option, i) => (
        <TouchableOpacity
          key={i}
          style={styles.optionContainer}
          onPress={() => setValue(option.value)}
        >
          <Icon
            width={20}
            height={20}
            name={option.icon}
            fill={
              option.value == value ? option.color : theme["text-basic-color"]
            }
          />
          <Text
            category="c1"
            style={{
              color:
                option.value == value
                  ? option.color
                  : theme["text-basic-color"],
            }}
          >
            {option.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const GradingMethod3Scale: React.FC<GradingMethodProps> = (props) => {
  const theme = useTheme();
  return (
    <GradingMethodScale
      options={[
        {
          icon: "checkmark",
          text: "VOLLLEISTUNG",
          color: theme["color-success-default"],
          value: 1,
        },
        {
          icon: "minus",
          text: "TEILLEISTUNG",
          color: theme["color-warning-default"],
          value: 0.5,
        },
        {
          icon: "close",
          text: "NICHTLEISTUNG",
          color: theme["color-danger-default"],
          value: 0,
        },
      ]}
      {...props}
    />
  );
};

export const GradingMethod2Scale: React.FC<GradingMethodProps> = (props) => {
  const theme = useTheme();
  return (
    <GradingMethodScale
      options={[
        {
          icon: "checkmark",
          text: "VOLLLEISTUNG",
          color: theme["color-success-default"],
          value: 1,
        },
        {
          icon: "close",
          text: "NICHTLEISTUNG",
          color: theme["color-danger-default"],
          value: 0,
        },
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionContainer: {
    paddingTop: 8,
    alignItems: "center",
  },
});
