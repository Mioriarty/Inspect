import {
  Card,
  Divider,
  IconElement,
  IconProps,
  Layout,
  MenuItem,
  OverflowMenu,
  Text,
  TopNavigationAction,
} from "@ui-kitten/components";
import { TopNavigation } from "../components/TopNavigation";
import { useState } from "react";
import { Icon } from "../components/Icon";
import { TourCard, TourCardProps } from "../components/TourCard";
import { ScrollView } from "react-native";
import { TOURS } from "../assets/dummy-data";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const DUMMY_PR = [
  { progress: 0.6, rating: 0.95 },
  { progress: 1, rating: 0.3 },
];

export const DashboardScreen: React.FC = () => {
  return (
    <Layout level="2" style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {TOURS.map((tour, i) => (
          <TourCard
            key={i}
            name={tour.name}
            rooms={tour.rooms.map((r) => ({
              name: r.typeName,
              count: r.count,
            }))}
            progress={DUMMY_PR[i].progress}
            rating={DUMMY_PR[i].rating}
          />
        ))}
      </ScrollView>
    </Layout>
  );
};
