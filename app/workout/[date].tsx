import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function WorkoutDetail() {
  const { date } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workout for: {date}</Text>
      {/* Here you can show a form to add exercises */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20 },
});
