import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

// Dummy data for now
const dummyWorkouts = [
  { id: "1", muscle: "Chest", variation: "Bench Press" },
  { id: "2", muscle: "Back", variation: "Pull Up" },
  { id: "3", muscle: "Legs", variation: "Squat" },
];

export default function WorkoutList() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState(dummyWorkouts);

  const handleAddWorkout = () => {
    // Later, navigate to your add workout form
    alert("Add Workout tapped!");
    // Example: router.push("/add-workout")
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Workout List</Text>
        <Button title="Add Workout" onPress={handleAddWorkout} />
      </View>

      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <Text style={styles.muscle}>{item.muscle}</Text>
            <Text style={styles.variation}>{item.variation}</Text>
          </View>
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  workoutItem: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  muscle: { fontWeight: "bold" },
  variation: { color: "gray" },
});
