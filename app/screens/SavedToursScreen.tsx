import {
  Calendar,
  Card,
  Datepicker,
  I18nConfig,
  Layout,
  NativeDateService,
  Text,
} from "@ui-kitten/components";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "../components/Icon";
import { TourCard } from "../components/TourCard";
import { Tour } from "../assets/dummy-data";
import { ScrollView } from "react-native-gesture-handler";

const i18n: I18nConfig = {
  dayNames: {
    short: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    long: [
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Smastag",
      "Sonntag",
    ],
  },
  monthNames: {
    short: [
      "Jan",
      "Feb",
      "März",
      "Apr",
      "Mai",
      "Juni",
      "Juli",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    long: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
  },
};

const localeDateService = new NativeDateService("de", {
  i18n,
  startDayOfWeek: 0,
  format: "DD.MM.YYYY",
});

const AVAILABLE_DATES: Date[] = [
  new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
  new Date(2023, 5, 7),
  new Date(2023, 5, 6),
];

export const SavedToursScreen: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Layout level="2" style={styles.container}>
      <ScrollView style={styles.container}>
        <Card style={styles.dateCard}>
          <Datepicker
            date={date}
            onSelect={(nextDate) => setDate(nextDate)}
            dateService={localeDateService}
            label="Datum"
            accessoryRight={(props) => (
              <Icon {...props} name="calendar-outline" />
            )}
            filter={(d1) =>
              !!AVAILABLE_DATES.find((d2) => d1.getTime() == d2.getTime())
            }
          />
        </Card>
        {date.getTime() == AVAILABLE_DATES[1].getTime() ? (
          <>
            <TourCard
              name="Rundgang Schiller"
              rooms={[
                { name: "Allgemeiner Unterrichtsraum", count: 10 },
                { name: "Hortraum", count: 5 },
                { name: "Aula", count: 7 },
                { name: "Eingangszone", count: 3 },
              ]}
              progress={1}
              rating={0.55}
            />
            <TourCard
              name="Rundgang Lessing"
              rooms={[
                { name: "Allgemeiner Unterrichtsraum", count: 17 },
                { name: "Aula", count: 2 },
              ]}
              progress={1}
              rating={0.55}
            />
          </>
        ) : date.getTime() == AVAILABLE_DATES[2].getTime() ? (
          <TourCard
            name="Rundgang Gerda Taro Schule"
            rooms={[
              { name: "Allgemeiner Unterrichtsraum", count: 10 },
              { name: "Hortraum", count: 5 },
              { name: "Aula", count: 7 },
              { name: "Eingangszone", count: 3 },
            ]}
            progress={1}
            rating={0.55}
          />
        ) : (
          <></>
        )}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateCard: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
