import React from "react";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function Calendarlog({ path }: { path: string }) {
  const router = useRouter();

  const handleDayPress = (day: any) => {
    router.push({
      pathname: "/workout/[date]",
      params: { date: day.dateString },
    });
  };

  return (
    <View>
      {/* CALENDAR */}
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [new Date().toISOString().split("T")[0]]: { selected: true },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
